import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const Header = () => {

  const [cart, setCart] = useState(0)
  const [fav, setFav] = useState(0)

  return (
    <header>
      <nav className="social">
        <div className="social-media-links">
          <img src="/image/facebook.png" alt="instagram" />
          <img src="/image/instagram.png" alt="instagram" />
          <img src="/image/youtube.png" alt="instagram" />
          <img src="/image/linkedin.png" alt="instagram" />
        </div>
        <div className="contact-details">
          <img src="/image/instagram.png" alt="instagram" />{" "}
          <a href="#">9860566453</a>
          <img src="/image/instagram.png" alt="instagram" />{" "}
          <a href="#">Help Center</a>
        </div>
      </nav>
      <nav className="connect">
        <div className="logo">
          <img src="/image/image.png" alt="Home Deport logo" />
        </div>
        <div className="search-bar">
          <SearchBar placeholder="flooring" />
        </div>
        <div className="favourites">
          <div className="favourite-icon">
            <img src="/image/youtube.png" alt="instagram" />
          </div>
          <div className="favourite-icon">
            <img src="/image/youtube.png" alt="instagram" />
            <span className="dot">{fav}</span>
          </div>
          <div className="favourite-icon">
            <img src="/image/youtube.png" alt="instagram" />
            <span className="dot">{cart}</span>
          </div>
          
        </div>
      </nav>
    </header>
  );
};
export default Header;
