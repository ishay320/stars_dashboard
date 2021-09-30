const express = require('express')
const app = express()
const port = 5000
var data;


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
    // send the data to the user
    res.json(data);
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

//get data from the different server every hour
setInterval(() => {
    // get weather data from another server
    //example:
    /*
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var json = this.responseText;
          data = json;
        }
      };
      xhttp.open("GET", "/data", true); // the another server
      xhttp.send();
      */
}, 6000 * 60);

//mockup
data = json = {
    "temperature": [
        { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 23.2 },
        { "Sun Sep 19 2021 19:46:37 GMT+0300 (Israel Daylight Time)": 23.2 },
        { "Sun Sep 19 2021 20:46:37 GMT+0300 (Israel Daylight Time)": 25.2 },
        { "Sun Sep 19 2021 21:46:37 GMT+0300 (Israel Daylight Time)": 23.2 },
        { "Sun Sep 19 2021 22:46:37 GMT+0300 (Israel Daylight Time)": 21.2 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 26.2 },
        { "Sun Sep 20 2021 00:46:37 GMT+0300 (Israel Daylight Time)": 23.2 }
    ],
    "humidity": [
        { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 19:46:37 GMT+0300 (Israel Daylight Time)": 20 },
        { "Sun Sep 19 2021 20:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 21:46:37 GMT+0300 (Israel Daylight Time)": 30 },
        { "Sun Sep 19 2021 22:46:37 GMT+0300 (Israel Daylight Time)": 45 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },

        { "Sun Sep 20 2021 00:46:37 GMT+0300 (Israel Daylight Time)": 11 }
    ],
    "wind_strength": [
        { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 19:46:37 GMT+0300 (Israel Daylight Time)": 20 },
        { "Sun Sep 19 2021 20:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 21:46:37 GMT+0300 (Israel Daylight Time)": 30 },
        { "Sun Sep 19 2021 22:46:37 GMT+0300 (Israel Daylight Time)": 45 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 20 2021 00:46:37 GMT+0300 (Israel Daylight Time)": 11 }
    ],
    "wind_direction": [
        { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 19:46:37 GMT+0300 (Israel Daylight Time)": 210 },
        { "Sun Sep 19 2021 20:46:37 GMT+0300 (Israel Daylight Time)": 180 },
        { "Sun Sep 19 2021 21:46:37 GMT+0300 (Israel Daylight Time)": 30 },
        { "Sun Sep 19 2021 22:46:37 GMT+0300 (Israel Daylight Time)": 45 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 20 2021 00:46:37 GMT+0300 (Israel Daylight Time)": 90 }
    ],
    "rain": [

    ],
    "light": [
        { "Sun Sep 19 2021 18:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 19:46:37 GMT+0300 (Israel Daylight Time)": 20 },
        { "Sun Sep 19 2021 20:46:37 GMT+0300 (Israel Daylight Time)": 10 },
        { "Sun Sep 19 2021 21:46:37 GMT+0300 (Israel Daylight Time)": 30 },
        { "Sun Sep 19 2021 22:46:37 GMT+0300 (Israel Daylight Time)": 45 },
        { "Sun Sep 19 2021 23:46:37 GMT+0300 (Israel Daylight Time)": 23 },
        { "Sun Sep 20 2021 00:46:37 GMT+0300 (Israel Daylight Time)": 11 }
    ]

}