module.exports = {
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ]
    }
  },
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> .5% or last 3 versions, not IE <= 11']
        }
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true
      }
    ]
  ]
};
