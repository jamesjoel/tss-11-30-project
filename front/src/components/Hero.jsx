import React from 'react'

const Hero = () => {
  return (
    <section id="billboard" className="bg-light py-5">
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center mt-4" >New Collections</h1>
        <div className="col-md-6 text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
            repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
            quibusdam ex repellat eaque!</p>
        </div>
      </div>
      <div className="row">
        <div className="main-swiper py-4">
          <div className="row border-animation-left">
            <div className="col-md-4">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src="public/images/banner-image-6.jpg" alt="product" className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src="public/images/banner-image-1.jpg" alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src="public/images/banner-image-2.jpg" alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src="public/images/banner-image-3.jpg" alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src="public/images/banner-image-4.jpg" alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Out crop sweater</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src="images/banner-image-5.jpg" alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="icon-arrow icon-arrow-left"><svg width="50" height="50" viewBox="0 0 24 24">
            <use xlinkHref="#arrow-left"></use>
          </svg></div>
        <div className="icon-arrow icon-arrow-right"><svg width="50" height="50" viewBox="0 0 24 24">
            <use xlinkHref="#arrow-right"></use>
          </svg></div>
      </div>
    </div>
  </section>
  )
}

export default Hero