const router = require('express').Router();
const Main = require('../../views/Main');
const { User, Favourite } = require('../../db/models');
const Constructor = require('../../views/Constructor');

router.get('/', async (req, res) => {
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
  const joinFavUser = await Favourite.findOne({
    raw: true,
    where: {
      user_id: '1',
    },
    include: [Favourite.Picture],
  });
  // console.log(joinFavUser);
});


router.get('/constructor', async (req, res) => {
  res.renderComponent(Constructor, { user: req.session.userId });
});


module.exports = router;
