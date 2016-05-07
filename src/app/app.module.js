(function() {
    'use strict';
    
    angular
    .module('app',[
        //Angular modules
        'ngRoute',

        //Third party modules
        'firebase',
        
        // Custom Modules.
        'app.landing',
        'app.waitList'
    ]);
    
})();