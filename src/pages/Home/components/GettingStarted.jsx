import React from 'react'
import SectionHeader from './SectionHeader'
import { BsArrowRight } from 'react-icons/bs'
import {
    Card1Img,
    Card2Img,
    Card3Img
} from '../../../assets/images'

const GettingStarted = () => {

    const steps = [
        {
            head: 'connect',
            title: 'Connect Wallet',
            des: 'Connecting your wallet on Creo Network is quick and easy. Simply sign up for an account as a client or freelancer, then navigate to your profile settings where you\'ll find the option to connect your wallet.',
            link: '',
            bgImg: Card1Img
        },
        {
            head: 'create',
            title: 'Create Your Profile',
            des: 'Whether you\'re a freelancer or client, simply sign up for an account and navigate to your profile settings, add your details and portfolio to showcase your skills and attract potential clients or freelancers.Perfect Jobs are Waiting for you.',
            link: '',
            bgImg: Card2Img
        },
        {
            head: 'earn',
            title: 'Go to Work',
            des: 'Getting to work on Creo Network is super easy. As a freelancer, browse our job listings to find opportunities. As a client, post your job listing and the skills you\'re looking for.That\'s all it takes.',
            link: '',
            bgImg: Card3Img
        },
    ]

    return (
        <section className='space-y-8'>
            <SectionHeader
                head={`getting started`}
                title={
                    <>
                        How it Works
                    </>
                }
                className={`justify-items-center text-center`}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className={`relative bg-accentColor rounded-customLarge px-6 py-10 flex flex-col items-start z-10 overflow-hidden`}
                    >
                        {index === 0 ? (
                            <>
                                <div
                                    className='w-[50%] h-[50%] rounded-full absolute -z-10 top-[30%] left-[10%]'
                                    style={{
                                        background: 'linear-gradient(180deg, #173B80 0%, #11573E 100%)',
                                        filter: 'blur(75.46159362792969px)'
                                    }}
                                ></div>
                                <div
                                    className='w-[40%] h-[40%] absolute -z-10 bottom-[15%] right-0'
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(24, 255, 158, 0.00) 0%, #17FFE3 100%)',
                                        filter: 'blur(87.70694732666016px)'
                                    }}
                                ></div>
                            </>
                        ) : index === 1 ? (
                            <>
                                <div
                                    className='w-[50%] h-[50%] absolute top-[20%] left-[20%] -z-10'
                                    style={{
                                        background: 'rgba(51, 94, 187, 0.39)',
                                        filter: 'blur(87px)'
                                    }}
                                ></div>
                                <div
                                    className='w-[40%] h-[40%] absolute bottom-0 right-0 -z-10'
                                    style={{
                                        background: 'rgba(62, 210, 248, 0.33)',
                                        filter: 'blur(87px)'
                                    }}
                                ></div>
                            </>
                        ) : (
                            <>
                                <div
                                    className='w-[35%] h-[35%] absolute bottom-[20%] right-[20%] -z-10'
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF29C3 100%)',
                                        filter: 'blur(63.111671447753906px)'
                                    }}
                                ></div>
                            </>
                        )}
                        <img src={item.bgImg} alt="img" className='absolute bottom-0 left-0 w-full -z-20' />
                        <p className='mb-28 text-lg font-medium uppercase bg-primaryGradient text-transparent bg-clip-text'>{item.head}</p>
                        <div className='flex-grow grid gap-6'>
                            <h3 className='text-[2rem] font-bold'>{item.title}</h3>
                            <p className='text-[1.125rem]'>{item.des}</p>
                            <div className='self-end flex items-center gap-4'>
                                <p className='text-[1.4rem] font-semibold'>Get Started</p>
                                <BsArrowRight className='text-[1.4rem]' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GettingStarted