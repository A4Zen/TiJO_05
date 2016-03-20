describe('app', function () {
    'use strict';

    var app = window.app;

    var car;
    xdescribe('Car', function () {
        beforeEach(function () {
            car = new app.Car('Audi', 1998);
        });
        describe('property', function () {
            it('should defined model', function () {
                expect(car.model).toBeDefined();
            });
            it('should defined year', function () {
                expect(car.year).toBeDefined();
            });
        });
        describe('value', function () {
            it('should be set to Audi on model property', function () {
                expect(car.model).toBe('Audi');
            });

            car = new app.Car('BMW', 2000);

            it('should be set to 1998 on year property', function () {
                expect(car.year).toBe(1998);
            });
        });
    });

    var carPortal;
    describe('CarPortal', function () {
        carPortal = new app.CarPortal();

        it('should set username to john and password to 12345 when login is call', function () {
            carPortal.login('john', '12345');
            expect(carPortal.credentials).toEqual({username: 'john', password: '12345'});
        });
        it('should set username to maria and password to qwerty when login is call', function () {
            console.log('Michał Tyrka')
            console.log(carPortal.credentials);
            carPortal.login('maria', 'qwerty');
            expect(carPortal.credentials).toEqual({username: 'maria', password: 'qwerty'});
        });
    });
});
