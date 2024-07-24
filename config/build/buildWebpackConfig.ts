import webpack from 'webpack';

import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { buildLoaders } from './buildLoaders';
import { BuildSettings } from './types/config';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (settings: BuildSettings): webpack.Configuration => {
  const { 
    mode,
    paths: { entry, output, html, workDir },
    port,
    isDev
  } = settings

  return {
    devServer: isDev ? buildDevServer({port, workDir}) : undefined,
    mode: mode,
    entry,
    output: {
      filename: 'courses.[contenthash].js',
      path: output,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders({isDev}),
    },
    resolve: buildResolve(),
    plugins: buildPlugins(html),
  } as webpack.Configuration;
}