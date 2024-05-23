let p= new Promise((resolve)=>{
    setTimeout(() => {
        //console.log("HEllo after 5 secs")
        resolve("done")
    }, 5000);
})

console.log("Hello world");
p.then(()=>alert("Hi"));