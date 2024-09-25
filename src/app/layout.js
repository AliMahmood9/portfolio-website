import "./globals.css";
import { Inter, Dancing_Script } from "next/font/google";
import metaimg from "../../public/Meta_Image.jpg";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Mahmood's Portfolio",
  description: `Ali Mahmood is a Frontend Developer with extensive experience in building responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS.`, // Your custom description
  keywords: [
    "Frontend Developer",
    "Web Development",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Software Projects",
    "JavaScript",
    "Portfolio",
    "Ali Mahmood",
  ],
  author: "Ali Mahmood",
  language: "en-US",
  openGraph: {
    title: "Ali Mahmood's Portfolio",
    description: `Ali Mahmood is a Frontend Developer with extensive experience in building responsive and user-friendly web applications using React.js, Next.js, and Tailwind CSS.`, // Your custom description
    image: { metaimg },
    url: "https://alimahmood.tech",
  },
  // twitterCard: {
  //   card: "summary_large_image",
  //   creator: "@KshitijDarwhek1",
  //   title: "Kshitij's Portfolio",
  //   description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast who likes to build beautiful and user friendly websites with React Js and Tailwind Css`,
  //   image: { metaimg }, // Path to an image for Twitter sharing
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
