import Xhr from '../../support/pageObjects/xhr_req.objects';

const xhr = new Xhr;

describe('List Users',function(){
    beforeEach(function(){

        cy.visit({
            url: 'https://reqres.in/'
        })
    });
    it('XHR testing API get List of Users', function(){
 


        xhr.getXHR();


    })
    

});


