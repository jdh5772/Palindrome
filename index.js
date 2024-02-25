const regexr = /[^A-Za-z0-9]/gi;
const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result')


checkBtn.addEventListener('click',()=>{
    const text =  textInput.value.replace(regexr,'').toLowerCase();
    const reverseText = text.split('').reverse().join('');
    if(!text){
        alert('Please input a value');
    } else{
        if(text === reverseText){
            result.innerHTML = `입력값 : ${textInput.value} - 거꾸로 해도 같음`;
        } else{
            result.innerHTML = `입력값 : ${textInput.value} - 거꾸로 하면 다름`;
        }
    }
})