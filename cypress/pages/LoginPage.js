class LoginPage {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/login');
    }

    enterUsername(username) {
        cy.get('#username').type(username);
    }
    enterPassword(password) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    getSuccess() {
       return cy.get('.flash.success')
    }

    getError() {
        return cy.get('#flash');
    }

    usernameIsVisivle() {
        cy.get('#username').should('be.visible');
    }

    passwordIsVisible() {
        cy.get('#password').should('be.visible');
    }

    submitButtonIsVisible() {
        cy.get('button[type="submit"]').should('be.visible');
    }
}

export default new LoginPage();