// import categoryListStyles from "../../widgets/categoryList.module.scss";
import heroStyles from "./hero.module.scss"

const Hero = () => {
  return (
    <div
      className={heroStyles.parallaxSection}
      style={{
        textAlign:'left',
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%), url(https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/Gowthaman+Ganesan.jpg)`,
      }}
    >
      <p className={heroStyles.heroText}>Hey, I’m Gowthaman — I build websites and frame moments through photography.
      This space is a blend of code and curiosity.</p>
    </div>
  );
};

export default Hero;
