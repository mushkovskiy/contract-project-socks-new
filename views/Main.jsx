const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <div className="conteiner conteinerMain">
        <div className="mainItem">
          <p>
            Привет, мой друг!
          </p>
        </div>
        <div className="mainItem">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/носки/гомер/Group 12.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/носки/пончик/Group 13.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/носки/патрик/Group 2.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
