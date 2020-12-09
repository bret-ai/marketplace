import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.madiniafricainvest.com/wp-content/uploads/2020/11/mine02.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={19.99}
            rating={5}
            id="1234567891"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
          <Product
            title="Oculus Quest VR"
            price={600}
            rating={5}
            id="1234567892"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
          <Product
            title="Amazo Gallon"
            price={40.99}
            rating={4}
            id="1234567893"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
        </div>
        <div className="home__row">
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={32.99}
            rating={5}
            id="1234567894"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={6.99}
            rating={3}
            id="1234567895"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
        </div>
        <div className="home__row">
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={6.57}
            rating={4}
            id="1234567896"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={19.99}
            rating={4}
            id="1234567897"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={19.95}
            rating={5}
            id="1234567898"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
        </div>
        <div className="home__row">
          <Product
            title="Bixbyite & Gem Pink Topaz"
            price={297.34}
            rating={4}
            id="1234567899"
            image="https://i2.wp.com/www.rockygems.com/wp-content/uploads/2020/11/m191129_15b.jpg?resize=300%2C300&ssl=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
