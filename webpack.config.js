module.exports = {
	entry: './src/main.js',
	output: {
		path:'./src',
		filename:'bundle.js',
		publicPath: '/',
	},
	devServer:{
		inline:true,
		contentBase:'./src',
    port: 3333,
	},
	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude:/(node_modules|bower_components)/,
				loader:'babel'
			}
		]
	}
};
