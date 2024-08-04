import { DevServerSettings } from './types/config';
import { Configuration as DevConfig } from 'webpack-dev-server';

export const buildDevServer = (settings: DevServerSettings): DevConfig => {
  const { port, workDir } = settings

  return {
    static: {
      directory: workDir,
    },
    compress: true,
    port,
    historyApiFallback: true,
    open: true
  }
}