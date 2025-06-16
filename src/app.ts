import express, { Application, NextFunction, Request, Response } from "express";
import "dotenv/config";
import { router } from "./router";
import { ErrorResponse } from "./util/response/error.response";

export class App {
	private app: Application;
	constructor() {
		this.app = express();
		this.configureMiddleware();
		this.configureRouter();
	}

	private configureMiddleware() {
		// default middlewares
		this.app.use(express.json());
	}

	private configureRouter() {
		this.app.use(router);
		//
		this.app.use(this.errorHandler);
	}

	private errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
		res.json(new ErrorResponse("Bilinmeyen bir hata oluştu."));
	}

	public start() {
		this.app.listen(process.env.PORT, () => {
			console.log(`Server is running http://localhost:${process.env.PORT}`);
		});
	}
}
