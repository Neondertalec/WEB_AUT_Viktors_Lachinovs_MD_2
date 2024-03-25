/// <reference types="cypress" />

const { AppointmentPage } = require("../pageObjects/appointment.page");
const { HistoryPage } = require("../pageObjects/histort.page");
const { LoginPage } = require("../pageObjects/login.page");
const { MainPage } = require("../pageObjects/main.page");
const { SummaryPage } = require("../pageObjects/summary.page");

describe('homework 2', function (){
	it('Make an Appointment', function (){
		MainPage.visit();
		MainPage.makeAppointment.click();

		LoginPage.demoNameInput.invoke("val").then(el=>{
			LoginPage.nameValueInput.type(el);
		})
		LoginPage.demoPasswordInput.invoke("val").then(el=>{
			LoginPage.passwordValueInput.type(el);
		})
		LoginPage.loginButton.click();

		AppointmentPage.comboFacility.select("Seoul CURA Healthcare Center");
		AppointmentPage.applyForReadmission.click();
		AppointmentPage.medicaidRadio.click();
		AppointmentPage.visitDate.click();
		AppointmentPage.getDatepickerDay(30).click();
		cy.get('body').click();
		AppointmentPage.commentInput.type("CURA Healthcare Service");
		AppointmentPage.bookAppointment.click();

		const now = new Date();
		let month = now.getMonth()+1 +"";
		if(month.length == 1) month = "0"+month;

		SummaryPage.facility.should("have.text", "Seoul CURA Healthcare Center");
		SummaryPage.readmission.should("have.text", "Yes");
		SummaryPage.program.should("have.text", "Medicaid");
		SummaryPage.visitDate.should("have.text", `30/${month}/${now.getFullYear()}`);
		SummaryPage.comment.should("have.text", "CURA Healthcare Service");
	});

	it('Appointment history empty', function (){
		MainPage.visit();
		MainPage.makeAppointment.click();

		LoginPage.demoNameInput.invoke("val").then(el=>{
			LoginPage.nameValueInput.type(el);
		})
		LoginPage.demoPasswordInput.invoke("val").then(el=>{
			LoginPage.passwordValueInput.type(el);
		})
		LoginPage.loginButton.click();

		MainPage.menuToggle.click();
		MainPage.sidebarWrapper.should("exist");
		MainPage.sidebarHistory.click();
		HistoryPage.history.should("contain.text", "No appointment.")
	});
});