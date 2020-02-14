import React from "react";
import CSS from "./HealthInsuranceCompanies.module.css";
import CompanyCard from "../../MainPage/CompanyCard/CompanyCard";
import JubileeGeneral from "../../../Images/jgi.png";
import Allianz from "../../../Images/aei.png";
import TPL from "../../../Images/tpli.png";
import UIC from "../../../Images/uici.png";
export default props => (
  <div className={CSS.main}>
    <div>
      <h4>Health insurance Pakistan companies</h4>
      <CompanyCard image={JubileeGeneral} text="Jubilee General Insurance" />
      <CompanyCard image={Allianz} text="Allianz EFU Insurance" />
      <CompanyCard image={TPL} text="TPL Life Insurance" />
      <CompanyCard image={UIC} text="UIC Takaful" />
    </div>
  </div>
);
