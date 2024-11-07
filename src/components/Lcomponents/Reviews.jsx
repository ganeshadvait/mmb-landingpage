import React from "react";
import Quotes from '../../img/carbon_quotes.png';

const Reviews = () => {

    const Reviewcontent = [
        {
            heading: "Our Customer Love what we do",
            Lpara: "Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fermentum quam tellus, in curae varius massa tempor volutpat proin quisque dictumst pulvinar,",
            One: "Book Now",
            Two: "Get Estimation"
        }
    ]
    const Reviews = [
        {
          id: 1,
          review: "Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis fermentum quam tellus, in curae varius massa tempor volutpat proin quisque dictumst pulvinar",
          reviewername: "John Doe",
          reviewerimage: "", // or use a URL for the image
          howmanystars: 4,
          reviewCount: 4.0
        },
        // Add more review objects as needed
      ];

      const authorbox = {
        display: 'flex',
        justifyContent: 'center'
      };
      const reviewbox = {
        marginLeft: '10px'
      }
    return(
        <>
        <section className="reviews-section">
            <div className="reviews-inner"> 

                <div className="leftu-right">
                    <h3>{Reviewcontent[0].heading}</h3>
                    <p className="review-para">{Reviewcontent[0].Lpara}</p>
                    <p className="button-rows">
                    <a href="#">{Reviewcontent[0].One}</a><a href="#">{Reviewcontent[0].Two}</a>
                    </p>
                </div>
                <div className="leftu-right">
      <img src={Quotes} alt="Quote Icon" className="quotes" />
      <div className="review-corosol">
        {Reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-content">
              <p className="review-text">{review.review}</p>
              <div style={authorbox}> 
              {review.reviewerimage ? (
              <img src={review.reviewerimage} alt={`${review.reviewername}'s image`} className="reviewer-image" />
            ) : (
              <div className="placeholder-image"></div>
            )}
            <div style={reviewbox}>  <p className="reviewer-name">{review.reviewername}</p>
            <div className="review-rating">
                {Array(review.howmanystars)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="star">★</span>
                  ))}
                <span className="review-count">{review.reviewCount.toFixed(1)}</span>
                </div>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
        </section>
        </>
    )
};
export default Reviews;