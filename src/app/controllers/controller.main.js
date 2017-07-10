(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = ["dataservice", "config","$timeout"];

    function controller(dataservice, config,$timeout) {
        var self = this;
        self.resultStats ="";
        self.query = "malek";
        self.isSimpleSearch = false;

        
        $timeout(function(){
            self.isSimpleSearch = true;
        }, 10000)

        self.simpleSearch = function () {
            console.log("Searche for : " + self.query);

            dataservice.getData(self.query)
                .then(function (data) {
                    self.demandeurs.list = data.hits.hits;
                    self.resultStats ="About " + numberWithCommas(data.hits.total) + " results ( " + data.took / 1000 + " seconds) "            
                    console.log(self.demandeurs);


                });
        };
        init();

        function init() {
            self.contents = config.DIST;
            self.demandeurs = {
                list: []
            };

        }

    };
}(angular.module("app")));  