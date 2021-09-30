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

app.get('/data', (req, res) => {
    //get data from the different server
    var data = {
        "temperature": [
            { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 23.2 }
        ],
        "humidity": [
            { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 }
        ],
        "wind_strength": [
            { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 }
        ],
        "wind_direction": [
            { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 180 }
        ],
        "rain": [

        ],
        "light": [
            { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 }
        ]
    }

    // send the data to the user
    res.json(data);
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

