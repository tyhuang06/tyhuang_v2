import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImgSwiper = ({ project }) => {
    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <div
                className="carousel-arrow left-0"
                onClick={onClickHandler}
                title={label}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <div
                className="carousel-arrow right-0"
                onClick={onClickHandler}
                title={label}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );

    return (
        <div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                emulateTouch={true}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
            >
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
