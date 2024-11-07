import React from "react";

const Lservices = () => {
    const Content = [
        {
            heading: "Our Transportation Services",
            para: "We specialize in providing the following transportation services for our customers."
        }
    ];

    const serviceCards = [
        { id: 1, imageSrc: "", description: "We specialize in providing the following transportation services" },
        { id: 2, imageSrc: "", description: "We specialize in providing the following transportation services" },
        { id: 3, imageSrc: "", description: "We specialize in providing the following transportation services" },
        { id: 4, imageSrc: "", description: "We specialize in providing the following transportation services" },
        { id: 5, imageSrc: "", description: "We specialize in providing the following transportation services" },
        { id: 6, imageSrc: "", description: "We specialize in providing the following transportation services" }
    ];

    return (
        <section className="services-section">
            <div>
            <h3 className="text-left">{Content[0].heading}</h3>
            <p className="kovvu">{Content[0].para}</p>
            </div>
            <div className="left-right">
            <div className="servicescontainers">
                
                <div className="service-cards-container">
                    {serviceCards.map((card) => (
                        <div key={card.id} className="servicecard">
                            <img src={card.imageSrc} alt={`Service ${card.id}`} />
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="servicescontainers">
                <div className="image-box"></div>
            </div>
            </div>
        </section>
    );
};

export default Lservices;
