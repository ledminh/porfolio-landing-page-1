import HeroImage from "@/components/Home/HeroImage";
import Sidebar from "@/components/Home/Sidebar";
import Accomplishments from "@/components/Home/Accomplishments";
import MyStory from "@/components/Home/MyStory";
import VideoResume from "@/components/Home/VideoResume";
import MyServices from "@/components/Home/MyServices";
import PricePlans from "@/components/Home/PricePlans";
import Testimonials from "@/components/Home/Testimonials";
import LastestPublications from "@/components/Home/LastestPublications";
import Copyright from "@/components/Home/Copyright";

export default function Home() {
  return (
    <>
      <HeroImage />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-start-1 col-span-1">
          <Sidebar />
        </div>
        <div className="mt-6 col-start-1 col-span-3 lg:col-start-2 lg:col-span-3 lg:-translate-y-16 z-40">
          <Accomplishments />
          <MyStory />
          <VideoResume />
          <MyServices />
          <PricePlans />
          <Testimonials />
          <LastestPublications />
          <Copyright />
        </div>
      </div>
    </>
  );
}

// https://preview.themeforest.net/item/trueman-personal-portfolio-react-nextjs-template/full_screen_preview/50637184?_ga=2.37967718.435992495.1715492035-621114683.1715492035&_gac=1.128469502.1715492035.CjwKCAjwrvyxBhAbEiwAEg_KgrpQaoDKzKpvj_fpT2UEONJ6foGSHr7XO-OzzdO9onO_T4Q1msBjBRoC0twQAvD_BwE
