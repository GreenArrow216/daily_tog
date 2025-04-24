import { useParams } from "react-router-dom";
import { imagesData } from "../constants";
import PhotoGallery from "../widgets/photoGallery";

const Category = () => {
  const { category } = useParams();
  const filteredImages = imagesData
    .filter((img) => img.category === category)
    .map((img) => ({
      src: img.image_url,
      width: parseInt(img.aspectRatio ? img.aspectRatio.split(":")[0] : "1"),
      height: parseInt(img.aspectRatio ? img.aspectRatio.split(":")[1] : "1"),
      name: img.name,
    }));

  return (
    <PhotoGallery
      images={filteredImages}
      containerWidth={window.innerWidth}
    />
  );
};

export default Category;
