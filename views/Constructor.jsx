const React = require('react');
const Layout = require('./Layout');

module.exports = function Constructor() {
  return (
    <Layout>
      <div className="conteiner conteinerConstructor">
        <div className="blockImg">
          <img width="300px" src="/img/носки/гарфилд/Frame 1.png" alt="" />
        </div>
        <div className="blockBtn">
          <h5>Выбери цвет:</h5>
          <ul className="colorList">
            <li className="btnColor"><a className="btnLink btnLink1" href=""></a></li>
            <li className="btnColor"><a className="btnLink btnLink2" href=""></a></li>
            <li className="btnColor"><a className="btnLink btnLink3" href=""></a></li>
            <li className="btnColor"><a className="btnLink btnLink4" href=""></a></li>
          </ul>
          <h5>Выбери изображение:</h5>
          <ul className="pictureList">
            <li className="btnPicture">
              <a href="">
                <img className="btnLinkPic btnLinkPic1" width="50px" src="/img/носки/картинки/гарфилд.png" alt="" />
              </a>
            </li>
            <li className="btnPicture">
              <a href="">
                <img className="btnLinkPic btnLinkPic2" width="50px" src="/img/носки/картинки/гомер.png" alt="" />
              </a>
            </li>
            <li className="btnPicture">
              <a href="">
                <img className="btnLinkPic btnLinkPic3" width="50px" src="/img/носки/картинки/патрик.png" alt="" />
              </a>
            </li>
            <li className="btnPicture">
              <a href="">
                <img className="btnLinkPic btnLinkPic4" width="50px" src="/img/носки/картинки/пончик.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )}