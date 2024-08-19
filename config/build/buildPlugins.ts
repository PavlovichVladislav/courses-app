import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildSettings } from './types/config';
import CopyPlugin from 'copy-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const buildPlugins = (settings: BuildSettings): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
          template: settings.paths.html
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
          chunkFilename: "css/[id].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
          IS_DEV: settings.isDev,
        }),
        new CopyPlugin({
          patterns: [
            { from: "./public/locales", to: "locales" },
          ]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
}