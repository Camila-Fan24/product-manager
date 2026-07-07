import express from "express";

import {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    editOneProduct,
    removeOneProduct
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getOneProduct);

router.post("/create", createNewProduct);

router.put("/:id", editOneProduct);

router.delete("/:id", removeOneProduct);

export default router;