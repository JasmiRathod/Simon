var mainnavigationservice = angular.module('mainnavigationservice', [])

.factory('MainNavigationService', function () {
    var mainnavigation = [{
        name: "About",
        classis: "active",
        link:"#/about1",
        last:"|",
        subnav: []
    }, {
        name: "People",
        active: "",
        link:"#/people",
        last:"|",
        subnav: []
    }, {
        name: "Client Speak",
        classis: "",
        link:"#/clientspeak",
        last:"|",
        subnav: []
    }, {
        name: "Contact",
        classis: "",
        link:"#/contact",
        last:"",
        subnav: []
    }];

    return {
        getnav: function() {
            return mainnavigation;
        },
        makeactive: function(menuname) {
            for(var i=0;i<navigation.length;i++) {
                if(mainnavigation[i].name==menuname)
                {
                    mainnavigation[i].classis="active";
                }
                else {
                    mainnavigation[i].classis="";
                }
            }
            return menuname;
        },
        
    }
});