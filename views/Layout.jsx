const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/normalize.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
        <title>Document</title>
      </head>
      <body>
        <header>
          <div className="conteiner conteinerHeader">
            <a className="logoImg" href="">
              <img className="imgHeader" width="100px" src="../img/91b09da633a706fd69c1c32d32bddbab.png" alt="" />
            </a>
            <nav className="headerNavMenu">
              <ul className="headerNavList">
                <li className="headerNavItem"><a href="/auth/registration">Зарегистрироваться</a></li>
                <li className="headerNavItem">Войти</li>
                <li className="headerNavItem">Выйти</li>
                <li className="headerNavItem">
                  <a href="">
                    <img className="imgBascket" width="30px" src="../img/like.png" alt="" />
                  </a></li>
                <li className="headerNavItem">
                  <a href="">
                    <img className="imgBascket" width="30px" src="../img/корзина.png" alt="" />
                  </a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
