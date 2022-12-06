const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
  ? "http://localhost:3000"
  : ["https://rede-social-hazel.vercel.app/"];

module.exports = { clientURL };
