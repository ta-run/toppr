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