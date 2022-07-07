const ReactDOMServer = require('react-dom/server');
const React = require('react');

const renderBasketRouter = require('express').Router();

const Basket = require('../../views/Basket');

const array = ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300'];

renderBasketRouter.get('/basket', (req, res) => {
  res.renderComponent(Basket, { array });
});

module.exports = renderBasketRouter;
