
import './categoryList.scss'

const categories = [
    { name: "Black & White", image: "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF0890.jpg" },
    { name: "Street", image: "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF0401.jpg" },
    { name: "Animals", image: "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF1145.jpg" }
  ]

const CategoryList = () => {
    return <div>
    {categories.map((cat, idx) => (
      <div
        key={idx}
        className="parallax-section"
        style={{ backgroundImage: `url(${cat.image})` }}
      >
        <a href={`/category/${encodeURIComponent(cat.name)}`} className="category-name">
          {cat.name}
        </a>
      </div>
    ))}
  </div>
}

export default CategoryList