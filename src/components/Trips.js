import React from 'react'
import styled from 'styled-components'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
import {Button} from './Button'
 import {ImLocation} from 'react-icons/im'
import Footerv from './Footerv'

const Trips = ({heading}) => {

const data=useStaticQuery(graphql`
query TripsQuery{
    allTripsJson {
      edges {
        node {
          alt
          button
          name_
          img {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
  
  
`)

function getTrips(data){
    const tripsArray=[]
    data.allTripsJson.edges.forEach((item,index) => {
        tripsArray.push(
<ProductCard key={index}>
<ProductImg src={item.node.img.childImageSharp.fluid.src}
alt={item.node.alt}
fluid={item.node.img.childImageSharp.fluid} />
<ProductInfo>
<TextWrap>
   <ImLocation/>
   <ProductTitle>{item.node.name_}</ProductTitle>
</TextWrap>
<Button to="/trips" primary="true" round="true" css={`position:absolute;top:320px;font-size:14px`}>{item.node.button}</Button>
</ProductInfo>
</ProductCard>

        )
    })
    return tripsArray
}

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>{getTrips(data)}</ProductWrapper>
            <Footer>
            <Footerv/>
                    </Footer>   
        </ProductsContainer>
    )
}

export default Trips


const ProductsContainer=styled.div`
min-height:100vh;
padding:3rem calc((100vw-1300px) /2);
background:#101522;
color:#fff;


`  


const ProductsHeading=styled.div`
font-size:clamp(1.2rem,5vw,3rem);
text-align:center;
padding-top:1rem;
margin-bottom:2rem;
color:#fff;
font-weight:500;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif


`  
const ProductWrapper=styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
grid-gap:10px;
justify-items:center;
padding:0 2rem;
margin:0 auto;
max-width: 1000px;


@media screen and (max-width:1200px){
  grid-template-columns:1fr;
}

@media screen and (max-width:868px){
  grid-template-columns:1fr;
}

`  
const ProductCard=styled.div`
line-height:2;
width:100%;
height:400px;
position:relative;
border-radius:10px;
transition:0.2s ease;


`  
const ProductImg=styled(Img)`
height:100%;
max-width:100%;
position:relative;
border-radius:10px;
filter: brightness(60%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
  transform: scale(1.1);
filter:brightness(100%)

}

`  
const ProductInfo=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:0 2rem;

@media screen and (max-width:200px){
  padding:0 1rem;
}


`  




const TextWrap=styled.div`

display:flex;
align-items:center;
position:absolute;
top:275px;

`  
const ProductTitle=styled.div`
font-weight:400;
font-size:1rem;
margin-left:0.5rem;
`  

const Footer =styled.div`
top:95%;
position:absolute;
display:flex;
flex-direction:column;
justify-content:flex-end;
width:100%;

@media screen and (max-width:1200px){
  position:relative;

  padding-left:2.5rem;

 }
`