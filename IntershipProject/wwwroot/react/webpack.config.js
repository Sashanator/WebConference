﻿module.exports = {
    context: __dirname,
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: __dirname + "/dist",
        filename: "addLog.js"
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}