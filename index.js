const url ='https://calendarific.com/api/v2?api_key=07da68b8dd3fc722aed58f4042be3593c0e32d7a';

const countriesUrl='https://calendarific.com/api/v2/countries?api_key=07da68b8dd3fc722aed58f4042be3593c0e32d7a';

let canadaInfo = document.getElementById('canadaInfo');
let usaInfo = document.getElementById('usaInfo');
let mexicoInfo = document.getElementById('mexicoInfo')


//get from array
let canada =countriesData.countries[35].total_holidays;
let usaInner=countriesData.countries[218].total_holidays;
let mexicoInner=countriesData.countries[130].total_holidays;






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


 function countriesData(x,y){
    x.innerText = y;
    return x.innerText;
 }

 countriesData(canadaInfo,canada);
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









