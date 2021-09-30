const express = require('express')
const app = express()
const port = 5000
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
    res.sendFile('dashboard.html', { root: __dirname + "/html_dashboard" }
    );
})

app.get('/camera', (req, res) => {
    res.sendFile('camera.html', { root: __dirname + "/html_dashboard" }
    );
})

app.get('/control', (req, res) => {
    res.sendFile('control.html', { root: __dirname + "/html_dashboard" }
    );
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

