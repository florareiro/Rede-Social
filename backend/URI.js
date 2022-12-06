const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:3000"
  : ["rhttps://rede-social-frontend-florareiro.vercel.app/"];

module.exports = { clientURL };
