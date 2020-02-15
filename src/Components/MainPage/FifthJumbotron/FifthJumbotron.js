import React from "react";
import FontAwesome from "react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewCard from "./ReviewCard/ReviewCard";
import Mauqa from "../../../Images/mauqa.png";
import Murtaza from "../../../Images/murtaza.png";
import Farrukh from "../../../Images/farrukh.png";
import CSS from "./FifthJumbotron.module.css";

export default props => (
  <div className={CSS.fifthJTron}>
    <div className={CSS.reviewInfo}>
      <div style={{ display: "flex", alignItems: "center", color: "gold" }}>
        <FontAwesomeIcon icon={faStar} size="2x" />
        <FontAwesomeIcon icon={faStar} size="2x" />
        <FontAwesomeIcon icon={faStar} size="2x" />
        <FontAwesomeIcon icon={faStar} size="2x" />
        <FontAwesomeIcon icon={faStarHalf} size="2x" />
      </div>
      <div>
        <h2>4.9 / 5 ratings</h2>
        <h6 className={CSS.reviews}>Based on 51 customer reviews</h6>
      </div>
    </div>
    <div className={CSS.reviewCards}>
      <ReviewCard
        reviewerPicture={Mauqa}
        reviewerName="Mustafa & Suniya"
        reviewerMisc="Founders - Mauqa.Online"
        text="easyinsurance provided the best advice and guidance to help us get the right insurance plan and proved to be the trusted platform we had been looking for. We would highly recommend their service."
      />
      <ReviewCard
        reviewerPicture={Murtaza}
        reviewerName="Murtaza Zaidi"
        reviewerMisc="CEO - CyberVision"
        text="easyinsurance made the process of selecting the right policy very smooth. I always wanted to get life insurance but somehow dealing with agents and their non-stop follow up calls wasn’t my cup of tea. easyinsurance helped me make the right decision."
      />
      <ReviewCard
        reviewerPicture={Farrukh}
        reviewerName="Farrukh Malik"
        reviewerMisc="CEO - Discretelogix"
        text="We needed health insurance for our team members but we didn't want to go through the hassles associated with the process. easyinsurance got us the best, customized quotes and connected us to credible companies."
      />
    </div>
  </div>
);
