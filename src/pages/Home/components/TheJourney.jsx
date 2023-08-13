import React from 'react'
import SectionHeader from './SectionHeader'
import { RoadMapBackground } from '../../../assets/images'
import { RoadMapArrows } from '../../../assets/svgs'

const TheJourney = () => {

    const roadmap = [
        {
            listItems: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie"
            ]
        },
        {
            listItems: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Est sed nunc gravida nisl tellus vulputate molestie",
            ]
        },
        {
            listItems: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Lorem ipsum dolor sit amet consectetur.",
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
            ]
        },
        {
            listItems: [
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Lorem ipsum dolor sit amet consectetur.",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Est sed nunc gravida nisl tellus vulputate molestie",
                "Est sed nunc gravida nisl tellus vulputate molestie",
            ]
        },
    ]

    return (
        <div className='py-14 space-y-12'>
            <div className='container'>
                <SectionHeader
                    head={`the journey`}
                    title={`Our Roadmap`}
                    className={`justify-items-center`}
                />
            </div>
            <div className='relative'>
                <img 
                    src={RoadMapBackground} 
                    alt="img"
                    className='absolute w-full h-full object-cover'
                />
                <div 
                    className='absolute w-[20%] h-[20%] rounded-full top-0 left-0'
                    style={{
                        background: 'linear-gradient(180deg, #173B80 0%, #11573E 100%)',
                        filter: 'blur(100px)'
                    }}
                ></div>
                <div
                    className='absolute w-[25%] h-[15%] top-14 left-20'
                    style={{
                        background: 'linear-gradient(180deg, rgba(24, 255, 158, 0.00) 0%, #17FFE3 100%)',
                        filter: 'blur(116.22727966308594px)'
                    }}
                ></div>
                <div
                    className='absolute w-[15%] h-[35%] bottom-52 -right-[3%]'
                    style={{
                        background: 'linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #174AFF 100%)',
                        filter: 'blur(114.8423080444336px)'
                    }}
                ></div>
                <div
                    className='absolute w-[20%] h-[20%] bottom-64 -right-[3%] rounded-full'
                    style={{
                        background: 'linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF29C3 100%)',
                        filter: 'blur(114.8423080444336px)'
                    }}
                ></div>
                <div
                    className='absolute w-40 h-40 bottom-48 -right-[3%] rounded-full'
                    style={{
                        background: 'linear-gradient(113deg, #DECAFF 0%, #691EE2 100%)',
                        boxShadow: '-35.035789489746094px -50.05112838745117px 80.0999984741211px 0px rgba(172, 60, 225, 0.76) inset, 0px 20.020450592041016px 40px 0px rgba(194, 255, 255, 0.25) inset, 0px 0px 24px 0px rgba(255, 255, 255, 0.26) inset'
                    }}
                ></div>
                <div className={`container lg:w-2/3 lg:mx-auto relative grid max-lg:space-y-4`}>
                    <div className='absolute w-1 h-full bg-primaryGradient lg:left-[50%] lg:translate-x-[-50%]'></div>
                    {roadmap.map((item, index) => (
                        <div key={index} className={`lg:w-[50%] flex flex-col-reverse md:flex-row-reverse md:items-center lg:flex-row ${index % 2 === 0 ? '' : 'lg:justify-self-end lg:justify-end'} relative`}>
                            <div className='text-lg p-8 w-5/6 rounded-customLarge bg-accentColor max-lg:ml-8'>
                                {item.listItems.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                            <div className={`relative lg:absolute lg:top-[50%] lg:-translate-y-[50%] ${index % 2 === 0 ? 'lg:left-[100%]' : 'lg:right-[100%] transform lg:scale-x-[-1]'} w-2/4 `}>
                                <div className='absolute bottom-[100%] translate-y-[50%] right-[100%] translate-x-[50%] bg-white rounded-full p-2.5 blur-[5px]'></div>
                                <div className='absolute bottom-[100%] translate-y-[50%] right-[100%] translate-x-[50%] bg-white rounded-full p-1'>
                                    <div className='bg-primaryGradient rounded-full p-1.5'></div>
                                </div>
                                <img
                                    src={RoadMapArrows}
                                    alt="img"
                                    className={`w-full`}
                                />
                                <p className={`text-2xl absolute right-4 md:right-10 top-[50%] -translate-y-[50%] ${index % 2 === 0 ? '' : 'transform lg:scale-x-[-1]'}`}>Phase {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TheJourney