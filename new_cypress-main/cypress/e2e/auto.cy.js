describe('Проверка авторизации', function () {
    
    beforeEach('Начало теста', function () {
         cy.visit('https://login.qa.studio/'); // заходим на сайт
    });
    
    afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

   it('Верный логин и верный пароль', function () {
        
        cy.get('#mail').type('german@dolnikov.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.wait(1500)
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
    })

    it('Функция восстановления пароля', function () {
        
        cy.get('#forgotEmailButton').click(); // нажимаем забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // вводим логин
        cy.get('#restoreEmailButton').click(); // нажимаем отправить код
        cy.wait(1500)
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
    })

    it('Верный логин и НЕверный пароль', function () {
        
        cy.get('#mail').type('german@dolnikov.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudioq'); // вводим неверный пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.wait(1500)
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
    })

    it('НЕверный логин и верный пароль', function () {
        
        cy.get('#mail').type('german@folnikov.ru'); // вводим неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.wait(1500)
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
    })

    it('Логин без @ и верный пароль', function () {
        
        cy.get('#mail').type('germandolnikov.ru'); // вводим неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.wait(1500)
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // содержит текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
    })

     it('Приведение к строчным буквам в логине', function () {
        
        cy.get('#mail').type('gErman@dolnikoV.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // нажимаем войти
        cy.wait(1500)
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // содержит текст  //баг пойман
        cy.get('#messageHeader').should('be.visible'); // текст виден
    })



})
