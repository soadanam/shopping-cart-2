//console.log('I am in a separate file')

//Updating Products
function updateProducts(product, price, isAdd){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isAdd == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else{
        if(productInput.value > 0){
            productNumber = parseInt(productNumber) - 1;
        }
    };
    productInput.value = productNumber;

    //update price
    const productPrice = document.getElementById(product+'-price');
    const updatePrice = price * productNumber;
    productPrice.innerText = updatePrice;
    
    grandTotalPrice();
};




    //Get products Number
    function productsNumber(product){
        const productNum = document.getElementById(product+'-number');
        const productNumber = parseInt(productNum.value);
        return productNumber;
    };

    //Subtotal + tax + GrandTotal
    function grandTotalPrice(){
    const phoneTotalPrice = productsNumber('phone') * 1219;
    const caseTotalPrice = productsNumber('case') * 59;
    const subtotalPrice = phoneTotalPrice + caseTotalPrice;

    const taxTotal = (subtotalPrice * 15) / 100;

    const totalPrice = subtotalPrice + taxTotal;

    document.getElementById('sub-total').innerText = subtotalPrice; //subtotal
    document.getElementById('tax-total').innerText = taxTotal;      //tax
    document.getElementById('total-price').innerText = Math.ceil(totalPrice);       //grandTotal
    };






//phone update
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProducts('phone', 1219, true, 'phone-price');
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProducts('phone', 1219, false, 'phone-price');
});

//case update
document.getElementById('case-plus').addEventListener('click', function(){
    updateProducts('case', 59, true, 'case-price');
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProducts('case', 59, false, 'case-price');
});