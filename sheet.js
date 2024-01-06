const scriptURL ='https://script.google.com/macros/s/AKfycbxv3b8aw2R-U3jBN7RRb9VDp3c4FFc5tXmNpFSUok-LOlTnAjZBR9--hOuWTCfOAx7Q/exec'
const form = document.forms['Details']
form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(Response=>alert("Thank you! please proceed further"))
    .then(()=>{window.location.reload();})
    .catch(error=> console.error('Error!',error.message))
})