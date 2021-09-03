const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  images: {
    loader: "imgix",
    path: 'http://gitrigiribrothers.github.io',
  },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  reactStrictMode: true,
}

