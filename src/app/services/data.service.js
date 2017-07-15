// dataservice factory
(function (app) {

    app.factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'config', '$q', 'storage'];

    function dataservice($http, config, $q, storage) {

        var options = {
            from: 0, size: 10, 
            default_operator: "and",
            fields : ["_all"]// ["Nom","Prenom"],
        };
        options = storage.getData() || options;
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

            data = {
                "query": {
                    "multi_match": {
                        "query": term,
                        "fields": ["nom", "prenom"]
                    }
                }
            };
            data = {
                "from": options.from, "size": options.size,
                "query": {
                    "bool": {
                        "must": {
                            "query_string": {
                                "query": term,
                                "fields": options.fields,
                                "default_operator": options.default_operator
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