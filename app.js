const obj = {
    name: 'Ashley',
    occupation: 'Loan Officer',
    sayName: function () {
        console.log('Hi my name is ' + this.name)
    }
}

obj.sayName()
