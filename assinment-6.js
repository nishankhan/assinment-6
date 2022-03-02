const allPhone = () => {
    const searchValue = document.getElementById('input');
    const dcgds = searchValue.value;
    searchValue.value = '';
    // console.log(searchValue);

    const url = `https://openapi.programming-hero.com/api/phones?search=${dcgds}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data))
    searchValue.value = '';
}
const showPhone = (phones) => {
    // console.log(phones);    
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    for (const phone of phones) {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
                     <img class="w-50 " src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h3>Name :${phone.phone_name} </h3>
                    <h3>Brand:${phone.brand} </h3>                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                    <button onclick="details('${phone.slug}')" class="btn btn-success w-50">Details</button>
         </div>
        `;
        searchResult.appendChild(div);

    }
}
const details = (id) => {
    const url = (` https://openapi.programming-hero.com/api/phone/${id}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displyPhoneDetails(data.data))
}
const displyPhoneDetails = (phone) => {

    console.log(phone);
    // const pahoneDetails = document.getElementById('phone-details');
    // // console.log(pahoneDetails, 'hfaeh');
    // const div = document.createElement('div');
    // div.classList.add('card');
    // div.innerHTML = `
    // <img src="${phone.image}" class="card-img-top" alt="...">
    // <div class="card-body">
    // <h3>Name :${phone.phone_name} </h3>
    // <h3>Brand:${phone.brand} </h3> 
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
    //         card's content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    // </div>
    // `;
    // pahoneDetails.appendChild(div)

}
