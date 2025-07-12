import LoginPage from "../pages/LoginPage";

describe('Login tests', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

  it('Successful login with valid credentials', () => {
    LoginPage.usernameIsVisivle()
    LoginPage.enterUsername('tomsmith')
    LoginPage.passwordIsVisible()
    LoginPage.enterPassword('SuperSecretPassword!')
    LoginPage.submitButtonIsVisible()
    LoginPage.submit()
    LoginPage.getSuccess().should('contain', 'You logged into a secure area!')
  })

  it('Failed login with invalid username', () => {
    LoginPage.enterUsername('wrongUsername')
    LoginPage.enterPassword('SuperSecretPassword!')
    LoginPage.submit()
    LoginPage.getError().should('contain', 'Your username is invalid!')
  })

  it('Failed login with invalid username', () => {
    LoginPage.enterUsername('tomsmith')
    LoginPage.enterPassword('wrongPassword!')
    LoginPage.submit()
    LoginPage.getError().should('contain', 'Your password is invalid!')
  })

})