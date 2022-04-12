// let popbtn = document.getElementById('popbtn')
// popbtn.addEventListener('click', popBtnHandler)

// const form = document.getElementById('form');
// form.addEventListener('submit', handlesubmit);

// inserting data 

function handlesubmit(event) {
    event.preventDefault();
    var formdata = new FormData(event.target);
    title = formdata.get('title')
    click_id = formdata.get('id')
   
    var request = new XMLHttpRequest();
   
    request.open("POST", 'http://127.0.0.1:8000/api/create-task/')
    request.open("PUT",'http://127.0.0.1:8000/api/update-task/'+click_id+'/')
    csrftoken = getCookie('csrftoken')
    request.setRequestHeader('X-CSRFToken', csrftoken)
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
   
    
    
}

const a = document.getElementById('form');
a.addEventListener('submit', handlesubmit);
// 
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
            
            for (key in obj)
            {
                str += `<tr>
                <td id="id">${obj[key].id}</td> 
                <td id="title">${obj[key].title}</td>  
                <td id="completed">${obj[key].completed}</td>
                <td><button id="${obj[key].id}" class="btn  btn-primary" onclick ="delete_data(event,this.id)"><i class="fa-solid fa-pencil"></i></button></td>
                <td><button id="${obj[key].id}" class="btn btn-secondary" onclick ="update_data(event,this.id)"><i class="fa-solid fa-square-pen"></i></button></td>`
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
  /*   console.log('button clicked');
    console.log('click_id : '+click_id)
 */
    // alert(click_id)
   
    // var formdata = new FormData(event.target);
    // console.log(formdata)
   
    var xhr = new XMLHttpRequest()
    
    xhr.open('DELETE','http://127.0.0.1:8000/api/delete-task/'+click_id+'/')
    xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true) 
    // send csrf in header 
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
   
    
    // console.log('after api')
    xhr.onload = function ()
    {
        
      
    
       if (this.status===200)
       {
        let obj = JSON.parse(this.responseText)
           
        
        let body = document.getElementById('body')
        str = ""
        obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))
        console.log(obj)
        
        for (key in obj)
        {
            str += `<tr>
            <td id="id">${obj[key].id}</td> 
            <td id="title">${obj[key].title}</td>  
            <td id="completed">${obj[key].completed}</td>
            <td><button id="${obj[key].id}" class="btn  btn-primary" onclick ="delete_data(event,this.id)"><i class="fa-solid fa-pencil"></i></button></td>
            <td><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)"><i class="fa-solid fa-square-pen"></i></button></td>`
            str += `<br>`
        }
        body.innerHTML = str

        //    popBtnHandler();
           console.log(this.status)
          /*  console.log('form submitted successfully')
           alert('form submitted successfully') */
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
                    console.log('helloasdasdawewad')
                    console.log(obj[x].id)
                    document.getElementById('id').value = obj[x].id
                    document.getElementById('title').value = obj[x].title
                    document.getElementById('completed').value = obj[x].completed
                }
                
            }
            // console.log(obj.)
        
        }
    }
    xhr.send()
      document.getElementById("form").reset();
    console.log('after sednig request of GET')
    }


   
   



