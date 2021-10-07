// __dirname , path module

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle2.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: 'singletonStyleTag'
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                ],
            },
        ],
    },
    mode: "none",
};
