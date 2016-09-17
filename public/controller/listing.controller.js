(function () {
    angular
        .module('onepush')
        .controller('listing', listingController)


    function listingController($http) {
        const vm = this
        vm.websites
        vm.searchQuery


        $http({
            method: 'GET',
            url: `${window.location.origin}/websites`
        }).then((response) => {
            console.log(response.data)
            vm.websites = response.data
        }, (err) => {
            console.log(err)
        })
    }
})()