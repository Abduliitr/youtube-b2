async function fetchData(){
    console.log("async function executed")
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("async function complete", data)
}

// function fetchData(){
//     console.log("Fetch data called")

//     let d = null;
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(data){
//         console.log("Promise success", data);
//         return data.json()
//     })
//     .then(function(data){
//         console.log("Final data[0].username", data[0].username);
//         let para = document.getElementById('username')
//         for(let i = 0; i < data.length; i++){
//             let eachuser = document.createElement('h6');
//             eachuser.innerHTML = "Welcome " + data[i].username.toLowerCase()

//             para.appendChild(eachuser)

//             // new Date()
//         }
//         para.style.color = "blue"
//         para.style.fontSize = "25px"

//         d = data;
//     })
//     .catch(function(err){
//         console.log("Promise failed", err)
//     });

//     console.log(d)
// }

// // timebomb implmentation
// let timerInSeconds = 300;    //seconds
// let interval;

// function updateTimer(){
//     if(timerInSeconds < 0){
//         clearInterval(interval); // stop the timer   
//         alert('Bom!!!')
//     }
//     else{
//         const minutes = Math.floor(timerInSeconds/60);
//         const seconds = timerInSeconds % 60;
//         const formattedTime = (minutes + ":" + seconds);
//         document.getElementById('timebomb').innerHTML = formattedTime;
//         document.getElementById('timebomb').style.color = 'red';
//         timerInSeconds = timerInSeconds - 1;
//     }
// }
// interval = setInterval(updateTimer, 1000); // call every second. (1000ms)