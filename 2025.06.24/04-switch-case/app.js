const input = prompt('please enter a number betwwn 1-9')

// if(input == 1) alert ('one')
// else if(input == 2) alert ('two')
// else if(input == 3) alert ('three')

    switch (input) {
        case 1:
            alert('one')
        case 2:
            alert('two')
        case 3:
            alert('three')
            break;
        default:
            alert('unrecognized value')  
    }