import React from 'react'
import { Button } from '../../../components'
import { HeroSectionImg } from '../../../assets/images'

const Hero = () => {
    return (
        <section className='relative flex max-lg:flex-col max-lg:space-y-8 items-center justify-between'>
            <div
                className='absolute bg-primaryColor opacity-50 w-[35rem] h-[35rem] rounded-full -left-[40%] -top-[40%]'
                style={{ filter: 'blur(267px)' }}
            ></div>
            <div className='lg:w-3/4 lg:mr-8 space-y-6'>
                <h1 className='text-6xl font-customBold leading-tight'>AI Powered Marketplace<br /> for Gamers.</h1>
                <p className='lg:w-[90%] xl:w-[70%] text-lg'>Welcome to the future of game development with our cutting-edge gamelancer marketplace that leverages the power of artificial intelligence (AI) and blockchain technology! Our platform brings together talented game developers from around the world, providing a seamless and secure environment for them to connect, collaborate, and create the next generation of games.</p>
                <div className='flex max-md:flex-col gap-6'>
                    <div className='md:w-[40%] bg-primaryGradient p-[1.6px] xl:p-[1px] rounded-customSmall'>
                        <input 
                            type="text"
                            placeholder='Enter your email'
                            className='bg-primaryBg rounded-customSmall w-full h-full px-4 text-white'
                        />
                    </div>
                    <Button 
                        content={`Join Waitlist`}
                        className={`px-6 py-2.5`}
                    />
                </div>
            </div>
            <div className='relative'>
                <div
                    className='absolute  bg-primaryGradient opacity-50 rounded-full w-[80%] h-[80%] -bottom-6 -right-24'
                    style={{ filter: 'blur(162px)' }}
                >
                </div>
                <img src={HeroSectionImg} alt="img" className='w-full relative'/>
            </div>
        </section>
    )
}

export default Hero