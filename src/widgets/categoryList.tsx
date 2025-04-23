import { CATEGORIES, categoryImages } from "../constants.ts";
import Hero from "../elements/hero/hero.tsx";
import categoryListStyles from "./categoryList.module.scss";

const CategoryList = () => {
  return (
    <div>
      {categoryImages.map((cat, idx) =>
        cat.category === CATEGORIES.none ? (
          <Hero key={idx} />
        ) : (
          <div
            key={idx}
            className={categoryListStyles.parallaxSection}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.1)),url(${cat.image_url})`,
            }}
          >
            <a
              href={`/category/${encodeURIComponent(cat.category)}`}
              className={categoryListStyles.categoryName}
            >
              {cat.name}
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default CategoryList;
