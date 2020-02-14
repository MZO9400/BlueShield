import React from "react";
import CSS from "./HealthInsurance.module.css";
import Jtron1 from "./Jtron1/Jtron1";
import WhyUs from "../WhyUs/WhyUs";
import Coverage from "./Coverage/Coverage";
import InsuranceCompanies from "../InsuranceCompanies/InsuranceCompanies";
import FourthJumbotron from "../MainPage/FourthJumbotron/FourthJumbotron";
import SecondJumbotron from "../MainPage/SecondJumbotron/SecondJumbotron";
import FifthJumbotron from "../MainPage/FifthJumbotron/FifthJumbotron";
import SixthJumbotron from "../MainPage/SixthJumbotron/SixthJumbotron";
import HealthCat from "../../Images/category-health.png";
import Comparison from "../../Images/icon-compare.svg";
import JubileeGeneral from "../../Images/jgi.png";
import Allianz from "../../Images/aei.png";
import TPL from "../../Images/tpli.png";
import UIC from "../../Images/uici.png";
const data = [
  { text: "Emergency hospitalization", image: Comparison },
  { image: Comparison, text: "Pre & Post hospitalization expenses" },
  {
    image: Comparison,
    text:
      "Day care surgeries/ procedures (e.g. Endoscopy, Angiography, Dialysis)"
  },
  { image: Comparison, text: "Intensive Care Unit (ICU)" },
  {
    image: Comparison,
    text:
      "Specialized investigations (MRI, CT Scan, PET Scan, EEG, EMG, ETT, All Type Of Biopsies)"
  },
  { image: Comparison, text: "Treatment of fractures & lacerated wounds" },
  { image: Comparison, text: "Ambulance for emergencies" }
];
const whyUsData = [
  {
    heading: "Why buy health insurance",
    text:
      "Health insurance bears the costs of unforeseen medical costs that occurs if you are admitted in a hospital. In private hospitals in Pakistan, medical bills can easily run into several lacs – you can protect yourself from such expenses at a tiny fraction of the cost."
  },
  {
    heading: "How to choose a plan",
    text:
      "At easyinsurance, you can compare plans from the top 4 health insurance companies of Pakistan. Through us, you will know exactly what is covered in each plan; once you choose, you can purchase the plan online and recieve a verified health card from the insurance company."
  },
  {
    heading: "Why buy through us",
    text:
      "We are an authorized agency of the listed insurance companies. Our service is completely free and we have standard market prices. Your policy will be issued directly by the insurance company of your choice and all claims will be handled by them."
  }
];

const insurancedata = [
  { image: JubileeGeneral, text: "Jubilee General Insurance" },
  { image: Allianz, text: "Allianz EFU Insurance" },
  { image: TPL, text: "TPL Life Insurance" },
  { image: UIC, text: "UIC Takaful" }
];
export default props => (
  <div>
    <Jtron1 />
    <WhyUs data={whyUsData} />
    <Coverage />
    <InsuranceCompanies data={insurancedata} />
    <FourthJumbotron
      data={data}
      heading="Features of health insurance"
      text="Compare life insurance, health insurance, auto insurance and travel insurance to select the best plan for you"
      img={HealthCat}
    />
    <FifthJumbotron />
    <SecondJumbotron DoNotShow={true} />
    <SixthJumbotron ButtonText="SEE PLANS" ButtonLink="/compare/health" />
  </div>
);
