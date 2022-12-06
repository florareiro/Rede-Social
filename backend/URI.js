const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:3000"
  : ["https://rede-social-dz3q-5qgoctg10-florareiro.vercel.app"];

module.exports = { clientURL };
