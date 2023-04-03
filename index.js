const firstPurchase = +document.getElementById('firstItem').textContent;
const secondPurchase = +document.getElementById('secondItem').textContent;
const thirdPurchase = +document.getElementById('thirdItem').textContent;
const fourthPurchase = +document.getElementById('fourthItem').textContent;

const sum = (firstPurchase, secondPurchase, thirdPurchase, fourthPurchase) => {
    return firstPurchase + secondPurchase + thirdPurchase + fourthPurchase;
}
const totalSum = sum(firstPurchase, secondPurchase, thirdPurchase, fourthPurchase);
console.log(totalSum);

const total = document.getElementById('totalValue');
total.textContent = totalSum + ' руб.';

const discountTotalSum = (totalSum) => {
    return totalSum * 0.8;
}
const discountTotal = discountTotalSum(totalSum);
console.log(discountTotal);

/* const applyDiscount = document.getElementById('discountButton');
applyDiscount.addEventListener("click", discountTotal() => {
    total.textContent = discountTotal + ' руб.';
})

console.log(total); */