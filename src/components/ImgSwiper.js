import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgSwiper = ({ project }) => {
    return (
        <div>
            <Carousel showThumbs={false}>
                {project.imgs.map((image, key) => (
                    <div key={key}>
                        <img alt="" src={image} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImgSwiper;
