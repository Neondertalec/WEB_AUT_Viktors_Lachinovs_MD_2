import { BasePage } from "./base.page";

export class HistoryPage extends BasePage {
	static get url(){
		return "/history.php#history";
	}

	static get history(){
		return cy.get(`#history`);
	}
}