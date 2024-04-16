module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@config': './src/config',
          '@routes': './src/routes',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@styles': './src/styles',
          '@screens': './src/screens',
          '@components': './src/components',
        },
      },
    ],
  ];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};
