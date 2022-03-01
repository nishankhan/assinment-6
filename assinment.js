
const allPhone = () => {
    const searchValue = document.getElementById('input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data, 'tyrty'))
}
// const phonese = (phone) => {
//     for (const phone of phonese) {

//     }
// }