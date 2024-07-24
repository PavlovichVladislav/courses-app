import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface BuildLoadersOptions {
  isDev: boolean;
}

export const buildLoaders = (options: BuildLoadersOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const styleLoaders = {
    // can worrk with css, sass, scss
    test: /\.(s)?[ac]ss$/i,
    use: [
      isDev ? 'style-loader': MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
    styleLoaders
  ]
}