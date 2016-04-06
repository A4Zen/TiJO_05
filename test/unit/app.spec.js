describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return 2 and true for parametr "ala"', function(){
            expect(app.generateMessage('ala')).toEqual({vowel: 2, palindrome: true });
        });
        it('should return vowel count and true', function(){
            expect(app.generateMessage("rotor")).toEqual({vowel: 2, palindrome: true});
            expect(app.generateMessage("zaraz")).toEqual({vowel: 2, palindrome: true});
            expect(app.generateMessage("owocowo")).toEqual({vowel: 4, palindrome: true});
            expect(app.generateMessage("łapał")).toEqual({vowel: 2, palindrome: true});
        });
        it('should return vowel count and false', function(){
            expect(app.generateMessage("michał")).toEqual({vowel: 2, palindrome: false});
            expect(app.generateMessage("konrad")).toEqual({vowel: 2, palindrome: false});
            expect(app.generateMessage("dawid")).toEqual({vowel: 2, palindrome: false});
            expect(app.generateMessage("tomek")).toEqual({vowel: 2, palindrome: false});
        });
    });

    describe('isPalindrome', function () {
        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app,'isPalindrome');
                app.isPalindrome('ala')
            });
           it('should call isPalindrome function ', function(){
               expect(app.isPalindrome).toHaveBeenCalled();
               expect(app.isPalindrome).toHaveBeenCalledWith('ala');
           });
        });
        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.callThrough();
                app.generateMessage('ala')
            });
            it('should call isPalindrome function'+' when generateMessage call ', function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');
            });
        });
        describe('and.returnValue', function () {
            var vowel;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.returnValue(true);
            });
            it('should call ispalindrome and return 2 ', function(){
                vowel = app.isPalindrome('ala');
                expect(vowel).toBe(true);
            });
            it('should call generateMessage and isPalindrome should return true', function(){
                vowel = app.generateMessage('ala');
                expect(vowel).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.callFake', function () {
            var vowel;
            beforeAll(function(){
                spyOn(app,'isPalindrome').and.callFake(function(text){
                    var strTemp = text.toLowerCase(),
                        strLenght = strTemp.length;
                    var halfLenght = (strLenght %2 === 0) ?(strLenght / 2) :((strLenght - 1) / 2);
                    for(var i = 0; i < halfLenght; i++){
                        if(strTemp[i] !== strTemp.slice(-1 -i)[0]){
                            return false;
                        }
                    }
                    return true;
                });
            });
            it('should return true ', function(){
                vowel = app.isPalindrome('ala')
                expect(vowel).toEqual(true);
            });
        });
        describe('calls.count()', function () {
            var vowel;
            beforeAll(function() {
               spyOn(app,'isPalindrome').and.callThrough();
            });
            it('should notice that call isPalindrome is call', function(){
                vowel = app.isPalindrome('ala');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount');
                app.vowelCount('ala');
            });
            it('should call vowelCount function', function () {
                expect(app.vowelCount).toHaveBeenCalled();
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('kajak');
            });
            it('should call vowelCount and vowelCount functions when generateMessage function is called', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.returnValue', function () {
            var returns;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call generateMessage and return value {2, true}', function () {
                returns = app.generateMessage('zaraz');
                expect(returns).toEqual({vowel: 2, palindrome: true});
            });
            it('should call vowelCount and should return 2', function () {
                returns = app.vowelCount('zaraz');
                expect(returns).toEqual(2);
            });
        });

        describe('and.callFake', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callFake(function () {
                    return 99999;
                });
            });
            it('should return vowelCount with 99999', function () {
                expect(app.vowelCount('aszd')).toEqual(99999);
            });
            it('should notice vowelCount called second time when generateMessage called', function () {
                expect(app.generateMessage('ala')).toEqual({vowel: 99999, palindrome: true});
            });
        });

        describe('calls.count()', function () {
            var returns;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('should call vowelCount function', function () {
                returns = app.vowelCount('ala');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should notice vowelCount called second time when generateMessage called', function () {
                returns = app.generateMessage('yoloy');
                expect(app.vowelCount.calls.count()).toBe(2);
            });
            it('should notice vowelCount called third time when generateMessage is called second time', function () {
                returns = app.generateMessage('zieas');
                expect(app.vowelCount.calls.count()).toBe(3);
            });

        });
    });
});
