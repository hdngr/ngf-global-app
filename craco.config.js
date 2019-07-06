const CracoCesiumPlugin = require("craco-cesium");

module.exports = {
  plugins: [
    { plugin: require("craco-plugin-react-hot-reload") },
    {
      plugin: CracoCesiumPlugin({
        loadPartially: false,
        loadCSSinHTML: true
      })
    }
  ]
};
