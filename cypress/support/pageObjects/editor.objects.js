const data = require('../../fixtures/editordata.json');

class Editor
{

getIframe()
{
    return cy.get('iframe')
      
    .then(($iframe) => {
        const $body = $iframe.contents().find('body')
    
        cy.wrap($body)
          .find('#tinymce')
          .type('fake@email.com')
      })
    
}
getEdit()
{
    return cy.get('#tinymce').type(data.editor);
}

}
export default Editor;