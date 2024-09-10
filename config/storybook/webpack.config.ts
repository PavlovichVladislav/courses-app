import path from 'path';
import { BuildPaths } from '../build/types/config';
import webpack from 'webpack';
import { buildStyleLoaders } from '../build/loaders/buildStyleLoaders';

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
     entry: '',
     html: '',
     output: '',
     src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve.modules.push(paths.src, 'node_modules');
  config.resolve.extensions.push('.tsx', '.ts', '.js');
  config.module.rules.push(buildStyleLoaders(true))

  return config;
}
