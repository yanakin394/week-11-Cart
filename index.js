const firstPurchase = +document.getElementById('firstItem').textContent;
const secondPurchase = +document.getElementById('secondItem').textContent;
const thirdPurchase = +document.getElementById('thirdItem').textContent;
const fourthPurchase = +document.getElementById('fourthItem').textContent;

const sum = () => {
    return firstPurchase + secondPurchase + thirdPurchase + fourthPurchase;

}
const totalSum = sum(firstPurchase, secondPurchase, thirdPurchase, fourthPurchase);
console.log(totalSum);

const total = document.getElementById('totalValue');
total.textContent = totalSum + ' руб.';

const discountTotalSum = () => {
    return totalSum * 0.8;
}
discountTotalSum(totalSum);
console.log(discountTotalSum); //не отображается в консоли!

const applyDiscount = document.getElementById('discountButton');
applyDiscount.addEventListener("click", discountTotalSum => {
    total.textContent = discountTotalSum + ' руб.';
})
