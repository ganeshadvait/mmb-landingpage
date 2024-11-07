import React, { useState } from "react";

const Faqs = () => {
    const faqData = [
        {
            question: 'What is the procedure to book a bike for shipping?',
            answer: 'The process involves taking the bike, importing it to the train, and delivering it to the customer.'
        },
        {
            question: 'How long does the shipping process take?',
            answer: 'The shipping process usually takes between 3 to 5 days, depending on the location.'
        },
        {
            question: 'What is the procedure to book a bike for shipping?',
            answer: 'The process involves taking the bike, importing it to the train, and delivering it to the customer.'
        },
        {
            question: 'How long does the shipping process take?',
            answer: 'The shipping process usually takes between 3 to 5 days, depending on the location.'
        },
        {
            question: 'What is the procedure to book a bike for shipping?',
            answer: 'The process involves taking the bike, importing it to the train, and delivering it to the customer.'
        },
        {
            question: 'How long does the shipping process take?',
            answer: 'The shipping process usually takes between 3 to 5 days, depending on the location.'
        },
        {
            question: 'What is the procedure to book a bike for shipping?',
            answer: 'The process involves taking the bike, importing it to the train, and delivering it to the customer.'
        },
        {
            question: 'How long does the shipping process take?',
            answer: 'The shipping process usually takes between 3 to 5 days, depending on the location.'
        },
        {
            question: 'What is the procedure to book a bike for shipping?',
            answer: 'The process involves taking the bike, importing it to the train, and delivering it to the customer.'
        },
        {
            question: 'How long does the shipping process take?',
            answer: 'The shipping process usually takes between 3 to 5 days, depending on the location.'
        },
        
        {
            question: 'Are there any additional charges?',
            answer: 'There may be additional charges based on the distance and any added services required.'
        }
    ];

    // State to track which FAQ's answer is visible
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle answer visibility by setting the active index
    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section>
            <div className="faqs">
                <div className="LR-containers">
                    <h3>Frequently</h3>
                    <h3>Asked</h3>
                    <h3>Questions.</h3>
                </div>
                <div className="LR-containers">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h4
                                onClick={() => handleQuestionClick(index)}
                                className="faq-question"
                            >
                                {faq.question}
                            </h4>
                            {activeIndex === index && (
                                <p className="faq-answer">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
