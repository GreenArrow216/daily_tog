// import categoryListStyles from "../../widgets/categoryList.module.scss";
import heroStyles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={heroStyles.parallaxSection}>
      <p className={heroStyles.heroText}>
        Hey, I’m Gowthaman — I build websites and frame moments through
        photography. This space is a blend of code and curiosity.
      </p>
    </div>
  );
};

export default Hero;
