import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <a href="/">
        <h2>[ ◉¯] DailyTog</h2>
      </a>
    </div>
  );
};

export default Header;
