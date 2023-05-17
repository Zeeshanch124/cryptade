import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";

const Heading = styled.div`
  h1 {${tw`tracking-wider text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-bold w-2/3 leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight`} } 
  h5 {${tw`text-lg text-primary_20`} }`;

export default function Headings(props) {
    return (
        <Heading>
            {props.children}
        </Heading>

    )
}
