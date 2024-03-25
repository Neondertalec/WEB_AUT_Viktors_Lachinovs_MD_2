import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
	static get url(){
		return "/profile.php#login";
	}

	static get demoNameInput(){
		return cy.get(`[aria-describedby="demo_username_label"]`);
	}
	static get demoPasswordInput(){
		return cy.get(`[aria-describedby="demo_password_label"]`);
	}

	static get nameValueInput(){
		return cy.get(`#txt-username`);
	}
	
	static get passwordValueInput(){
		return cy.get(`#txt-password`);
	}
	
	static get loginButton(){
		return cy.get(`#btn-login`);
	}
}