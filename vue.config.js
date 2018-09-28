module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vuejsnews/'
    : '/',
  pwa: {
    name: 'vuejsnews',
    themeColor: '#231F34',
    msTileColor: '#231F34',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  }
}
