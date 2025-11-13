import React from 'react'

const BestSelling = () => {
  return (
    <section id="best-sellers" className="best-sellers product-carousel py-5 position-relative overflow-hidden">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">Best Selling Items</h4>
        <a href="index.html" className="btn-link">View All Products</a>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src="images/product-item-1.jpg" alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="element-title text-uppercase fs-5 mt-3">
                    <a href="index.html">Dark florish onepiece</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$95.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src="images/product-item-2.jpg" alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Baggy Shirt</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$55.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src="images/product-item-3.jpg" alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Cotton off-white shirt</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$65.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src="images/product-item-4.jpg" alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Crop sweater</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$50.00</span></a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       
      </div>
     </div> 
  </section>

  )
}

export default BestSelling