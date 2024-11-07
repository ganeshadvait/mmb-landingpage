import React from "react";

const LpLocations = () => {
    // Array of locations
    const locations = [
        "Bike Transport from Bangalore to Hyderabad",
        "Bike Transport from Bangalore to Chennai",
        "Bike Transport from Bangalore to Mumbai",
        "Bike Transport from Bangalore to Pune",
        "Bike Transport from Bangalore to Delhi",
        "Bike Transport from Bangalore to Kolkata",
        "Bike Transport from Bangalore to Goa",
        "Bike Transport from Bangalore to Ahmedabad",
        "Bike Transport from Bangalore to Jaipur",
        "Bike Transport from Bangalore to Lucknow",
        "Bike Transport from Bangalore to Chandigarh",
        "Bike Transport from Bangalore to Bhopal"
    ];

    const content = [
        {
            heading: 'Tell us where you are and which services you need. we’ll find you a top-rated garage!',
            strong: 'We’ve partnered with top-rated garages to offer you the best prices and services for your vehicle.',
            para: 'Our in-house mechanics personally select each garage we work with, negotiate prices directly, and review their services to ensure quality for our clients.'
        }
    ];

    // Styles
    const sectionStyle = {
        padding: '40px 0',
        backgroundColor: '#f9f9f9'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '20px'
    };

    const locationBoxStyle = {
        padding: '15px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    };
    const Fff = {
        background: '#f2f3f7',
        padding: '24px',
        borderRadius: '8px'
    }
    const left = {
        textAlign: 'left'
    }
    return (
       <section style={sectionStyle}>
        <div className="bg-white">
            <h2>{content[0].heading}</h2>
            <strong className="left flex">{content[0].strong}</strong>
            <p className="left">{content[0].para}</p>
            <div style={Fff}>
                <h3>Popular Locations</h3>
                <div style={gridStyle}>
                    {locations.map((location, index) => (
                        <div key={index}>
                            {location}
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </section>
    );
};

export default LpLocations;
