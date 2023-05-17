import React from 'react';
import tw from 'twin.macro';
import styled from "styled-components";

const StyledButton = styled.button`
  ${tw`text-center px-6 py-2 rounded-sm font-bold text-white bg-primary `};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${({ disabled }) => disabled && tw`opacity-50`}
  ${({ variant }) => variant === "primary" && tw` text-white `}
  ${({ variant }) => variant === "primary-black" && tw` text-black`}

`;

const Button = ({ value, loading = false, variant = undefined, text = undefined, ...rest }) => {
    const defaultVariant = "primary";
    const defaultText = "white";


    return (
        <StyledButton variant={variant || defaultVariant} text={text || defaultText} {...rest}>
            <div>
                <div>{value}</div>

                {loading && (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-t-[3px] border-b-[3px] border-custom-3 " ></div>
                    </div>
                )}
            </div>
        </StyledButton>
    );
}


export default Button;
