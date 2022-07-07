const router = require('express').Router();
const Main = require('../../views/Main');
const { User, Favourite } = require('../../db/models');

router.get('/', async (req, res) => {
  res.renderComponent(Main);
  const joinUser = await User.findOne({
    raw: true,
    where: {
      id: '1',
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
  console.log(joinFavUser);
});

module.exports = router;
