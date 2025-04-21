
import { categoryImages } from '../constants'
import './categoryList.scss'

const CategoryList = () => {
    return <div>
    {categoryImages.map((cat, idx) => (
      <div
        key={idx}
        className="parallax-section"
        style={{ backgroundImage: `url(${cat.image_url})` }}
      >
        <a href={`/category/${encodeURIComponent(cat.name)}`} className="category-name">
          {cat.name}
        </a>
      </div>
    ))}
  </div>
}

export default CategoryList