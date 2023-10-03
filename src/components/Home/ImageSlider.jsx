
import imageArray from "../../assets/Home/slider/sliderExp";

const ImageSlider = () => {

  console.log(imageArray.length);

  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleIndicators"
        className="carousel slide lazy-load"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="false"
      >
        <div className="carousel-indicators">

          {
          imageArray.map((data,idx)=>{
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : "false"}
                aria-label={`Slide ${idx + 1}`}
                key={idx}
              ></button>
            );
          })
          }

        </div>
        <div className="carousel-inner">
          {
          imageArray.map((data, idx) => {
            return (
              <div
                className={`carousel-item ${idx == 0 ? "active" : null}`}
                style={{ backgroundImage: "url(" + data + ")" }}
                key={idx}
              >
                <div className="overlay"></div>
              </div>
            );
          })
          }

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
