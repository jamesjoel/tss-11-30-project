import React from 'react'

const BlogPost = () => {
  return (
     <section className="blog py-5">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">Read Blog Posts</h4>
        <a href="index.html" className="btn-link">View All</a>
      </div>
      <div className="row">
        <div className="col-md-4">
          <article className="post-item">
            <div className="post-image">
              <a href="index.html">
                <img src="images/post-image1.jpg" alt="image" className="post-grid-image img-fluid"/>
              </a>
            </div>
            <div className="post-content d-flex flex-wrap gap-2 my-3">
              <div className="post-meta text-uppercase fs-6 text-secondary">
                <span className="post-category">Fashion /</span>
                <span className="meta-day"> jul 11, 2022</span>
              </div>
              <h5 className="post-title text-uppercase">
                <a href="index.html">How to look outstanding in pastel</a>
              </h5>
              <p>Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...</p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="post-item">
            <div className="post-image">
              <a href="index.html">
                <img src="images/post-image2.jpg" alt="image" className="post-grid-image img-fluid"/>
              </a>
            </div>
            <div className="post-content d-flex flex-wrap gap-2 my-3">
              <div className="post-meta text-uppercase fs-6 text-secondary">
                <span className="post-category">Fashion /</span>
                <span className="meta-day"> jul 11, 2022</span>
              </div>
              <h5 className="post-title text-uppercase">
                <a href="index.html">Top 10 fashion trend for summer</a>
              </h5>
              <p>Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...</p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="post-item">
            <div className="post-image">
              <a href="index.html">
                <img src="images/post-image3.jpg" alt="image" className="post-grid-image img-fluid"/>
              </a>
            </div>
            <div className="post-content d-flex flex-wrap gap-2 my-3">
              <div className="post-meta text-uppercase fs-6 text-secondary">
                <span className="post-category">Fashion /</span>
                <span className="meta-day"> jul 11, 2022</span>
              </div>
              <h5 className="post-title text-uppercase">
                <a href="index.html">Crazy fashion with unique moment</a>
              </h5>
              <p>Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  )
}

export default BlogPost