class Xhrroute
{

getXHRroute()
{
        

    cy.server()

    cy.route(
        {
            method: 'PUT',
            url: 'User/*',
            status: 201,
            response :{
                "name" : "morpheus",
                "job": "leader"
            },
            delay: 1000
        })
        .as('CreateUser')

// cy.get('.network-put').click()

// cy.get('.network-put-comment').should('contain',"Hey Comment do not exist")

        
}

}
export default Xhrroute;