require('dotenv').config();
const express = require('express');
const dayjs = require('dayjs');
const { debug } = require('./configs/debug');
const rootRoutes = require('./routes/root');
const routes = require('./routes');

require('dayjs/locale/th');
dayjs.locale('th');
const app = express();
const port = process.env.PORT || 8000;
const version = '/api/v1';

// parse json request body
app.use(express.json({ limit: '100mb' }));

// parse urlencoded request body
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use((req, res, next) => {
  debug(`%s origin (${process.pid}) %o`, dayjs().format('YYYY-MM-DD HH:mm:ss'), req.originalUrl);
  next();
});

// root routes
app.use('/api', rootRoutes);

// v1 api routes
app.use(version, routes);

app.listen(port, () => {
  debug(`::: Server is running port ${port}`)
})