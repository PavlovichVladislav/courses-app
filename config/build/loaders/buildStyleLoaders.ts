import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildStyleLoaders = (isDev: boolean) => {
  return {
    // can worrk with css, sass, scss
    test: /\.(s)?[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module.(s)?css/i,
            namedExport: false,
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }
}