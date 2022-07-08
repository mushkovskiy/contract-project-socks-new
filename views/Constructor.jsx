const React = require('react');
const Layout = require('./Layout');

module.exports = function Constructor({ colors, pictures }) {
  return (
    <Layout>
      <div className="conteiner conteinerConstructor">
        <div className="blockImg">
          <img className="change-sock" width="300px" src="/img/носки/гарфилд/Frame 1.png" alt="" />
        </div>
        <div className="blockBtn">
          <h5>Выбери цвет:</h5>
          <ul className="colorList">
            {colors.map((el) => (
              <li key={el.id} className="btnColor">
                <a data-color={el.color} style={{ background: `${el.color}` }} className="btnLink btnLink1" href="/constructor/color">
                  {' '}
                </a>
              </li>
            ))}

            {/* <li className="btnColor"><a className="btnLink btnLink1" href=""></a></li>
            <li className="btnColor"><a className="btnLink btnLink2" href=""></a></li>
            <li className="btnColor"><a className="btnLink btnLink3" href=""></a></li>
            <li className="btnColor"><a className="btnLink btnLink4" href=""></a></li> */}
          </ul>
          <h5>Выбери изображение:</h5>
          <ul className="pictureList">
            {pictures.map((el) => (
              <li key={el.id} className="btnPicture">
                <a href="/constructor/picture">
                  <img data-name={el.name} className="btnLinkPic btnLinkPic1" width="50px" src={el.url} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <script src="./home.js" />
    </Layout>
  );
};
