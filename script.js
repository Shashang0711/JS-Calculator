let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (b) => {
        switch (b.target.innerHTML) {
            case "AC":
                display.innerHTML = ''
                break;
            case "C":
                if (display.innerHTML) {
                    display.innerHTML = display.innerHTML.slice(0, -1)
                }
            case "=":
                try {
                    display.innerHTML = eval(display.innerHTML)
                } catch {
                    display.innerHTML = "Error!"
                }


                break;
            default:
                display.innerHTML += b.target.innerHTML
        }
    })
})