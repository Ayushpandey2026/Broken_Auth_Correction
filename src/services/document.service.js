import fs from "fs";
import path from "path";

const DB_PATH = "src/data/documents.json";

export function saveDocument(req, res) {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const text = fs.readFileSync(req.file.path, "utf-8");
  const docs = JSON.parse(fs.readFileSync(DB_PATH));

  docs.push({
    id: Date.now(),
    name: req.file.originalname,
    content: text
  });

  fs.writeFileSync(DB_PATH, JSON.stringify(docs, null, 2));

  res.json({ message: "Document uploaded" });
}

export function listDocuments(req, res) {
  const docs = JSON.parse(fs.readFileSync(DB_PATH));
  res.json(docs.map(d => ({ id: d.id, name: d.name })));
}
