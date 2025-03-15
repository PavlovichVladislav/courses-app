import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildSettings } from './types/config';

export const buildPlugins = (
  settings: BuildSettings,
): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: settings.paths.html,
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(settings.isDev),
      __API__: JSON.stringify(settings.apiUrl),
      __PROJECT__: JSON.stringify(settings.project),
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/locales', to: 'locales' },
      ],
    }),
  ];

  if (settings.isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());

    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));

    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};
