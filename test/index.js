const Bundler = require('parcel-bundler')

let bundler = new Bundler('./examples/index.html', {
	watch: true
})

bundler.addAssetType('svg', require.resolve('../VueInlineSVGAsset'))

bundler.serve()
