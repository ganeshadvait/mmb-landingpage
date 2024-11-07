import React from "react";

const Packages = () => {

    const Heading = [
        {
            heading: "Package Services",
            para: "Lorem ipsum dolor sit amet consectetur, adipiscing elit class et sagittis, lobortis donec pharetra venenatis."
        }
    ];

    const imageCards = [
        { id: 1, imageSrc: "image-url-1.jpg" },
        { id: 2, imageSrc: "image-url-2.jpg" },
        { id: 3, imageSrc: "image-url-3.jpg" },
        { id: 4, imageSrc: "image-url-4.jpg" },
        { id: 5, imageSrc: "image-url-5.jpg" },
        { id: 6, imageSrc: "image-url-6.jpg" },
        { id: 7, imageSrc: "image-url-7.jpg" },
        { id: 8, imageSrc: "image-url-8.jpg" }
    ];

    return (
        <>

            <h3>{Heading[0].heading}</h3>
            <p className="P-para">{Heading[0].para}</p>
            <section className="Packages">
                <div className="images-cards">
                    {imageCards.map((imageCard) => (
                        <div key={imageCard.id} className="image-item">
                            <img src={imageCard.imageSrc} alt={`Package ${imageCard.id}`} />

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Packages;
