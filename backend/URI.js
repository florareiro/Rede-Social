const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:3000"
  : ["https://rede-social-frontend-aprq4sdv2-florareiro.vercel.app/"];

module.exports = { clientURL };
