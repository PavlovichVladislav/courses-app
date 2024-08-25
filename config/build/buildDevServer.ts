import { Configuration as DevConfig } from 'webpack-dev-server';
import { BuildSettings } from './types/config';

export const buildDevServer = (settings: BuildSettings): DevConfig => {
  const {
    port,
    paths: { src },
  } = settings;

  return {
    static: {
      directory: src,
    },
    hot: true,
    compress: true,
    port,
    historyApiFallback: true,
    open: true,
  };
};
