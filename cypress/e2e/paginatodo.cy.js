describe('pruebas de la pagina TODO', () => {
  it('comprobar que se pueden crear tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("sacar el perro{enter}")

    
  })

it('comprobar que se pueden MARCAR tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
})

it('comprobar que se pueden Desmarcar tareas completadas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
})

it('comprobar que se pueden editar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="text-input"]').last().clear().type("Ir al campo{enter}")
  })


  it('comprobar que se pueden borrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-label"]').parents('li').find('button').click({ force: true })
  })

  it('comprobar que se pueden filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Comprar el pan{enter}")
    cy.get('[data-testid="text-input"]').type("Ir al gimnasio{enter}")
    cy.get('[data-testid="text-input"]').type("Ir al dentista{enter}")
    cy.get('[data-testid="text-input"]').type("Hacer la compra{enter}")
    cy.get(':nth-child(4) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()
  })

})
