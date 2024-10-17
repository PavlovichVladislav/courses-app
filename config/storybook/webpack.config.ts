import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildStyleLoaders } from '../build/loaders/buildStyleLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    html: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src, 'node_modules');
  config.resolve.extensions.push('.tsx', '.ts', '.js');
  config.module.rules.push(buildStyleLoaders(true));

  // отключаем дефолтную обработку svg, которую настраивает storybook
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
