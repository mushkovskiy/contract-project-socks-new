require('@babel/register');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const reactSsrMiddleware = require('./middlewares/reactSsr');
const router = require('./routes/views/index.router');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

const app = express();
const PORT = 3000;

app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(reactSsrMiddleware);
app.use('/', router)

app.listen(PORT, async () => console.log('Веб-сервер слушает порт', PORT));
