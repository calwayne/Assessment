import Alert from '../support/pageObjects/alert.objects';

const alert = new Alert;

describe('click to prompt javascript alert',function(){
    before(function(){


    });
    it('js alert prompt', function(){

        cy.visit({
            url: 'http://the-internet.herokuapp.com/javascript_alerts'
        })
        alert.getJSAlertClick();
    })
});