export const buildBabelLoader = (isDev: boolean) => ({
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env'],
      ],
      plugins: [
        [
          'i18next-extract',
          {
            locales: ['ru', 'en'],
            keyAsDefaultValue: ['ru'],
            nsSeparator: '~',
            keyAsDefaultValueForDerivedKeys: true,
          },
        ],
        // isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
