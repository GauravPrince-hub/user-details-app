import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { BsThreeDotsVertical, BsFullscreen } from "react-icons/bs";



const Header = () => {
  return (
    <div className="header">
      <div className="left-items">
        <GiHamburgerMenu />
      </div>
      <div className="right-items">
        <MdSettings />
        <BsThreeDotsVertical />
        <BsFullscreen />
      </div>
    </div>
  );
};

export default Header;
