const firstPurchase = +document.getElementById('firstItem').textContent;
const secondPurchase = +document.getElementById('secondItem').textContent;
const thirdPurchase = +document.getElementById('thirdItem').textContent;
const fourthPurchase = +document.getElementById('fourthItem').textContent;

const sum = (firstPurchase, secondPurchase, thirdPurchase, fourthPurchase) => {
    return firstPurchase + secondPurchase + thirdPurchase + fourthPurchase;

}
console.log(sum);
