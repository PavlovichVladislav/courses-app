import webpack from 'webpack';
import { buildStyleLoaders } from './loaders/buildStyleLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

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

  const babelLoader = buildBabelLoader(isDev);

  return [
    svgLoader,
    fileLoader,
    styleLoaders,
    babelLoader,
    typescriptLoader,
    babelLoader,
  ];
};
