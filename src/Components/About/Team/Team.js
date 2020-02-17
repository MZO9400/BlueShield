import React from "react";
import CSS from "./Team.module.css";
import TeamMember from "./TeamMember/TeamMember";
import Fahad from "../../../Images/fahad.jpg";
import Maliha from "../../../Images/maliha.jpg";
import Masna from "../../../Images/masna.jpg";
import LN from "../../../Images/icon-linkedin.png";
const memberdata = [
  {
    img: Fahad,
    Name: "Fahad Awan",
    Desg: "Chief Executive Officer / Founder",
    cont: LN,
    contLink: "https://www.linkedin.com/in/fahad-aw/",
    email: "fahad@easyinsurance.com.pk"
  },
  {
    img: Maliha,
    Name: "Maliha Javed Khan",
    Desg: "Chief Strategy Officer / CoFounder",
    cont: LN,
    contLink: "https://www.linkedin.com/in/maliha-javed-khan/",
    email: "maliha@easyinsurance.com.pk"
  },
  {
    img: Masna,
    Name: "Masna Bin Umeed",
    Desg: "Product Manager",
    cont: LN,
    contLink: "https://www.linkedin.com/in/masna-bin-umeed-9376247a/",
    email: "masna@easyinsurance.com.pk"
  },
  {
    img: Fahad,
    Name: "Fahad Awan",
    Desg: "Chief Executive Officer / Founder",
    cont: LN,
    contLink: "https://www.linkedin.com/in/fahad-aw/",
    email: "fahad@easyinsurance.com.pk"
  },
  {
    img: Maliha,
    Name: "Maliha Javed Khan",
    Desg: "Chief Strategy Officer / CoFounder",
    cont: LN,
    contLink: "https://www.linkedin.com/in/maliha-javed-khan/",
    email: "maliha@easyinsurance.com.pk"
  },
  {
    img: Masna,
    Name: "Masna Bin Umeed",
    Desg: "Product Manager",
    cont: LN,
    contLink: "https://www.linkedin.com/in/masna-bin-umeed-9376247a/",
    email: "masna@easyinsurance.com.pk"
  }
];
export default props => (
  <div className={CSS.main}>
    <h4>Our Team</h4>
    <h6>Meet the people working to make this dream a success</h6>
    <div className={CSS.team}>
      {memberdata.map((item, key) => (
        <TeamMember {...item} key={key} />
      ))}
    </div>
  </div>
);
