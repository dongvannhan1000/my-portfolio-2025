import { personalData } from "@/utils/data/personal-data";
import { 
  HeroSection, 
  AboutSection, 
  Experience, 
  Skills, 
  Projects, 
  Education, 
  ContactSection,
  Blog 
} from "./components/client-wrapper";

async function getData() {
  // Return empty array if devUsername is not set
  if (!personalData.devUsername) {
    return [];
  }

  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};