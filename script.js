const myDiv = document.querySelector('#posts')
window.onload = statuslarimiGetir()

// regular anonymous arrow IIFE asynchrouns 
 async function statuslarimiGetir(){
    const  unvan ='mehsullar.json'


try{
const komputerinAnlamadigiData = await fetch(unvan)
const komputerinAnladigiData = await komputerinAnlamadigiData.json()

 for(let i = 0;i<komputerinAnladigiData.length; i++){
     myDiv.innerHTML += `
     <div class="ghosts">
     <h1>${komputerinAnladigiData[i].mehsulun_adi}</h1>
     <p>${komputerinAnladigiData[i].satish_qiymeti}</p>
     </div>`
 }
}
catch(xeta) {
    console.log (`proqram yuklenen zaman xeta bas verdi ${xeta}`)
}
 }