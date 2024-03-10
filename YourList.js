document.addEventListener('DOMContentLoaded', function() {
    const addItemButton = document.getElementById('addItemButton');
    if (addItemButton) {
        addItemButton.addEventListener('click', addItemToList);
    }
    displayItems();
    displayItemTotal();
    window.addEventListener('load', displayItems);
});
//Adding item user has chosen to Your List
function addItemToList(event){
    event.preventDefault();
    //Get product information from the form
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const product = {
        name: productName,
        category: productCategory
    };
    //Store product in storage
    let productList = JSON.parse(localStorage.getItem('productList')) || [];
    productList.push(product);
    localStorage.setItem('productList', JSON.stringify(productList));
    window.location.href = 'YourList.html';
    console.log("Product List: ", productList);
}
//Loads items from localStorage when page is loaded
function displayItems(){
    const yourList = document.getElementById('yourList');
    if (yourList) {
        yourList.innerHTML = '';
        const productList = JSON.parse(localStorage.getItem('productList')) || [];
        productList.forEach(product => {
            const card = createProductCard(product);
            yourList.appendChild(card);
        });
    } else {
        console.error("Element with ID 'yourList' not found.");
    }
}
function createProductCard(product){
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.productId = product.id;

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = `${product.brand} ${product.model}`;
    card.appendChild(image);

    const title = document.createElement('h1');
    const category = getCategoryById(product.id);
    title.textContent = `${category}`;
    card.appendChild(title);

    const brandModel = document.createElement('h3');
    brandModel.textContent = `Item: ${product.brand} ${product.model}`;
    card.appendChild(brandModel);

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    const priceLabel = document.createElement('div');
    priceLabel.classList.add('price-label');
    priceLabel.textContent = 'Price:';
    priceContainer.appendChild(priceLabel);
    
    const priceList = document.createElement('ul');
    priceList.classList.add('price-list');
    product.prices.forEach(price => {
        const priceItem = document.createElement('li');
        priceItem.textContent = '$' + price.price + ' - ' + price.label;
        priceList.appendChild(priceItem);
    });
    priceContainer.appendChild(priceList);
    card.appendChild(priceContainer);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function() {
        removeProduct(product.id);
    });
    card.appendChild(removeButton);

    return card;
}
function getCategoryById(productId){
    if(productId >= 1 && productId <= 17){
        return "CPU";
    }
    else if(productId >= 18 && productId <= 29){
        return "RAM";
    }
    else if(productId >= 30 && productId <= 38){
        return "Motherboard";
    }
    else if(productId >= 39 && productId <= 47){
        return "Cooling Fans";
    }
    else if(productId >= 48 && productId <= 56){
        return "GPU";
    }
    else if(productId >= 57 && productId <= 67){
        return "SSD/Hard Drive";
    }
    else if(productId >= 68 && productId <= 74){
        return "PSU";
    }
    else if(productId >= 75 && productId <= 83){
        return "Case";
    }
    else{
        return "Prebuilt";
    }
}
function removeProduct(productId) {
    let productList = JSON.parse(localStorage.getItem('productList')) || [];
    productList = productList.filter(product => product.id !== productId);
    localStorage.setItem('productList', JSON.stringify(productList));
    displayItems();
    displayItemTotal();
}
function displayItemTotal(){
    const yourList = document.getElementById('yourList');
    const totalContainer = document.getElementById('totalContainer');
    if(yourList && totalContainer){
        totalContainer.textContent = '';

        const productList = JSON.parse(localStorage.getItem('productList')) || [];
        let total = 0;

        productList.forEach(product => {
            let minPrice = Number.MAX_VALUE;
            product.prices.forEach(price => {
                if(price.price < minPrice){
                    minPrice = price.price;
                }
            });
            total += minPrice;
        });

        const totalText = document.createElement('p');
        totalText.textContent = `Estimated Total: $${total.toFixed(2)}`;
        totalContainer.appendChild(totalText);
        console.log("Total: ", totalText);
    }
}