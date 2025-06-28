import { useParams } from "react-router-dom";
import { CATEGORIES } from "../constants";
import PhotoGallery from "../widgets/photoGallery";
import { useImagesByCategory } from "../hooks/fetchImagesWithCategory";
import { isCategoryType } from "../utils";
import PageNotFound from "../components/pageNotFound/pageNotFound";
import Loader from "../components/loader/loader";

const Category = () => {
  const { category } = useParams();

  const { images, loading } = useImagesByCategory(isCategoryType(category));

  if (isCategoryType(category) === CATEGORIES.none) {
    return <PageNotFound />;
  }

  const filteredImages = images.map((img) => ({
    src: img.image_url,
    width: parseInt(img.aspect_ratio ? img.aspect_ratio.split(":")[0] : "1"),
    height: parseInt(img.aspect_ratio ? img.aspect_ratio.split(":")[1] : "1"),
    name: img.name,
  }));

  return (
    <>
      <Loader visible={loading} />
      <PhotoGallery
        images={filteredImages}
        containerWidth={window.innerWidth}
      />
    </>
  );
};

export default Category;
