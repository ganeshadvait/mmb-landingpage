import React from "react";

const Faqs = () => {

    const qaList = [
        { question: "How to", answer: "Move my bike" },
        { question: "Where to", answer: "Find my bike's VIN" },
        { question: "When to", answer: "Service my bike" },
        // Add more questions and answers as needed
    ];

    return(
        <>
        <section>
            <div>
                <div>
                    Frequently Asked Questions
                </div>
                <div>
                    {qaList.map((qa, index) => (
                        <div key={index}>
                            <h3>{qa.question}</h3>
                            <p>{qa.answer}</p>
                            </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Faqs;