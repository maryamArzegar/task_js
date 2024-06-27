function getData(){
    return axios
    .get("http://localhost:3000/transactions")
}
// async function allUser(){
//     const users= await getData()
//     console.log(users);
//     const filteredData=await filterData(123)
//     console.log(filteredData);
// }
async function filterData(){
    const inputSearch=document.querySelector("#input__search__value")
    inputSearch.addEventListener("input",async (e)=>{
        const query=e.target.value
        const fd= await filterData(query)
        const filteredData=await axios.get(`http://localhost:3000/transactions?refId_like=${query}`)
        console.log(filteredData);
    })
}

function displayUI(data){
    
}
// (async ()=>{
//     console.log(allUser());})()
(async ()=>{
    filterData()})()





// (async()=>{
//     console.log(await allUser());
// })()
