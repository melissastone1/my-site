import React from 'react';
import { ProjectCard } from './ProjectCard';
import { useStaticQuery, graphql } from "gatsby"

export const ZvaProjectCard: React.FC = () => {
    const image = useStaticQuery(graphql`{
        placeholderImage: file(relativePath: {eq: "zva.png"}) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `)

    return <ProjectCard 
        image={image.placeholderImage.childImageSharp.gatsbyImageData}
        title="Zocdoc Value Awards"
        subtitle={<p>I weighed in on a uniquely Zocdoc tradition in a piece on culture for the Zocdoc blog</p>}
        href={'https://medium.com/zocdoc-engineering/hosting-zocdocs-discount-academy-awards-a6ae2764580f'}
        hrefText="Check out the post on the Zocdoc Medium blog."
    />
};