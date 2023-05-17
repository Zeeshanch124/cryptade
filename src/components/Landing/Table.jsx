import React, { useState } from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import Icon from '../Common/Icon';
import Button from '../Common/Button';

const Table_Wrapper = styled.div`
section {${tw` h-screen`}};  
h1 {${tw` text-[54px] font-bold  text-center `}}; 
  h3 {${tw`text-lg font-semibold text-center`}};
  th {${tw`h-12 text-left text-base font-medium`}};
  tr {${tw`h-12 `}};
  
  `;


const Table = ({ data }) => {
    const [isActive, setIsActive] = useState(0);
    const [istimeFilter, setIstimeFilter] = useState(0);

    const filters = [{ value: 'All Assets', action: handleClick },
    { value: 'Tradable', action: handleClick },
    { value: 'Gainers', action: handleClick },
    { value: 'Losers', action: handleClick }];

    const timeFilter = [{ value: '1H', action: handleClickTimeFilter },
    { value: '1D', action: handleClickTimeFilter },
    { value: '1W', action: handleClickTimeFilter },
    { value: '1M', action: handleClickTimeFilter },
    { value: '1Y', action: handleClickTimeFilter }];

    function handleClick(index) {
        console.log(index + " clicked");
        setIsActive(index);
    }

    function handleClickTimeFilter(index) {
        console.log(index + " clicked");
        setIstimeFilter(index);
    }

    function handleClickRow(item) {
        // console.log("row Values: ", item);
        alert(JSON.stringify(item))
    }

    return (
        <Table_Wrapper>
            <section>
                <h1>Current Trends</h1>
                <h3>Have a look at current market trends before deciding to build your crypto portfolio</h3>

                <div className='flex mt-24 '>
                    <div className='flex flex-auto' >
                        {filters.map((filter, index) => {
                            return (
                                <button key={index} className={isActive == index ? `bg-[#044049] mr-6 text-primary_50 px-5 py-2.5 rounded-3xl w-28` : 'w-28 mr-6'} onClick={() => filter.action(index)}>{filter.value}</button>
                            )
                        })}
                    </div>

                    <div className='flex flex-auto justify-end' >
                        {timeFilter.map((filter, index) => {
                            return (
                                <button key={index} className={istimeFilter == index ? `text-primary ml-4 w-12` : 'ml-4 w-12'} onClick={() => filter.action(index)}>{filter.value}</button>
                            )
                        })}
                    </div>

                </div>

                <table className='w-full mt-12'>

                    <thead className=''>
                        <tr>
                            <th >Name</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Price Chart</th>
                            <th>Supply</th>
                            <th>Trade</th>


                        </tr>
                    </thead>
                    <tbody className='mt-12 border-spacing-y-14'>

                        {data ? data.map((item) => {
                            // { console.log("item.change.split()[0]: ", ) }
                            return (
                                <tr>

                                    <td>
                                        <div className='flex'>
                                            <Icon name={'bitcoin'} />
                                            <span className='ml-4'>{item.name}</span>
                                            <span className=' font-normal ml-6'>BTC</span>
                                        </div>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.change}</td>
                                    <td><span className={parseInt(item.change) <= 0 ? `text-red-500` : `text-green-500`}> <Icon name={'graph'} /> </span></td>
                                    <td>{item.supply}</td>
                                    <td><Button value={'Trade'} variant={'primary-black'} onClick={() => handleClickRow(item)} /></td>
                                </tr>
                            )
                        }) : 'loading...'}



                    </tbody>
                </table>

            </section>

        </Table_Wrapper>
    )
}

export default Table;
