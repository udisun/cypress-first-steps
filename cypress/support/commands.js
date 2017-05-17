Cypress.addParentCommand('login', (email, password) => {
  const mail = email || 'test'
  const pass = password || '12345678'

  const log = Cypress.Log.command({
    name: 'login',
    message: [mail, pass],
    consoleProps: () => ({
      email: mail,
      password: pass,
    }),
  })

  cy
    .server()
    .route(/\//).as('login')
    .visit('/login', { log: false })
    .contains('SIGN IN', { log: false })
    .get('button', { log: false })
    .should('be.disabled')
    .get('[name="username"]', { log: false })
    .type(mail, { log: false })
    .get('[name="password"]', { log: false })
    .type(pass, { log: false })
    .get('button', { log: false })
    .click({ log: false }) // this should submit the form
    .then(() => {
      log.snapshot().end()
    })
})

