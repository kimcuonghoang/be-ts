import dotenv from "dotenv";
dotenv.config({
  path: ".env",
  debug: true,
});

export const { DB_URI, HOST, PORT } = process.env;
