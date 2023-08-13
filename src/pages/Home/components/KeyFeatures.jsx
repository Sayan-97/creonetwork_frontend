import React from 'react'
import {
    KeyFeaturesImg1,
    KeyFeaturesImg2,
    KeyFeaturesImg3
} from '../../../assets/images'
import SectionHeader from './SectionHeader'

const KeyFeatures = () => {

    const features = [
        {
            imgSrc: KeyFeaturesImg1,
            head: 'secured',
            title: 'Backed up by<br /> Blockchain.',
            des: 'Blockchain technology, known for its transparency, security, and decentralized nature, is revolutionizing industries by providing unprecedented opportunities for innovation, trust, and efficiency, paving the way for a more decentralized and interconnected future.'
        },
        {
            imgSrc: KeyFeaturesImg2,
            head: 'smart',
            title: 'Powered by AI<br /> Technology.',
            des: 'Creo Network, powered by advanced artificial intelligence (AI) technology, empowers users with intelligent algorithms, data-driven insights, and automated processes, enabling them to unlock new levels of productivity, creativity, and success in their endeavors.'
        },
        {
            imgSrc: KeyFeaturesImg3,
            head: 'for gamers',
            title: 'Gamified<br /> Experience.',
            des: 'Creo Network offers a gamified experience, engaging users with interactive challenges, rewards, and achievements, creating an immersive and enjoyable environment that motivates and inspires them to excel in their pursuits.'
        },
    ]

    return (
        <section className='space-y-8'>
            <SectionHeader
                head={`key features`}
                title={
                    <>
                        Meet the Most Powerful<br /> Web 3 Marketplace
                    </>
                }
                className={`justify-items-center text-center`}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full h-full flex flex-col items-center bg-accentColor rounded-customLarge overflow-hidden`}
                    >
                        <div className='w-full h-[340px] flex items-center justify-center relative z-0'>
                            <img
                                src={item.imgSrc}
                                alt="img"
                                className='w-[80%]'
                            />
                            {index === 0 ? (
                                <>
                                    <div
                                        className='absolute w-[300px] h-[300px] -z-10 -left-4 top-0'
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #174AFF 100%)',
                                            filter: 'blur(100px)'
                                        }}
                                    ></div>
                                    <div
                                        className='absolute w-[300px] h-[300px] rounded-[332px] -z-10 bottom-8 right-12'
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(0, 194, 255, 0.00) 0%, #FF29C3 100%)',
                                            opacity: '0.699999988079071',
                                            filter: 'blur(100px)'
                                        }}
                                    ></div>
                                </>
                            ) : index === 1 ? (
                                <>
                                    <div
                                        className='absolute w-[300px] h-[300px] -z-10 -left-12 -top-28'
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #6A359C 100%)',
                                            filter: 'blur(100px)'
                                        }}
                                    ></div>
                                    <div
                                        className='absolute w-[300px] h-[300px] rounded-[332px] -z-10 -bottom-28 -right-12'
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(0, 232, 255, 0.60) 0%, rgba(255, 41, 195, 0.00) 100%)',
                                            opacity: '0.699999988079071',
                                            filter: 'blur(100px)'
                                        }}
                                    ></div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className='absolute w-[300px] h-[300px] -z-10 -left-12 -top-28'
                                        style={{
                                            background: 'linear-gradient(180deg, rgba(24, 75, 255, 0.00) 0%, #CEAD32 100%)',
                                            filter: 'blur(100px)'
                                        }}
                                    ></div>
                                    <div
                                        className='absolute w-[300px] h-[300px] rounded-[332px] -z-10 -bottom-28 -right-12'
                                        style={{
                                            background: 'linear-gradient(180deg, #A58BC1 0%, rgba(255, 41, 195, 0.00) 100%)',
                                            opacity: '0.699999988079071',
                                            filter: 'blur(100px)'
                                        }}
                                    ></div>
                                </>
                            )}
                        </div>
                        <div className='p-6 space-y-4'>
                            <p className='text-[1.125rem] font-medium text-textGrayColor uppercase'>{item.head}</p>
                            <h3 className='text-4xl font-bold leading-tight' dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                            <p className='text-textGrayColor'>{item.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default KeyFeatures