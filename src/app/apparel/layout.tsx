import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Apparel",
  description: "Octussis Apparel Page",
};

export default function ApparelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
