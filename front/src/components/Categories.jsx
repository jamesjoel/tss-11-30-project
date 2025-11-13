import React from 'react'

const Categories = () => {
  return (
    
  <section className="categories overflow-hidden">
    <div className="container">
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="cat-item image-zoom-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src="images/cat-item1.jpg" alt="categories" className="product-image img-fluid" />
                </a>
              </div>
              <div className="category-content">
                <div className="product-button">
                  <a href="index.html" className="btn btn-common text-uppercase">Shop for men</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-item image-zoom-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src="images/cat-item2.jpg" alt="categories" className="product-image img-fluid" />
                </a>
              </div>
              <div className="category-content">
                <div className="product-button">
                  <a href="index.html" className="btn btn-common text-uppercase">Shop for women</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-item image-zoom-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src="images/cat-item3.jpg" alt="categories" className="product-image img-fluid" />
                </a>
              </div>
              <div className="category-content">
                <div className="product-button">
                  <a href="index.html" className="btn btn-common text-uppercase">Shop accessories</a>
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

export default Categories