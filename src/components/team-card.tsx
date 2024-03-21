'use client'

import { TeamInfo } from "@/app/t/[id]/page";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import { useCallback } from "react";

export const Card = (teamInfo: TeamInfo) => {
  const formatTeamData = useCallback(() => {
    const teamCode = `#${teamInfo?.team_code}`;
    const teamName = `${teamInfo?.team_name}`;
    const captain = `${teamInfo?.captain.name} ${teamInfo?.captain.surname} 👑`;
    const members = teamInfo?.members.map(member => `${member.name} ${member.surname}`).join('\n');
    return `${teamCode}\n${teamName}\n${captain}\n${members}`;
  }, [teamInfo]);

  const generatePdf = useCallback(async () => {
    const element = document.getElementById("card") as HTMLDivElement | null;
    if(!element) return;

    const width = 297 * 2 - 48;
    const height = 210 * 2 - 80;
    const body = document.createElement('div');
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.alignItems = 'center';
    body.style.justifyContent = 'center';
    body.style.padding = '24px 40px'
    body.style.width = `${width + 48}px`;
    body.style.height = `${height + 80}px`;
    body.style.wordSpacing = '4px';
    body.style.backgroundColor = '#191919';
    const newElement = element.cloneNode(true) as HTMLDivElement;

    newElement.style.width = `${width}px`;
    newElement.style.height = `${height}px`;

    newElement.childNodes[0].childNodes[0].removeChild(newElement.childNodes[0].childNodes[0].childNodes[1]);
    body.appendChild(newElement);

    body.style.position = 'absolute';
    body.style.left = '-9999px';
    document.body.appendChild(body);


    const canvas = await html2canvas(body , {
      backgroundColor: "#191919",
      scale: 2,
    });
    const data = canvas.toDataURL('image/png', 1.0);

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4'
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

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

    pdf.addImage(data, 'PNG', 0, 0, finalImgWidth, finalImgHeight);

    pdf.save(`#${teamInfo.team_code}.pdf`);
  }, [teamInfo]);

  return (
    <div id='card' className={"relative flex md:w-[500px] p-[10px] items-start gap-4 border-dashed border-2 border-dashed-border"}>
      <div className="flex w-full h-full flex-1 p-6 md:p-8 flex-col justify-center items-start gap-12 border-dashed	border-2 border-dashed-border">
        <div className="flex items-center gap-10 self-stretch">
          <h1 className="flex flex-1 text-primary-green font-bold tracking-[-0.16px]">
            HackNU<span className="text-primary-purple">/24</span>
          </h1>
          <Link href="/" className="no-underline"><p>[x]</p></Link>
        </div>

        <p className="whitespace-pre-line">
          {formatTeamData()}
        </p>

        <div className="flex justify-between items-end self-stretch">
          <div className="flex flex-1">
            <p className="opacity-50 leading-[140%] font-light whitespace-pre-line">{'13-14 April\nNazarbayev University'}</p>
          </div>
          <button onClick={generatePdf}>
            <p className="flex flex-1 leading-[140%] text-primary-green font-bold whitespace-pre-line">{'> Save'}</p>
          </button>
        </div>
      </div>
    </div>
  )
}
