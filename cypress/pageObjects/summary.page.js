import { BasePage } from "./base.page";

export class SummaryPage extends BasePage {
	static get url(){
		return "/appointment.php#summary";
	}

	static get facility(){
		return cy.get(`#facility`);
	}
	static get readmission(){
		return cy.get(`#hospital_readmission`);
	}
	static get program(){
		return cy.get(`#program`);
	}
	static get visitDate(){
		return cy.get(`#visit_date`);
	}
	static get comment(){
		return cy.get(`#comment`);
	}
}
/*
Seoul CURA Healthcare Center

Apply for hospital readmission
Yes

Healthcare Program
Medicaid

Visit Date
30/03/2024

Comment
CURA Healthcare Service
 */