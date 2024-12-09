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

  config.resolve?.modules?.push(paths.src, 'node_modules');
  config.resolve?.extensions?.push('.tsx', '.ts', '.js');
  config.module?.rules?.push(buildStyleLoaders(true));

  // отключаем дефолтную обработку svg, которую настраивает storybook
  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      const r = rule as RuleSetRule;

      if (/svg/.test(r.test as string)) {
        return { ...r, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(new webpack.DefinePlugin({
    IS_DEV: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
