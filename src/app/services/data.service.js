// dataservice factory
(function (app) {

    app.factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'config', '$q', 'storage'];

    function dataservice($http, config, $q, storage) {

        var options = {
            from: 0, size: 10,
            default_operator: "and",
            fields: ["_all"],// ["Nom","Prenom"],
            DAIP: { "range": { "DateDebutContrat": { "gte": "2000-01-01" } } }
        };
        options = storage.getData() || options;
        return {
            getData: getData
        };

        function getData(term, page) {
            page = (page || 1);

            var from = (page - 1) * 10;

            var dsl = query(term, from);
            return $http.post(config.DATA, dsl)
                .then(function (response) {
                    response.data.hits.current = page;
                    return response.data;
                })

        };

        function query(term, from) {


            data = {
                "from": from, "size": options.size,
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
                            options.DAIP
                        ]
                    }

                }
            };
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