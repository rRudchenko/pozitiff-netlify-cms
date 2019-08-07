import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

// import Layout from '../components/Layout';

export const RoomsPageTemplate = ({ title, overview, price, roomimage }) => (
  <div>
    <div>
      <h1>{title}</h1>
    </div>
    <div>
      <p>{overview}</p>
    </div>
    <div>
      <p>{price}</p>
    </div>
    <div>
      <img
        src={`${
          roomimage.childImageSharp
            ? roomimage.childImageSharp.fluid.src
            : roomimage
        }`}
        alt=''
      />
    </div>
  </div>
)

// RoomsPageTemplate.propTypes = {
//   MainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   MainHeader: PropTypes.string,
//   MainText: PropTypes.string
// }

const RoomsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <section>
      <RoomsPageTemplate
        title={frontmatter.title}
        overview={frontmatter.overview}
        price={frontmatter.price}
        roomimage={frontmatter.roomimage}
      />
    </section>
  )
};

// RoomsPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// }

export default RoomsPage

export const pageQuery = graphql`
  query RoomsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "rooms-page" } }) {
      frontmatter {
        title
        overview
        price
        roomimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
