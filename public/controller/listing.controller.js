(function () {
    'use strict';
    angular
        .module('onepush')
        .controller('listing', listingController)


    function listingController($http) {
        let vm = this
        vm.websites
        vm.searchQuery


        vm.like = function(website) {
            let url = website.url_address

            if(!localStorage.getItem(url) || !website.liked) {
                website.liked = true
                website.like_counter = website.like_counter + 1
                localStorage.setItem(url, website.like_counter)
            }
            else {
                website.liked = false
                website.like_counter = website.like_counter - 1
                localStorage.removeItem(url)
            }
        }

        const getWebsites =  () => {
            $http({
                method: 'GET',
                url: `${window.location.origin}/websites`
            }).then((response) => {
                console.log(response.data)
                vm.websites = response.data
                checkLocalStorage()
            }, (err) => {
                console.log(err)
            })
        }

        const checkLocalStorage = () => {
            vm.websites.forEach((website) => {
                let current_website_like_count = localStorage.getItem(website.url_address)
                if(current_website_like_count) {
                    website.like_counter = parseInt(current_website_like_count)
                    website.liked = true
                }
            })
        }

        (() => {
            getWebsites()
        })()
    }
})()