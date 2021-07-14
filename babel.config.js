module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'src': './src',
          'config': './src/config',
          'common': './src/common',
          'hook': './src/hook',
          'services': './src/services',
          'components': './src/components',
          'screens': './src/screens',
          'styles': './src/styles'
        }
      },
    ],
  ],
};
