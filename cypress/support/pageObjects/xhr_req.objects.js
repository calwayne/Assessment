class Xhr
{

getXHR()
{
        return cy.request('/api/users?page=2')
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        });
}

}
export default Xhr;