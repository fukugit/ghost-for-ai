module.exports = (ctx) => ({
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    ctx.env === 'production' ? require('cssnano')({ preset: 'default' }) : false,
  ].filter(Boolean),
});
