import Xhrupdate from '../../support/pageObjects/xhr_update.objects';

const xhrupdate = new Xhrupdate;

describe('XHR update', function() 
{
    before(function(){
        cy.fixture('updateuserdata').then((data)=>{
            this.data=data
        });

    });
it('updating XHR',function() {

    xhrupdate.getXHRupdate();

})


})