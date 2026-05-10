import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import Blog from "@/database/blogSchema";
import HeroSection from "@/components/redesign/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/redesign/AboutSection";
import ProjectsSection from "@/components/redesign/ProjectsSection";
import ResumeSection from "@/components/redesign/ResumeSection";
import BlogSection from "@/components/redesign/BlogSection";
import ContactSection from "@/components/redesign/ContactSection";
import RedesignFooter from "@/components/redesign/Footer";

type ProjectDoc = {
  _id?: { toString(): string };
  name: string;
  description: string;
  image: string;
  image_alt?: string;
  tech_stack: string[];
  link?: string;
};

async function getProjects(): Promise<
  { _id?: string; name: string; description: string; image: string; image_alt?: string; tech_stack: string[]; link?: string }[]
> {
  const stockWizProject = {
    _id: "stockwiz",
    name: "StockWiz",
    description:
      "AI-powered stock screening and portfolio management dashboard. Combines live Yahoo Finance market data with Claude AI to automate stock analysis and portfolio decisions. A Python/FastAPI backend exposes REST and SSE streaming endpoints and runs a custom criteria engine that evaluates configurable buy/watch/sell rules against real-time fundamentals — PE ratios, revenue growth, profit margins, 52-week positioning, and market trend. Claude is wired into the pipeline to return structured reasoning streamed token-by-token to a React + TypeScript frontend with TradingView lightweight-charts and Recharts visualizations. Features include an interactive stock screener, candlestick and depth-of-market charts, a per-stock AI assistant with 90-day price predictions, a general market assistant chatbot, and a portfolio tracker with P&L, allocation charts, and AI-driven sell signals.",
    image: "/stockwizpreview.png",
    image_alt: "StockWiz dashboard preview",
    tech_stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Claude AI",
      "yfinance",
      "TradingView",
      "Recharts",
    ],
    link: "#",
  };

  try {
    await connectDB();
    const projects = (await Project.find().lean()) as unknown as ProjectDoc[];
    const HERO_PREVIEW = "/portfolio-hero-preview.png";
    const filteredProjects = projects.filter((p) => {
      const name = p.name.toLowerCase();
      const link = (p.link ?? "").toLowerCase();
      return (
        !name.includes("virtual tour") &&
        !name.includes("scu tour") &&
        !link.includes("scutours.com")
      );
    });
    const dbProjects = filteredProjects.map((p) => {
      const isPersonalWebsite = p.name.toLowerCase().includes("personal website");
      return {
        _id: p._id?.toString(),
        name: p.name,
        description: p.description,
        image: isPersonalWebsite ? HERO_PREVIEW : p.image,
        image_alt: p.image_alt,
        tech_stack: p.tech_stack,
        link: p.link ?? "#",
      };
    });
    return [stockWizProject, ...dbProjects];
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [stockWizProject];
  }
}

async function getBlogs(): Promise<
  { _id?: string; title: string; slug: string; date: string; description: string; image: string; image_alt?: string }[]
> {
  try {
    await connectDB();
    const list = (await Blog.find().sort({ date: -1 }).lean()) as unknown as { _id?: { toString(): string }; title: string; slug: string; date: Date; description: string; image: string; image_alt?: string }[];
    const HERO_PREVIEW = "/portfolio-hero-preview.png";
    return list.map((b) => ({
      _id: b._id?.toString(),
      title: b.title,
      slug: b.slug,
      date: (b.date instanceof Date ? b.date : new Date(b.date)).toISOString(),
      description: b.description,
      image: b.slug === "my-portfolio-building-journey" ? HERO_PREVIEW : b.image,
      image_alt: b.image_alt,
    }));
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export default async function Home() {
  const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);

  return (
    <>
      <main id="home">
        <HeroSection />
      </main>
      <MarqueeStrip />
      <AboutSection />
      <MarqueeStrip reverse />
      <ProjectsSection projects={projects} />
      <MarqueeStrip />
      <ResumeSection />
      <MarqueeStrip reverse />
      <BlogSection blogs={blogs} />
      <MarqueeStrip />
      <ContactSection />
      <RedesignFooter />
    </>
  );
}
