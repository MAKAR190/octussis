import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Contact",
  description: "Octussis Contact Page",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
