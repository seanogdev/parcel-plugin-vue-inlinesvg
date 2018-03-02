// FROM https://github.com/vuejs/vueify/blob/master/lib/template-compiler.js
var vueCompiler = require('vue-template-compiler')
var transpile = require('vue-template-es2015-compiler')

module.exports = function compileTemplate (template) {
	var compiled = vueCompiler.compile(template, { preserveWhitespace: false })
	if (compiled.errors.length) {
		compiled.errors.forEach(function (msg) {
			console.error(`\n${msg}\n`) // eslint-disable-line no-console
		})
		throw new Error('Vue template compilation failed')
	} else {
		return {
			render: toFunction(compiled.render),
			staticRenderFns: '[' + compiled.staticRenderFns.map(toFunction).join(',') + ']'
		}
	}
}

function toFunction (code) {
	return transpile('function render () {' + code + '}')
}
