
import { categoryImages } from '../constants.ts'
import './categoryList.scss'

const CategoryList = () => {
    return <div>
    {categoryImages.map((cat, idx) => (
      <div
        key={idx}
        className="parallax-section"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.1)),url(${cat.image_url})`, }}
      >
        <a href={`/category/${encodeURIComponent(cat.category)}`} className="category-name">
          {cat.name}
        </a>
      </div>
    ))}
  </div>
}

export default CategoryList