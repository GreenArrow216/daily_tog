import Masonry from "react-masonry-css";
import { ImagesData } from "../constants";

const Gallery = ({ images }: { images: ImagesData[] }) => {
//   const breakpointColumnsObj = {
//     default: 3,
//     1100: 2,
//     700: 1,
//   };

  return (
    <Masonry>
      {images.map((img, idx) => (
        <img key={idx} src={img.image_url} alt={img.name} />
      ))}
    </Masonry>
  );
};

export default Gallery;
