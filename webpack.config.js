/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve( __dirname, 'src', 'ckeditor.js' ),

	output: {
		// The name under which the editor will be exported.
		library: 'ClassicEditor',

		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	optimization: {
		minimizer: [
			new TerserPlugin( {
				sourceMap: true,
				terserOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			} )
		]
	},

	plugins: [
		new CKEditorWebpackPlugin( {
			// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
			// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.js).
			language: 'en',
			additionalLanguages: 'all'
		} ),
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
    } ),
    new webpack.NormalModuleReplacementPlugin(
      /paragraph\.svg/,
      path.resolve(__dirname, 'icons', 'paragraph.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /heading1\.svg/,
      path.resolve(__dirname, 'icons', 'h1.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /heading2\.svg/,
      path.resolve(__dirname, 'icons', 'h2.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /bold\.svg/,
      path.resolve(__dirname, 'icons', 'bold.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /italic\.svg/,
      path.resolve(__dirname, 'icons', 'italic.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /underline\.svg/,
      path.resolve(__dirname, 'icons', 'underline.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /strikethrough\.svg/,
      path.resolve(__dirname, 'icons', 'strikethrough.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /link\.svg/,
      path.resolve(__dirname, 'icons', 'link.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /image\.svg/,
      path.resolve(__dirname, 'icons', 'image.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /media\.svg/,
      path.resolve(__dirname, 'icons', 'media.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /emoji\.svg/,
      path.resolve(__dirname, 'icons', 'emoji.svg')
    ),
    new webpack.NormalModuleReplacementPlugin(
      /quote\.svg/,
      path.resolve(__dirname, 'icons', 'blockquote.svg')
    ),
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					{
						loader: 'postcss-loader',
						options: styles.getPostCssConfig( {
							themeImporter: {
								themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
							},
							minify: true
						} )
					}
				]
			}
		]
	}
};
