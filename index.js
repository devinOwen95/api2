const url ='https://calendarific.com/api/v2?api_key=07da68b8dd3fc722aed58f4042be3593c0e32d7a';

const countriesUrl='https://calendarific.com/api/v2/countries?api_key=07da68b8dd3fc722aed58f4042be3593c0e32d7a';

let canadaInfo = document.getElementById('canadaInfo');
let usaInfo = document.getElementById('usaInfo');
let mexicoInfo = document.getElementById('mexicoInfo')
let brazilInfo = document.getElementById('brazilInfo')
let argentinaInfo = document.getElementById('argentinaInfo')
let peruInfo = document.getElementById('peruInfo')




//get from array
// let canada =countriesData.countries[35].total_holidays;
// let usaInner=countriesData.countries[218].total_holidays;
// let mexicoInner=countriesData.countries[130].total_holidays;






//canadaHolliday = .countries[35].total_holidays  or .countries{35}.country_name
//usa = .countries[218].total_holidays  or .countries{218}.country_name
//mexico =.countries[130].total_holidays  or  .countries[130].country_name
 //fetch countries
 fetch(countriesUrl)
 .then((response) => {
      console.log(response);
     return response.json();
 })
 .then((data) =>{
     console.log(data);
     countriesData(data);
 })
 .catch((err) => console.log(err));
 
 //////////////////////////////

//data from json
 function countriesData(data){
    let canada =data.response.countries[35].total_holidays;
    let usa=data.response.countries[218].total_holidays;
    let mexico=data.response.countries[130].total_holidays;
    let brazil=data.response.countries[26].total_holidays;
    let argentina=data.response.countries[8].total_holidays;
    let peru=data.response.countries[159].total_holidays;


    //event listeners
    document.getElementById('canadaCard').addEventListener('click',()=>{
        insideData('Canada',canadaInfo,canada)
    });

    document.getElementById('usaCard').addEventListener('click',()=>{
        insideData('The United States of America',usaInfo,usa)
    });

    document.getElementById('mexicoCard').addEventListener('click',()=>{
        insideData('Mexico',mexicoInfo,mexico)
    });

    document.getElementById('brazilCard').addEventListener('click',()=>{
        insideData('Brazil',brazilInfo,brazil)
    });

    document.getElementById('argentinaCard').addEventListener('click',()=>{
        insideData('Argentina',argentinaInfo,argentina)
    });

    document.getElementById('peruCard').addEventListener('click',()=>{
        insideData('Peru',peruInfo,peru)
    });


    
    function insideData(country,x,y){
        
        x.innerText = `${country} has ${y} national hollidays.`;
        
    }
    // insideData('Canada',canadaInfo,canada);
    // insideData('The United States of America',usaInfo,usa);
    // insideData('Mexico', mexicoInfo,mexico);
 }

 

//  countriesData(canadaInfo,canada);
// //language
// fetch(languageUrl)
// .then((response) => {
//      console.log(response);
//     return response.json();
// })
// .then((data) =>{
//     console.log(data);
//     languageData(data);
// })
// .catch((err) => console.log(err));

// //////////////////////////////
// function languageData(){

// }









