const firstPurchase = +document.getElementById('firstItem').textContent;
const secondPurchase = +document.getElementById('secondItem').textContent;
const thirdPurchase = +document.getElementById('thirdItem').textContent;
const fourthPurchase = +document.getElementById('fourthItem').textContent;

const sum = (firstPurchase, secondPurchase, thirdPurchase, fourthPurchase) => {
    return firstPurchase + secondPurchase + thirdPurchase + fourthPurchase;

}
console.log(sum);

const total = document.getElementById('totalValue');
total.textContent = sum;

const discountSum = (sum) => {
    return sum * 0.8;
}

const applyDiscount = document.getElementById('discountButton');
applyDiscount.addEventListener("click", discountSum => {
    total.textContent = discountSum;
})

console.log(discountSum);