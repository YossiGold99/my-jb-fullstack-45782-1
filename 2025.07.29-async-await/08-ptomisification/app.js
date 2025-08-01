"use strict";

(async () => {
    const getCurrentPosition = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    try {
        const geo = await getUserLocation()
        console.log(geo)
    } catch (err) {
        console.log(err)
    }
})()
