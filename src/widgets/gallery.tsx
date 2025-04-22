import { ImagesData } from "../constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Gallery = ({ images }: { images: ImagesData[] }) => {
  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {images.map((img, idx) => (
            <img key={idx} src={img.image_url} loading="lazy" alt={img.name} style={{ height: '100%', width: '100%', objectFit: "cover" }} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

    </div>
  );
};

export default Gallery;
