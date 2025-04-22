import { useParams } from "react-router-dom";
import Gallery from "../widgets/gallery";
import { categoryImages, imagesData } from "../constants";

const Category = () => {
  const { category } = useParams();
  const images = imagesData.filter((img) => img.category === category);

  return (
    <div>
      <h1>{categoryImages.find(cat => cat.category === category)?.name}</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Category;
