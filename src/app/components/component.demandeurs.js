(function (app) {
    "use strict";

    function controller() {
        
    };
    app.component("component.demandeurs", {
            templateUrl: "views/component.demandeurs.html",
            controller: controller,
            controllerAs: "vm",
            bindings:
            {
                books: "<",
                pages: "<"
            }
        });
} (angular.module("app")));