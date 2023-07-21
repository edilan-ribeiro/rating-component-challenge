const submitButton = document.getElementById('btn-submit')
const ratingsList = document.getElementsByName('ratings')
let evaluationGiven = document.getElementById('rating-given')
const ratingComponent = document.getElementById('rating-component')
const thanksComponent = document.getElementById('thanks-component')

console.log(ratingComponent)


submitButton.addEventListener('click', function(){

for (let i = 0; i < ratingsList.length; i++) {
    const radioValue = ratingsList[i];
    if (radioValue.checked){

        evaluationGiven.innerHTML ='You Selected ' + radioValue.value + ' out of 5';
        thanksComponent.classList.remove('vanish')
        ratingComponent.classList.add('vanish')
        
        thanksComponent.classList.add('appear')
    }
}

})