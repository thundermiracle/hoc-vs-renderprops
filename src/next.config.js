const PATH_MAP = require("./client/PathMap");
const makeNextExportPathMap = require('next-mui-helper/util/makeNextExportPathMap');
const { EnvironmentPlugin } = require('webpack');

process.env.PKG_VERSION = process.env.npm_package_version;
process.env.PKG_NAME = process.env.npm_package_name;

module.exports = {
  exportPathMap: () => makeNextExportPathMap(PATH_MAP),
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hoc-vs-renderprops' : '',
  webpack: (config, { dev }) => {
    config.plugins.push(new EnvironmentPlugin(['PKG_VERSION', 'PKG_NAME']));
    return config;
  },
  distDir: '../.next',
}