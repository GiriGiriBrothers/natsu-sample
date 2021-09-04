const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  images: {
    loader: "imgix",
    path: 'https://gitrigiribrothers.github.io/natsu-sample',
  },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  reactStrictMode: true,
  publicRuntimeConfig: { urlPrefix },
}

