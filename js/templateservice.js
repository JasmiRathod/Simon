var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    this.head = "views/head.html";
    this.header = "views/header.html";
    this.content = "views/about.html";
        
    var d=new Date();
    this.year=d.getFullYear();
});