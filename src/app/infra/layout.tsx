import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Infra",
  description: "Octussis Infra Page",
};

export default function InfraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
