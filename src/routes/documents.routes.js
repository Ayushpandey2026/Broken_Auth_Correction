import express from "express";
import multer from "multer";
import { saveDocument, listDocuments } from "../services/document.service.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), saveDocument);
router.get("/", listDocuments);

export default router;
