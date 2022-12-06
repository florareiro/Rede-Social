const isDevMode =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://rede-social-backend-dd11t3xco-florareiro.vercel.app/";

const SERVER_URI = isDevMode
  ? "http://localhost:3000"
  : ["https://rede-social-frontend-aprq4sdv2-florareiro.vercel.app/"];

module.exports = { SERVER_URI };
