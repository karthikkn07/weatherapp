// Making a request 

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();



// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
//     } else if(request.readyState ===4) {
//         console.log('could not fetch the data');
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// request.send();


// const getPage = (callback) => {

//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         //console.log(request, request.readyState);
//         if(request.readyState === 4 && request.status === 200){
//             callback(undefined, request.responseText);
//         } else if(request.readyState ===4) {
//             callback('could not fetch the data', undefined);
//         }
//     });
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };

// getPage((err, data) => {
//     console.log('callback fired');
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data);
//     }
// });

// const getPage = (callback) => {

//         const request = new XMLHttpRequest();
//         request.addEventListener('readystatechange', () => {
//             //console.log(request, request.readyState);
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText)
//                 callback(undefined, data);
//             } else if(request.readyState ===4) {
//                 callback('could not fetch the data', undefined);
//             }
//         });
//         request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.send();
//     };
//         getPage((err, data) => {
//         console.log('callback fired');
//         if(err) {
//             console.log(err)
//         } else {
//             console.log(data);
//         }
//     });
    


// const getPage = (callback) => {

//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         //console.log(request, request.readyState);
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data);
//         } else if(request.readyState ===4) {
//             callback('could not fetch the data', undefined);
//         }
//     });
//     request.open('GET', 'sample.json');
//     request.send();
// };
//     getPage((err, data) => {
//     console.log('callback fired');
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data);
//     }
// });

// promises

// const promDum = () => {

//     return new Promise((resolve, reject) => {
//         //resolve('some data');
//         reject('some error');
//     });
// };

// promDum().then(data => {
// console.log(data);
// }).catch(error => {
// console.log(error);
// });

// Fetch api

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=da308e20633672b0e7bf07ecae258313').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data =>{
//     console.log(data);    
// }).catch((error)=>{
// console.log('rejected', error);
// })


// const samTun = async () => {
//     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid=da308e20633672b0e7bf07ecae258313');
//     const data = await response.json();
//     return data;
// };

// samTun().then(data => console.log('resolved:', data));



function myCity (cityName) {
    let key = 'da308e20633672b0e7bf07ecae258313';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+'&appid='  +key )
    .then(function(response){
        return response.json()
    }).then(function(data){
      console.log(data);
    })
    .catch(function(){
        console.log('There is a problem in the url')
    });
}
window.onload = function() {
    myCity('chennai,IN');
}



// function weatherFore(d) {
//     let celcius = Math.round((d.main.temp)-273.15);
//     document.getElementById('desp').innerHTML = d.weather[0].description;
//     document.getElementById('temp').innerHTML = celcius + '&deg;' ;
//     document.getElementById('city').innerHTML = d.name;
//     document.getElementById('clouds').innerHTML = d.all;
// }