(function () {
    angular
        .module('onepush')
        .controller('app', appController)


    function appController($http) {
        const vm = this
        vm.name = 'Onepush'
    }
})()