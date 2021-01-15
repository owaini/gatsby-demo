import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'
import { useStaticQuery , graphql} from 'gatsby'
const HeroT = () => {
    const data = useStaticQuery(graphql`
        query {
  allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
    name: {in: ["Testi-1", "Testi-3"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

    `)
    return (
        <TestimonialsContainer>
         
            <Description>
                إنطباعات المنتسبين لبرامج جامع الراجحي
            </Description>
            <ContentWrapper dir="rtl">
            
                <ColumnOne>
                    <Testimonial dir="rtl">
                        <IoMdCheckmarkCircleOutline css={`color:#3fffa8; font-size:2rem; margin-bottom:1rem`}/>
                        <h3>صالح العبدكريم</h3>
                        <p>"ما اقدر اخفي سعادتي بعد ان أتممت حفظ كتاب الله وانا بعمر الخمسين"</p>
                    </Testimonial>
                     <Testimonial dir="rtl">
                        <FaRegLightbulb css={`color:#ffa83f; font-size:2rem; margin-bottom:1rem`}/>
                        <h3>محمد المنصور</h3>
                        <p dir="rtl">" مجهودات جميلة أعجتبني المشاركة الإجتماعية والأعمال التطوعية التي تنظم من قبل إدارة الجامع الأعمال الإنسانية هي لب وجوهر ديننا الحنيف علمتني الكثير أنا وأبنائي شكرا لكم "</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (

                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default HeroT


const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height:100%;
`
// const TopLine = styled.p`
//     color: #077bf1;
//     font-size:1rem;
//     padding-left: 2rem;
//     margin-bottom: 0.75rem;
// `
const Description = styled.p`
  text-align:center;
  padding-right: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight:bold;
  color: #077bf1;

`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width:768px) {
    grid-template-columns: 1fr;

    }
`

const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
padding-top: 1rem;
padding-right: 1.2rem;

h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

p {
    color: #3b3b3b;
    width: 95%;
}
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 2rem;

  @media screen and (max-width:768px ){
 grid-template-columns: 1fr;
  }
`
const Images = styled(Img)`

border-radius: 10px;
height: 100%;

 @media screen and (max-width:768px ){
height: auto;

  }

`