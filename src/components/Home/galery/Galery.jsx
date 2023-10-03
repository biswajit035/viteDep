import { Link } from 'react-router-dom'
import imgArr from '../../../assets/Home/GaleryCrousel/galeryCrouselExp'

const Galery = () => {
    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 galery-text" >
                    <h1>Gallery</h1>
                    <Link onClick={handleClick} className="galery-button" style={{ textDecoration:'none' }} to='/galery'>VIEW ALL</Link>
                </div>
                
                {/* carousel */}
                <div className="col-lg-6 p-0 galery-carousel">
                    <div id="carouselgaleryFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1500" data-bs-pause="hover">
                        <div className="carousel-inner-galery">

                            {
                                imgArr.map((data,idx)=>{
                                    return (
                                      <div
                                        className={`carousel-item ${ idx==0 ? "active" : ""}`}
                                        style={{
                                          backgroundImage: "url(" + data + ")",
                                        }}
                                        key={idx}
                                      ></div>
                                    );
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselgaleryFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselgaleryFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Galery;