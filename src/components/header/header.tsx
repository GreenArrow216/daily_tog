import { useParams } from "react-router-dom";
import headerStyles from "./header.module.scss";
import { categoryImages } from "../../constants";
import Camera from "../../assets/camera.svg";
import Instagram from "../../assets/instagram.svg";

const Header = () => {
  const { category } = useParams();
  const catTitle =
    categoryImages.find((cat) => cat.category === category)?.name || "";

  return (
    <div className={headerStyles.header}>
      <a href="/" className={headerStyles.logo}>
        <img src={Camera} alt={"dailyTogLogo"} width={25} height={25} />
        <h2>DailyTog</h2>
      </a>
      <h1>{catTitle}</h1>
      <a
        href="https://www.instagram.com/daily_tog?igsh=MWV2aDZpZmtsbHZxMQ=="
        target="_blank"
        className={headerStyles.additionalLinks}
      >
        <img src={Instagram} alt={"instagram.svg"} />
      </a>
    </div>
  );
};

export default Header;
