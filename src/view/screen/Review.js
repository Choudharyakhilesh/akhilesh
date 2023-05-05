 function Review(){
    return(
        <div className="container-fluid team" id="Reviews">
      <p>⭐⭐⭐⭐</p>
      <h2>What Our Visitors Say</h2>
      <h4>Our average visitor's rating is 4.2/5.</h4>
        
        
        <div className="row">
          <div className="card " >
            <img src={require('../img/K1.jpeg')}  className="card-img-top team-img" alt=""/>
            <div className="card-body">
              
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             enim<br/> ad minim veniam, quis nostrud exercitation .</p>
            <h4 className="card-title">Naina Arora</h4>
            <button type="button" className="btn btn-dark project-btn ">MORE REVIEWS</button>
            </div>
          </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Testimonials</span>
                        <h2>What Customers Say?</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="testimonial-slider owl-carousel">
                        <div class="ts-item">
                            <p>After a construction project took longer than expected, my husband, my daughter and I
                                needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                city, neighborhood and the types of housing options available and absolutely love our
                                vacation at Sona Hotel.</p>
                            <div class="ti-author">
                                <div class="rating">
                                    <i class="icon_star"></i>
                                    <i class="icon_star"></i>
                                    <i class="icon_star"></i>
                                    <i class="icon_star"></i>
                                    <i class="icon_star-half_alt"></i>
                                </div>
                                <h5> - Alexander Vasquez</h5>
                            </div>
                            <img src={require('../img/testimonial-logo.png')} alt=""/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>

        

        
        
    )
}

export default Review;