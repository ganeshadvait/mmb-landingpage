import React from "react";
import LForm from "./LForm";
import LPCtas from './LPCalltoactions';
import Lstepform from "./LStepform";

const Lhero = () => {
    const Heading = (
        <>
            bike parcel or bike transport fast & safe
        </>
    );
    const Lpara = 'Experience safe and secure bike parcel delivery to any destination with Movemybike.';
   
    return (
        <>
            <section className="hero-section">
                {/* <div className="left-content">
                    <h2>{Heading}</h2>
                    <p>
                   {Lpara}
                    </p>
                    <div className="ctas-container hero">
                    <LPCtas />
                    <div className="visible-only-mobile">
                    <a className="visible-only-mobile primary">Locations</a>
                    <a className="visible-only-mobile secondary">Get Quote</a>
                    </div>
                   
                    </div>
                    
                </div> */}
                <div className="LForm-contaienr">
                <LForm />
                <div className="steps">  <Lstepform /> </div>
                </div>
            </section>
        </>
    );
};

export default Lhero;
