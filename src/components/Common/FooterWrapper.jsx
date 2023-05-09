import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";

const Wrapper = styled.div`
${tw`text-white`};
  h1 {${tw`self-center text-3xl font-light whitespace-nowrap`} } `;

export const FooterWrapper = (props) => {
    return (
        <Wrapper>{props.children}</Wrapper>
    )
}
