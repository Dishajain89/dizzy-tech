import Navbar from "@/component/layout/navbar";
import Footer from "@/component/layout/footer";
import Banner from "@/component/banner";
import AboutUs from "@/component/aboutUs";
import Services from "@/component/ourServices";
import Portfolio from "@/component/portfolio";
import Pricing from "@/component/pricing";
import Contact from "@/component/contact";

export default function Home() {
  return (
    <div >
     <Navbar/>
     <Banner />
     <AboutUs />
     <Services/>
     <Portfolio />
     <Pricing />
     <Contact/>
     <Footer />
    </div>
  );
}
