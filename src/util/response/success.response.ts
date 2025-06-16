import BaseResponse from "./base.response";

export class SuccessResponse extends BaseResponse {
	constructor(data?: any) {
		super(true, "ok", data);
	}
}
