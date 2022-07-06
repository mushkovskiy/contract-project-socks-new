const router = require('express').Router();
// const Layout = require('../../views/Layout');
const Main = require('../../views/Main');

router.get('/', (req, res) => {
  res.renderComponent(Main);
});

module.exports = router;
