import { BasePage } from "./base.page";

export class MainPage extends BasePage {
	static get url(){
		return "/";
	}

	static get makeAppointment(){
		return cy.get("#btn-make-appointment");
	}
	
	static get menuToggle(){
		return cy.get("#menu-toggle");
	}
	static get sidebarWrapper(){
		return cy.get("#sidebar-wrapper");
	}
	static get sidebarHistory(){
		return cy.get(`[href="history.php#history"]`);
	}
}