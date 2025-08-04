import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coding Academy - Learn Programming & Web Development | Shetty's Engineering Classes",
  description: "Join our Coding Academy to learn programming, web development, and software engineering. Expert instructors, hands-on projects, and career guidance. Start your coding journey today!",
  keywords: [
    "coding academy",
    "programming classes",
    "web development",
    "software engineering",
    "coding courses",
    "programming tutorials",
    "learn to code",
    "coding bootcamp",
    "programming education",
    "software development"
  ].join(", "),
  openGraph: {
    title: "Coding Academy - Learn Programming & Web Development",
    description: "Join our Coding Academy to learn programming, web development, and software engineering. Expert instructors, hands-on projects, and career guidance.",
    type: "website",
    url: "https://shettysengineeringclasses.com/coding-academy",
  },
  alternates: {
    canonical: "/coding-academy",
  },
};

export default function CodingAcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 