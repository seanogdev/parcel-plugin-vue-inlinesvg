const JSAssetLib = require('parcel-bundler/lib/assets/JSAsset')
const JSAssetSrc = require('parcel-bundler/src/assets/JSAsset')
const JSAsset = parseInt(process.versions.node, 10) < 8 ? JSAssetLib : JSAssetSrc
const SVGO = require('svgo')
const compiler = require('./template-compiler')

const defaultPlugins = [
	{ removeDoctype: true },
	{ removeComments: true },
	{ removeXMLNS: true }
]
class VueInlineSVGAsset extends JSAsset {

	constructor(...args) {
		super(...args)
		this.type = 'svg'
	}

	async parse(code) {
		const filename = this.basename.slice(0, -4)

		const svgoInstance = new SVGO({ plugins: defaultPlugins })

		const optimizedSVG = await svgoInstance.optimize(code)

		const compiled = compiler(optimizedSVG.data)

		const VueSVGModule = `module.exports = {
      name: '${filename}',
      render: ${compiled.render},
      staticRenderFns: ${compiled.staticRenderFns}
    }`

		return await super.parse(VueSVGModule)
	}
}

module.exports = VueInlineSVGAsset
