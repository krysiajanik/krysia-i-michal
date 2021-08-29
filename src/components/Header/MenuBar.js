import React from "react";
import styles from "./MenuBar.module.scss";
import MenuIcon from "./Icons/MenuIcon.js";
import MenuCloseIcon from "./Icons/MenuCloseIcon.js";
import MenuDropdown from "./MenuDropdown";
import HomeIcon from "./Icons/HomeIcon.js";

class MenuBar extends React.Component {
  state = {
    menuVisible: false,
  };

  changeMenuState = (isVisible) => {
    this.setState({
      menuVisible: !isVisible,
    });
  };

  render() {
    const { menuVisible } = this.state;

    return (
      <>
        <button className={styles.buttonHome}>
          <a href="/">
            <HomeIcon/>

          </a>
        </button>
        <div
          className={styles.bar}
          onClick={() => this.changeMenuState(menuVisible)}
        >
          <button className={styles.button}>
            {menuVisible ? <MenuCloseIcon /> : <MenuIcon />}
          </button>
          {menuVisible && <MenuDropdown />}
        </div>
      </>
    );
  }
}

export default MenuBar;
