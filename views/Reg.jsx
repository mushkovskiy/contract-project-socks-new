const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <div className='divReg'>
      <form className="formReg" method="POST" action="/auth/registration">
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Введите имя</label>
          <input name="name" type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Введите Email</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Введите пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
      </div>
    </Layout>
  );
}

module.exports = Reg;
