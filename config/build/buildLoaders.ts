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
            auto: /.module.(s)?css/i,
            namedExport: false,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
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

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    typescriptLoader,
    styleLoaders,
    svgLoader,
    fileLoader
  ]
}