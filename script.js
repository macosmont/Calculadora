var calculator = {
    display: document.querySelector('.display'),
    buttons: document.querySelectorAll('.button'),
    clear: function() {
        this.display.innerHTML = '0';
    },
    input: function(value) {
        if(this.display.innerHTML === '0') {
            this.display.innerHTML = value;
        } else {
            this.display.innerHTML += value;
        }
    },
    evaluate: function() {
        this.display.innerHTML = eval(this.display.innerHTML);
    }
}

for(var i = 0; i < calculator.buttons.length; i++) {
    calculator.buttons[i].addEventListener('click', function() {
        var value = this.innerHTML;
        if(value === 'C') {
            calculator.clear();
        } else if(value === '=') {
            calculator.evaluate();
        } else {
            calculator.input(value);
        }
    });
}
