import React from 'react'
import styled from 'styled-components'
import {StatsData} from '../data/StatsData'


const Stats = () => {
    return (
        <StatsContainer id="achievement">
            <Heading>ما تم إنجازه حتى الآن وما نطمح إليه بعد توفيق الله</Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                        return (
                            <StatsBox key={index}>
                                <Icon>{item.icon}</Icon>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                            </StatsBox>
                        )
                 } )}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats


const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
   text-align:center;
  padding-right: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight:bold;
  color: #077bf1;
`

const Wrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);

   grid-gap: 10px;

   @media screen and (max-width: 768px) {
       grid-template-columns: 1fr 1fr;
   }

   
   @media screen and (max-width: 500px) {
       grid-template-columns: 1fr;
   }
`

const StatsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  transition: all 0.4s ease-out;
  
  &:hover {
      box-shadow: 2px 3px 9px 11px rgba(0, 0, 0, 0.2);
  }
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ee5533;
  text-align: center;
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
    text-align: center;
    margin-bottom: 10px;
   font-weight: bold;
`
const Description = styled.div`
    text-align: center;
    line-height: 22px;
`