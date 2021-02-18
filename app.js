
//get access to the sliders
//principal amount slider and value
let principalSlider = document.querySelector(".principalSlider");
var principalValue = document.querySelector(".principalValue");


principalSlider.addEventListener("input", ()=>{ //what we want to do when the input happens on the PrincipalSlider is to execute a callback function
  principalValue.innerHTML="$ "+principalSlider.value
  calculate()
  //For the calculation to happen we need to call the calculateInterest function every time we change the sliders (so the value changes in the event listeners)
}) //the slider provides an input and we want to catch that, pass a callback function




//nr of years slider
var numberOfYearsSlider= document.querySelector(".yearSlider")
var numberOfYears=document.querySelector(".yearValue")

numberOfYearsSlider.addEventListener("input", ()=>{
  numberOfYears.innerHTML=numberOfYearsSlider.value+" years"
  calculate()
})



//Rate of interest slider
var rateOfInterestSlider =document.querySelector(".interestSlider")
var rateOfInterest= document.querySelector(".interestValue")

//get access to the calculated fields
rateOfInterestSlider.addEventListener("input", ()=>{
  rateOfInterest.innerHTML=rateOfInterestSlider.value+" %"
  calculate()
})


console.log((principalSlider.value))

function calculate(){
let rateOfInterestCalc= Math.round(parseInt(principalSlider.value)*parseInt(numberOfYearsSlider.value)*parseInt(rateOfInterestSlider.value)/100)
var calcIntValue=document.querySelector(".calcIntValue")
calcIntValue.innerHTML="$ "+rateOfInterestCalc


let totalAmountToPay=Math.round(rateOfInterestCalc+parseInt(principalSlider.value))
var calcPrincValue=document.querySelector(".calcPrincValue")
calcPrincValue.innerHTML="$ "+totalAmountToPay


let monthlyInstallment=Math.round(totalAmountToPay/(parseInt(numberOfYearsSlider.value)*12))
var monthInstValue=document.querySelector(".monthInstValue")
monthInstValue.innerHTML="$ "+monthlyInstallment
}
