const endDate = "25 February 2024 06:00 PM"
document .getElementById("end-Date").innerText = endDate;
const inputs= document.getElementsByTagName("input")  //getlectorall se bhi karsakte hai
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end, now) 
    // console.log(now)
    const diff =(end-now)/1000
    console.log(diff)
    if (diff<0) return;
   inputs[0].value=Math.floor(diff/ 3600/ 24)
   inputs[1].value=( Math.floor(diff / 3600)%24)
   inputs[2].value=Math.floor((diff/60) %60)
   inputs[3].value=Math.floor((diff) %60)
}
 clock()
/*
     1 day=24hrs
 *   1 min=60 min
    
 *    60 min=3600sec
 */
setInterval(
   () =>{
    clock()
   },
   1000
)