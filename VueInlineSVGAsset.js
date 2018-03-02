const JSAssetLib = require('parcel-bundler/lib/assets/JSAsset')
const JSAssetSrc = require('parcel-bundler/src/assets/JSAsset')
const JSAsset = parseInt(process.versions.node, 10) < 8 ? JSAssetLib : JSAssetSrc
const SVGO = require('svgo')
const transpiler = require('./transpiler')

const plugins = [
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

		const svgoInstance = new SVGO({ plugins })

		const optimizedSVG = await svgoInstance.optimize(code)

		const { render, staticRenderFns } = transpiler(optimizedSVG.data)

		const VueSVGModule = `module.exports = {
      name: '${filename}',
      render: ${render},
      staticRenderFns: ${staticRenderFns}
    }`

		return await super.parse(VueSVGModule)
	}
}

module.exports = VueInlineSVGAsset
