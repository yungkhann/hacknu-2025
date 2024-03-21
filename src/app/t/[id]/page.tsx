'use client'

import Layout from "@/components/layout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const BACKEND_URL = 'https://api.nuacm.kz/api/';

interface Person {
  name: string;
  surname: string;
}

interface TeamInfo {
  team_name: string;
  team_code: string;
  captain: Person;
  members: Person[];
}

export default function IdPage() {
  const params = useParams()
  const { id } = params;
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamInfo = async () => {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/teams/${id}`);
      const data = await response.json();
      if(data.error) {
        setTeamInfo(null);
        setLoading(false);
        return;
      }
      setTeamInfo(data);
      setLoading(false);
    }

    fetchTeamInfo();
  }, [id]);

  useEffect(() => {
    console.log('loading', loading)
  }, [loading]);

  if(loading) return null;

  if(!teamInfo) return (
    <div className="flex w-full h-full justify-center items-center">
      <h1>Team not found</h1>
    </div>
  );
  
  return (
    <Layout>
      <div className="flex h-full w-full p-2 justify-center items-center">
        <Card {...teamInfo} />
      </div>
    </Layout>
  )
}

const Card = (teamInfo: TeamInfo) => {
  const router = useRouter()
  const pdfRef = useRef(null);

  const formatTeamData = useCallback(() => {
    const teamCode = `#${teamInfo?.team_code}`;
    const teamName = `${teamInfo?.team_name}`;
    const captain = `${teamInfo?.captain.name} ${teamInfo?.captain.surname} 👑`;
    const members = teamInfo?.members.map(member => `${member.name} ${member.surname}`).join('\n');
    return `${teamCode}\n${teamName}\n${captain}\n${members}`;
  }, [teamInfo]);

  const navigateToHome = useCallback(() => {
    router.push('/')
  }, [router]);

  const generatePdf = useCallback(async () => {
    const element = document.getElementById("card") as HTMLDivElement | null;
    if(!element) return;
    const newElement = element.cloneNode(true) as HTMLDivElement;
    const width = 500;
    const height = 500;
    newElement.style.width = `${width}px`;
    newElement.style.width = `${height}px`;

    newElement.style.position = 'absolute';
    newElement.style.left = '-9999px';
    document.body.appendChild(newElement);

    const canvas = await html2canvas(newElement, {
      backgroundColor: "#191919",
      scale: 2,
    });
    const data = canvas.toDataURL('image/png');

    

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4',
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Calculate the scaled dimensions to maintain the aspect ratio
    const imgWidth = imgProperties.width;
    const imgHeight = imgProperties.height;
    const imgRatio = imgWidth / imgHeight;
    let finalImgWidth, finalImgHeight;

    if (pdfWidth / pdfHeight > imgRatio) {
        finalImgHeight = pdfHeight;
        finalImgWidth = pdfHeight * imgRatio;
    } else {
        finalImgWidth = pdfWidth;
        finalImgHeight = pdfWidth / imgRatio;
    }

    // Center the image on the page
    const x = (pdfWidth - finalImgWidth) / 2;
    const y = (pdfHeight - finalImgHeight) / 2;

    pdf.addImage(data, 'PNG', x, y, finalImgWidth, finalImgHeight);

    pdf.save('print.pdf');
  }, [teamInfo]);

  return (
    <div id='card' ref={pdfRef} className={"flex md:w-[500px] p-[10px] items-start gap-4 border-dashed border-2 border-dashed-border"}>
      <div className="flex flex-1 p-6 md:p-8 flex-col justify-center items-start gap-12 border-dashed	border-2 border-dashed-border">
        <div className="flex items-center gap-10 self-stretch">
          <h1 className="flex flex-1 text-primary-green font-bold tracking-[-0.16px]">
            HackNU<span className="text-primary-purple">/24</span>
          </h1>
          <button onClick={navigateToHome}>[x]</button>
        </div>

        <p className="whitespace-pre-line">
          {formatTeamData()}
        </p>

        <div className="flex justify-between items-end self-stretch">
          <div className="flex flex-1">
            <p className="opacity-50 leading-[140%] font-light whitespace-pre-line">{'13-14 April\nNazarbayev University'}</p>
          </div>
          <button onClick={generatePdf}>
            <p className="flex flex-1 text-primary-green font-bold">{'> Save'}</p>
          </button>
        </div>
      </div>
    </div>
  )
}