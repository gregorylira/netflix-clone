import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./styles.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://scontent.fjpa11-1.fna.fbcdn.net/v/t1.6435-9/119462269_2818109058290214_5155477187505806219_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGTirAhhamCoV5hkv46VG9qxqbfONnuDFPGpt842e4MU1Xp-pJ7bulPWdPi493vXAxd3_sPEj2mHIekygimd29z&_nc_ohc=tufLsXZRvT8AX-khQvT&_nc_ht=scontent.fjpa11-1.fna&oh=00_AT_wkGCDgRh0xNsyDA3Suw98SEH_pQh5AOhLEctkREz2HA&oe=628A6087"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
