describe('Покупка нового аватара', function () {

    beforeEach('Вход на сайт', function () {
         cy.visit('https://pokemonbattle.ru/login'); // заходим на сайт
        });
    
 it('Процесс покупки нового аватара', function () {
       
        cy.get('#k_email').type('USER_LOGIN'); // вводим логин
        cy.get('#k_password').type('USER_PASSWORD'); // вводим почту
        cy.get('.MuiButton-root').click(); // нажимаем Войти
        cy.wait(1500)
        cy.get('body').should('be.visible'); // отображается начальная страница

        cy.get('.header_card_trainer').click(); // входим на свою страницу тренера
        cy.get('.single_page_body_avatar_gradient').should('be.visible'); // отображается страница тренера

        cy.get('.k_mobile > :nth-child(5)').click(); // входим в магазин
        cy.get('body').should('be.visible'); // отображается страница магазина

        cy.get(':nth-child(4) > .shop__button').click(); // выбираем автара и нажимаем купить
        cy.get('.payment_header').should('be.visible'); // отображается шапка страницы оплаты
        cy.get('.payment_page_content').should('be.visible'); // отображается страница оплаты

        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // вводим номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1226'); // вводим срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // вводим код
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('GERMAN DOLNIKOV'); // вводим имя владельца
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку оплатить
        cy.get('.payment_header').should('be.visible'); // отображается шапка страницы оплаты
        cy.get('.payment_page_content').should('be.visible'); // отображается страница оплаты

        cy.get('.style_1_base_input').type('56456'); // вводим код из смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку оплатить

        cy.get('.payment_receipt_open_button').should('be.visible'); // отображается свернутая информация заказа
        cy.get('.payment_receipt_open_button_icon').should('be.visible').click(); // можно посмотреть подробную информацию
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // содержит текст

        cy.get('.style_1_base_link_blue').should('be.visible').click(); // возращаемся в магазин
        cy.get('.header_card_trainer').should('be.visible').click(); // входим на страницу трунера
        cy.get('.single_page_body_avatar_img').should('be.visible') // убеждаемся что отобразился аватар которого мы купили

    })
})