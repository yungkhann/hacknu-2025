"use client";

import { TeamInfo } from "@/app/t/[id]/page";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Azeret_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const azeretMono = Azeret_Mono({ subsets: ["latin"] });

export const Card = (teamInfo: TeamInfo) => {
  const formatTeamData = useCallback(() => {
    const teamCode = `#${teamInfo?.team_code ?? "Unknown"}`;
    const teamName = `${teamInfo?.team_name ?? "Unknown"}`;
    const captain = `${teamInfo?.captain?.name ?? "Unknown"} ${
      teamInfo?.captain?.surname ?? "Unknown"
    } 👑`;
    const members =
      (teamInfo?.members &&
        teamInfo?.members
          .map((member) => `${member.name} ${member.surname}`)
          .join("\n")) ??
      "No members listed here.";
    return `${teamCode}\n${teamName}\n${captain}\n${members}`;
  }, [teamInfo]);

  const generatePdf = useCallback(async () => {
    const element = document.getElementById("card") as HTMLDivElement | null;
    if (!element) return;

    const width = 297 * 3 - 360;
    const height = 210 * 3 - 300;
    const body = document.createElement("div");
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.padding = "24px 40px";
    body.style.width = `${width + 360}px`;
    body.style.height = `${height + 300}px`;
    body.style.backgroundColor = "#191919";

    const newElement = element.cloneNode(true) as HTMLDivElement;

    newElement.style.width = `${width}px`;
    newElement.style.height = `${height}px`;

    if (newElement.firstChild?.firstChild?.lastChild)
      newElement.firstChild?.firstChild?.lastChild.remove();
    body.appendChild(newElement);

    body.style.position = "absolute";
    body.style.left = "-9999px";
    document.body.appendChild(body);

    const canvas = await html2canvas(body, {
      backgroundColor: "#191919",
      scale: 2,
    });
    document.body.removeChild(body);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: "a4",
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

    pdf.addImage(data, "PNG", 0, 0, finalImgWidth, finalImgHeight);

    pdf.save(`#${teamInfo.team_code}.pdf`);
  }, [teamInfo]);
  

  return (
    <div
      id="card"
      className={
        "relative flex md:w-[500px] p-[10px] items-start gap-4 border-dashed	border-2 border-dashed-border"
      }
    >
      <div className="flex w-full h-full flex-1 p-6 md:p-8 flex-col justify-center items-start gap-12 border-dashed	border-2 border-dashed-border">
        <div className="flex items-center gap-10 self-stretch">
          <h1 className={cn("flex flex-1 text-primary-green font-bold tracking-[-0.16px]", azeretMono.className)}>
            HackNU<span className={cn("text-primary-purple", azeretMono.className)}>/24</span>
          </h1>
          <Link href="/" className="no-underline">
            <p>[x]</p>
          </Link>
        </div>

        <p className={cn("whitespace-pre-line", azeretMono.className)}>{formatTeamData()}</p>

        <div className="flex justify-between items-end self-stretch">
          <div className="flex flex-1">
            <p className={cn("opacity-50 leading-[140%] font-light whitespace-pre-line", azeretMono.className)}>
              {"18-19 October\nNazarbayev University"}
            </p>
          </div>
          <button onClick={generatePdf} className="flex flex-row gap-2">
            <p className={cn("min-w-3 leading-[140%] text-primary-green font-bold whitespace-pre-line animate-blink", azeretMono.className)}>
              {">"}
            </p>
            <p className={cn("flex flex-1 leading-[140%] text-primary-green font-bold whitespace-pre-line", azeretMono.className)}>
              {"Save"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
