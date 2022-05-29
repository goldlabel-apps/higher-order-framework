const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: 'listingslab',
        projectName: 'shared',
        webpackConfigEnv,
        argv,
    })

    return merge(defaultConfig, {
        output: {
            library: {
                type: 'system',
            },
        },
        module: {
            rules: [{ test: /\.mp3$/, use: 'raw-loader' }],
        },
        externals: [
            'single-spa',
            'gsap',
            'react',
            'react-dom',
            'react-redux',
            '@mui/material',
            '@listingslab/shared',
        ],
    })
}
