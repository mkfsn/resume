const isProd = process.env.NODE_ENV === 'production';

// https://github.com/isaachinman/next-i18next/blob/master/examples/simple/next.config.js
const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {}

module.exports = {
    assetPrefix: isProd ? '/resume/' : '',
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
}