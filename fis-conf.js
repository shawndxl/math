fis
	.set('project.files', [ // 处理的文件类型
		'**.{css,less,html,php,js,png,jpg,gif,ico}'
	])
	.set('project.ignore', [ // 忽略的文件
		'package.json',
		'node_modules/**',

		'bower.json',
		'bower_components/**',

		'**/_*.*',
		'_output', //不使用用

		'fis-conf.js'
	]);


fis.match('*.less', {
	parser: fis.plugin('less'),
	rExt: '.css'
}).match(/([^\/\\]+\.(css|less))$/i, {
	release: 'css/$1',
	postprocessor: fis.plugin('autoprefixer')
});