import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { Media } from "reactstrap";
import CSS from "./Footer.module.css";
import Logo from "../../Images/logo-text-v2.png";
import Facebook from "../../Images/icon-facebook.png";
import Instagram from "../../Images/icon-instagram.png";
import LinkedIn from "../../Images/icon-linkedin.png";
import Twitter from "../../Images/icon-twitter.png";
export default props => (
  <div className={CSS.footerMain}>
    <div className={CSS.upperDiv}>
      <div>
        <div>
          <Media src={Logo} style={{ maxWidth: "15em" }} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "2em", marginRight: "2em" }}>
            <h4>1000+</h4>
            <h6>People Insured</h6>
          </div>
          <div style={{ marginTop: "2em" }}>
            <h4>10,000</h4>
            <h6>Comparisons done</h6>
          </div>
        </div>
      </div>
      <div className={CSS.hyperLinks}>
        <div className={CSS.hLinkClass}>
          <h6 className={CSS.hyperLink}>Home</h6>
          <h6 className={CSS.hyperLink}>Compare</h6>
          <h6 className={CSS.hyperLink}>Learn</h6>
        </div>
        <div className={CSS.hLinkClass}>
          <h6 className={CSS.hyperLink}>Life</h6>
          <h6 className={CSS.hyperLink}>Health</h6>
          <h6 className={CSS.hyperLink}>Car</h6>
          <h6 className={CSS.hyperLink}>Travel</h6>
        </div>
        <div className={CSS.hLinkClass}>
          <h6 className={CSS.hyperLink}>About</h6>
          <h6 className={CSS.hyperLink}>Careers</h6>
        </div>
      </div>
      <div>
        <div>
          <h6>Get discount offers and buying tips by email</h6>
        </div>
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
            <Button className={CSS.ComparePlanButton}>Subscribe</Button>
          </InputGroupAddon>
        </InputGroup>
        <div className={CSS.socialMedia}>
          <Media src={Facebook} className={CSS.socialMediaIcon} />
          <Media src={Instagram} className={CSS.socialMediaIcon} />
          <Media src={LinkedIn} className={CSS.socialMediaIcon} />
          <Media src={Twitter} className={CSS.socialMediaIcon} />
        </div>
      </div>
    </div>
    <div className={CSS.lowerDiv}>
      <div className={CSS.contactUS}>
        <h4>Need Help?</h4>
        <h6 className={CSS.contact}>WHATSAPP</h6>
        <h6 className={CSS.contact}>+92 31 6161 6187</h6>
        <h6 className={CSS.contact}>CHAT WITH US</h6>
      </div>
      <div className={CSS.license}>
        <p>
          easyinsurance.com.pk acts as a free and independent guidance platform
          for Insurance products. It is important to understand that insurance
          is a subject matter of solicitation and market risks. Premium rates
          are accurate at the time of issue but are subject to change without
          prior notice. The final insurance quote may vary until a survey has
          been done. In case there is discrepancy in the rates, the information
          provided by the insurance company shall prevail.
        </p>
        <p>
          © 2017 Neoteric Technologies (Pvt.) Ltd All Rights Reserved. TIC NUST،
          Innovation Drive، H-12 Islamabad, Pakistan
        </p>
        <div style={{ display: "flex" }}>
          <p>Privacy Policy</p> • <p>Disclaimers</p>
        </div>
      </div>
    </div>
  </div>
);
