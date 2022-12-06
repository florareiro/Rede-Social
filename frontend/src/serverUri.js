const isDevMode = process.env.NODE_ENV === "development";

const SERVER_URI = isDevMode
  ? "http://localhost:5000"
  : ["https://rede-social-backend-lp6am0bgj-florareiro.vercel.app/"];
module.exports = { SERVER_URI };
