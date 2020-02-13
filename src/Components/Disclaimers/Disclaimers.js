import React from "react";
import CSS from "./Disclaimers.module.css";
import Disclaimer from "./Disclaimer/Disclaimer";
export default props => (
  <div className={CSS.disclaimer}>
    <h4>Disclaimers</h4>
    <div style={{ display: "inline-flex" }}>
      <Disclaimer
        heading="Trusted agency"
        text="easyinsurance is run by Neoteric Technologies (Pvt) Ltd. We are authorized agency of the listed insurance companies. You can the policy number generated upon issuance directly with the company of your choice"
      />
      <Disclaimer
        heading="Policy issuance"
        text="Your policy will be issued directly by the insurance company of choice. easyinsurance acts as an independent guiding and platform. All claims procedures would be handled by the company directly. You will be emailed the documentation of policy."
      />
      <Disclaimer
        heading="Refund policy"
        text="A looking period may apply on a policy, depending on the terms of the policy, during which a customer may cancel the policy and recieve a full refund. In case of rejection of Visa, you may avail a partial refund of your payment. In such cases, contact us and our team will help you with the process."
      />
      <Disclaimer
        heading="Standard issuance time"
        text="After payment has been recieved, a policy is issued within 24 hours processing time, only on the weekdays."
      />
    </div>
    <div className={CSS.info}>
      <p>
        easyinsurance intends to provide clear and unbiased information about
        insurance products and services. The information and data are generic in
        nature. Our efforts are to offer unbiased, accurate and responsible data
        to the best of our ability. We are however, in no manner or form
        responsible for any discrepancies in the data published on our website.
      </p>
      <p>
        There is no intention or purpose of violating any intellectual property
        or ancillary rights. All information provided on the portal
        easyinsurance is subject to it’s discretion and is likely to change
        without any notice. Though, any changes in public utility will be
        communicated on our portal.
      </p>
      <p>
        Although we have tried to maintain high standards in quality, clarity
        and accuracy of the material posted on the portal. easyinsurance is not
        legally responsible for the same in any manner what so ever.
      </p>
      <p>
        Employees, partners and associated staff of easyinsurance are not
        accountable for any loss, harm or damage that occurs or may occur or
        arise from the usage of information from the portal. Customers are
        advised to use their own discretion in such matters.
      </p>
      <p>
        It is important to understand that insurance is a subject matter of
        solicitation and market risks. It is the responsibility of the customer
        to understand the limitations of insurance policies and the risks
        involved, and under no circumstance, form or manner, do we take any
        liability in such cases. We also recommend you to please read the
        subject and offer documents carefully. The information provided on the
        portal is for financial and insurance purposes.
      </p>
      <p>
        It is a mutual understanding between us and the customers that their
        association with the portal will be at the customer's sole discretion
        and risk.
      </p>
      <p>
        Visitors to this website/portal and every third party is hereby informed
        that the owners of this website/portal, viz., Neoteric Technologies
        Private Limited, are not the agents, corporate agents, related party or
        intermediaries of the insurers, whose products are dealt with in this
        website/portal. They are also not the sub-agents or sub-intermediaries
        of the agents and intermediaries of the respective insurers. Though
        endeavour is made to make correct policy/product comparisons, quotes,
        features, etc., based on the information provided by the insurers, it is
        made abundantly clear that Neoteric Technologies Private Limited , its
        directors, shareholders, officers and employees and easyinsurance.com
        are in no way responsible to or liable for any one for his/her
        investment decision, and every prospect/ investor/policyholder shall be
        solely responsible for the consequences of his/her decision.
      </p>
    </div>
  </div>
);
