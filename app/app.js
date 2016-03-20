(function () {
    'use strict';

    window.app = {
        Car: function (model, year) {
            this.model = model;
            this.year = year;
        },
        CarPortal: function () {
            this.credentials = {};
            this.login = function (username, password) {
                this.credentials.username = username;
                this.credentials.password = password;
            };
            this.logout = function () {
                this.credentials = {};
            };
        }
    }
})();







