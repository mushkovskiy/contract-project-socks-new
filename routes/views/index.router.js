const router = require('express').Router();
const Main = require('../../views/Main');
const { User, Favourite } = require('../../db/models');
const Constructor = require('../../views/Constructor');

router.get('/', async (req, res) => {
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
  const joinFavUser = await Favourite.findOne({
    raw: true,
    where: {
      user_id: '1',
    },
    include: [Favourite.Picture],
  });
  // console.log(joinFavUser);
});

router.get('/cabinet', async (req, res) => {
  res.renderComponent(Constructor);
});

module.exports = router;
