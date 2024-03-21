'use client'

import { Header } from "@/components";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
  withHeader
}: Readonly<{
  children: React.ReactNode;
  withHeader?: boolean;
}>) {
  const pathname = usePathname();

  return (
    <>
      {withHeader && <Header />}
      <main className="max-w-[1440px] mx-auto h-screen">{children}</main>
    </>
  );
}
