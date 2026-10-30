import { About } from "@/components/About";
import { Crew } from "@/components/Crew";
import { DownloadCta } from "@/components/DownloadCta";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Industry } from "@/components/Industry";
import { ItineraryMenu } from "@/components/ItineraryMenu";
import { Motion } from "@/components/Motion";
import { Stats } from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Motion />
      <Hero />
      <About />
      <Stats />
      <ItineraryMenu />
      <Industry />
      <Gallery />
      <Crew />
      <DownloadCta />
    </>
  );
}
