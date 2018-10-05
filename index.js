function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation(){
  return document.querySelector("input[name='name']").value;
}

function addNewElementAsLi(){
  return document.querySelector("")
}
preventRefreshOnSubmit()
