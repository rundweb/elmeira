import "./css/home.css";

import { ServiceList, fashionList } from "../data/index";

const HomePages = () => {
  return (
    <>
      <div className="home">
        <div
          className="home-content"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className="home-text">
            <h1>level up your style with our</h1>
            <h1>Summer Collections</h1>
            <div className="btn">
              <a href="#about">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      {/* section service */}
      <div className="service">
        <div className="service-content">
          <div className="service-title">
            <div
              className="service-title-left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>We provide best</h1>
              <h1>customer experiences</h1>
            </div>
            <div
              className="service-title-right"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>we ensure our costumers have the best shopping experiences</p>
            </div>
          </div>
          <div className="service-list">
            {ServiceList.map((service) => {
              return (
                <div
                  className="services"
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={service.delay}
                >
                  <div className="services-icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="services-text">
                    <h3>{service.text}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section fashion */}

      <div className="fashion">
        <div className="fashion-content">
          <div
            className="fashion-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Current Picks</h1>
          </div>
          <div className="fashion-list">
            {fashionList.map((fash) => {
              return (
                <div
                  key={fash.id}
                  className="fashion-link"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={fash.delay}
                >
                  <div className="fashion-image">
                    <img src={fash.image} alt="" />
                  </div>
                  <a href="#" className="btn-fashion">
                    {fash.text} <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;
