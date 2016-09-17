'use strict';
const Hapi = require('hapi')
const Inert = require('inert')
const Server = new Hapi.Server()


const plugins = [Inert]

Server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || '8000'
})


var init = {
    routes: () => {
        Server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: 'public',
                    listing: true
                }
            }
        })

        Server.route({
            method: 'GET',
            path: '/websites',
            handler: (request, reply) => {
                reply([{
                    title: 'Daniel g. Siegel',
                    favicon_image: 'asd.png',
                    url_address: 'dgsiegel.net',
                    tag: 'Personal'
                }, {
                    title: 'Ross Pernman',
                    favicon_image: 'asd.png',
                    url_address: 'rosspenman.com',
                    tag: 'Personal'
                }, {
                    title: 'goker/resume',
                    favicon_image: 'asd.png',
                    url_address: 'gokercebeci.com/me',
                    tag: 'Blog'
                }, {
                    title: 'Gilles Quenot / SO',
                    favicon_image: 'asd.png',
                    url_address: 'goo.gl/fdr5Kq',
                    tag: 'Social'
                }, {
                    title: 'Nithin Rao Kumlekar',
                    favicon_image: 'asd.png',
                    url_address: 'nithinkumblekar.com',
                    tag: 'Caricature'
                }, {
                    title: 'webasd',
                    favicon_image: 'asd.png',
                    url_address: 'asd.com',
                    tag: 'Personal'
                }, {
                    title: 'webasd',
                    favicon_image: 'asd.png',
                    url_address: 'asd.com',
                    tag: 'Personal'
                }, {
                    title: 'webasd',
                    favicon_image: 'asd.png',
                    url_address: 'asd.com',
                    tag: 'Personal'
                }])
            }
        })
    },
    server: () => {
        Server.start(() => { console.log(`Listening on port ${Server.info.uri}`) })
    }
}

Server.register(plugins, (err) => {
    if (err) throw err

    init.routes()
    init.server()
})