import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
${tw`text-white`};
  h1 {${tw`self-center text-3xl font-light whitespace-nowrap`} };
  h2 {${tw`mb-6 text-lg font-semibold`} };
  ul {${tw`text-lg font-normal`} };
  li {${tw`mb-4`} }; 
  ul {${tw`text-lg font-normal`} };
  span {${tw`text-sm sm:text-center`} }`;


export const FooterWrapper = (props) => {
    return (
        <Wrapper>{props.children}</Wrapper>
    )
}
