import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaTwitter, FaInstagram, FaGithubAlt } from "react-icons/fa";

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Me"/>
      <div className="about-me mb-4">
        <h1 className="mt-5 mb-4 font-weight-bolder"> Hi 👋🏼 I'm Rakhmat N. Wathon </h1>
        <p> 
          a Front-End Developer from Indonesia 🇮🇩 who constantly seeking to improve as well as willing to go the extra mile in all that I'm passionate about. In short, <mark> I'm just a curious person. </mark> 
        </p>
        <p>
          My first coding experience started all the way back when I was in high school when Blogger is so popular back then. I spent more time tweaking the HTML & CSS than actually creating the blog post itself 😆. Unfortunately, it didn't last long. I started to explore other things besides coding including art, design, video editing, visual fx etc. but I know, coding is one of the things that I would enjoy doing.
        </p>
        <p>
          I entered college in Computer Science major in Software Engineering, after getting my Bachelor’s Degree I attended a coding Bootcamp to further enhance my knowledge. That’s when I realized that I know little to nothing about the real world of Software Engineering Industry 🤦‍♂️
        </p>
        <blockquote>
          <p>
            The real world doesn't always greet with a warm welcome
          </p>
        </blockquote>
        <p>
          I decided to learn from the very beginning, reviewing all the fundamentals, work my way up until now. I’m still learning, still exploring 🔥🔥🔥
        </p>
        <p>
          Currently, I’m writing codes as a Front-End Developer at <a href="https://www.mhcasia.com/" target="_blank">MHC Asia</a> using HTML, CSS, JavaScript, React, and other Front-End ecosystems. By choosing JavaScript as my main programming language, it allows me to also explore on the Back-End side of the development.
        </p>
        <div className="text-center">
          <h2 className="mb-4">Reach me out!</h2>
          <a href="https://twitter.com/rnwathon" target="_blank" className="mx-5"><FaTwitter size={64}/> </a>
          <a href="https://instagram.com/rnwathon" target="_blank" className="mx-5"><FaInstagram size={64}/> </a>
          <a href="https://github.com/rnwathon" target="_blank" className="mx-5"><FaGithubAlt size={64}/></a>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
