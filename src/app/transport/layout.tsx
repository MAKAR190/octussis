import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Transport",
  description: "Octussis Transport Page",
};

export default function TransportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
