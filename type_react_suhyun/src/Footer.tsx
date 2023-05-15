import React from 'react';
import {styled} from 'styled-components';

type FooterPropsType = {
    themename: string;
};

const Footer = (p1: FooterPropsType) => {
    const FooterBox = styled.div<FooterPropsType>`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: ${(p2) => (p2.themename === "basic" ? "skyblue" : "yellow")};
    text-align: center;
  `;
  return <FooterBox themename={p1.themename}>React styled-components Test</FooterBox>;
};
export default Footer;