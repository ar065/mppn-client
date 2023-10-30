console.time("Done.")
await Bun.build({
  entrypoints: ["./src/client/Client.ts"],
  outdir: "./out",
});
console.timeEnd("Done.")