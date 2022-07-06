const authRouts = require('express').Router();
const React = require('react');
const Reg = require('../../views/Reg');

authRouts.get('/registration', (req, res) => {
  res.renderComponent(Reg);
});



module.exports = authRouts;
