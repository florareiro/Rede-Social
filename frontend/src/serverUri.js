export default process.env.NODE_ENV === "development"
  ? "http://localhost:5000"
  : "https://rede-social-backend-florareiro.vercel.app/";
