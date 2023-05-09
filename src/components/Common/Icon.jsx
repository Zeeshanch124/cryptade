import React from 'react'

const Icon = ({ name }) => {
    return (
        <div>
            {name == 'logo' && (
                <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7997 0L0.599385 13.3966L3.8503 16.6958L0 20.6034L13.2003 34L26.4006 20.6034L23.1497 17.3041L27 13.3966L13.7997 0ZM23.1497 17.3041L13.2003 7.20681L3.8503 16.6958L13.7997 26.7932L23.1497 17.3041Z" fill="#00CB51" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7997 0L0.599385 13.3966L3.8503 16.6958L0 20.6034L13.2003 34L26.4006 20.6034L23.1497 17.3041L27 13.3966L13.7997 0ZM23.1497 17.3041L13.2003 7.20681L3.8503 16.6958L13.7997 26.7932L23.1497 17.3041Z" fill="#065A89" fill-opacity="0.4" />
                </svg>
            )}


        </div>
    )
}

export default Icon;
