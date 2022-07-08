const authRouts = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const Reg = require('../../views/Reg');
const Log = require('../../views/Log');
const { User } = require('../../db/models');

authRouts.get('/registration', (req, res) => { // GET /auth - отдает форму регистрации
  res.renderComponent(Reg);
});

authRouts.post('/registration', async (req, res) => { // POST /auth - создает регистрацию
  try {
    // то, что поподает в <form> является req.boby
    const { name } = req.body;
    const { email } = req.body; // возьмет email от input
    const { password } = req.body; // возьмет password от input

    // console.log(email, password);
    const user = await User.findOne({ where: { email } }); // найдет пользователя с указанными email
    console.log(user); // покажет пользователя или null в случае его отсутствия в БД

    if (user) {
      res
        // .status(404) // покажет статус 404 в случае отсутствия Юзера
        .json({ messege: 'Пользователь с таким email или паролем уже существует.' });
    } else {
      const hash = await bcrypt.hash(password, 5);
      // console.log(hash, email, password);

      const newUser = await User.create({
        name,
        email,
        password: hash,
      });
      // console.log(newUser);
    }
    // res.json({ status: 'Ok' });
    res.write('<script>alert(Регистрация завершена)</script>');
    res.write('<script>window.location.href = "/"</script>');
    res.end();
    // res.redirect('/');
  } catch (error) {
    console.log(error);
    res
      .status(500) // покажет статус в случае ошибки на стороне БД
      .json({ messege: error.messege });
  }
});

authRouts.get('/login', (req, res) => { // GET /auth - отдает форму на login
  res.renderComponent(Log);
});

authRouts.post('/login', async (req, res) => {
  try {
    // то, что поподает в <form> является req.boby
    const { email } = req.body; // возьмет email от input
    const { password } = req.body; // возьмет password от input

    const user = await User.findOne({ where: { email } }); // объявлю юзера который будет искаться в БД
    console.log(user);

    if (!user) {
      res.status(404);
      res.json({ messege: 'Пользователя с таким email и паролем не существует!' });
    }

    const isSame = await bcrypt.compare(password, user.password);
    // res.json(isSame); // проверим тру или фалсе

    if (email === user.email && isSame) {
      // req.session - объект. В случает совпадения почты и пароля создается сессия
      // req.session присваеваем ключ userID, значением которого будет id текучего юзера
      req.session.userId = user; // это сессия
      // res.json({ status: 'ok' }); посмотрим статус
      res.redirect('/constructor');
      // res.write('<script>window.location.href = "/"</script>');
      // res.end();
    }
  } catch (error) {
    // console.log(error);
    res
      .status(500) // покажет статус в случае ошибки на стороне БД
      .json({ messege: error.messege });
  }
});

authRouts.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = authRouts;
