const path = require("path")

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname, "build"),
        filename: "build.js"
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"],
            },
        ]
    },
    mode : "development",
}