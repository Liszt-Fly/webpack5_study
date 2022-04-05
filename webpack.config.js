const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
	},
	mode: "none",
	module: {
		rules: [
			{ test: /\.(png|jpg)$/, use: ["file-loader"] },
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new TerserPlugin(),
		new MiniCssExtractPlugin({
			filename: "style.[contenthash].css", //分离出来的样式文件名称
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Webpack5从入门到放弃",
			filename: "html/index.html",
		}),
	],
}
