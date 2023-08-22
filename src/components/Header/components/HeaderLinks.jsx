import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const HeaderLinks = ({ userType }) => {

    const publicLinks = [
        { label: 'Find Work', link: '#findwork' },
        { label: 'Find Talent', link: '#findtalent' },
        { label: 'Why Creo?', link: '#whycreo' },
    ]

    const freelancerLinks = [
        { 
            label: 'Find Work',
            dropdown: [
                { label: 'My Proposals', link: '' },
                { label: 'Profile', link: '' },
            ]
        },
        { 
            label: 'My Jobs',
            dropdown: [
                { label: 'My Jobs', link: '' },
                { label: 'All Contracts', link: '' },
                { label: 'Work Diary', link: '' },
            ]
        },
        { 
            label: 'More',
            dropdown: [
                { label: 'Overview', link: '' },
                { label: 'Reports', link: '' },
                { label: 'Connect History', link: '' },
                { label: 'Transaction History', link: '' },
            ]
        },
    ]

    const clientLinks = [
        {
            label: 'Find Work',
            dropdown: [
                { label: 'My Proposals', link: '' },
                { label: 'Profile', link: '' },
            ]
        },
        {
            label: 'My Jobs',
            dropdown: [
                { label: 'My Jobs', link: '' },
                { label: 'All Contracts', link: '' },
                { label: 'Work Diary', link: '' },
            ]
        },
        {
            label: 'More',
            dropdown: [
                { label: 'Overview', link: '' },
                { label: 'Reports', link: '' },
                { label: 'Connect History', link: '' },
                { label: 'Transaction History', link: '' },
            ]
        },
    ]

    const [ openIndex, setOpenIndex ] = useState(null)

    const handleMouseEnter = (index) => {
        setOpenIndex(index)
    }

    const handleMouseLeave = () => {
        setOpenIndex(null)
    }

    const navLinks = userType === 'freelancer' ? freelancerLinks : userType === 'client' ? clientLinks : publicLinks

    return (
        <ul className='flex max-lg:flex-col items-center gap-8'>
            {navLinks.map((item, index) => (
                item.dropdown ? 
                    <li
                        key={index}
                        className={`text-lg font-customMedium`}
                    >
                        <div
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className='relative flex items-center gap-1 cursor-pointer'
                        >
                            {item.label} <BiChevronDown className={`text-xl ${openIndex === index && ('rotate-180')}`}/>
                            {openIndex === index && (
                                <div className={`absolute  w-[240px] top-[100%] pt-2`}>
                                    <div className='bg-[#272727] w-full p-4 rounded-customLarge grid gap-4'>
                                        {item.dropdown.map((item, index) => (
                                            <a 
                                                key={index}
                                                href={item.link}
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                :
                    <li
                        key={index}
                        className={`text-lg font-customMedium`}
                    >
                        <a
                            href={item.link}
                            className='hover:text-secondaryColor'
                        >
                            {item.label}
                        </a>
                    </li>
            ))}
        </ul>
    )
}

export default HeaderLinks