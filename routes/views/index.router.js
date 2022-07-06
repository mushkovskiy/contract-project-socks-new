const router = require('express').Router();
const Layout = require('../../views/Layout');

router.get('/', (req, res) => {
  res.renderComponent(Layout);
});

module.exports = router;
