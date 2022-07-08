const homeRouts = require('express').Router();
const React = require('react');
const { Op } = require('sequelize');
const { Color, Picture, User } = require('../../db/models');

const Constructor = require('../../views/Constructor');

homeRouts.get('/', async (req, res) => {
  const user = await User.findOne({
    raw: true,
    where: {
      id: req.session.userId.id,
    },
  });
  const pictures = [];
  const colors = await Color.findAll({ raw: true });

  const garfield = await Picture.findOne({
    raw: true,
    where: {
      name: 'Гарфилд',
    },
  });

  const homer = await Picture.findOne({
    raw: true,
    where: {
      name: 'Гoмер',
    },
  });
  const patrick = await Picture.findOne({
    raw: true,
    where: {
      name: 'Патрик',
    },
  });
  pictures.push(garfield, homer, patrick);
  console.log(pictures, colors);
  res.renderComponent(Constructor, { colors, pictures, user });
});

homeRouts.post('/color', async (req, res) => {
  const { color } = req.body;
  req.session.userColor = color;
  const { url } = await Color.findOne({
    raw: true,
    where: {
      color,
    },
  });

  res.json({ url });
});

homeRouts.post('/picture', async (req, res) => {
  const { name } = req.body;
  const picture = await Picture.findOne({
    raw: true,
    where: {
      [Op.and]: [
        { name },
        { color: req.session.userColor },
      ],
    },
  });
  res.json({ url: picture.sock_url });
});
module.exports = homeRouts;
