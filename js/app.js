     var $query = null;
        var data = {
            "query": {
                "bool": {
                    "must": {
                        "bool": {
                            "should": [
                                { "match": { "nom": "mohamed" } },
                                { "match": { "prenom": "ahmed" } }]
                        }
                    }
                }
            }
        }


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
            data = {
                "query": {
                    "query_string": {
                        
                        "query": term
                    }
                }
            };
            console.log(data);
            return JSON.stringify(data);

        }

        function showResult(data) {
            console.log(data.hits)
            $("#result").empty();

            data.hits.hits.map(function (item) {
                return item._source.id + " " + item._source.nom + " " + item._source.prenom + " " + item._source.dateNaissance;
            })
                .forEach(function (item) {
                    $("#result")
                        .append("<li>" + item + "</li>");

                });
        }

        function search(e) {
            e.preventDefault();
            $.ajax({
                method: "POST",
                // async:false,
                // crossDomain: true, 
                // dataType : 'json',
                data: query($query.val()),
                contentType: 'application/json',
                // beforeSend: function (xhr) {
                //     xhr.setRequestHeader('Authorization', 'Basic ' + btoa('elastic:changeme'));
                // },
                url: "/api/_search",
                success: showResult,
                error: function (err) { console.log(err); }


            });


        }

        $(function () {
            $query = $("#query");
            $("#search").click(search);
            $("#query").on('input', search);

            $("#query").on('input', function () {
                console.log('change');

            });



        })