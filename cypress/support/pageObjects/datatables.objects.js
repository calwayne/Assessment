class Datatables
{
example1DataTableWithoutClass()
{
    return cy.get();
}

example2DataTableWithClassLastName()
{
    // return cy.get('#table2').each(($el,index,$list)=>{
    //     $el.find('tbody > :nth-child(1) > .last-name').expect($el).to.contain('Smidth')
    //}) 
    return cy.get('#table2').each(($el,index,$list)=>{
           const textLastName=$el.find('td.last-name').eq(0).text()
           if(textLastName.includes('Smidth'))
           { console.log(el);
            el.find(':nth-child(1) > .action > [href="#edit"]').click();
           }
    }) 
} 
example2DataTableWithClassFirstName()
{
//     return cy.get('.first-name').should('have.value','John');
    return cy.get('#table2').each(($el,index,$list)=>{
    $el.find(':nth-child(1) > .action > [href="#edit"]').click()
})
} 
example2DataTableWithClassEmail()
{
    return cy.get('.email').should('have.value','jsmith@gmail.com');
} 
example2DataTableWithClassDue()
{
    return cy.get('.dues').should('have.value','$50.00');
}
example2DataTableWithClassWebsite()
{
    return cy.get('web-site').should('have.value','http://www.jsmith.com');
}
example2DataTableEdit()
{
    return cy.get('.action').eq(0).click();
} 
example2DataTableDelete()
{
    return cy.get('.action').eq(1).click();
} 
}
export default Datatables;