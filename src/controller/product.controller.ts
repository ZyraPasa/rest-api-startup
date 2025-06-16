import { Request, Response, NextFunction } from "express";
import { SuccessResponse } from "src/util/response/success.response";

class ProductController {
	constructor() {}

	public getAll(req: Request, res: Response, next: NextFunction) {
		//
		res.json(new SuccessResponse(1));
		// next();
	}
}

export default new ProductController();
