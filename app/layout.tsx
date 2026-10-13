import type { Metadata } from "next";
import { Source_Serif_4, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Compassionate, grounded therapy for anxiety, trauma, panic, and burnout in Santa Monica, CA. In-person therapy on 123th Street 45 W & secure telehealth across California.",
  keywords: [
    "Dr. Maya Reynolds PsyD",
    "Clinical Psychologist Santa Monica",
    "Anxiety therapist Santa Monica CA",
    "Trauma and EMDR therapy Santa Monica",
    "Burnout therapy for professionals California",
    "Telehealth psychologist California",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title:
      "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
    description:
      "Evidence-based, depth-oriented therapy for anxiety, trauma, and high-pressure burnout. In-person in Santa Monica and virtual sessions across California.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-accent/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
