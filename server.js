const express = require('express')
const nunjucks = require('nunjucks')
const app = express();

app.use(express.static('static'))

nunjucks.configure('views', {
    express: app,
    autoescape: true
})

app.get('/', (req, res) => {

    res.render('formulario.html')
})

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'))