const renderBasketRouter = require('express').Router();
const { User, UserPicture } = require('../../db/models');

const Basket = require('../../views/Basket');

// const array = ['/img/носки/гарфилд/Mask group (5).png', '/img/носки/картинки/пончик.png', '/img/носки/патрик/Group 3.png', '/img/носки/картинки/патрик.png'];

renderBasketRouter.get('/basket', async (req, res) => {
  const socks = await User.findAll({
    raw: true,
    where: {
      id: '1',
      // req.session.userId
    },
    include: [User.Picture],
  });
  // console.log(socks);
  res.renderComponent(Basket, { socks });
});

renderBasketRouter.delete('/basket/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  await UserPicture.destroy({
    where: {
      user_id: id,
    },
  });
  res.redirect('/');
});

module.exports = renderBasketRouter;
