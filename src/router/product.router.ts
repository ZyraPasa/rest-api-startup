import productController from "src/controller/product.controller";
import BaseRouter from "./base.router";

export class ProductRouter extends BaseRouter {
	constructor() {
		super("/product");
	}

	protected initializeRoutes(): void {
		this.router.get("/", productController.getAll);
	}
}
