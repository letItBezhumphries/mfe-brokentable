require('dotenv').config();
const express = require('express');
const connectDB = require('../database/index');
const path = require('path');
const cors = require('cors');
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../webpack.dev");
const compiler = webpack(config);
const app = express();
const DIST_DIR = path.join(__dirname, '../public/dist');
const PORT = process.env.PORT || 3003;

// Connect Database
connectDB();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// if (process.env.NODE_ENV === "development") {
app.use(
  webpackDevMiddleware(compiler, {
    writeToDisk: true,
    publicPath: config.output.publicPath,
  })
);
// };

// Init Middleware
app.use(
  express.json({
    extended: false
  })
);
app.use(cors());
app.use(express.static(DIST_DIR));
app.use('/', express.static(DIST_DIR));
// Define Routes
app.use('/api', require('./routes/restaurant'));
app.use('/restaurants/:id/photos', express.static(DIST_DIR));

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static(path.join(__dirname, "../public/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public", "dist", "photogallery.html"));
//   });
// }

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'photogallery.html'));
});

app.listen(PORT, () => {
  console.log(`server running at: ${PORT}`);
});
