import React from "react"
import Contributed from "../components/Contributed"
import Email from "../components/Email"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import { GlobalStyles } from "../components/styles/GlobalStyles"
import Testimonials from "../components/Testimonials"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const IndexPage = () => (
  <>

  <Layout>
    <SEO title="home"/>
     <GlobalStyles />
      <Header  />
      <Hero />
     <Contributed heading="أنشطة الجامع الخيرية"/>
     <Testimonials />
     <Stats />
     <Email />
       <Footer />
  </Layout>

 
  </>
)

export default IndexPage
