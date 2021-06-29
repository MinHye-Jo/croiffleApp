module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@config': './src/config',
          '@common': './src/common',
          '@hook': './src/hook',
          '@service': './src/service',
          '@components': './src/components',
          '@screens': './src/screens',
          '@styles': './src/styles'
        }
      },
    ],
  ],
};
