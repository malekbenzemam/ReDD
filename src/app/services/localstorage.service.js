// storage.js
(function (app) {
    'use strict';

    app.factory('storage', storage)

    storage.$inject = ['$localStorage', '$q'];

    function storage($localStorage, $q) {
        var storageName = "ReDD";
        console.log("localstorage")
        return {
            getData: getData,
            saveData: saveData
        }
        
        
        function getData() {
            var deferred = $q.defer();
            var data = $localStorage[storageName];
            if(!data){
                return null ;
            } 

            deferred.resolve(data);
            return deferred.promise;

        }

        function saveData(data) {
            $localStorage[storageName] = data;
        }


    }
})(angular.module('app'));