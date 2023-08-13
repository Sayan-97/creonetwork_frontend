import React, { useState } from 'react'
import { Button } from '../../../components'
import SectionHeader from './SectionHeader'
import { exploreProjects } from '../../../constants'

const ExploreProjects = () => {

    const [active, setActive] = useState('DEVELOPERS')

    const projects = exploreProjects.filter((item) => item.category === active)

    return (
        <section className='space-y-8'>
            <SectionHeader
                head={`explore projects`}
                title={<>Meet Our Game {active === 'DEVELOPERS' ? 'Dev' : 'Design'}<br /> Experts!</>}
                className={`justify-items-center text-center`}
            />
            <div className='flex items-center justify-center gap-8'>
                {['DEVELOPERS', 'DESIGNERS'].map((item) => (
                    <Button
                        content={item}
                        task={() => setActive(item)}
                        className={`w-40 py-2.5 ${active === item ? '' : 'bg-primaryBg'}`}
                    />
                ))}
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {projects.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col`}
                    >
                        <img
                            src={item.imgSrc}
                            alt="img"
                            className='w-full h-[17.1875rem] object-cover rounded-t-customLarge'
                        />
                        <div className='flex-grow flex flex-col justify-between gap-4 px-4 py-6 bg-accentColor rounded-b-customLarge'>
                            <h3 className='text-3xl font-bold'>{item.title}</h3>
                            <p className='text-lg text-textGrayColor flex-grow'>{item.des}</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img
                                        src={item.avatar}
                                        alt="img"
                                        className='w-8 h-8 rounded-full object-cover'
                                    />
                                    <p className='text-[1.2rem] font-bold'>{item.name}</p>
                                </div>
                                <p className='text-[1.2rem] font-medium'>{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ExploreProjects