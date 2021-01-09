/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
  ],
  devOptions: {
    port: 5000,
    open: "none",
    output: "stream",
  },
  installOptions: {
    sourceMap: true,
  }
}