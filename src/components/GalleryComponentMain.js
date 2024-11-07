// import React, { useState } from "react";
import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
import '../static/gallery.css';
import logo1 from '../img/MoveMyBike bike transportation solutions.jpg';
import logo2 from '../img/movemybike BIKE PARCEL.jpg';
import logo4 from '../img/movemybike bike packing service.jpg';
import logo9 from '../img/movemybike bike transportation.jpg';
import logo10 from '../img/transport bike with packing.jpg';
import logo11 from '../img/transport with footer.jpg';
import logo12 from '../img/bike picking.jpg';
import logo13 from '../img/hyderabad to banglore.jpg';
import logo14 from '../img/banglore to hyderabad.jpg';
import logo15 from '../img/banglore to pune.jpg';
import logo16 from '../img/banglore to tirupathi.jpg';
import logo17 from '../img/banglore to hyderabad.jpg';
import logo18 from '../img/pune to banglore.jpg';
import logo20 from '../img/tirupathi to banglore.jpg';
import logo21 from '../img/best bike transport from hyderabad.jpg';
import logo22 from '../img/bike transport service from hyderabad.jpg';
import logo23 from '../img/bike parcel service in hyderabad.jpg';
import logo24 from '../img/fastest bike transport service.jpg';
import logo25 from '../img/bike transport from hyderabad to bangalore.jpg';
import logo26 from '../img/bike shipment service from hyderabad.jpg';
import logo27 from '../img/bike parcel service from hyderabad.jpg';





//const imgUrls = [logo1,logo2,logo4,logo5,logo7,logo8,logo9,logo10,logo11,logo12];

// class GalleryComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentIndex: null };
//     this.closeModal = this.closeModal.bind(this);
//     this.findNext = this.findNext.bind(this);
//     this.findPrev = this.findPrev.bind(this);
//     this.renderImageContent = this.renderImageContent.bind(this);
//   }
//   renderImageContent(src, index) {
//     return (
//       <div onClick={(e) => this.openModal(e, index)}>
//         <img src={src} key={src} />
//       </div>
//     ) 
//   }
//   openModal(e, index) {
//     this.setState ({ currentIndex: index });
//   }
//   closeModal(e) {
//     if (e != undefined) {
//       e.preventDefault();
//     }
//     this.setState ({ currentIndex: null });
//   }
//   findPrev(e) {
//     if (e != undefined) {
//       e.preventDefault();
//     }
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex -1
//     }));
//   }
//   findNext(e) {
//     if (e != undefined) {
//       e.preventDefault();
//     }
//     this.setState(prevState => ({
//       currentIndex: prevState.currentIndex + 1
//     }));
//   }
//   render() {
//     return (
//       <div className="gallery-container">
//         <h1>Package Services</h1>
//         <div className="gallery-grid">
//           {imgUrls.map(this.renderImageContent)}
//         </div>
//         <GalleryModal 
//           closeModal={this.closeModal} 
//           findPrev={this.findPrev} 
//           findNext={this.findNext} 
//           hasPrev={this.state.currentIndex > 0} 
//           hasNext={this.state.currentIndex + 1 < imgUrls.length} 
//           src={imgUrls[this.state.currentIndex]} 
//         />
//       </div>
//     )
//   }
// }

// class GalleryModal extends React.Component {
//   constructor() {
//     super();
//     this.handleKeyDown = this.handleKeyDown.bind(this);
//   }
//   componentDidMount() {
//     document.body.addEventListener('keydown', this.handleKeyDown);
//   }  
//   componentWillUnmount() {
//     document.body.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown(e) {
//     if (e.keyCode === 27)
//       this.props.closeModal();
//     if (e.keyCode === 37 && this.props.hasPrev)
//       this.props.findPrev();
//     if (e.keyCode === 39 && this.props.hasNext)
//       this.props.findNext();
//   }
//   render () {
//     const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
//     if (!src) {
//       console.log('whut')
//       return null;
//     }
//     return (
//       <div>
//         <div className="modal-overlay" onClick={closeModal}></div>
//         <div isOpen={!!src} className="gallerymodal">
//           <div className='gallerymodal-body'>
//             <a href="#" className='gallerymodal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
//             {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
//             {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
//             <img src={src} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default GalleryComponent;


const options = {
  responsiveClass: true,
  // nav: true,
  loop: true,
  autoplay: true,
  smartSpeed: 100,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
};

class GalleryComponent extends Component {
  render() {
    return (
      <>
        <div className="packing-services" style={{padding:'2rem 0'}}>
          <h3 style={{ color: "rgb(241, 148, 138)", marginBottom: "2rem" }}>
          Package Services
          </h3>
          <OwlCarousel
            className="slider-items owl-carousel carousel-content"
            {...options}
            style={{marginBottom:'36px'}}
          >
            <div className="item" style={{ padding: 8 }}>
              <img
                src={logo1}
                alt="low cost logistic in hyderabad"
                style={{ width: "150px" }}
              />
            </div>

            <div className="item" style={{ padding: 8 }}>
              <img
                src={logo2}
                alt="fastest bike courier service"
                style={{ width: "180px" }}
              />
            </div>

            <div className="item" style={{ padding: 8 }}>
              <img
                src={logo26}
                alt="low cost bike transport service in hyderabad"
                style={{ width: "180px" }}
              />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo4} alt="low cost bike transport in hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo21} alt="two wheeler transport in hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo22} alt="bike parcel service from hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo23} alt="bike shipment service from hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo24} alt="bike transport from hyderabad to bangalore" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo25} alt="fastest bike transport service" style={{ width: "180px" }} />
            </div>
          </OwlCarousel>
          <OwlCarousel
            className="slider-items owl-carousel carousel-content"
            {...options} style={{padding:'2rem 0'}}
          >
            <div className="item" style={{ padding: 8 }}>
              <img
                src={logo27}
                alt="low cost bike transport service in hyderabad"
                style={{ width: "180px" }}
              />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo9} alt="fastest bike transport" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo10} alt="bike parcel service in hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo11} alt="best bike parcel service in hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo12} alt="best bike transport service in hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo13} alt="bike transport service from hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo20} alt="bike transport service from bangalore" style={{ width: "180px" }} />
            </div>
          </OwlCarousel>
          <OwlCarousel
            className="slider-items owl-carousel carousel-content"
            {...options} style={{padding:'2rem 0'}}
          >
            <div className="item" style={{ padding: 8 }}>
              <img src={logo14} alt="best bike transport service in bangalore" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo15} alt="best bike parcel service in bangalore" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo16} alt="fastest bike transport" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo17} alt="bike transport from bangalore to hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <img src={logo18} alt="bike shipment service from hyderabad" style={{ width: "180px" }} />
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default GalleryComponent;
