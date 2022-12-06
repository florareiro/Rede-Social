const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:3000"
  : ["rede-social-kkvwiotnu-florareiro.vercel.app"];

module.exports = { clientURL };
