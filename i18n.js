const NextI18Next = require('next-i18next/dist/commonjs').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['ja', 'zh-tw'],
    localeSubpaths,
    localePath: path.resolve('./static/locales')
})