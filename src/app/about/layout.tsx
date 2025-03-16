import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis About",
  description: "Octussis About Page",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
