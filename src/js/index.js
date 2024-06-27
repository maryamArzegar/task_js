const inputSearch=document.querySelector("#input__search__value")
const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",  
  };
  let query;
  
  let sorted;
  const priceLI=document.querySelector(".price")
  const dateLI=document.querySelector(".date")
  const chevronNode=document.querySelectorAll(".fa-chevron-down")
  const chevron=[...chevronNode]
  priceLI.addEventListener("click",sortedData)
  dateLI.addEventListener("click",sortedData)
const table= document.querySelector(".table")
function getUser(){
    axios.get('http://localhost:3000/transactions')
    .then(({data})=>{
         displayUI(data)
        console.log(data)
    })
    .catch((err)=>console.log(err))
}
document.addEventListener("DOMContentLoaded",getUser)
inputSearch.addEventListener("input",filterUsers)
function filterUsers(e){
    const query=e.target.value
    axios.get(`http://localhost:3000/transactions?refId_like=${query}`)
    .then(({data})=>{
        
        displayUI(data)
    })
    .catch((err)=>console.log(err))
}
 function displayUI(data){   
     table.innerHTML=""
     data.forEach( data => {
         const tr= document.createElement("tr")
         tr.classList.add("table__info")
         tr.innerHTML=`   
         <td class="table__info">${data.id}</td>
         <td class="table__info ">${data.type}
         </td>
         <td class="table__info">${data.price}</td>
         <td class="table__info">${data.refId}</td>
         <td class="table__info">${new Date(data.date).toLocaleDateString("fa-IR",options)}</td>`
         data.type.includes("برداشت از حساب")?tr.classList.add("debit"):tr.classList.add("deposit")
         table.appendChild(tr)
        });
}
let sortedBy;
function sortedData(e){
    if(e.target.classList.value.includes("price")){
        sortedBy="price"
    }else if(e.target.classList.value.includes("date")){
        sortedBy="date"
    }
    chevron.forEach((ch)=>{
        ch.classList.toggle("up")
        console.log();
        if(ch.classList.value.includes("up")){
            sorted="asc"
        }else{
            sorted="desc"
        }
    })
       axios.get(`http://localhost:3000/transactions?refId_like=${inputSearch.value}&_sort=${sortedBy}&_order=${sorted}`)
       .then(({data})=>{
        displayUI(data)
        })
    }
