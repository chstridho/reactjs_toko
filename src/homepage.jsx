import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class HomePage extends Component {
  render() {
    return (

      <div className="homepage">
        <header className="header">
          <div className="logo">
            <img className="" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e6e6122-4ef7-4934-b74c-8a2d1c6742f5/df3lab9-ba4fe7a1-17de-4cff-a389-980dcfdcd1e0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlNmU2MTIyLTRlZjctNDkzNC1iNzRjLThhMmQxYzY3NDJmNVwvZGYzbGFiOS1iYTRmZTdhMS0xN2RlLTRjZmYtYTM4OS05ODBkY2ZkY2QxZTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yspcUuUja9S_h_PhRp1nWgQmSQSby1qtNxluzSkULP0" alt="NMIXX LOGO" />
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/login">Login</a>
          </nav>
        </header>

        <div className="banner">
          <h1>Welcome to NMIXX Discography Store</h1>
          <p>Find the best NMIXX product and become the new fansclub!</p>
        </div>

        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={3000}
          showArrows={true}
        >
          {/* Empty Slide 1 */}
          <div className="empty-slide">
            <img src="https://dbkpop.com/wp-content/uploads/2023/03/nmixx_expergo_teaser_audentia_all_group_1-1536x1024.jpg" alt="" />
          </div>

          {/* Empty Slide 2 */}
          <div className="empty-slide">
            <img src="https://dbkpop.com/wp-content/uploads/2023/03/nmixx_expergo_teaser_sententia_all_group_1-1333x2000.jpg" alt="" />
          </div>

          {/* Empty Slide 3 */}
          <div className="empty-slide">
            <img src="https://dbkpop.com/wp-content/uploads/2024/01/nmixx_fe3O4_break_teaser_dash_all_group.jpg" alt="" />
          </div>
        </Carousel><br/>

        <h2 className="h2">Featured Products</h2>
        <div className="product-list">

          {/* Product 1 */}
          <div className="product-card">
            <img src="https://lv2-cdn.azureedge.net/nmixx/2ac38f40571643d48d1d97fb891d51be-%EC%95%A8%EB%B2%94%EC%BB%A4%EB%B2%84%EA%B3%B5%ED%99%88.jpg" alt="Product 1" />
            <div className="product-info">
              <h2>Fe304: Break</h2>
              <p>Rp. 750.000,00</p>
              <h4>Track List</h4>
              <p>Dash<br/>
              Soñar (Breaker)<br/>
              Run For Roses<br/>
                  BOOM<br/>
                  Passionfruit<br/>
                  XOXO<br/>
                  Break The Wall <br/>
                  </p><br/>
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <img src="https://lv2-cdn.azureedge.net/nmixx/4f0503c9ed4e4e76828b41fcca6cda1e-%EC%95%A8%EB%B2%94%20%EC%BB%A4%EB%B2%84(1000).jpg" alt="Product 2" />
            <div className="product-info">
              <h2>expérgo</h2>
              <p>Rp. 550.000,00</p>
              <h4>Track List</h4>
              <p>Young, Dumb, Stupid<br/>
                  Love Me Like This<br/>
                  PAXXWORD<br/>
                  Just Did It<br/>
                  My Gosh<br/>
                  HOME<br/>
                  </p><br/><br />
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <img src="https://lv2-cdn.azureedge.net/nmixx/4f379779f3d44d599f931cc3daac3e58-%EC%98%A8%EB%9D%BC%EC%9D%B8%20%EC%BB%A4%EB%B2%84_%EA%B3%B5%ED%99%88.jpg" alt="Product 3" />
            <div className="product-info">
              <h2>AD MARE</h2>
              <p>Rp. 450.000,00</p>
              <h4>Track List</h4>
              <p>占 (TANK)<br/>
                  O.O<br/>
                  </p><br/><br /> <br /> <br /> <br /> <br /> 
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="product-card">
            <img src="https://lv2-cdn.azureedge.net/nmixx/73dd6538f1214111bfcdc4ee0b3b16fe-NM_3rdEP_online-cover.jpg" alt="Product 4" />
            <div className="product-info">
              <h2>Fe304: STICK OUT</h2>
              <p>Rp. 750.000,00</p>
              <h4>Track List</h4>
              <p>별별별 (See that?)<br/>
              SICKUHH (Feat. Kid Milli)<br/>
              Red light sign, but we go<br/>
                  Love Is Lonely<br/>
                  Moving On<br/>
                  BEAT BEAT<br/>
                  </p><br/><br />
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 5 */}
          <div className="product-card">
            <img src="https://lv2-cdn.azureedge.net/nmixx/3b74688de6ec4e47ae18a938f52e8550-Roller%20Coaster_online%20cover(1000).jpg" alt="Product 5" />
            <div className="product-info">
              <h2>Roller Coaster</h2>
              <p>Rp. 450.000,00</p>
              <h4>Track List</h4>
              <p>Roller Coaster </p><br/><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <button>Add to Cart</button>
            </div>
          </div>

          {/* Product 6 */}
          <div className="product-card">
            <img src="https://lv2-cdn.azureedge.net/nmixx/f0171a9b614f4e4b9253da3923a741ea-NMIXX_ENTWURF_onlinecover.jpg" alt="Product 1" />
            <div className="product-info">
              <h2>ENTWURF</h2>
              <p>Rp. 590.000,00</p>
              <h4>Track List</h4>
              <p>DICE<br/>
                  COOL (Your Rainbow)<br/>
                  </p><br/><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <button>Add to Cart</button>
            </div>
          </div>
        </div><br/><br/><br/>

        <footer className="footer">
          <p>&copy; 2024 Chstridho. All rights reserved.</p>
          <div className="social-media">
            <a href="#">Facebook</a>&nbsp; &nbsp; &nbsp;
            <a href="#">Twitter</a>&nbsp; &nbsp; &nbsp;
            <a href="#">Instagram</a>&nbsp; &nbsp; &nbsp;
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
