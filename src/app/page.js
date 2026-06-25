import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import ManufacturingFacilities from "@/Components/ManufacturingFacilities";
import QualityCompliance from "@/Components/QualityCompliance";
import Services from "@/Components/Services";
import ResearchDevelopment from "@/Components/ResearchDevelopment";
import Certifications from "@/Components/Certifications";
import Gallery from "@/Components/Gallery";
import FAQs from "@/Components/FAQs";
import ContractManufacturing from "@/Components/ContractManufacturing";
import ThirdPartyManufacturing from "@/Components/ThirdPartyManufacturing";
import ExportServices from "@/Components/ExportServices";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <ManufacturingFacilities/>
    <Services/>
    <ContractManufacturing/>
    <ThirdPartyManufacturing/>
    <ResearchDevelopment/>
    <QualityCompliance/>
    <Certifications/>
    <ExportServices/>
    <Gallery/>
    <Contact/>
    <FAQs/>
    </>
  );
}
