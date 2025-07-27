"use strict";

(() => {

    const user = {
        id:123,
        name:'israel israeli'
    }

    const showUser =() => {
        console.log('function started')
        console.log(user)
        console.log('function fiinished')
    }
   

    document.getElementById('show-user').addEventListener('click', () =>{
        console.log('event started')
        console.log()
        console.log('function finished')

    //////////////////////////////////////////
    
    
    const getUser =() =>{
        console.log('function started')
        console.log('function finished')
        return
    }

    
    })
})()