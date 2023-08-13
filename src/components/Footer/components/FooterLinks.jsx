import React from 'react'

const FooterLinks = () => {
    const publicLinks = [
        { label: 'Find Work', link: '#findwork' },
        { label: 'Find Talent', link: '#findtalent' },
        { label: 'Why Creo?', link: '#whycreo' },
    ]

    return (
        <ul className='flex items-center gap-8'>
            {publicLinks.map((item, index) => (
                <li
                    key={index}
                    className={`text-lg font-customMedium hover:text-secondaryColor`}
                >
                    <a href={item.link}>{item.label}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks