
// let popbtn = document.getElementById('popbtn')
// popbtn.addEventListener('click', popBtnHandler)

// const form = document.getElementById('form');
// form.addEventListener('submit', handlesubmit);

// inserting data 

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
           popBtnHandler();
           console.log(this.status)
           alert('form submitted successfully')
       }
    }
    request.send(formdata)
    
    document.getElementById("form").reset();
    console.log('after post')
    
    
}

const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit);

function popBtnHandler()

    {
        console.log('inside get')
        // event.preventDefault();
        console.log('inside function')
        const xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
        console.log('after api')


        xhr.onload = function ()
        {
            console.log('inside on load of get')
            if (this.status===200)
            {
            let obj = JSON.parse(this.responseText)
           
            
            let body = document.getElementById('body')
            str = ""
            obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))
            
            for (key in obj)
            {
                str += `<tr>
                <td id="id">${obj[key].id}</td> 
                <td id="title">${obj[key].title}</td>  
                <td id="completed">${obj[key].completed}</td>
                
                </tr>`
                str += `<br>`
            }
            body.innerHTML = str
            
            }
            else
            {
                console.log('Error')
            }
        }
        xhr.send()
        console.log('after sednig request of GET')
    }

  