import React from 'react'
import { Link } from 'react-router-dom'
import { CreoNetworkLogo } from '../../assets/images'
import { FooterLinks, FooterSocials } from './components'

const Footer = () => {
    return (
        <footer className='container mt-4 mb-1'>
            <div className='flex max-lg:flex-col items-center gap-8 lg:gap-16 border-y border-divideColor py-4'>
                <Link to={`/`}>
                    <img
                        src={CreoNetworkLogo}
                        alt="img"
                        className='w-28'
                    />
                </Link>
                <div className='flex-grow flex max-lg:flex-col max-lg:gap-8 items-center justify-between'>
                    <FooterLinks />
                    <FooterSocials />
                </div>
            </div>
            <p className='text-textGrayColor'>2023 Creo Network all rights reserved.</p>
        </footer>
    )
}

export default Footer