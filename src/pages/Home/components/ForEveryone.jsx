import React from 'react'
import SectionHeader from './SectionHeader'
import {
    ControllerImg,
    SecurePaymentsImg,
    AIBg,
    LearnBg
} from '../../../assets/images'

const ForEveryone = () => {
    return (
        <section id='whycreo' className='space-y-8'>
            <SectionHeader
                head={`for everyone`}
                title={
                    <>
                        Why Choose Creo
                    </>
                }
                className={`justify-items-center text-center`}
            />
            <p className='lg:w-[80%] mx-auto text-lg text-center'>If you're looking for a trustworthy and efficient freelance marketplace, Creo Network is the platform for you. With our use of blockchain technology and AI algorithms, we ensure secure transactions and the perfect match for freelancers and employers.</p>
            <div className='w-full grid grid-cols-10 grid-rows-2 gap-4'>
                <div
                    className='col-span-10 lg:col-span-4 row-span-2 bg-accentColor rounded-customLarge p-8 space-y-16 overflow-hidden'
                >
                    <p className='text-xl font-customMedium uppercase bg-primaryGradient inline-flex text-transparent bg-clip-text'>Secure payments</p>
                    <div className='relative z-0'>
                        <div
                            className='w-[50%] h-[50%] absolute -z-20'
                            style={{
                                background: 'rgba(51, 94, 187, 0.70)',
                                filter: 'blur(87px)'
                            }}
                        ></div>
                        <div
                            className='w-[50%] h-[50%] absolute bottom-0 right-0 -z-20 rounded-[278px]'
                            style={{
                                background: 'rgba(62, 210, 248, 0.33)',
                                filter: 'blur(87px)'
                            }}
                        ></div>
                        <img src={SecurePaymentsImg} alt="img" className='w-[80%]' />
                    </div>
                    <h2 className='text-4xl leading-snug font-bold'>Secured by Blockchain Technology for Seamless Payments.</h2>
                </div>
                <div
                    className='relative col-span-10 lg:col-span-6 row-span-1 bg-accentColor rounded-customLarge p-8 overflow-hidden max-md:space-y-4'
                >
                    <div
                        className='absolute w-[45%] h-[45%] top-0 right-[10%]'
                        style={{
                            background: 'rgba(197, 27, 206, 0.43)',
                            filter: 'blur(117px)'
                        }}
                    ></div>
                    <div
                        className='absolute w-[45%] h-[45%] bottom-0 right-0'
                        style={{
                            background: 'rgba(62, 210, 248, 0.33)',
                            filter: 'blur(107px)'
                        }}
                    ></div>
                    <p className='text-xl font-customMedium uppercase bg-primaryGradient inline-flex text-transparent bg-clip-text'>EXLUSIVELY FOR GAMERS</p>
                    <div className='flex max-md:flex-col items-center justify-between'>
                        <h2 className='text-[2rem] font-bold leading-snug'>Worlds First Web 3 Marketplace for Gamers.</h2>
                        <img src={ControllerImg} alt="img" className='md:w-[40%]' />
                    </div>
                </div>
                <div
                    className='relative col-span-10 md:col-span-5 lg:col-span-3 row-span-1 bg-accentColor rounded-customLarge p-4 space-y-4 overflow-hidden max-lg:pb-40'
                >
                    <img src={AIBg} alt="img" className='absolute bottom-0 left-0 w-full' />
                    <p className='text-xl font-customMedium uppercase bg-primaryGradient inline-flex text-transparent bg-clip-text'>ai powered</p>
                    <h2 className='relative text-[2rem] font-bold leading-snug'>Future Proof With AI Technology.</h2>
                </div>
                <div
                    className='relative col-span-10 md:col-span-5 lg:col-span-3 row-span-1 bg-accentColor rounded-customLarge p-4 space-y-4 max-lg:pb-40'
                >
                    <img src={LearnBg} alt="img" className='absolute bottom-0 left-0 w-full' />
                    <p className='text-xl font-customMedium uppercase bg-primaryGradient inline-flex text-transparent bg-clip-text'>learn</p>
                    <h2 className='relative text-[2rem] font-bold leading-snug'>Lean and Grow with Fresh Talents.</h2>
                </div>
            </div>
        </section>
    )
}

export default ForEveryone