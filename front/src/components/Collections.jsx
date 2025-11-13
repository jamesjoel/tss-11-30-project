import React from 'react'

const Collections = () => {
  return (
     <section className="collection bg-light position-relative py-5">
    <div className="container">
      <div className="row">
        
        <div className="collection-item d-flex flex-wrap my-5">
          <div className="col-md-6 column-container">
            <div className="image-holder">
              <img src="images/single-image-2.jpg" alt="collection" className="product-image img-fluid" />
            </div>
          </div>
          <div className="col-md-6 column-container bg-white">
            <div className="collection-content p-5 m-0 m-md-5">
              <h3 className="element-title text-uppercase">classNameic winter collection</h3>
              <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu
                fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam
                nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis
                diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
              <a href="#" className="btn btn-dark text-uppercase mt-3">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Collections