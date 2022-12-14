import * as esbuild from "esbuild";

export default (entryPoint: string, dev: boolean) => {
    esbuild
        .build({
            bundle: true,
            logLevel: "info",
            format: "esm",
            mainFields: ["browser", "module", "main"],
            platform: "neutral",
            target: "ESNext",
            entryPoints: [entryPoint],
            outfile: "./dist/worker.mjs",
            sourcemap: dev,
            charset: "utf8",
            minify: !dev,
            watch: false, //dev,
            external: ["@rylen/node"],
        })
        .catch((err) => {
            console.error("Project failed to build");
            console.error(err.message);
        })
        .then(() => {
            console.log(
                dev ? "Waiting for your changes..." : "Project has been built"
            );
        });
};
