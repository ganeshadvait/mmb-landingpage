import React, { useState } from "react";

const BeforeFooter = () => {
  
    const content = {
        heading: "Need a hand to export your bike",
        para:'Our in-house experts know cars, our garages and our drivers inside out.',
        button: '9391202148',
        email: 'email us',
        livechat: 'Live chat',

    };
    return(
        <>
        <section className="outerline">
        <div className="innerline">
        <h3>
        {content.heading}
        </h3>
        </div>
        <div>

        </div>
        <div>
            <div>
              {content.para}
            </div>
            <div>
                {content.button}
                {content.livechat}
                {content.email}
            </div>
        </div>
        </section>
        </>
    )
}
export default  BeforeFooter;