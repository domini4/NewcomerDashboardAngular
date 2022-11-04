export class ErrorHandlerModel {
	public is_error: boolean;
	public error_message: string;

	constructor() {
		this.error_message = 'A generic error message is being thrown';
		this.is_error = false;
	}

	// We can pass in custom error message and create more specific error messages.
	// Only the `error_message` is required to be passing in. 
	throwCustomError(error_message: string, is_error: boolean = true) {
		this.error_message = error_message;
		this.is_error = is_error;
	}
}