import webpack from 'webpack'
import { BuildSettings } from './types/config'

export const buildResolve = (settings: BuildSettings): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [settings.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
