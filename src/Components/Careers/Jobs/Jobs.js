import React from "react";
import { Jumbotron } from "reactstrap";
import CSS from "./Jobs.module.css";
import Job from "./Job/Job";
import WebDev from "../../../Images/web-developer.png";
import Designer from "../../../Images/graphic-designer.png";
import Writer from "../../../Images/content-writer.png";
import Sales from "../../../Images/sales-executive.png";
import Market from "../../../Images/market-research.png";
const data = [
  {
    color: "rgb(102, 255, 224)",
    image: WebDev,
    JobTitle: "Full-Stack Web Developer",
    TimeLoc: "Islamabad | Full time",
    Description:
      "We are constantly improving our website and seeking talent with holistic understanding of web development",
    ApplicationLink: "/"
  },
  {
    color: "rgb(255, 233, 145)",
    image: Designer,
    JobTitle: "Graphics Designer",
    TimeLoc: "Islamabad | Part time",
    Description:
      "Love the illustrations on our website? Come make more fun and quirky characters in some sticky situations",
    ApplicationLink: "/"
  },
  {
    color: "rgb(255, 69, 112)",
    image: Writer,
    JobTitle: "Content Writer",
    TimeLoc: "Islamabad | Part time",
    Description:
      "We need someone with a knack for translating exasperating information to simple, easy-to-read content",
    ApplicationLink: "/"
  },
  {
    color: "rgb(24, 140, 255)",
    image: Sales,
    JobTitle: "Sales Executive",
    TimeLoc: "Islamabad | Full time",
    Description:
      "Insurance can be one of the hardest field to interact with people, yet it is essential. Apply if you're up to the challenge",
    ApplicationLink: "/"
  },
  {
    color: "rgb(242, 245, 247)",
    image: Market,
    JobTitle: "Market Intern",
    TimeLoc: "Islamabad | Part time",
    Description:
      "Are you the fresh blood and energy spike we are looking for? Learn how to work in professional team",
    ApplicationLink: "/"
  }
];
export default props => (
  <Jumbotron className={CSS.main}>
    <h4>Job Openings</h4>
    <div className={CSS.jobs}>
      {data.map((item, key) => (
        <Job {...item} key={key} />
      ))}
    </div>
  </Jumbotron>
);
