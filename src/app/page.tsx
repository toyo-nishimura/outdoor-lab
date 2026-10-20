import { HomeGallery } from "@/components/HomeGallery";
import { Inquiry } from "@/components/Inquiry";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeGallery />
        <Inquiry />
      </main>
      <SiteFooter />
    </>
  );
}
