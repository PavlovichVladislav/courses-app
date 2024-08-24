import { BuildSettings } from './types/config'
import { Configuration as DevConfig } from 'webpack-dev-server'

export const buildDevServer = (settings: BuildSettings): DevConfig => {
  const {
    port,
    paths: { src }, 
  } = settings

  return {
    static: {
      directory: src
    },
    hot: true,
    compress: true,
    port,
    historyApiFallback: true,
    open: true,
  }
}
