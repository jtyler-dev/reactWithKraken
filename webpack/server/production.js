var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

var nodeModules = fs.readdirSync('node_modules').filter(function(x) {
    return x !== '.bin'
})

module.exports = (env) => ({
    mode: 'production',
    name: 'server',
    context: __dirname,
    target: 'node',
    externals: nodeModules,
    entry: ['../../src/server/routes/index.js'],
    output: {
        path: (env && env.output_dir ? env.output_dir : path.resolve(__dirname, '../../build/server/routes/')),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        babelrc: false,
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [ path.resolve(__dirname, '../../node_modules'), '../../node_modules', 'node_modules']
    }
})