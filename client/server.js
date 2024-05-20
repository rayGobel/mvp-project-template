import express from "express";
import ViteExpress from "vite-express";

const app = express();
ViteExpress.config({ mode: "production" })

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
