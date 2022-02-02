import React, { Component } from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components";
import "../styles/table.css";
import "../styles/CCLandingPage.css";
import Hero from "components/hero/BackgroundAsImage.js";
// import LandingPageHero from "components/hero/LandingPageHero.js";
import MainFeature from "components/features/ThreeColSimple.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import FR1 from "images/fr-1-2.jpg";
import FR2 from "images/fr-2-2.jpg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import "../styles/alp.css";

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default class CCLandingPage extends Component {
  render() {
    return (
      <div style={{width : '100vw', overflow : 'hidden'}}>
        <div
          style={{
            position: "relative",
            backgroundColor: "#1e7cd9",
            height: "100vh",
            width :'100vw',
            overflow: "hidden",
          }}
        >
          <Hero />
          {/* <div class="custom-shape-divider-bottom-1642574667">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
        </div>
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
                  <td>✔️ Complex Configurable Product Management</td>
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
      </div>
    );
  }
}
