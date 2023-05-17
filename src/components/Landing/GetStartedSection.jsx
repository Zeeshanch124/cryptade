import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import Headings from '../Common/Headings';
import User_Frame from '../../images/user_frame.png';
import Bank_Frame from '../../images/bank_frame.png';
import Trade_Frame from '../../images/trading_frame.png';

const Card_Wrapper = styled.div`
   {${tw`flex justify-center`}};
   h1 {${tw`text-2xl text-white font-bold text-center`}};
   p {${tw`text-lg text-[#E0E0E0] font-normal text-center w-56 mt-4`}}`;

const GetStartedSection = () => {
    return (
        <section className='h-screen mb-12'>

            <div>
                <div className='text-4xl font-bold text-center'> <span> Get </span> <span className='text-primary'> Started </span> </div>
                <div className='text-center'> <Headings><h5>Create Your Account and Start Trading</h5></Headings> </div>
            </div>


            <Card_Wrapper>
                <div className='flex justify-between mt-10'>

                    <div>
                        <div className='flex justify-center'><img src={User_Frame} alt='user' /></div>
                        <h1 >Create Your Account</h1>
                        <p>Create your account and register yourself to get the card</p>

                    </div>

                    <div>
                        <div className='flex justify-center'><img src={Bank_Frame} alt='bank' /></div>
                        <h1 >Link Your Bank Account</h1>
                        <p>Verify your bank account to start complete your registration</p>

                    </div>

                    <div>
                        <div className='flex justify-center'><img src={Trade_Frame} alt='trade' /></div>
                        <h1 >Start Trading</h1>
                        <p>Once you have completed the registration, Start Trading.</p>

                    </div>


                </div>

            </Card_Wrapper>
        </section>
    )
}

export default GetStartedSection;