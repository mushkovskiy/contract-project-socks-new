const renderBasketRouter = require('express').Router();
const { User, UserPicture, Favourite } = require('../../db/models');

const Basket = require('../../views/Basket');
const Favourites = require('../../views/Favourites');

renderBasketRouter.get('/basket', async (req, res) => {
  const socks = await User.findAll({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
    include: [User.Picture],
  });
  const user = await User.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
  });
  // console.log(socks);
  res.renderComponent(Basket, { socks, user });
});

renderBasketRouter.delete('/basket/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  await UserPicture.destroy({
    where: {
      picture_id: id,
    },
  });
  res.redirect('/');
});

renderBasketRouter.get('/like', async (req, res) => {
  const socksLike = await Favourite.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
    include: [Favourite.Picture],
  });
  console.log(socksLike);
  const userLike = await User.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
  });
  res.renderComponent(Favourites, { socksLike, userLike });
});

module.exports = renderBasketRouter;
