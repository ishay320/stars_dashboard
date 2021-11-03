# Telescope Dashboard Ariel University

this is display that show status and control the telescope of ariel university.

it contain:
* weather & status tab
    * temperature
    * humidity
    * wind direction
    * wind strength
    * power status
    * dome status 
    * azimuth
    * pos in sky
* telescope camera
    * camera of the telescope
    * control buttons
* telescope control
    * power
    * dome
    * camera of the interior
* AC control
    * control the AC via esp8266 remotely
## the main page:
![example](https://github.com/ishay320/stars_dashboard/blob/main/docs/mainPage.jpeg)

## how to start the server:
clone the project, and type in the command line:

```
npm install
npm start
```

## side project
remote control for the AC unit written in C++ for the esp8266
- https://github.com/ishay320/esp8266_IRremote
