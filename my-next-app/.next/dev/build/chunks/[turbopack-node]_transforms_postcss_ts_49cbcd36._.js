module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Documents/Projects/Glint/my-next-app/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/node_modules__pnpm_806d01c0._.js",
  "chunks/[root-of-the-server]__a45e7c11._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/Documents/Projects/Glint/my-next-app/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];