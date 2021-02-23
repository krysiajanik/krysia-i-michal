import React from "react";
import styles from "./MenuBar.module.scss";
import MenuIcon from "./MenuIcon.js";
import MenuCloseIcon from "./MenuCloseIcon.js";
import MenuDropdown from "./MenuDropdown";

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
      <div className={styles.bar} onClick={() => this.changeMenuState(menuVisible)}>
        <button className={styles.button} >
          {menuVisible ? <MenuCloseIcon /> : <MenuIcon />}       
        </button>
        {menuVisible && <MenuDropdown />}
      </div>
    );
  }
}

export default MenuBar;
