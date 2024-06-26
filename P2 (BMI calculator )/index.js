const form = document.querySelector('form')
// this use case will give you empty
// const height = parseInt(document.querySelector('#hight').value)

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#hight').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = `Please give a velid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a velid weight ${weight}`;
  } else  {
     const bmi = (weight / ((height*weight) / 1000)).toFixed(2)

     //show the results

     results.innerHTML = ` <span> ${bmi} </span>`;
  }

})