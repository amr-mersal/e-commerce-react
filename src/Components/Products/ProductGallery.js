import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../Images/mobile.png'
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
const ProductGallery = () => {
    const images = [
        {
          original: `${mobile}`,
        },
        {
          original: `${mobile}`,
        },
        {
          original: `${mobile}`,
        },
      ];
  return (
  <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
  <ImageGallery items={images} 
    defualtImage={mobile}
    showFullscreenButton={false}
    showPlayButton={false}
    showThumbnails={true}
    renderRightNav={RightButton}
    renderLeftNav={LeftButton}
  />
  </div>
  )
};
export default ProductGallery;
