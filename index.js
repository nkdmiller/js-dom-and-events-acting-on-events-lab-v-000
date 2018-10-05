function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation(){
  return document.querySelector("input[name='name']").value;
}

function addNewElementAsLi(){
  return document.querySelector("ul.employee-list").append(retrieveEmployeeInformation());
}
preventRefreshOnSubmit()

function addNewLiOnClick(){
  document.querySelector("input[name='name']").addEventListener("click", function(event){
    addNewElementAsLi();
    document.querySelector("input[name='name']").value("");
  });
}