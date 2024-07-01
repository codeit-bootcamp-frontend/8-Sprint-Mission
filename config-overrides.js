const {
  override,
  addWebpackAlias,
  addWebpackModuleRule,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@js": path.resolve(__dirname, "src/js"),
    "@styles": path.resolve(__dirname, "src/styles"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@assets": path.resolve(__dirname, "src/assets"),
  }),
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: [path.resolve(__dirname, "src")],
          },
        },
      },
    ],
  })
);
