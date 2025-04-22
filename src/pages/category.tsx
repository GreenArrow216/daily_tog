import { useParams } from "react-router-dom";
import Gallery from "../widgets/gallery";
import { CATEGORIES, imagesData } from "../constants";

const Category = () => {
  const { category } = useParams();
  const images = imagesData.filter((img) => img.category === category);
  const categoryHeading = (category: CATEGORIES | string) => {
    switch (category) {
      case CATEGORIES.bw:
        return "Black & White";
      case CATEGORIES.animals:
        return "Flora & Fauna";
      case CATEGORIES.street:
        return "Street";
      case CATEGORIES.travel:
        return "Travel";
      default:
        return "Category Name";
    }
  };
  return (
    <div>
      <h1>{categoryHeading(category ?? "no category")}</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Category;
