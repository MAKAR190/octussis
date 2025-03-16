import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Capital",
  description: "Octussis Capital Page",
};

export default function CapitalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
