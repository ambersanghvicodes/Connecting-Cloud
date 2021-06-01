import React, { Component } from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components";
import "../styles/table.css";
import Hero from "components/hero/BackgroundAsImage.js";
// import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/ThreeColSimple.js";
// import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
// import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

import FR1 from "images/fr-1-2.jpg";
import FR2 from "images/fr-2-2.jpg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import "../styles/alp.css";

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default class AgencyLandingPage extends Component {
  render() {
    return (
      <AnimationRevealPage>
        <Hero />
        <MainFeature />
        <Container>
          <h5 className="subheading">Technical Services</h5>
          <h1 className="head">CPQ</h1>
          <center className="table-head">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>SAP CPQ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✔️ User Managment</td>
                </tr>
                <tr>
                  <td>✔️ Simple Product</td>
                </tr>
                <tr>
                  <td>✔️  Complex Configurable Product Management</td>
                </tr>
                <tr>
                  <td>✔️ Pricing Configuration & Management</td>
                </tr>
                <tr>
                  <td>✔️ Discount and Promotions</td>
                </tr>
                <tr>
                  <td>✔️ Approvals</td>
                </tr>
                <tr>
                  <td>✔️ Workflow</td>
                </tr>
                <tr>
                  <td>✔️ Quote Proposals & Document Generation</td>
                </tr>
                <tr>
                  <td>✔️ Guided Selling</td>
                </tr>
                <tr>
                  <td>✔️ Customer Master Data Replication & Management</td>
                </tr>
                <tr>
                  <td>✔️ Sales Order Generation</td>
                </tr>
              </tbody>
            </table>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>INTEGRATION WITH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✔️ Salesforce</td>
                </tr>
                <tr>
                  <td>✔️ SAP Commerce Cloud</td>
                </tr>
                <tr>
                  <td>✔️ SAP Cloud for Customer</td>
                </tr>
                <tr>
                  <td>✔️ SAP S4 HANA</td>
                </tr>
                <tr>
                  <td>✔️ SAP ECC</td>
                </tr>
                <tr>
                  <td>✔️ SAP Subscription billing</td>
                </tr>
                <tr>
                  <td>✔️ SAP Variant Configuration</td>
                </tr>
                <tr>
                  <td>✔️ SAP CPI</td>
                </tr>
                <tr>
                  <td>✔️ DocuSign</td>
                </tr>
                <tr>
                  <td>✔️ AdobeSign</td>
                </tr>
                <tr>
                  <td>✔️ CLM</td>
                </tr>
              </tbody>
            </table>
          </center>
          <DecoratorBlob />
        </Container>
        <Container>
          <ContentWithPaddingXl>
            <div className="tic">
              Features of CPQ
              <div className="tiw">
                <img className="ti1" src={FR1} alt={"feature"} />
                <img className="ti2" src={FR2} alt={"feature"} />
              </div>
            </div>
            <DecoratorBlob />
          </ContentWithPaddingXl>
        </Container>
        <Footer />
      </AnimationRevealPage>
    );
  }
}

/* <Features />
      <MainFeature2 />
      <Portfolio />
      <Testimonial
        subheading="Testimonials"
        heading={
          <>
            Our Clients <span tw="text-primary-500">Love Us.</span>
          </>
        }
        description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        testimonials={[
          {
            imageSrc:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Charlotte Hale",
            customerTitle: "CEO, Tesla Inc.",
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, Nestle",
          },
        ]}
        textOnLeft={true}
      /> */
/* <FAQ
          imageSrc={customerSupportIllustrationSrc}
          imageContain={true}
          imageShadow={false}
          subheading="FAQs"
          heading={
            <>
              Do you have <span tw="text-primary-500">Questions ?</span>
            </>
          }
        /> */
/* <Blog /> */
