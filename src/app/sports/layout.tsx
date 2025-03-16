import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Sports",
  description: "Octussis Sports Page",
};

export default function SportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
