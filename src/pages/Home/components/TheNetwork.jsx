import React from 'react'
import SectionHeader from './SectionHeader'
import { ourTeamMembers } from '../../../constants'

const TheNetwork = () => {

    return (
        <section className='bg-accentColor rounded-customLarge space-y-12 py-16 my-16'>
            <SectionHeader
                head={`the network`}
                title={
                    <>
                        Meet Our Team
                    </>
                }
                className={`justify-items-center text-center`}
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-32'>
                {ourTeamMembers.map((item, index) => (
                    <div key={index} className={`flex flex-col items-center gap-2`}>
                        <div className='p-[1.6px] bg-primaryGradient rounded-full'>
                            <img src={item.imgSrc} alt="img" className='w-28 h-28 rounded-full object-cover' />
                        </div>
                        <h4 className='text-2xl font-bold'>{item.name}</h4>
                        <p className='text-[1.2rem] font-medium'>{item.des}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TheNetwork