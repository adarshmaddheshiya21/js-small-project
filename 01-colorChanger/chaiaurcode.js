const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {

        // using if else 
        // if(e.target.id == 'grey') {
        //     body.style.backgroundColor = 'grey'
        // } else if(e.target.id == 'white') {
        //     body.style.backgroundColor = 'white'
        // }else if(e.target.id == 'blue') {
        //     body.style.backgroundColor = 'blue'
        // }else{
        //     body.style.backgroundColor = 'yellow'
        // }


        // using switch statement
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;

            default:
                body.style.backgroundColor = 'black'
                break;
        }
    })
})