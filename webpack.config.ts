import path from "path";

import { Configuration } from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: Configuration = {
    mode: "development",
    entry: "./src/index.tsx",
    devServer: {
        //contentBase: "./",
        hot: true,
        historyApiFallback: true,  //缺少该配置，会出现上面的错误
        open: true,
        static: "dist",  // devServer 将从这个位置去获取所有“静态”内容，即 html，js，css 等，这里应当修改为输出目录
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    module: {
        // 在这里配置 loader
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),
        new MiniCssExtractPlugin(),
    ]
}

export default config