module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-share/'
    : '/',
  pwa: {
    name: 'vuejsnews',
    themeColor: '#231F34',
    msTileColor: '#231F34',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
