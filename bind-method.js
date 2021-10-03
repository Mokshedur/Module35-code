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
kibrea.treatDey(100);
const heroTreatDey = kibrea.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
kibrea.treatDey(400);
const normalTreatDey = kibrea.treatDey.bind(normalGolam);
normalTreatDey(2000);