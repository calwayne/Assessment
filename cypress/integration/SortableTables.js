import Datatables from '../support/pageObjects/datatables.objects';

const datatables = new Datatables;

describe('click Edit and Delete button on datatable',function(){
    before(function(){

    });
    it('datatables without classes', function(){

        cy.visit({
            url: 'http://the-internet.herokuapp.com/tables'
        })
        // datatables.example1DataTableWithoutClass();



// Make sure every singe edit hyperlink are clickable and assertion links verified on each clicks
        cy.get("tr td:nth-child(5) ").each(($e1, index, $list) => {
            const text=$e1.text()
            if(text.includes('http://www.jsmith.com'))
            {
                cy.get("tr td:nth-child(5)").eq(index).next().then(function(edit)
                {
                    const editText = edit.text()
                    expect(editText).to.have.string('edit');
                    cy.get('a[href*="#edit"]').click({multiple:true});
                })
                cy.log('eq','http://the-internet.herokuapp.com/tables#edit')
            }

        })
// Make sure every singe delete hyperlink are clickable and assertion links verified on each clicks
        cy.get("tr td:nth-child(5) ").each(($e1, index, $list) => {
            const text=$e1.text()
            if(text.includes('http://www.jsmith.com'))
            {
                cy.get("tr td:nth-child(5)").eq(index).next().then(function(edit)
                {
                    const editText = edit.text()
                    expect(editText).to.have.string('delete');
                    cy.get('a[href*="#delete"]').click({multiple:true});
                })
                cy.log('eq','http://the-internet.herokuapp.com/tables#delete')
            }

        })

    
    })
});