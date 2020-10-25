class Xhrupdate
{

getXHRupdate()
{
    return cy.request('https://reqres.in/api/users/2')
    .its('body') // yields the first element of the returned list
    .as('user') // saves the object in the test context
    .then(function () {

      cy.request('POST', 'https://reqres.in/api/users/2', {
        "name": "morpheus",
        "job": "zion resident",
        body: 'Fast, easy and reliable testing for anything that runs in a browser.'
      })
      .its('body').as('post') // save the new post from the response
    })
    .then(function () {

      expect(this.post, 'updated job to zion resident')
        .property('job').to.equal(this.data.job)
    })
}
}
export default Xhrupdate;