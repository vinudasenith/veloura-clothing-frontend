
const productContainer = document.querySelector('.access-clothing-img');
const allProducts = Array.from(productContainer.querySelectorAll('.each-clothing'));


document.getElementById('sortSelect').addEventListener('change', function () {
    const value = this.value;
    let sorted = [...allProducts];

    if (value === 'price-low-high') {
        sorted.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
    } else if (value === 'price-high-low') {
        sorted.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
    } else if (value === 'new') {
        sorted.reverse();
    }

    sorted.forEach(p => productContainer.appendChild(p));
});


document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
        const selectedFilters = {
            availability: getCheckedValues('availability'),
            price: getCheckedValues('price'),
            color: getCheckedValues('color'),
            gender: getCheckedValues('gender'),
        };
        console.log('Filters:', selectedFilters);


    });
});

function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

