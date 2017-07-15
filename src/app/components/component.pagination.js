(function (app) {
    "use strict";
    app.component("component.pagination", {
        restrict: 'E',
        templateUrl: "dist/views/component.pagination.html",
        controller: controller,
        controllerAs: "vm",
        bindings: {
            total: "<",
            current: "<",
            onBtnClick: '&'
        }

    });

    function controller() {
        this.total = Math.floor(this.total / 10) + 1;
        this.getPage = function (index) {
            console.log(index);
            this.onBtnClick() ;
            
        }

        this.getpages = function (current, total) {
            var array = [];

            var last = 10 + Math.floor(current / 10) * 10;
            last = last < total ? last : total;

            var start = Math.floor(current / 10) * 10;
            start = start > 0 ? start - 1 : 1;

            for (var index = start; index <= last; index++) {
                array.push(index < 10 ? "0" + index : index);

            }
            console.log(array);
            return array;
        };

    };


}(angular.module("app")));