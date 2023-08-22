import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import { IoChevronDown } from 'react-icons/io5'

const FAQ = () => {

    const faqs = [
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
        {
            qus: 'What is Creo Network?',
            and: 'Lorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestieLorem ipsum dolor sit amet consectetur.Est sed nunc gravida nisl tellus vulputate molestie'
        },
    ]

    const [faqStates, setFaqStates] = useState(new Array(faqs.length).fill(false));

    const toggleOpen = (index) => {
        const updatedStates = [...faqStates];
        updatedStates[index] = !updatedStates[index];
        setFaqStates(updatedStates);
    };

    return (
        <section className='space-y-8'>
            <SectionHeader 
                title={`Frequently Asked Qustions`}
                className={`justify-items-center`}
            />
            <div className='relative grid lg:grid-cols-2 gap-6'>
                {faqs.map((item, index) => (
                    <div className='flex flex-col'>
                        <div
                            key={index}
                            onClick={() => toggleOpen(index)}
                            className={`bg-accentColor p-6 flex items-center justify-between text-lg rounded-customSmall hover:scale-105 cursor-pointer`}
                        >
                            {item.qus} <IoChevronDown className={`${faqStates[index] && ('rotate-180')}`} />
                        </div>
                        <div className={`px-4 py-2 ${!faqStates[index] ? 'scale-y-0 opacity-0 absolute' : 'relative'}`}>
                            <p className='text-lg'>{item.and}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ