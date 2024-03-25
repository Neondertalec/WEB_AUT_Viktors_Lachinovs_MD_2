import { BasePage } from "./base.page";

export class AppointmentPage extends BasePage {
	static get url(){
		return "#appointment";
	}

	static get comboFacility(){
		return cy.get(`#combo_facility`);
	}
	static get applyForReadmission(){
		return cy.get(`[for="chk_hospotal_readmission"]`);
	}
	static get medicaidRadio(){
		return cy.get(`[value="Medicaid"]`);
	}
	static get visitDate(){
		return cy.get(`#txt_visit_date`);
	}
	static getDatepickerDay(day){
		return cy.get(`.datepicker-days`).contains(day);
	}
	static get commentInput(){
		return cy.get(`#txt_comment`);
	}
	
	static get bookAppointment(){
		return cy.get(`#btn-book-appointment`);
	}
}