import BaseResponse from "./base.response";

export class ErrorResponse extends BaseResponse {
	constructor(message: string) {
		super(false, message);
	}
}
