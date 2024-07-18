import webpack from 'webpack';

import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { buildLoaders } from './buildLoaders';
import { BuildSettings } from './types/config';

export const buildWebpackConfig = (settings: BuildSettings): webpack.Configuration => {
  const { 
    mode,
    paths: { entry, output, html }
  } = settings

  return {
      mode,
      entry,
      output: {
        filename: 'courses.[contenthash].js',
        path: output,
        clean: true
      },
      module: {
        rules: buildLoaders(),
      },
      resolve: buildResolve(),
      plugins: buildPlugins(html),
    };
}