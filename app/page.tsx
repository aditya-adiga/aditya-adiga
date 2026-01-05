import ResearchView from "@/components/ResearchView";
import HomePage from "@/components/HomePage";

export const dynamic = "force-static";

export default function Home() {
  return (
    <HomePage researchView={<ResearchView />} />
  );
}
