// dataservice factory
(function (app) {

    app.factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'config', '$q'];

    function dataservice($http, config, $q) {

        return {
            getData: getData
        };


        function getData(term) {
            var dsl = query(term);
            return $http.post(config.DATA, dsl)
                .then(function (response) {
                    return response.data;
                })

        };


        function query(term) {
            var data = {
                "query": {
                    "term": { "nom": term }
                }
            };

            data = {
                "query": {
                    "multi_match": {
                        "query": term,
                        "fields": ["nom", "prenom"]
                    }
                }
            };
            // "DateDebutContrat"
            data = {
                "from": 0, "size": 5,
                "query": {
                    "bool": {
                        "must": {
                            "query_string": {
                                "query": term,
                                "fields": ["_all"],
                                "default_operator": "and"
                            }
                        },

                        "filter": [
                            
                            { "range": { "DateDebutContrat": { "gte": "2000-01-01" } } }
                        ]
                    }

                }
            };
            // console.log(data);
            return JSON.stringify(data);

        }

        function getOneComplete(response) {
            return response.data;
        };

        function getAllComplete(response) {
            return response.data;
        };

        function getAllFailed(error) {
            logger.error('XHR Failed .' + error.data);
        };
    }
}(angular.module('app')));