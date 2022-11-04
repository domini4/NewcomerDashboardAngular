export interface DemoComment {
	// This intferace models the DemoComment from the DynamoDB table `democomments`.
	id: string;
	author_association: string;
	classification: number;
	created_at: string;
	html_url: string;
	repo: string;
	status: string;
	open: string;
	url: string;
	user_id: number;
	user_login: string;
	user_type: string;
}