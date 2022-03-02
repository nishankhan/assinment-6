
const allPhone = () => {
    const searchValue = document.getElementById('input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data))
}
const showPhone = (phones) => {
    for (const phone of phones) {
        const parent = document.getElementById('phone-container');
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card border p-5  ">
                    <div class="picture  ">
                        <img class="w-25 " src="${phone.image}" alt="">
                    </div>
                    <h3>Name :${phone.phone_name} </h3>
                    <h3>Brand:${phone.brand} </h3>
                    <div class="allButton">
                        <button class="btn btn-danger">Delete</button>
                        <button onclick="details('${phone.slug}')" class="btn btn-success">Details</button>
                    </div>
                </div>
        `
        parent.appendChild(div)
    }
}
const details = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}