import React from 'react'
import { Link } from 'react-router-dom'
import {
    OnboardingClientImg,
    OnboardingFreelancerImg
} from '../assets/images'

const OnBoardingPage = () => {

    const onboarding = [
        {
            img: OnboardingFreelancerImg,
            title: 'I am a Gamelancer looking for<br /> Gaming work'
        },
        {
            img: OnboardingClientImg,
            title: 'I’m a Client looking to Hire Talents'
        },
    ]

    return (
        <div className='container grid justify-items-center text-center gap-8 py-6'>
            <h1 className='text-4xl font-customBold'>Join as  a  <span className='bg-primaryGradient text-transparent bg-clip-text'>Client</span> or a <span className='bg-primaryGradient text-transparent bg-clip-text'>Freelancer</span></h1>
            <div className='grid md:grid-cols-2 gap-8'>
                {onboarding.map((item, index) => (
                    <Link
                        to={`${index === 0 ? '/onboarding/freelancer' : '/onboarding/client'}`}
                        key={index}
                    >
                        <div className={`relative bg-accentColor px-16 py-8 grid justify-items-center gap-8 rounded-customLarge h-full hover:scale-105 overflow-hidden transition-all ease-in-out`}>
                            <img
                                src={item.img}
                                alt="img"
                                className='w-64 relative z-10'
                            />
                            <h3 className='text-2xl font-customSemibold relative z-10' dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                            {index === 0 ? (
                                <div
                                    className='absolute inset-28 rounded-full opacity-50 mix-blend-screen'
                                    style={{
                                        background: 'linear-gradient(134deg, #15DBFF 0%, #A514FC 100%)',
                                        filter: 'blur(166.1468963623047px)'
                                    }}
                                ></div>
                            ) : (
                                <div
                                    className='absolute inset-28 rounded-full opacity-50 mix-blend-screen'
                                    style={{
                                        background: 'linear-gradient(272deg, #4031F5 0%, #C053B0 100%)',
                                        filter: 'blur(166.1468963623047px)'
                                    }}
                                ></div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
            <p className='text-xl font-customMedium'>Create Account</p>
            <p className='text-xl font-customMedium'>Already have a account? <Link to={`/`} className={`font-customSemibold`}>Log In</Link></p>
        </div>
    )
}

export default OnBoardingPage