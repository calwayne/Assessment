/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import Editor from '../support/pageObjects/editor.objects';
import 'cypress-iframe';

const editor = new Editor;

describe('type test into iframe editor', function() {
    before(function(){
        cy.fixture('editordata').then((data)=>{
            this.data=data
        });

    });


    it('2.1.1 iframe editor', function(){

        cy.visit({
            url: 'http://the-internet.herokuapp.com/iframe'
        }).contains('An iFrame containing the TinyMCE WYSIWYG Editor');


        cy.frameLoaded("#mce_0_ifr")
        cy.iframe("#mce_0_ifr").clear().type(this.data.editor);
   


    })

});