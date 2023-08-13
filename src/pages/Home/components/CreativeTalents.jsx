import React from 'react'
import SectionHeader from './SectionHeader';
import { HiOutlineThumbUp, HiOutlineEye } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay, Navigation } from 'swiper/modules';

import { creativeTalents } from '../../../constants';

const CreativeTalents = () => {

    return (
        <div id='findtalent' className='py-12 space-y-8'>
            <div className='container'>
                <SectionHeader
                    head={`HIRE CREATIVE TALENTS`}
                    title={
                        <>
                            Meet our Creative Designers
                        </>
                    }
                    className={`justify-items-center text-center`}
                />
            </div>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                // centeredSlides={true}
                breakpoints={{
                    380: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                navigation={{ nextEl: "#swiper1-next", prevEl: "#swiper1-prev" }}
                pagination={{ clickable: true }}
            >
                {
                    creativeTalents.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-64 sm:h-72 bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${item.projectImg})` }}>
                                <div className='absolute bottom-0 w-full bg-white/20 backdrop-blur-lg drop-shadow-lg p-4 pt-8 space-y-1'>
                                    {/* avatar image */}
                                    <div className='absolute -top-[30%] inline-block w-16 h-16 p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500'>
                                        <img src={item.avatar} alt="img" className='rounded-full object-cover w-full h-full' />
                                    </div>

                                    {/* info with name */}
                                    <h3 className='text-white text-lg sm:text-xl font-bold'>{item.name}</h3>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-white'>{item.des}</p>

                                        <div className='flex items-center space-x-4 text-white text-sm'>
                                            <div className='flex items-center space-x-2'>
                                                <HiOutlineThumbUp className='text-lg' />
                                                <p>{item.likes}</p>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <HiOutlineEye className='text-lg' />
                                                <p>{item.views}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default CreativeTalents