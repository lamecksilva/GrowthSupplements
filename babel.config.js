module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@presentation': './src/presentation',
        },
      },
    ],
  ],
};
