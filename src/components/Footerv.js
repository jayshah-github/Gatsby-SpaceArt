import React from 'react'
import styled from 'styled-components'

import {FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa"
import {Link} from 'gatsby'
import {DiScala} from 'react-icons/di'

const Footerv = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    {/* <SocialLogo to="/">
                        <SocialIcon/>
                        Space Arts
                        </SocialLogo> */}
                        <WebsiteRights>
                            CopyRight @ {new Date().getFullYear()} 
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                      
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter/>
                                </SocialIconLink>
                               
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        
                        </SocialIcons>
                   
                </SocialMediaWrap>

            </SocialMedia>
        </FooterContainer>
    )
}

export default Footerv

const FooterContainer= styled.div`
background: transparent;
height:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

const SocialMedia= styled.div`

max-width: 1000px;
width:100%;

`

const SocialMediaWrap= styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:90%;
max-width: 1000px;
/* margin:20px auto; */

@media screen and (max-width:868px){
  flex-direction:column;
}


`
const SocialLogo= styled(Link)`
display:flex;
color:#fff;
cursor: pointer;
text-decoration:none;
font-size:2rem;

justify-self:start;
align-items:center;
margin-bottom:16px;


`
const SocialIcon= styled(DiScala)`

margin-right:10px;
`
const WebsiteRights= styled.div`
color:#fff;
margin-bottom:16px;
text-decoration:none;
font-size:1.2rem;
font-family: "Ubuntu",sans-serif;
`
const SocialIcons= styled.div`

display:flex;
justify-content:space-between;
align-items:center;
width:240px;

`
const SocialIconLink = styled.a`

color:#fff;
font-size:24px;
`