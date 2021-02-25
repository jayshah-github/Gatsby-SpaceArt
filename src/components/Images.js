import React from 'react'
import styled from 'styled-components'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
import Footerv from './Footerv'

const Images = ({heading}) => {
    const data=useStaticQuery(graphql`
query ImagesQuery{
    allImagesJson {
      edges {
        node {
          alt
          button
          name
          img {
            childImageSharp {
              fluid (maxHeight:600,maxWidth:600){
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
    data.allImagesJson.edges.forEach((item,index) => {
        tripsArray.push(
<ProductCard key={index}>
<ImgItem src={item.node.img.childImageSharp.fluid.src}
alt={item.node.alt}
fluid={item.node.img.childImageSharp.fluid} />

</ProductCard>

        )
    })
    return tripsArray
}

    return (
        <ImgContainer>
            <ImgHeading>{heading}</ImgHeading>
            <ImgGridWrapper>{getTrips(data)}</ImgGridWrapper>
            <Footer>
            <Footerv/>
                    </Footer>   
        </ImgContainer>
    )
}

export default Images


const ImgContainer=styled.div`
min-height:100vh;
padding:3rem calc((100vw-1300px) /2);
background:#101522;
color:#fff;


`  


const ImgHeading=styled.div`
font-size:clamp(1.2rem,5vw,3rem);
text-align:center;
padding-top:1rem;
margin-bottom:2rem;
color:#fff;
font-weight:500;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif


`  
const ImgGridWrapper=styled.div`
display:grid;
width:100%;

grid-gap:10px;
grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
grid-auto-rows:minmax(50px,auto);
margin:0 auto;
padding:0 32px;
max-width: 1000px;

/* & ${ImgItem}:nth-child(4){
   grid-column-end: span 2;
      } */
      /* & ${ImgItem}:nth-child(8){
        grid-row-start:4; 
   grid-column-end: span 2;
      
      } */



`  
const ProductCard=styled.div`
/* line-height:2;
width:100%;
height:500px;
position:relative;
border-radius:10px;
transition:0.2s ease; */


`  
const ImgItem=styled(Img)`
min-height:300px;
max-width:100%;
margin-bottom:1rem;
position:relative;
border-radius:16px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1); 
 
&:hover{
transform: scale(1.1);
filter:brightness(100%);

}


`  
const Footer =styled.div`
background:#101522;
position:relative;

display:flex;
flex-direction:column;
justify-content:flex-end;
width:100%;
padding-left:2.5rem;
`