/* eslint-disable */
module.exports = function (bundler) {
	bundler.addAssetType('svg', require.resolve('./VueInlineSVGAsset'))
};
