import Xhr_route from '../../support/pageObjects/xhr_route.objects';

const xhr_route = new Xhr_route;

describe('XHR testing create user',function(){
    beforeEach(function(){

        cy.request({
            url: 'https://reqres.in/api/users'
        })
    });
    it('XHR testing API create user', function(){
 
        xhr_route.getXHRroute();

    })
    

});


