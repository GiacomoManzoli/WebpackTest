const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        filename: "mylib.bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: "MyLib",
        libraryTarget: "umd"
    },
    devtool: "source-map",
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, "./src/libs/jquery.js"),
            bimsurfer: path.resolve(
                __dirname,
                "src/libs/bimsurfer/bimsurfer.js"
            )
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            BIMSURFER: "bimsurfer"
        })
    ]
};
