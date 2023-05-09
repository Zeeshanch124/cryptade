import React from 'react'
import Icon from '../components/Common/Icon';
import Iphone_Image from '../images/iphone.png';
import Paragraph from '../components/Common/Paragraph';
import Headings_Wrapper from '../components/Common/Headings';
import Button from '../components/Common/Button';
import Footer from '../components/Layout/Footer';


const Landing = () => {
    return (
        <>
            <section className='flex mt-14'>
                <div className='flex-1 mt-28'>
                    <Headings_Wrapper>
                        <h1>Live In Your Cryptocurrency, Play In Ours.</h1>
                    </Headings_Wrapper>

                    <div className='w-3/4 mt-12'>
                        <Paragraph text={'Build your crypto portfolio with us. We are the most trusted and reliable crypto trading platform out there.'} />
                    </div>

                    <div className='mt-14'>
                        <Button width={'191px'} height={'66px'} variant={'primary-black'} value={'Get Started'} />
                    </div>
                </div>

                <div className='flex-1 flex justify-end'>
                    <img src={Iphone_Image} alt='iphone_image' />
                </div>



            </section>

            <Footer />
        </>
    )
}

export default Landing;