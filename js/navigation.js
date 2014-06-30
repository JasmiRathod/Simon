var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
        name: "About",
        classis: "active",
        link:"#/about",
        last:"|",
        subnav: []
    }, {
        name: "Intelligence",
        active: "",
        link:"#/intelligence",
        last:"|",
        subnav: []
    }, {
        name: "Clients",
        classis: "",
        link:"#/clients",
        last:"|",
        subnav: []
    }, {
        name: "Partners",
        classis: "",
        link:"#/partners",
        last:"|",
        subnav: []
    }, {
        name: "Social",
        classis: "",
        link:"#/social",
        last:"",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for(var i=0;i<navigation.length;i++) {
                if(navigation[i].name==menuname)
                {
                    navigation[i].classis="active";
                }
                else {
                    navigation[i].classis="";
                }
            }
            return menuname;
        },
        
    }
});