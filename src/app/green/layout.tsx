import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Green",
  description: "Octussis Green Page",
};

export default function GreenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
