class Alert
{

getJSAlertClick()
{
    return cy.window().then((win)=>{
        cy.get(':nth-child(1) > button').click();
    })
}

getJSConfirmClick()
{
    return cy.window().then((win)=>{
        cy.get(':nth-child(2) > button').click();
    })
}

getJSPromptClick()
{
    return cy.window().then((win)=>{

        cy.get(':nth-child(3) > button').click();
        cy.stub(win, 'prompt').returns('I can see this message')
    })
}
}
export default Alert;


