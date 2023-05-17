import React from 'react';
import { FooterWrapper } from '../Common/FooterWrapper';
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';


const Footer = () => {
    return (
        <FooterWrapper>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <NavLink to={""} className="flex items-center">
                            <Icon name={"logo"} />
                            <h1 className="ml-5">Cryptade</h1>
                        </NavLink>
                        <p className='mt-4 w-3/4'>Live In Your Cryptocurrency, Play In Ours.</p>
                        <div className='flex justify-between w-3/4 mt-4'>
                            <Icon name={"fb_logo"} />
                            <Icon name={"ln_logo"} />
                            <Icon name={"tw_logo"} />


                        </div>


                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* col 1 */}
                        <div>
                            <h2>Quick Links</h2>
                            <ul>
                                <li>
                                    <NavLink to={""} className="hover:underline">Buy Crypto</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Trend</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Trade</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">NFT</NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* col 2 */}
                        <div>
                            <h2> Company </h2>
                            <ul>
                                <li>
                                    <NavLink to={""} className="hover:underline ">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Affiliates</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Blog</NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* col 3 */}
                        <div>
                            <h2> Support </h2>
                            <ul>
                                <li>
                                    <NavLink to={""} className="hover:underline">Help Center</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Contact Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Account Verification</NavLink>
                                </li>
                                <li>
                                    <NavLink to={""} className="hover:underline">Payment Method</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-[#4F4F4F] sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span >© 2023 <NavLink to="" className="hover:underline">Cryptade</NavLink>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <NavLink to={""} >
                            <span>Terms of Privacy</span>
                        </NavLink>


                    </div>
                </div>
            </div>
        </FooterWrapper>

    )
}

export default Footer;
