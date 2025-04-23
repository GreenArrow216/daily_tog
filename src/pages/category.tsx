import { useParams } from "react-router-dom";
import { categoryImages, imagesData } from "../constants";
import PhotoGallery from "../widgets/photoGallery";

const Category = () => {
  const { category } = useParams();
  const filteredImages = imagesData
  .filter((img) => img.category === category)
  .map((img) => ({
    src: img.image_url,
    width: parseInt(img.aspectRatio? img.aspectRatio.split(":")[0]:'1'),
    height: parseInt(img.aspectRatio ? img.aspectRatio.split(":")[1] : '1'),
  }));

  
  return (
    <div>
      <h1>{categoryImages.find((cat) => cat.category === category)?.name}</h1>
      <PhotoGallery images={filteredImages} containerWidth={window.innerWidth}/>
    </div>
  );
};

export default Category;
