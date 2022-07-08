const router = require('express').Router();
const Main = require('../../views/Main');
const {
  User, Favourite, Color, Picture,
} = require('../../db/models');
const Constructor = require('../../views/Constructor');

router.get('/', async (req, res) => {
  // const user = await User.findOne({
  //   raw: true,
  //   where: {
  //     id: req.session.userId.id,
  //   },
  // });
  // const pictures = [];
  // const colors = await Color.findAll({ raw: true });

  // const garfield = await Picture.findOne({
  //   raw: true,
  //   where: {
  //     name: 'Гарфилд',
  //   },
  // });

  // const homer = await Picture.findOne({
  //   raw: true,
  //   where: {
  //     name: 'Гoмер',
  //   },
  // });
  // const patrick = await Picture.findOne({
  //   raw: true,
  //   where: {
  //     name: 'Патрик',
  //   },
  // });
  // pictures.push(garfield, homer, patrick);
  // console.log(pictures, colors);
  // const user = User.findOne({ where: { id: req.session.user_id } });
  res.renderComponent(Main);
  const joinUser = await User.findOne({
    raw: true,
    where: {
      id: '1',
      // req.session.userId
    },
    include: [User.Picture],
  });
  // console.log(joinUser);
  const joinFavUser = await Favourite.findAll({
    raw: true,
    where: {
      user_id: '1',
    },
    include: [Favourite.Picture],
  });
  // console.log(joinFavUser);
});

// router.get('/home', async (req, res) => {
//   res.renderComponent(Constructor, { user: req.session.userId });
// });

module.exports = router;
