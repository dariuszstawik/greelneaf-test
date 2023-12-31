"use client";
import Image from "next/image";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

export default function HeaderSlider({ images, className }) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      <AutoplaySlider
        className={className}
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        bullets={false}
        organicArrows={false}
      >
        {images.images.map((image, i) => {
          return (
            <div className="h-full bg-primaryGray" key={i}>
              <Image
                className="h-full object-cover"
                src={
                  `https:${image.fields.file.url}`
                    ? `https:${image.fields.file.url}`
                    : ""
                }
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                alt={image.fields.description ? image.fields.description : ""}
              />
            </div>
          );
        })}
      </AutoplaySlider>
    </div>
  );
}
