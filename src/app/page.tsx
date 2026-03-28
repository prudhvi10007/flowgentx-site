import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import Deployment from "@/components/Deployment";
import Comparison from "@/components/Comparison";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Numbers />
      <Problem />
      <Features />
      <UseCases />
      <HowItWorks />
      <Security />
      <Deployment />
      <Comparison />
      <Integrations />
      <Pricing />
      <About />
      <DemoForm />
      <Footer />
    </>
  );
}
