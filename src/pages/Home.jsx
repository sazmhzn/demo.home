import React from "react";
import Categories from "../components/Categories";
import SignInCard from "../components/SignInCard";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <section className="banner-section">
        <Categories />
        <div className="banner-img-container">
          <img src="/image/banner1.png" alt="" />
        </div>
        <aside className="sign-in-ads-container">
          <SignInCard />
          <div className="ads-banner-img-container">
            s{/* <img src="/image/side-banner.avif" alt="" /> */}
          </div>
        </aside>
      </section>

      <section className="ads-banner-img-container">
        <img src="/image/HomeDepotBanner.png" alt="" />
      </section>


      <section className="top-pic-cards">
        <header className="top-pic-cards__heading">
          <h3>Top Picks For You</h3>
          <p>Impressive Collection For Your Dream Home</p>
        </header>
          <Cards />
      </section>
    </>
  );
};

export default Home;
