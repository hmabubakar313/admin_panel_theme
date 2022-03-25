
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
    console.log(formdata);
    var request = new XMLHttpRequest();
   
    request.open("POST", 'http://127.0.0.1:8000/api/create-task/')
    request.onload = function ()
    {
    
       if (this.status===200)
       {
           console.log(this.status)
           alert('form submitted successfully')
       }
    }
    request.send(formdata)
    
       
    console.log('after post')
    
    
}

const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

  