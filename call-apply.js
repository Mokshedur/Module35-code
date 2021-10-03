const kibrea = {
    id: '101',
    money: 5000,
    major: 'mathematcs',
    isRich: false,
    subject: ['english', 'economics', 'math1', 'calculas'],
    treatDey: function(expense) {
        this.money = this.money - expense;
        console.log('here 555', this);
        return this.money;
    }

}
const heroBalam = {
    id: 102,
    money: 6000,
    name: ' Hero Balam',


}
const normalGolam = {
        id: 102,
        money: 8000,
        name: ' normal Golam',
    }
    // kibrea.treatDey.call(heroBalam, 500);
kibrea.treatDey.apply(heroBalam, [1000]);
kibrea.treatDey.apply(normalGolam, [2000]);