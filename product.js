//Fetches Data for product.json
async function fetchProductData(){
    try{
        const response = await fetch('product.json');
        if(!response.ok){
            throw new Error('Failed to fetch product data');
        }
        const product = await response.json();
        return product;
    }
    catch(error){
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    if(currentPage.includes('CPU.html')){
        renderProductCards('CPU');
    }
    else if(currentPage.includes('RAM.html')){
        renderProductCards('RAM');
    }
    else if(currentPage.includes('Motherboards.html')){
        renderProductCards('Motherboards');
    }
    else if(currentPage.includes('CoolingFans.html')){
        renderProductCards('CoolingFans');
    }
    else if(currentPage.includes('GPU.html')){
        renderProductCards('GPU');
    }
    else if(currentPage.includes('SSD&HardDrive.html')){
        renderProductCards('SSD&HDD');
    }
    else if(currentPage.includes('PowerSource.html')){
        renderProductCards('PSU');
    }
    else if(currentPage.includes('Cases.html')){
        renderProductCards('Cases');
    }
    else if(currentPage.includes('RecommendedPreBuilt.html')){
        renderProductCards('Prebuilt');
    }
});
//Renders and generates product cards
async function renderProductCards(category){
    const productList = document.getElementById('productList');
    const product = await fetchProductData();

    const filteredProducts = product.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
}
//Creates item card with image, price, description, and button
function createProductCard(product){
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.productData = JSON.stringify(product);
        
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.brand;
    card.appendChild(image);
        
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    const priceLabel = document.createElement('div');
    priceLabel.classList.add('price-label');
    priceLabel.textContent = 'Prices:';
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

    const name = document.createElement('h2');
    name.textContent = product.brand + ' ' + product.model;
    card.appendChild(name);

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');

    if(product.id >= 1 && product.id <= 17){
        const generation = document.createElement('p');
        generation.textContent = 'Generation: ' + product.generation;
        detailsContainer.appendChild(generation);
    
        const cores = document.createElement('p');
        cores.textContent = 'Cores: ' + product.cores;
        detailsContainer.appendChild(cores);
    
        const clock = document.createElement('p');
        clock.textContent = 'Clock speed: ' + product.clock;
        detailsContainer.appendChild(clock);
    
        const clockBoost = document.createElement('p');
        clockBoost.textContent = 'Boosted clock speed: ' + product.clockBoost;
        detailsContainer.appendChild(clockBoost);
    
        const socket = document.createElement('p');
        socket.textContent = 'Socket: ' + product.socket;
        detailsContainer.appendChild(socket);
    
        const cache = document.createElement('p');
        cache.textContent = 'Cache: ' + product.cache;
        detailsContainer.appendChild(cache);
    
        const TDP = document.createElement('p');
        TDP.textContent = 'TDP: ' + product.TDP;
        detailsContainer.appendChild(TDP);
    
        const intGraphics = document.createElement('p');
        intGraphics.textContent = 'Integrated Graphics: ' + product.intGraphics;
        detailsContainer.appendChild(intGraphics);
    
        const memSupport = document.createElement('p');
        memSupport.textContent = 'Memory Support: ' + product.memSupport;
        detailsContainer.appendChild(memSupport);
    
        const PCI = document.createElement('p');
        PCI.textContent = 'PCI: ' + product.PCI;
        detailsContainer.appendChild(PCI);
    }
    else if(product.id >= 18 && product.id <= 29){
        const size = document.createElement('p');
        size.textContent = 'Size: ' + product.size;
        detailsContainer.appendChild(size);

        const speed = document.createElement('p');
        speed.textContent = 'Speed: ' + product.speed;
        detailsContainer.appendChild(speed);

        const CL = document.createElement('p');
        CL.textContent = 'CL: ' + product.CL;
        detailsContainer.appendChild(CL);

        const voltage = document.createElement('p');
        voltage.textContent = 'Voltage: ' + product.voltage;
        detailsContainer.appendChild(voltage);

        const compatibility = document.createElement('p');
        compatibility.textContent = 'Compatibility: ' + product.compatibility;
        detailsContainer.appendChild(compatibility);
    }
    else if(product.id >= 30 && product.id <= 38){
        const chipset = document.createElement('p');
        chipset.textContent = 'Chipset: ' + product.chipset;
        detailsContainer.appendChild(chipset);
        
        const memSupport = document.createElement('p');
        memSupport.textContent = 'Memory Support: ' + product.memSupport;
        detailsContainer.appendChild(memSupport);

        const expansion = document.createElement('p');
        expansion.textContent = 'Expansion Slots: ' + product.expansion;
        detailsContainer.appendChild(expansion);

        const ports = document.createElement('p');
        ports.textContent = 'Ports: ' + product.ports;
        detailsContainer.appendChild(ports);

        const compatibility = document.createElement('p');
        compatibility.textContent = 'Compatibility: ' + product.compatibility;
        detailsContainer.appendChild(compatibility);
    }
    else if(product.id >= 39 && product.id <= 47){
        const airflow = document.createElement('p');
        airflow.textContent = 'Airflow: ' + product.airflow;
        detailsContainer.appendChild(airflow);
        
        const size = document.createElement('p');
        size.textContent = 'Size: ' + product.size;
        detailsContainer.appendChild(size);

        const connector = document.createElement('p');
        connector.textContent = 'Connector: ' + product.connector;
        detailsContainer.appendChild(connector);

        const speed = document.createElement('p');
        speed.textContent = 'Speed: ' + product.speed;
        detailsContainer.appendChild(speed);

        const maxAcNoise = document.createElement('p');
        maxAcNoise.textContent = 'Max Acoustical Noise: ' + product.maxAcNoise;
        detailsContainer.appendChild(maxAcNoise);

        const voltage = document.createElement('p');
        voltage.textContent = 'Voltage: ' + product.voltage;
        detailsContainer.appendChild(voltage);

        const warrenty = document.createElement('p');
        warrenty.textContent = 'Warrenty: ' + product.warrenty;
        detailsContainer.appendChild(warrenty);
    }
    else if(product.id >= 48 && product.id <= 56){
        
        const size = document.createElement('p');
        size.textContent = 'Size: ' + product.size;
        detailsContainer.appendChild(size);

        const clockBoost = document.createElement('p');
        clockBoost.textContent = 'Boost Clock: ' + product.clockBoost;
        detailsContainer.appendChild(clockBoost);

        const speed = document.createElement('p');
        speed.textContent = 'Speed: ' + product.speed;
        detailsContainer.appendChild(speed);

        const TDP = document.createElement('p');
        TDP.textContent = 'TDP: ' + product.TDP;
        detailsContainer.appendChild(TDP);

        const bandwidth = document.createElement('p');
        bandwidth.textContent = 'Memory Bandwidth: ' + product.bandwidth;
        detailsContainer.appendChild(bandwidth);
    }
    else if(product.id >= 57 && product.id <= 67){
        
        const form = document.createElement('p');
        form.textContent = 'Form: ' + product.form;
        detailsContainer.appendChild(form);

        const size = document.createElement('p');
        size.textContent = 'Size: ' + product.size;
        detailsContainer.appendChild(size);

        const readSpeed = document.createElement('p');
        readSpeed.textContent = 'Read Speed: ' + product.readSpeed;
        detailsContainer.appendChild(readSpeed);

        const writeSpeed = document.createElement('p');
        writeSpeed.textContent = 'Write Speed: ' + product.writeSpeed;
        detailsContainer.appendChild(writeSpeed);

        const warrenty = document.createElement('p');
        warrenty.textContent = 'Warrenty: ' + product.warrenty;
        detailsContainer.appendChild(warrenty);
    }
    else if(product.id >= 68 && product.id <= 74){
        
        const wattage = document.createElement('p');
        wattage.textContent = 'Wattage: ' + product.wattage;
        detailsContainer.appendChild(wattage);

        const rating = document.createElement('p');
        rating.textContent = 'Rating: ' + product.rating;
        detailsContainer.appendChild(rating);

        const warrenty = document.createElement('p');
        warrenty.textContent = 'Warrenty: ' + product.warrenty;
        detailsContainer.appendChild(warrenty);
    }
    else if(product.id >= 75 && product.id <= 83){
        const form = document.createElement('p');
        form.textContent = 'Form: ' + product.form;
        detailsContainer.appendChild(form);

        const motherboardSup = document.createElement('p');
        motherboardSup.textContent = 'Motherboard Support: ' + product.motherboardSup;
        detailsContainer.appendChild(motherboardSup);

        const material = document.createElement('p');
        material.textContent = 'Material: ' + product.material;
        detailsContainer.appendChild(material);

        const size = document.createElement('p');
        size.textContent = 'Dimensions: ' + product.size;
        detailsContainer.appendChild(size);

        const expansion = document.createElement('p');
        expansion.textContent = 'Expansion Slots: ' + product.expansion;
        detailsContainer.appendChild(expansion);
    }
    else{
        const usage = document.createElement('p');
        usage.textContent = 'Usage: ' + product.usage;
        detailsContainer.appendChild(usage);
        
        const processor = document.createElement('p');
        processor.textContent = 'Processor: ' + product.processor;
        detailsContainer.appendChild(processor);

        const graphics = document.createElement('p');
        graphics.textContent = 'Graphics: ' + product.graphics;
        detailsContainer.appendChild(graphics);

        const memory = document.createElement('p');
        memory.textContent = 'Memory: ' + product.memory;
        detailsContainer.appendChild(memory);

        const storage = document.createElement('p');
        storage.textContent = 'Storage: ' + product.storage;
        detailsContainer.appendChild(storage);

        const size = document.createElement('p');
        size.textContent = 'Size: ' + product.size;
        detailsContainer.appendChild(size);
    }

    card.appendChild(detailsContainer);

    const description = document.createElement('p');
    description.textContent = product.description;
    card.appendChild(description);
      
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Your List';
    addButton.classList.add('add-to-list-btn');
    addButton.dataset.productId = product.id;
    addButton.addEventListener('click', function(){
        addToYourList(product);
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 2000);
    });
    card.appendChild(addButton);
    return card;
}
function addToYourList(product){
    let productList = JSON.parse(localStorage.getItem('productList')) || [];
    const exisitingProductIndex = productList.findIndex(p => p.id === product.id);
    if(exisitingProductIndex === -1){
        productList.push(product);
        localStorage.setItem('productList', JSON.stringify(productList));
        console.log("Product List: ", productList);
    }
    else{
        console.log("Product already exists in the list.")
    }
}
//Price range slider code
const priceRange = document.getElementById('priceRange');
const sliderValue = document.getElementById('sliderValue');
priceRange.addEventListener('input', function() {
    const value = this.value;
    const percent = (value - this.min) / (this.max - this.min) * 100;
    const offset = 5;
    const label = document.querySelector('.slider-label');
    label.style.left = `calc(${percent}% - ${offset}px)`;
    label.innerHTML = `$${value}`;
    sliderValue.textContent = '$' + value;
    console.log("Value: ", sliderValue);
    filterProducts();
});

//Filter and display products based on selected filter options
function filterProducts(){
    //Get selected filter values
    const filters = {
        model: getCheckedValues('model'),
        generation: getCheckedValues('generation'),
        cores: getCheckedValues('cores'),
        clock: getCheckedValues('clock'),
        compatibility: getCheckedValues('compatibility'),
        size: getCheckedValues('size'),
        speed: getCheckedValues('speed'),
        CL: getCheckedValues('CL'),
        chipset: getCheckedValues('chipset'),
        airflow: getCheckedValues('airflow'),
        form: getCheckedValues('form'),
        wattage: getCheckedValues('wattage'),
        rating: getCheckedValues('rating'),
        priceRange: getPriceRange()
    };
    //Iterate over each product item
    document.querySelectorAll('.product-card').forEach(productCard => {
        //Get the product's data attributes
        const productData = JSON.parse(productCard.dataset.productData);
        //Check if the product matches all the selected filters
        const isVisible = Object.keys(filters).every(filterKey =>{
            //If no filter is selected, the product should be visible
            if(filters[filterKey].length === 0) return true;
            //Check if the product's attribute matches any selected filter value
            switch (filterKey) {
                case 'model':
                    return filters.model.includes(productData.model);
                case 'generation':
                    return filters.generation.includes(productData.generation);
                case 'cores':
                    return filters.cores.includes(productData.cores);
                case 'clock':
                    return filters.clock.includes(productData.clock);
                case 'compatibility':
                    return filters.compatibility.includes(productData.compatibility);
                case 'size':
                    return filters.size.includes(productData.size);
                case 'speed':
                    return filters.speed.includes(productData.speed);
                case 'CL':
                    return filters.CL.includes(productData.CL);
                case 'chipset':
                    return filters.chipset.includes(productData.chipset);
                case 'airflow':
                    return filters.airflow.includes(productData.airflow);
                case 'form':
                    return filters.form.includes(productData.form);
                case 'wattage':
                    return filters.form.includes(productData.wattage);
                case 'rating':
                    return filters.rating.includes(productData.rating);
                case 'priceRange':
                    return productData.prices.some(price => price.price <= filters.priceRange.max);
                default:
                    return true;
            }
        });
        //Show or hide the product based on the filter result
        productCard.style.display = isVisible ? 'block' : 'none';
    });
}
//Function to get checked value of a group of checkboxes
function getCheckedValues(name){
    const checkboxes = document.querySelectorAll(`input[name=${name}]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}
//Add event listeners to filter options
document.querySelectorAll('.filter-container input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});
//Function to get the selected price range from the price range slider
function getPriceRange(){
    const priceRange = document.getElementById('priceRange');
    const maxPrice = parseInt(priceRange.value);
    return {max: maxPrice};
}
document.getElementById('priceRange').addEventListener('input', filterProducts);
//Reset button
const resetButton = document.getElementById('resetFilters');
resetButton.addEventListener('click', function(){
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    priceRange.value = 5000;
    filterProducts();
    sliderValue.textContent = '$5000';
});
//Sort By functionality
const sortOptions = document.getElementById('sort-options');
sortOptions.addEventListener('change', function(){
    const selectedOption = sortOptions.value;
    if(selectedOption === 'price-low'){
        sortByPriceLowToHigh();
    }
    else if(selectedOption === 'price-high'){
        sortByPriceHighToLow();
    }
    else if(selectedOption === 'best-performance'){
        sortByBestPerformance();
    }
})
function sortByPriceLowToHigh(){
    const products = document.querySelectorAll('.product-card');
    // Convert NodeList to array and filter out products without prices
    const productsWithPrices = Array.from(products).filter(product => {
        const productData = JSON.parse(product.dataset.productData);
        return productData.prices && productData.prices.length > 0;
    });
    // Sort products by price (low to high)
    const sortedProducts = productsWithPrices.sort((a, b) => {
        const priceA = parseFloat(JSON.parse(a.dataset.productData).prices[0].price);
        const priceB = parseFloat(JSON.parse(b.dataset.productData).prices[0].price);
        return priceA - priceB;
    });
    // Clear current product list
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    // Append sorted products to the product list
    sortedProducts.forEach(product => {
        productList.appendChild(product);
    });
}
function sortByPriceHighToLow(){
    const products = document.querySelectorAll('.product-card');
    // Convert NodeList to array and filter out products without prices
    const productsWithPrices = Array.from(products).filter(product => {
        const productData = JSON.parse(product.dataset.productData);
        return productData.prices && productData.prices.length > 0;
    });
    // Sort products by price (high to low)
    const sortedProducts = productsWithPrices.sort((a, b) => {
        const priceA = parseFloat(JSON.parse(b.dataset.productData).prices.slice(-1)[0].price);
        const priceB = parseFloat(JSON.parse(a.dataset.productData).prices.slice(-1)[0].price);
        return priceA - priceB;
    });
    // Clear current product list
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    // Append sorted products to the product list
    sortedProducts.forEach(product => {
        productList.appendChild(product);
    });
}
function sortByBestPerformance(){
    const products = document.querySelectorAll('.product-card');
    // Convert NodeList to array and filter out products without prices
    const productsWithPrices = Array.from(products).filter(product => {
        const productData = JSON.parse(product.dataset.productData);
        return productData.prices && productData.prices.length > 0;
    });
    // Sort products by performance level
    const sortedProducts = productsWithPrices.sort((a, b) => {
        const performanceLevelA = getPerformanceLevel(a);
        const performanceLevelB = getPerformanceLevel(b);
        // Compare performance levels
        if (performanceLevelA === performanceLevelB) {
            // If performance levels are the same, compare IDs
            const idA = JSON.parse(a.dataset.productData).id;
            const idB = JSON.parse(b.dataset.productData).id;
            return idA - idB;
        } else {
            // Sort by performance level
            return performanceLevelA - performanceLevelB;
        }
    });
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    // Append sorted products to the product list
    sortedProducts.forEach(product => {
        productList.appendChild(product);
    });
}
function getPerformanceLevel(productElement) {
    const productData = JSON.parse(productElement.dataset.productData);
    const description = productData.description.toLowerCase();
    if (description.includes("high-performance")) {
        return 1;
    } else if (description.includes("mid-performance")) {
        return 2;
    } else {
        return 3;
    }
}