function Facilities(){
    return(
        <section className="colored-section" id="Facilities">
        <h1 className="cen"> Facilities </h1>
        <div className="">
            <div className="row project-row">
                <div className="col project-col">
                    <img className="project-img" src={require('../img/p1.jpg')} alt="project-1-img"/>
                    <div className="project-details">
                        <h5 className="project-h5">DELICIOUS COOKING</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Explicabo, molestias cum dicta recusandae nisi nesciunt.
                        </p>
                        <button type="button" className="btn btn-secondary project-btn ">KNOW MORE</button>
                    </div>
                </div>
                <div className="col project-col">
                    <img  className="project-img" src={require('../img/p2.jpg')} alt="project-2-img"/>
                    <div className="project-details">
                        <h5 className="project-h5">SWIMMING POOL</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Explicabo, molestias cum dicta recusandae nisi nesciunt.
                        </p>
                        <button type="button" className="btn btn-secondary project-btn ">KNOW MORE</button>
                    </div>
                </div>
                <div className="col project-col">
                    <img className="project-img" src={require('../img/p3.jpg')} alt="project-3-img"/>
                    <div className="project-details">
                        <h5 className="project-h5">GARDEN TERRACE</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Explicabo, molestias cum dicta recusandae nisi nesciunt.
                        </p>
                        <button type="button" className="btn btn-secondary project-btn ">KNOW MORE</button>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="">
            <div className="row project-row">
                <div className="col project-col">
                    <img className="project-img" src={require('../img/BONFIRE.jpg')} alt="project-1-img"/>
                    <div className="project-details">
                        <h5 className="project-h5">BONFIRE GROUND</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Explicabo, molestias cum dicta recusandae nisi nesciunt.
                        </p>
                        <button type="button" className="btn btn-secondary project-btn ">KNOW MORE</button>
                    </div>
                </div>
                <div className="col project-col">
                    <img  className="project-img" src={require('../img/Lounge area.jpg')} alt="project-2-img"/>
                    <div className="project-details">
                        <h5 className="project-h5">Lounge area</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Explicabo, molestias cum dicta recusandae nisi nesciunt.
                        </p>
                        <button type="button" className="btn btn-secondary project-btn ">KNOW MORE</button>
                    </div>
                </div>
                <div className="col project-col">
                    <img className="project-img" src={require('../img/bookshelf.jpg')} alt="project-3-img"/>
                    <div className="project-details">
                        <h5 className="project-h5">BOOKSHELF</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Explicabo, molestias cum dicta recusandae nisi nesciunt.
                        </p>
                        <button type="button" className="btn btn-secondary project-btn ">KNOW MORE</button>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
    )
}
export default Facilities;