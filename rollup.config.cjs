import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { cleandir as cleanDir } from "rollup-plugin-cleandir";

const OUT_DIR = "dist";

export default [
	{
		input: "src/index.ts",
		output: {
			dir: OUT_DIR,
			format: "cjs",
			preserveModules: true,
			preserveModulesRoot: "src"
		},
		plugins: [
			cleanDir(OUT_DIR),
			typescript({
				clean: true,
				module: "ESNext"
			}),
			resolve({
				extensions: [".js", ".ts"]
			}),
			commonjs()
		]
	}
];
