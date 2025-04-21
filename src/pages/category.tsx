import { useParams } from "react-router-dom";
import Gallery from "../widgets/gallery";
import { imagesData } from "../constants";

const Category = () => {
  const { name } = useParams();
  const images = imagesData.filter((img) => img.category === name);
  return (
    <div>
      <h1>Categories</h1>
      <Gallery images={imagesData} />
    </div>
  );
};

export default Category;
