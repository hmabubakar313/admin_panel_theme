
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
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

const a = document.getElementById('form');
a.addEventListener('submit', handlesubmit);
// 
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
                <td><button id="${obj[key].id}" class="btn  btn-primary" onclick ="delete_data(event,this.id)"><i class="fa-solid fa-pencil"></i></button></td>`
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

function delete_data(event,click_id) 
{
   
    event.preventDefault();
    console.log('button clicked');
    console.log('click_id : '+click_id)

    // alert(click_id)
   
    // var formdata = new FormData(event.target);
    // console.log(formdata)
   
    var xhr = new XMLHttpRequest()
    
    xhr.open('DELETE','http://127.0.0.1:8000/api/delete-task/'+click_id+'/')
    // send csrf in header 
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
   
   
    
    // console.log('after api')
    xhr.onload = function ()
    {
        
        console.log('inside on load of get')
    
       if (this.status===200)
       {
        //    popBtnHandler();
           console.log(this.status)
           console.log('form submitted successfully')
           alert('form submitted successfully')
       }
    }
    xhr.send()


}


const form = document.getElementById('form');
form.addEventListener('submit', delete_data);



function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1);
       if(c.indexOf(name) == 0)
          return c.substring(name.length,c.length);
    }
    return "";
}
