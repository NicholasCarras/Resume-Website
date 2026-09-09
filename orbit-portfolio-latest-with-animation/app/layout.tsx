import type { Metadata } from "next";
import { profile } from "@/content/portfolio";
import { SiteShell } from "@/components/portfolio/site-shell";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Software Engineer`,
    template: `%s | ${profile.name}`,
  },
  description: profile.introduction,
  robots: { index: !profile.exampleContent, follow: !profile.exampleContent },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
