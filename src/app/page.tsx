import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import WhyFlowgentX from "@/components/WhyFlowgentX";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <UseCases />
      <HowItWorks />
      <WhyFlowgentX />
      <DemoForm />
      <Footer />
    </>
  );
}
