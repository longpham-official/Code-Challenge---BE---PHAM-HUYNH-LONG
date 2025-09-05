import { Router } from "express";
import { prisma } from "./prisma";

const router = Router();

router.post("/", async (req, res) => {
    const { name, description } = req.body;
    try {
        const resource = await prisma.resource.create({ data: { name, description } });
        res.status(201).json(resource);
    } catch {
        res.status(500).json({ error: "Failed to create resource" });
    }
});

router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        const resources = await prisma.resource.findMany({
            where: name ? { name: { contains: String(name) } } : {},
        });
        res.json(resources);
    } catch {
        res.status(500).json({ error: "Failed to fetch resources" });
    }
});

router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        const resource = await prisma.resource.findUnique({ where: { id } });
        if (!resource) return res.status(404).json({ error: "Not found" });
        res.json(resource);
    } catch {
        res.status(500).json({ error: "Failed to fetch resource" });
    }
});

router.put("/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { name, description } = req.body;
    try {
        const resource = await prisma.resource.update({
            where: { id },
            data: { name, description },
        });
        res.json(resource);
    } catch {
        res.status(500).json({ error: "Failed to update resource" });
    }
});

router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    try {
        await prisma.resource.delete({ where: { id } });
        res.json({ message: "Resource deleted" });
    } catch {
        res.status(500).json({ error: "Failed to delete resource" });
    }
});

export default router;
