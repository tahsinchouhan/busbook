import React from "react";
// import { Container, Col, Form, Row, Image, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import { useHistory } from "react-router-dom";
// import Carousel from "react-multi-carousel";

// const data = [
//   {
//     // src="https://www.youtube.com/embed/s_W9hNCaZak",
//     // title="YouTube video player",
//     // frameBorder="0",
//     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
//     // allowFullScreen
//   },
//   {
//     // width="100%",
//     // height="100%",
//     // src="https://www.youtube.com/embed/7_PdY3bPfmM?start=2",
//     //  title="YouTube video player",
//     // frameBorder="0",
//     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
//     // allowFullScreen
//   },
// ];

function SearchFelid() {
  // const history = useHistory();
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 6,
  //     slidesToSlide: 6,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 4,
  //     slidesToSlide: 4,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2,
  //     slidesToSlide: 2,
  //   },
  // };

  // const onChange = () => {};
  // const onClickItem = () => {};
  // const onClickThumb = () => {};
  return (
    <>
      <div  className="pt-3">
        {/* <Carousel
          className="pt-5"
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
        > */}
          <div>
            <iframe
            className="search_view"
              width="100%"
              height="315"
               src="https://www.youtube.com/embed/V_JZZ1glvkA"
              // src={`${youtube_url}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>           
          </div>         
        {/* </Carousel> */}
      </div>
    </>
  );
}

export default SearchFelid;
