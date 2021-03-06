(function() {
    'use strict';
    
    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['$firebaseArray'];
    
    function WaitListController($firebaseArray){
        var vm = this;
        
        var fireParties = new Firebase('https://fiery-inferno-8078.firebaseio.com/parties');
        
        function Party(){
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }
        
        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);        
        vm.addParty = addParty;
        
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
        }
    }
    
})();