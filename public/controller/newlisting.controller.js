(function() {
    'use strict';

    angular
        .module('onepush')
        .controller('newlisting', newlistingController)

    function newlistingController($http, $timeout) {
        const vm = this
        vm.loading = false
        vm.showalert = false

        vm.resetfields = () => {
            vm.loading = false
            vm.title = ""
            vm.url_address = ""
            vm.tag = ""
            $timeout(() => {
                vm.showalert = false
            }, 10000)
        }

        vm.submitNewWebsite = (title, url_addres, tag) => {
            vm.loading = true
            $http({
                method: 'POST',
                url: `https://hackerearth.0x10.info/api/one-push?type=json&query=push&title=${title}&url=${url_addres}&tag=${tag}`
            }).then((result) => {
                vm.showalert = true
                vm.message = result.data.message
                vm.statuscode = result.data.status
                console.log(result.data.message)
            }, (err) => {
                console.log(err)
            }).finally(() => {
                vm.resetfields()
            })
        }

        (() => {
          vm.resetfields()
        })()
    }
})();