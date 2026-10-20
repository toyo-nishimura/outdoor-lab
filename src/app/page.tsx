import { Hero } from "@/components/Hero";
import { Inquiry } from "@/components/Inquiry";
import { PhotoGrid } from "@/components/PhotoGrid";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PhotoGrid />
        <Inquiry />
      </main>
      <SiteFooter />
    </>
  );
}
