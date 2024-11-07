import React from "react";
import Partner from '../../../src/img/patner.png';

const Lfooter = () => {

    const FirstNav = [
        {
            heading : "Contact us",
            subItems: [
                { title : "Hyderabad", URL: "#"},
                { title : "Telangana", URL: "#"},
                { title : "india"},
                { title : "phone", Number: "9391202148", Numbertwo: "9391202148"},
                { title : "email", email: "movemybike.customer@gmail.com"}
            ]
        }
    ]
    const SecondNav = [
        {
            heading : "usefull Links",
            subItems: [
                { title : "Home", URL : "#"},
                { title : "About Us", URL : "#"},
                { title : "Menu", URL : "#"},
                { title : "Contact us", URL : "#"}

            ]
        }
    ]
    const ThirdNav = [
        {
            heading : "Locations",
            subItems: [
                { title : "Hyderabad", URL: "#"},
                {title : "Bangalore", URL: "#"},
                {title : "chennai", URL: "#"},
                {title : "Delhi", URL: "#"},
                {title : "Mumbai", URL: "#"},
                {title: "Howrah", URL: "#"}            ]
        }
    ]
    const FourthNav = [
        {
            heading : " Terms",
            subItems : [
                {title : "Terms and Conditions", URL: "#"},
                { title : "Privacy Policy", URL: "#"},
                { title : "Cookies", URL: "#"}
            ]
        }
    ]
     
    const Fifth = [
        {
            heading : " Collaborated with",
            imageURL :  Partner
        }
    ]
    return (
        <>
       <section className="Lfooter">
        <div className="parent-footer-item">
        <div className="footer-item first"> 
    <h3>{FirstNav[0].heading}</h3>
    <ul>
        {FirstNav[0].subItems.map((subItem, index) => (
            <li key={index}>
                {subItem.URL ? (
                    <a href={subItem.URL}>{subItem.title}</a>
                ) : subItem.title === "phone" ? ( // changed to lowercase "phone"
                    <>
                        <span>{subItem.title}:</span> {subItem.Number}, {subItem.Numbertwo}
                    </>
                ) : subItem.title === "email" ? ( // changed to lowercase "email"
                    <>
                        <span>{subItem.title}:</span>{" "}
                        <a href={`mailto:${subItem.email}`}>{subItem.email}</a>
                    </>
                ) : (
                    subItem.title
                )}
            </li>
        ))}
    </ul>
</div>
            <div className="footer-item second">
          <h3>{SecondNav[0].heading}</h3>
          <ul>
            {SecondNav[0].subItems.map((subItem, index) => (
              <li key={index}>
                {subItem.URL ? (
                  <a href={subItem.URL}>{subItem.title}</a>
                ) : (
                  subItem.title
                )}
              </li>
            ))}
          </ul>
        </div>
            <div className="footer-item third">
               <h3>{ThirdNav[0].heading}</h3>
                 <ul>
                {ThirdNav[0].subItems.map((subItem, index) => (
                  <li key={index}>
                    {subItem.URL ? (
                      <a href={subItem.URL}>{subItem.title}</a>
                    ) : (
                      subItem.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-item fourth">
                <h3>{FourthNav[0].heading}</h3>
                <ul>
                    {FourthNav[0].subItems.map((subItem, index) => (
                        <li key={index}>
                            {subItem.URL ? (
                                <a href={subItem.URL}>{subItem.title}</a>
                            ) : (
                                subItem.title
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-item fifth">
                <h3>{Fifth[0].heading}</h3>
                <img src={Fifth[0].imageURL} alt="Partner" />
            </div>
        </div>
        <div className="second-row-infooter">
            <div className="second-row-infooter"></div>
            <div className="second-row-infooter"></div>
        </div>
       </section>
        </>
    )
}
export default Lfooter;