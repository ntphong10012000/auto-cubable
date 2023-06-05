describe('My first test suite', function() {

it('test case 1', function() {
cy.visit('https://workblink.com/sign-in')
//cy.visit('https://app.cubable.com')
//input email address
cy.xpath('//input[@placeholder="Type your email"]').type("phong.nguyen@cubable.com")
//cy.xpath('//input[@placeholder="Type your email"]').type("nguyenphong10012000@gmail.com")
//cy.get('wgc-form-field:nth-of-type(1) > .wgc-form-field__input-container > .ng-dirty.ng-touched.ng-valid').type("phong.nguyen@cubable.com")
//input password
cy.xpath('//input[@placeholder="Type a password"]').type("Phong1001")
//cy.xpath('//input[@placeholder="Type a password"]').type("1")
//click button sign in
cy.xpath('//div[@class="wgc-button-wrapper"]').click()
// chọn workspace 
cy.xpath('//body[1]/app[1]/section[1]/sign-in[1]/div[1]/div[1]/div[1]/div[1]/div[2]/wgc-scroll-bar[1]/table[1]/tbody[1]/tr[2]/td[1]/div[1]/div[1]').click()
//tạo collection 
cy.xpath('//button[@class="wgc-button ml-15 wgc-primary wgc-button--has-icon wgc-button--medium wgc-button--center"]//div[@class="wgc-button-wrapper"]').click()
cy.xpath('//button[@icon="collection-plus"]').click()
cy.xpath('//wgc-card[@class="wgc-card mr-30"]//div[@class="wgc-button-wrapper"]').click()
// Tên collection 
cy.xpath('//input[@placeholder="Type a name"]').type("Quản lý bán hàng")
cy.xpath('//button[@type="submit"]//div[@class="wgc-button-wrapper"]').click()
cy.xpath('//div[contains(text(),"Done")]').click()
//Tạo board 
cy.xpath('//div[contains(text(),"New board")]').click()
cy.xpath('//input[@placeholder="Type a name"]').type("Khách hàng tiềm năng")
cy.xpath('//wgc-icon[@class="wgc-icon ng-star-inserted"]//i[@class="icon icon-check ng-star-inserted"]').click()
// tạo màu board
cy.xpath('//div[@class="cdk-drag wgc-list-item ng-star-inserted wgc-list-item--active"]//div[@class="wgc-color-dot-wrapper ng-star-inserted"]').click()
cy.get('[style="--color-picker-item-color: #242426; --color-picker-item-bg-color: #ffd426;"]') .click()

// Tạo board Khách hàng 
cy.get('.mt-15 > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.xpath('//input[@placeholder="Type a name"]').type("Khách hàng")
cy.get('.wgc-primary > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click()

// Tạo board đơn hàng
cy.get('.mt-15 > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.xpath('//input[@placeholder="Type a name"]').type("Đơn hàng")
cy.get('.wgc-primary > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click()

// Tạo board danh sách sản phẩm dịch vụ
cy.get('.mt-15 > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.xpath('//input[@placeholder="Type a name"]').type("Danh sách sản phẩm/dịch vụ")
cy.get('.wgc-primary > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click()
cy.wait(2000)
// Tạo image field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.wait(2000)
cy.get(':nth-child(22) > .wgc-menu-item__content').scrollIntoView()
cy.wait(5000)
cy.get(':nth-child(22) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Hình đại diện")
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()

// Tạo dropdown field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.wait(2000)
cy.get(':nth-child(3) > .wgc-menu-item__content').scrollIntoView()
cy.wait(5000)
cy.get(':nth-child(3) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Trạng thái")
//option1 dropdown 
cy.get('.layout-align-space-between-center > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Đang bán")
//tạo màu xanh lá
cy.get('.wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #248a3d;"]').click()
//option2 dropdown
cy.get('.layout-align-space-between-center > .btn-normal > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Dừng")
//tạo màu đỏ
cy.get(':nth-child(2) > .wgc-form-field > .wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #d30f45;"]').click()
// Click button create 
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()
// Tạo list view 
cy.get('.board-function > .wgc-icon-button > .wgc-icon-button-wrapper > .wgc-icon > .icon').click()
cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper').click()
cy.get('.ng-invalid').type("hhh")
cy.get('.wgc-switch.mb-10 > .wgc-switch__box').click()
cy.get('[wgcdialogheader=""] > .wgc-primary > .wgc-button-wrapper > .wgc-button__content').click()


// Tạo board quản lí KPI 
cy.get('.mt-15 > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.xpath('//input[@placeholder="Type a name"]').type("Quản lí KPI")
cy.get('.wgc-primary > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click()
//Vào lại board khách hàng tiềm năng
cy.wait(2000)
cy.xpath('//span[contains(text(),"Khách hàng tiềm năng")]').click()


// tạo màu board
//cy.get('.wgc-list-item--active > .wgc-list-item__content > .wgc-list-item__content-wrapper > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
//cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #cb6f10;"]').click()




// chỉnh tên Name field
//cy.xpath('//div[@class="header-cell primary-cell ng-tns-c394-2 resizable-cell ng-star-inserted"]//div[@class="header-cell-wrapper ng-tns-c394-2 cursor"]').click()
//cy.xpath('//div[@class="wgc-menu-item__prefix"]//i[@class="icon icon-edit ng-star-inserted"]').click()
//cy.get('.wgc-form-field--touched > .wgc-form-field__input-container > .wgc-form-field__input > .ng-valid').clear().type("Tên khách hàng tiềm năng")
//Tạo text field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.get(':nth-child(1) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Tên công ty (nếu có)")
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()

// tao email field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.get(':nth-child(7) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Email")
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()

// Tạo phone field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.get(':nth-child(11) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Số điện thoại")
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()

// Tạo dropdown field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.get(':nth-child(3) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Trạng thái | Lead")
//option1 dropdown 
cy.get('.layout-align-space-between-center > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Mới")
//tạo màu blue 
cy.get('.wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #0040dd;"]').click()
//option2 dropdown
cy.get('.layout-align-space-between-center > .btn-normal > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Chăm sóc lần 1")
//tạo màu xanh lá
cy.get(':nth-child(2) > .wgc-form-field > .wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #4cdd94;"]').click()
//option3 dropdown
cy.get('.layout-align-space-between-center > .btn-normal > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Chăm sóc lần 2")
//tạo màu blue 
cy.get(':nth-child(3) > .wgc-form-field > .wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #248a3d;"]').click()
//option4 dropdown
cy.get('.layout-align-space-between-center > .btn-normal > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Chăm sóc lần 3")
//tạo màu blue 
cy.get(':nth-child(4) > .wgc-form-field > .wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #242426; --color-picker-item-bg-color: #69f0ac;"]').click()

//option5 dropdown
cy.get('.layout-align-space-between-center > .btn-normal > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Mua hàng")
//tạo màu blue 
cy.get(':nth-child(5) > .wgc-form-field > .wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #242426; --color-picker-item-bg-color: #70d7ff;"]').click()

//option6 dropdown
cy.get('.layout-align-space-between-center > .btn-normal > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("Dừng")
//tạo màu blue 
cy.get(':nth-child(6) > .wgc-form-field > .wgc-form-field__input-container > .wgc-color-dot > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content > .wgc-color-dot-wrapper').click()
cy.get('[style="--color-picker-item-color: #fff; --color-picker-item-bg-color: #242426;"]').click()
// Click button create 
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()

// Tạo paragraph field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.get(':nth-child(5) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Ghi chú")
cy.get('.field-value__input-box__body > .wgc-form-field > .wgc-form-field__input-container > .wgc-form-field__input > .ng-untouched').type("Những điều cần lưu ý về khách hàng")
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()

// Tạo people field
cy.get('.action-cell > .header-cell-wrapper > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').click()
cy.get(':nth-child(10) > .wgc-menu-item__content').click()
cy.get('.wgc-form-field__input > .ng-invalid').type("Nhân viên phụ trách")
cy.get('form.ng-touched > .layout-fixer-5 > :nth-child(1) > .wgc-button > .wgc-button-wrapper').click()






/*for(let i = 1; i< 100; i++) {
    //cy.xpath('//wgc-icon[@class="wgc-icon ng-star-inserted"]//i[@class="icon icon-check ng-star-inserted"]').click()
    cy.get('.inserting-row__left > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__icon > .wgc-icon > .icon').click()
    cy.get('.ng-invalid').type("1")
    //cy.get('.inserting-row__left > .wgc-basic-button > .wgc-basic-button-wrapper > .wgc-basic-button__content').type("item 1")
    cy.get('.inserting-row__right > .wgc-primary > .wgc-button-wrapper > .wgc-button__content').click()

}*/
//cy.get('.wgc-basic-button__content > .wgc-truncate > p > span').click()
//cy.xpath('//div[@class="ql-editor ql-blank"]//p').type("hello world")
//cy.xpath('//div[contains(text(),"Send")]').click()

/*it('test case 2', function() {
cy.visit('https://workblink.com/sign-in')
cy.xpath('//body[1]/app[1]/section[1]/sign-in[1]/div[1]/div[1]/div[1]/div[1]/div[2]/wgc-scroll-bar[1]/table[1]/tbody[1]/tr[2]/td[1]/div[1]/div[1]').click()


}  )*/
})
} )

