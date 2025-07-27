"use strict";

(() => {

    const user = {
        id: 123,
        name: 'israel israeli'
    }

    const showUser = () => {
        console.log('function started')
        setTimeout(() => {
            console.log(user)
        }, 3000);
    }

    document.getElementById('show-user').addEventListener('click', () => {
        console.log('event started')
        showUser()
        console.log('event finished')
    })

    //////////////////////////////////
    const getUser = () => {
        console.log('function started')
        setTimeout(() => {
            useCallback(user)
        }, 3000)
        console.log('function finished')
        return 'yossi'
    }

    document.getElementById('get-user').addEventListener('click', () => {
        console.log('event started')
        const user = getUser(user => {
            console.log(user)
        })
        console.log(user)
        console.log('event finished')

    })

})()