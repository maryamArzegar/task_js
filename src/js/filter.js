async function filterData(){
 
}
const inputSearch=document.querySelector("#input__search__value")
inputSearch.addEventListener("click",async()=>{
    await filterData()
} )













const inputSearch=document.querySelector("#input__search__value")
const table= document.querySelector("table")
function getUser(){
    axios.get('http://localhost:3000/transactions')
    .then(({users})=>console.log(users))
    .catch((err)=>console.log(err))
}
document.addEventListener("DOMContentLoaded",getUser)

inputSearch.addEventListener("input",filterUsers)
function filterUsers(e){
    const query=e.target.value
    axios.get(`http://localhost:3000/transactions?refId_like=${query}`)
    .then(({users})=>{
        console.log(users)
    })
    .catch((err)=>console.log(err))
}
function displayUI(users){
    users.forEach(user => {
        const tr= document.createElement(tr)
    tr.classList.add("table__info")
    table.append("tr")
    });
}
