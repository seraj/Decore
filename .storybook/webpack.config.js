const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../.storybook")
        ],
        use: [
          require.resolve("cache-loader"),
          {
            loader: require.resolve("ts-loader"),
            options: {
              reportFiles: ["../src"]
            }
          },
          require.resolve("react-docgen-typescript-loader")
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules(?!\/@storybook\/addon-info)/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  }
};
