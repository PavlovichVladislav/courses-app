import webpack from 'webpack';
import { buildStyleLoaders } from './loaders/buildStyleLoaders';

interface BuildLoadersOptions {
  isDev: boolean;
}

export const buildLoaders = (
  options: BuildLoadersOptions,
): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const styleLoaders = buildStyleLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // const refreshLoader = {
  //   test: /\.[jt]sx?$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: require.resolve('ts-loader'),
  //       options: {
  //         getCustomTransformers: () => ({
  //           before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //         }),
  //         transpileOnly: isDev,
  //       },
  //     },
  //   ],
  // };

  const babelLoader = {
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
        ],
      },
    },
  };

  return [
    svgLoader,
    fileLoader,
    styleLoaders,
    babelLoader,
    typescriptLoader,
    // refreshLoader,
  ];
};
