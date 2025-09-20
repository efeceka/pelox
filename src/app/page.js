import Image from "next/image";
import Hero from "@/components/anasayfa/Hero";
import AboutPreview from "@/components/anasayfa/About";
import Products from "@/components/anasayfa/Products";
import Stats from "@/components/anasayfa/Stats";
import Referances from "@/components/anasayfa/Referances";
import Features from "@/components/anasayfa/Features";

export default function Home() {
  return (
    <div> 
      <Hero />
      <AboutPreview />  
      <Features />
      <Products />    
      <Stats />
      <Referances />
    </div>
  );
}
