import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const RoomsPageTemplate = ({ MainImage, MainHeader, MainText }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          MainImage.childImageSharp
            ? MainImage.childImageSharp.fluid.src
            : MainImage
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {MainHeader}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {MainText}
        </h3>
      </div>
    </div>
  </div>
);

RoomsPageTemplate.propTypes = {
  MainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  MainHeader: PropTypes.string,
  MainText: PropTypes.string
};

const RoomsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <RoomsPageTemplate
        MainImage={frontmatter.mainImage}
        MainHeader={frontmatter.mainHeader}
        MainText={frontmatter.mainText}
      />
    </Layout>
  );
};

RoomsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default RoomsPage;

export const pageQuery = graphql`
  query RoomsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "rooms-page" } }) {
      frontmatter {
        mainHeader
        mainImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainText
      }
    }
  }
`;
