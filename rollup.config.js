import babel from "rollup-plugin-babel"
import replace from "@rollup/plugin-replace"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"), // または 'development'
      preventAssignment: true,
    }),
    resolve({ extensions: [".js", ".jsx"] }),
    babel({
      exclude: "node_modules/**",
      presets: [["@babel/preset-react", { runtime: "automatic" }]],
    }),
    commonjs({
      include: /node_modules/,
    }),
  ],
}
