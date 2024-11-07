import React from "react";

const SbsGuide = () => {
    const sectionStyle = {
        width: "100%",
        background: '#fff',
        paddingTop: '100px',
        paddingBottom: "100px",
        display: 'flex',
        justifyContent: 'center'
    };

    const imageContainer = {
        background: "#f2f3f7",
        height: "400px",
        width: "100%",
        borderRadius: '16px'
    };

    const leftContainer = {
        width: "50%",
        height: 'auto'
    };

    const rightContainer = {
        width: "50%",
        height: 'auto',
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const stepBox = {
        background: '#f2f3f7',
        padding: '20px',
        borderRadius: '8px',
        color: '#333',
        fontSize: '16px',
        display: 'flex',
        height: 'auto'
    };

    // Sample data for the timeline
    const Content = [
        {
            Step: 1,
            htext: "Step 1: Initial Setup",
            normaltext: "This is the description for step 1.",
            image: "" // Empty string to test the placeholder
        },
        {
            Step: 2,
            htext: "Step 2: Configuration",
            normaltext: "This is the description for step 2.",
            image: ""
        },
        {
            Step: 3,
            htext: "Step 3: Implementation",
            normaltext: "This is the description for step 3.",
            image: ""
        },
        {
            Step: 4,
            htext: "Step 4: Final Review",
            normaltext: "This is the description for step 4.",
            image: ""
        }
    ];

    return (
        <section style={sectionStyle}>
            <div className="sec-child">
                {/* Left Container with Image */}
                <div className="leftuu-right" style={leftContainer}>
                    <div style={imageContainer}>
                        Image 
                    </div>
                </div>

                {/* Right Container with Timeline */}
                <div className="leftuu-right" style={rightContainer}>
                    {Content.map((item, index) => (
                        <div key={index} style={stepBox}>
                            <div>
                            <h3>{item.htext}</h3>
                            <p>{item.normaltext}</p>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                {item.image ? (
                                    <img src={item.image} alt={`Step ${item.Step}`} style={{ width: '100%', borderRadius: '8px' }} />
                                ) : (
                                    <div style={{
                                        height: '200px',
                                        backgroundColor: '#f2f3f7',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#aaa'
                                    }}>
                                        No image available
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SbsGuide;
