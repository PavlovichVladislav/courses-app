import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (templatePath: string): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
          template: templatePath
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
    ]
}