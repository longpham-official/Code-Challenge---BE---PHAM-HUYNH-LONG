import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import resourceRoutes from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api/v1/resources", resourceRoutes);

app.get("/", (_req: Request, res: Response) => {
    res.send("🚀 Express + TypeScript CRUD API is running!");
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
