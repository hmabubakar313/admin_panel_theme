
function handlesubmit(event) {
    event.preventDefault();
    console.log('button clicked');
    var formdata = new FormData(event.target);
    // get data from form of html
     id = formdata.get('id')
     completed = formdata.get('completed')
     title = formdata.get('title')
    console.log(title);
    console.log(id);
    console.log(completed);
    console.log('testing')
    // send title and id to http://127.0.0.1:8000/api/create-task/ using formdata
    
    
    
    var xhr = new XMLHttpRequest();
    console.log(formdata);
    var request = new XMLHttpRequest();
    request.open("POST", 'http://127.0.0.1:8000/api/create-task/')
    request.send(formdata)
    console.log('after post')

}
const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

  