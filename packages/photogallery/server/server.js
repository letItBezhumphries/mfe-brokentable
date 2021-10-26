const express = require('express');
const connectDB = require('../database/index');
const path = require('path');
const cors = require('cors');
const app = express();
const DIST_DIR = path.join(__dirname, '../public/dist');
const PORT = process.env.PORT || 3003;
// Connect Database
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false
  })
);

app.use(cors({
  origin: (origin, cb) => cb(null, true),
  credentials: true,
  preflightContinue: true,
  exposedHeaders: [
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept",
    "X-Password-Expired"
  ],
  optionsSuccessStatus: 200
}));

app.use(express.static(DIST_DIR));
app.use('/', express.static(DIST_DIR));
// Define Routes
app.use('/api', require('./routes/restaurant'));
app.use('/restaurants/:id/photos', express.static(DIST_DIR));


if (process.env.NODE_ENV !== "production") {
  require('dotenv').config({ path: "/opt/photogallery/.deploy.env"});
  console.log('server is starting in development!!');
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const config = require("../webpack.dev");
  const compiler = webpack(config);
  console.log('public path:', config.output.publicPath);
  app.use(
    webpackDevMiddleware(compiler, {
      writeToDisk: true,
      publicPath: config.output.publicPath,
      stats: 'errors-only'
    })
  );
} else {
  require('dotenv').config({ path: "/opt/photogallery/.production.env"});
  console.log('in production env');
}


app.get('/*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'photogallery.html'));
});

app.listen(PORT, () => {
  console.log(`server running at: ${PORT}`);
});
