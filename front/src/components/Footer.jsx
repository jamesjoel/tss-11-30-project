import React from 'react'

const Footer = () => {
  return (
    <>
    

  <footer id="footer" className="mt-5">
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-between py-5">
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-001">
            <div className="footer-intro mb-4">
              <a href="index.html">
                <img src="images/main-logo.png" alt="logo" />
              </a>
            </div>
            <p>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus
              vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
            <div className="social-links">
              <ul className="list-unstyled d-flex flex-wrap gap-3">
                <li>
                  <a href="#" className="text-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#facebook"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#twitter"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#youtube"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#pinterest"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#instagram"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-002">
            <h5 className="widget-title text-uppercase mb-4">Quick Links</h5>
            <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
              <li className="menu-item">
                <a href="index.html" className="item-anchor">Home</a>
              </li>
              <li className="menu-item">
                <a href="index.html" className="item-anchor">About</a>
              </li>
              <li className="menu-item">
                <a href="blog.html" className="item-anchor">Services</a>
              </li>
              <li className="menu-item">
                <a href="styles.html" className="item-anchor">Single item</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-003">
            <h5 className="widget-title text-uppercase mb-4">Help & Info</h5>
            <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
              <li className="menu-item">
                <a href="#" className="item-anchor">Track Your Order</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Returns + Exchanges</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Shipping + Delivery</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Contact Us</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Find us easy</a>
              </li>
              <li className="menu-item">
                <a href="index.html" className="item-anchor">Faqs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-004 border-animation-left">
            <h5 className="widget-title text-uppercase mb-4">Contact Us</h5>
            <p>Do you have any questions or suggestions? <a href="mailto:contact@yourcompany.com"
                className="item-anchor">contact@yourcompany.com</a></p>
            <p>Do you need support? Give us a call. <a href="tel:+43 720 11 52 78" className="item-anchor">+43 720 11 52
                78</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-wrap">
            <div className="shipping">
              <span>We ship with:</span>
              <img src="images/arct-icon.png" alt="icon"/>
              <img src="images/dhl-logo.png" alt="icon"/>
            </div>
            <div className="payment-option">
              <span>Payment Option:</span>
              <img src="images/visa-card.png" alt="card"/>
              <img src="images/paypal-card.png" alt="card"/>
              <img src="images/master-card.png" alt="card"/>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <p>© Copyright 2022 Kaira. All rights reserved. Design by <a href="https://templatesjungle.com"
                target="_blank">TemplatesJungle</a> Distribution By <a href="https://themewagon.com"
              target="blank">ThemeWagon</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer