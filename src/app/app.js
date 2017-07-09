(function () {
    "use strict";

    angular.module("app", ['ui.router'])
        .constant("config", {
            URL: "http://service.anem.dz:8081",
            DIST:"/dist",
            IMAGES:{
                root:"/dist/images/",
                categories: "/dist/images/products/categories",
                projects: "/dist/images/products/projects",
            },
            
            DATA: "api/_search",
            DOCUMENTS: "/dist/api/documents.json",
            SLIDES: "/dist/api/slides.json"
        });

} ());