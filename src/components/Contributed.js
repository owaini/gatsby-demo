import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image'
import {Button} from './Button'
import {ImLocation} from 'react-icons/im'
const Contributed = ({heading}) => {
    const data = useStaticQuery(graphql`
        query ContributedQuery {
            allContributedJson {
                edges {
                    node {
                        alt
                        button 
                        name
                        img {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    function getContributed(data){
        const contributedArrays = []
        data.allContributedJson.edges.forEach((item, index)=> {
            contributedArrays.push(
                <ProductCard key={index}>
                    <ProductImg 
                        alt={item.node.alt} 
                        fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                        <Button primary="true" round="true" css={`position: absolute; top: 420px; font-size: 16px;`}>{item.node.button}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return contributedArrays
    }
    return (
        <ProductsContainer id="contributed">
            <ProductsHeading>{heading}</ProductsHeading>
              <ProductWrapper>
                    { getContributed(data)}
                </ProductWrapper>
        </ProductsContainer>
    )
}

export default Contributed



const ProductsContainer = styled.div`
  
    min-height:100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fff;
`

const ProductsHeading = styled.h1`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom:5rem;

`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( 4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width:1200px) {
        grid-template-columns: 1fr 1fr;
    }

     @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
    }

`

const ProductCard = styled.div`
    line-height: 2;
    width:100%;
    height:500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
    
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(60%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover{
        filter: brightness(95%)
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 2rem;

    @media screen and (max-width:280){
        padding: 0 1rem;
    }
`
const ProductTitle = styled.div`
    font-size: clamp(1rem, 5vw, 1.2rem);   
    margin-left: 0.5rem;
    font-weight: bolder;
`
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
    color: #fff;
    font-size: clamp(1rem, 5vw, 1.2rem);
`

