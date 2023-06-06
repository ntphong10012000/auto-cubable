import faker from 'faker';
describe('My first test suite', function() {
    beforeEach(() => {
        cy.login();
    });

    it('check create workspaces', function() {
        cy.get('h4[class="flex mr-5"]').click();
        cy.get('input[placeholder="Type a workspace name"]').type("automation-test");
        cy.wait(1000);
        cy.xpath('//div[contains(text(),"Edit")]').click();
        //cy.get(':nth-child(3) > .wgc-form-field__input-container > .wgc-form-field__input > .ng-valid').clear();
        const randomName = faker.lorem.words().replace(/\s/g, ''); // tạo ngẫu nhiên xoá khoảng cách
        cy.get(':nth-child(3) > .wgc-form-field__input-container > .wgc-form-field__input > .ng-valid').clear().type(randomName);
        cy.wait(1000);
        cy.get('[wgcformfieldsuffix=""] > .wgc-button > .wgc-button-wrapper > .wgc-button__content').click()
        cy.get('div:nth-child(31)').click();
        cy.xpath('//div[contains(text(),"Done")]').click();
        cy.wait(2000);
    });

    });