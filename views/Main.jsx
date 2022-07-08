const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <div className="conteiner conteinerMain">
        <div className="mainItem">
          <div>
            <h2>
              Здравствуй, друг!
            </h2><br />
            <p>
              С помощью нашего редактора вы сможете добавить надпись, рисунок из нашей библиотеки или загрузить изображение с компьютера. После того, как вы оформите макет, нажмите кнопку «Корзина» для завершения покупки.
              <p>
                Чтобы посмотреть конструктор носков или оформить заказ необходимо авторизоваться.
              </p>

            </p>
          </div>
        </div>
        <div className="mainItem">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/носок1.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/носок2.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/носок3.jpg" className="d-block w-100" alt="..." />
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
