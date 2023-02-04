const bill = document.querySelector('.bill');
const tip_5 = document.querySelector('.tip-5');
const tip_10 = document.querySelector('.tip-10')
const tip_15 = document.querySelector('.tip-15')
const tip_25 = document.querySelector('.tip-25')
const tip_50 = document.querySelector('.tip-50')
const number_person = document.querySelector('.number-person');
const total_per_person = document.querySelector('.total-per-person');
const tota_person = document.querySelector('.total-person')
const custom = document.querySelector('.custom')
const reset = document.querySelector('.reset')

tip_5.addEventListener('click', () => {
    tip(bill.value, 0.05, number_person.value)
})

tip_10.addEventListener('click', () => {
    tip(bill.value, 0.1, number_person.value)
})

tip_15.addEventListener('click', () => {
    tip(bill.value, 0.15, number_person.value)
})

tip_25.addEventListener('click', () => {
    tip(bill.value, 0.25, number_person.value)
})

tip_50.addEventListener('click', () => {
    tip(bill.value, 0.5, number_person.value)
})

bill.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        tip(bill.value, 0, number_person.value)
    }
})

custom.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        tip(bill.value, custom.value / 100, number_person.value)
    }
})

reset.addEventListener('click', () => {
    total_per_person.innerHTML = 0
    tota_person.innerHTML = 0
})

number_person.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        tip(bill.value, 0, number_person.value)
    }
})

const tip = (bill, tip, number_person) => {
    if(number_person > 0) {
        total_per_person.innerHTML = (bill * tip / number_person).toFixed(2);
        tota_person.innerHTML = (bill * tip).toFixed(2);
    } else {
        total_per_person.innerHTML = '0';
        tota_person.innerHTML = '0';
    }
    
}