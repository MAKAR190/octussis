import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octussis Analytics",
  description: "Octussis Analytics Page",
};

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
