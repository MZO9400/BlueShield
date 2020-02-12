import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import CSS from "./StepCard.module.css";
export default props => (
  <Card className={CSS.maindiv}>
    <CardImg top src={props.svgFile} />
    <CardBody>
      <CardTitle className={CSS.text}>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardBody>
  </Card>
);
