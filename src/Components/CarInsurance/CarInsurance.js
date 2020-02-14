import React from "react";
import CSS from "./CarInsurance.module.css";
import Jtron1 from "./Jtron1/Jtron1";
import WhyUs from "../WhyUs/WhyUs";
import JubileeGeneral from "../../Images/jgi.png";
import Allianz from "../../Images/aei.png";
import TPL from "../../Images/tpli.png";
import UIC from "../../Images/uici.png";
import InsuranceCompanies from "../InsuranceCompanies/InsuranceCompanies";
const WhyUsData = [
  {
    heading: "Why buy car insurance",
    text:
      "Car insurance bears the costs of accidental damages that may occurs to your car. This includes coverage of damages incured either by you or by a third party – you can protect yourself from such expenses at a fraction of the cost."
  },
  {
    heading: "How to choose a plan",
    text:
      "At easyinsurance, you can compare plans from the top 6 motor insurance companies of Pakistan. Through us, you will know exactly what is covered in each plan; once you choose, you can purchase the plan online or pay directly to insurance company after your car survey."
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
  { image: TPL, text: "TPL Insurance" },
  { image: UIC, text: "UIC Takaful" }
];
export default props => (
  <div>
    <Jtron1 />
    <WhyUs data={WhyUsData} />
    <InsuranceCompanies
      heading="
      Companies on our comparison list"
      data={insurancedata}
    />
  </div>
);
