module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root:["."],
        extensions:[
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg',
          '.png',
        ],
        alias: {
          '@src': './src',
          '@actions': './src/actions',
          '@api': './src/api',
          '@app': './src/app',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@reducers': './src/reducers',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
