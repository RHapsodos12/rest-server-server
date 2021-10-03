const express = require('express')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        // Middlewares
        this.middlewares()

        // Routes
        this.routes()
    }

    middlewares() {
        this.app.use( express.static('public') ) 
    }

    routes() {
        this.app.get('/test', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API'
            })
        })

        this.app.post('/', (req, res) => {
          res.send('POST request to the homepage')
        })

        this.app.put('/products', (req, res) => {
          const { id, name, description } = req.body;
          res.send(`Name id name, desc description`);
        });
        
        this.app.delete('/products/:id', (req, res) => {
          const { id } = req.params;
          res.send(`Delete record with id id`);
        });
          
        this.app.get('/', (req, res) => {
            res.send('GET request to the homepage')
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening port ${process.env.PORT}`)
        })
    }
}

module.exports = Server
