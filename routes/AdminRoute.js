import express from "express";
import {
  getAdmins,
  getAdminById,
  createAdmins,
  updateAdmins,
  deleteAdmins,
} from "../controllers/Admin.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/admins/:id", getAdminById);
router.post("/admins", createAdmins);
router.patch("/admins/:id", updateAdmins);
router.delete("/admins/:id", deleteAdmins);

export default router;
