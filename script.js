



const button = document.getElementById("btn");
const  output = document.getElementById("output");


button.addEventListener("click", async function() {
    
   try {
     const res = await fetch("https://cataas.com/cat?width=400");
    const data = await res.blob();
    

    const imgURL =URL.createObjectURL(data)


    output.innerHTML =`
    <img src=${imgURL} alt="Funny Cat" />
    `
   } catch (error) {
     console.log("error");
     
   }
    

})





// const button = document.getElementById("btn");
// const output = document.getElementById("output");

// button.addEventListener("click", function () {

//     const time = new Date().getTime();

//     output.innerHTML = `
//         <img src="https://cataas.com/cat?type=small&time=${time}" 
//         alt="Funny Cat">
//     `;

// });