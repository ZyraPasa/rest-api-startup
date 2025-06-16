import { Router } from "express";
import { ProductRouter } from "./product.router";

export const router: Router = Router();

const productRouter = new ProductRouter();

router.use(productRouter.basePath, productRouter.router);
