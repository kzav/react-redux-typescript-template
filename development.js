import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, '../bakc-end-project/resources/public/js')
const template = path.resolve(__dirname, '../bakc-end-project/resources/templates')
const JS_PATH = 'js/';

export default {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  devtool: 'source-map',

  // メインとなるJavaScriptファイル（エントリーポイント）
  context: src,
  entry: {
    'sample': './sample.tsx',
  },

  output: {
    path: dist,
    publicPath: JS_PATH,
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },

  module: {
    rules: [
      {
        // 拡張子jsの場合
        test: /\.js$/,
        use: [
          {
            // Babelを利用
            loader: 'babel-loader',
            // Babel のオプションを指定
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                '@babel/preset-env',
                // JSX を JS に変換
                "@babel/preset-react"
              ]
            }
          }
        ]
      },
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader"
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    // new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['*.html', '*.js', '*.map']}),
    new HtmlWebpackPlugin({
      inject: false,
      template: src + '/sample.html',
      filename: template + '/sample.html'
    }),
  ]
}
