
(function (event){
    
    var xhr = new XMLHttpRequest();
    console.log('inside self invoking function')
    xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
    xhr.onload = function ()
    {
        if (this.status===200)
        {
            console.log('inside slef onload')
            let obj = JSON.parse(this.responseText)
            let body = document.getElementById('body')
            str = ""
            obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))
            for (key in obj)
            {
                str += `<tr>
                <td id="id">${obj[key].id}</td> 
                <td id="title">${obj[key].title}</td>  
                <td id="description">${obj[key].description}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_data(event,this.id)">Edit</a></td>`
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

}())


function handlesubmit(event) {
    event.preventDefault();
    var formdata = new FormData(event.target);
    
    click_id = formdata.get('id')
    console.log('click_id'+click_id)
    var request = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
   
    request.open("POST", 'http://127.0.0.1:8000/api/create-task/')
    request.open("PUT",'http://127.0.0.1:8000/api/update-task/'+click_id+'/')

    
    csrftoken = getCookie('csrftoken')
    request.setRequestHeader('X-CSRFToken', csrftoken)
    // xhr.setRequestHeader('X-CSRFToken', csrftoken)
    request.onload = function ()
    {
    
       if (this.status===200)
       {

           popBtnHandler();
           console.log(this.status)
          
       }
    }
  /*  xhr.onload = function ()
    {
    
       if (this.status===200)
       {
           popBtnHandler();
           console.log(this.status)
          
       }
    } */
    alert('form submitted successfully')
    request.send(formdata)
    //  xhr.send(formdata)
    
    document.getElementById("form").reset();
   
    
    
}

const a = document.getElementById('form');
a.addEventListener('submit', handlesubmit);

function popBtnHandler()

    {
      
        const xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
        
        

        xhr.onload = function ()
        {
            console.log('inside on load of get')
            if (this.status===200)
            {
            let obj = JSON.parse(this.responseText)
           
            
            let body = document.getElementById('body')
            
            str = ""
           
            obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))
            console.log(("type : "+typeof(obj)))
            console.log(obj)    
            for (key in obj)
            {
                str += `<tr>
                <td id="id">${obj[key].id}</td> 
                <td id="title">${obj[key].title}</td>  
                <td id="description">${obj[key].description}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_data(event,this.id)">Edit</a></td>`
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
        
    }

function delete_data(event,click_id) 
{
   
    event.preventDefault();
    console.log('delete button');
  


   
   
    var xhr = new XMLHttpRequest()
    var request = new XMLHttpRequest()
    
    xhr.open("DELETE",'http://127.0.0.1:8000/api/delete-task/'+click_id+'/',true)

    request.open('GET','http://127.0.0.1:8000/api/task-list/',true) 
   
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
   
    
   
    xhr.onload = function ()
    {
        
      console.log('inside onload')
    
       if (this.status===200)
       {
        let obj = JSON.parse(this.responseText)
        console.log('inside onload if')    
        let body = document.getElementById('body')

        
        str = ""
       
        console.log(typeof(obj))
        
        obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))

        
        for (key in obj)
        {
            str += `<tr>
            <td id="id">${obj[key].id}</td> 
            <td id="title">${obj[key].title}</td>  
            <td id="description">${obj[key].description}</td>
            <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
            <td><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)">Edit</button></td>`
            str += `<br>`
           
        }
        body.innerHTML = str

           console.log(this.status)
         
       }
    }
    xhr.send()
    request.send()


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


function update_data(event,click_id) 
{
    event.preventDefault();
    var xhr = new XMLHttpRequest()
    console.log('inside update')
   
   
   
    console.log('after put')
    xhr.open('GET','http://127.0.0.1:8000/api/task-list/')
    console.log('after get')
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
    xhr.onload = function ()
    {
        console.log('inside on load of get')
        if (this.status===200)
        {
            console.log('inside if')
            let obj = JSON.parse(this.responseText)
            // clicked id of object id
            console.log(obj)
            for (x in obj)
            {
                
                console.log('printing obj id ')
                // console.log(obj[x].id)
                if (obj[x].id == click_id)
                {
                    console.log('inside if'+click_id)
                    console.log('inside if obj id '+obj[x].id)
                    console.log('helloasdasdawewad')
                    console.log(obj[x].id)
                    document.getElementById('id').value = obj[x].id
                    console.log("id : "+obj[x].id)
                    document.getElementById('title').value = obj[x].title
                    document.getElementById('description').value = obj[x].description
                    
                }
                
            }
        }
    }
    
    xhr.send()
      document.getElementById("form").reset();
    console.log('after sednig request of GET')
    }
