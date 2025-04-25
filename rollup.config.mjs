import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
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
				tsconfig: "./tsconfig.json",
				module: "ESNext"
			}),
			nodeResolve({
				preferBuiltins: true,
				extensions: [".js", ".ts"]
			}),
			commonjs({
				transformMixedEsModules: true,
				include: /node_modules/
			})
		]
	}
];
