import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer dir="rtl">

            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>جديدنا</h1>
                    <p>نخطط بأن نفعل المشاركة الإلكترونية وعمل تطبيق خاص بناء</p>
                </FooterDesc>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>التواصل</FooterLinkTitle>
                    <FooterLink to='/about'>الهاتف</FooterLink>
                    <FooterLink to='/about'>الدعم</FooterLink>
                    <FooterLink to='/about'>الموقع</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                 <FooterLinkItems>
                    <FooterLinkTitle>الفيديو</FooterLinkTitle>
                    <FooterLink to='/about'>حفظ القرآن</FooterLink>
                    <FooterLink to='/about'>أعمال تطوعية</FooterLink>
                    <FooterLink to='/about'>مساهمات خيرية</FooterLink>
                </FooterLinkItems>
             </FooterLinksWrapper>

             <FooterLinksWrapper>
                 <FooterLinkItems>
                    <FooterLinkTitle> التواصل الإجتماعي</FooterLinkTitle>
                    <FooterLink to='/about'>فيسبوك</FooterLink>
                    <FooterLink to='/about'>تويتر</FooterLink>
                    <FooterLink to='/about'>يوتيوب</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem calc(( 100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fafafb;
`

const FooterLinksWrapper = styled.div`

`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
      margin-bottom: 2rem;
      color: #f26a2e;
  }

  @media screen and (max-width: 768px) {
      padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding: 1rem 2rem;

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`

const FooterLinkTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;

`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 15px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3 ease-out;
    }
`