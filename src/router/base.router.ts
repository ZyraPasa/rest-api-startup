import { Router } from "express";

export default abstract class BaseRouter {
	public router: Router;
	public basePath: string;

	constructor(basePath: string = "") {
		this.router = Router();
		this.initializeRoutes();
		this.basePath = basePath;
	}

	protected abstract initializeRoutes(): void;
}
