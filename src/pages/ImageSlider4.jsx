import React from "react";
import ImageSlider from "../components/imageSlider/ImageSlider";

function ImageSlider4() {
  return (
    <ImageSlider
      url={`https://picsum.photos/v2/list`}
      limit={`10`}
      page={`12`}
    />
  );
}

export default ImageSlider4;
