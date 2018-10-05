function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation(){
  var bla = $('input#box').val();
  return bla;
}

preventRefreshOnSubmit()
