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
    document.getElementById('form_task')?.reset()
    xhr.send()

}())

click_id =0;

function handlesubmit(event) {
    event.preventDefault();
    var formdata = new FormData(event.target);
    
    click_id = formdata.get('id');
    console.log(typeof("clicked id is :"+click_id));
    console.log('click_id'+click_id);
    var request = new XMLHttpRequest();
    
    console.log('inside handlesubmit')
   if (click_id==0)
   {
    request.open("POST", 'http://127.0.0.1:8000/api/create-task/',true)
   }
   else if (click_id==formdata.get('id'))
    {
        request.open("PUT",'http://127.0.0.1:8000/api/update-task/'+click_id+'/',true)
    }

    console.log('after request')
    csrftoken = getCookie('csrftoken')
    request.setRequestHeader('X-CSRFToken', csrftoken)
   
    request.onload = function ()
    {
    
       if (this.status===200)
       {
        popBtnHandler();
        console.log('inside if')
        console.log(this.status)
       }
    }
 
    alert('form submitted successfully')
    request.send(formdata)
   
    
    document.getElementById("form_task").reset();
   

}

const a = document.getElementById('form_task');
a?.addEventListener('submit', handlesubmit)
function popBtnHandler()

    {
      
        const xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
        
        

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
                <td id="description">${obj[key].description}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                <td><button id="${obj[key].id}" class="btn btn-secondary" onclick ="update_data(event,this.id)">Edit</button></td>`
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
 
   
    var xhr = new XMLHttpRequest()
    var request = new XMLHttpRequest()
    
    xhr.open("DELETE",'http://127.0.0.1:8000/api/delete-task/'+click_id+'/',true)

    request.open('GET','http://127.0.0.1:8000/api/task-list/',true) 
   
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
   
    
   
    xhr.onload = function ()
    {
        

    
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
            <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)">Edit</button></a></td>`
            str += `<br>`
           
        }
        body.innerHTML = str

           console.log(this.status)
         
       }
    }
    xhr.send()
    request.send()


}


const form = document.getElementById('form_task');
form?.addEventListener('submit', delete_data);



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

    xhr.open('GET','http://127.0.0.1:8000/api/task-list/')
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
                    document.getElementById('id').value = obj[x].id
                    document.getElementById('title').value = obj[x].title
                    document.getElementById('description').value = obj[x].description 
                }
                
            }
        }
    }
    
    xhr.send()
    document.getElementById("form_task")?.reset();
    console.log('after sednig request of GET')
    }



// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================
// working for student api
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================


// function that will work on when the submit button clicked 

// function handlesubmit(event) {
//     event.preventDefault();
//     var formdata = new FormData(event.target);
//     first_name = formdata.get('first_name');
//     last_name = formdata.get('last_name');
//     email =formdata.get('email');
//     console.log(first_name);
//     console.log(last_name);
//     console.log(email);
//     click_id = formdata.get('id')
//     /* console.log('click_id'+click_id) */
//     var request = new XMLHttpRequest();
    
//     console.log('inside handle submit button =======')
    
    
//     request.open("POST", 'http://127.0.0.1:8000/api/create-student/')
//     request.open("PUT",'http://127.0.0.1:8000/api/update-student/'+click_id+'/')

    
//     csrftoken = getCookie('csrftoken')
//     request.setRequestHeader('X-CSRFToken', csrftoken)
   
//     request.onload = function ()
//     {
//     console.log('insde onload of handle submit button =======')
//        if (this.status===200)
//        {
//             console.log('inside if of handle submit button =======')
//            popbtnstudent();
//            console.log(this.status)
          
//        }
//     }
 
    
//     console.log('sending data from handle submit button =======')
//     alert('form submitted successfully')
//     request.send(formdata)
  
    
//     document.getElementById("form_student").reset();
   
    
    
// }

// const b = document.getElementById('form_student');
// b.addEventListener('submit', handlesubmit);

// // poping data on tha page using onclick function 

// function popbtnstudent()

//     {
      
//         var xhr = new XMLHttpRequest()
//         xhr.open('GET','http://127.0.0.1:8000/api/student-list/',true)
        
        

//         xhr.onload = function ()
//         {
          
//             console.log('inside on load of get')
//             if (this.status===200)
//             {
//             let obj = JSON.parse(this.responseText)
           
            
//             let body = document.getElementById('body')
            
//             str = ""
           
//             obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))
//             console.log(("type : "+typeof(obj)))
//             console.log(obj)    
//             for (key in obj)
//             {
//                 str += `<tr>
//                 <td id="id">${obj[key].id}</td> 
//                 <td id="first_name">${obj[key].first_name}</td>  
//                 <td id="last_name">${obj[key].last_name}</td>
//                 <td id="email">${obj[key].email}</td>
//                 <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_student(event,this.id)">Delete</button></td>
//                 <td><a href="#card" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_student_data(event,this.id)">Edit</a></td>`
//                 str += `<br>`
//             }
//             body.innerHTML = str
            
//             }
//             else
//             {
//                 console.log('Error')
//             }
//         }
//         xhr.send()
        
//     }

// //  delete data function

// function delete_data_student(event,click_id) 
// {
   
//     event.preventDefault();
 
   
//     var xhr = new XMLHttpRequest()
//     var request = new XMLHttpRequest()
//     console.log('inside del button')
//     console.log(click_id)
//     xhr.open("DELETE",'http://127.0.0.1:8000/api/delete-student/'+click_id+'/',true)

//     request.open('GET','http://127.0.0.1:8000/api/student-list/',true) 
   
//     csrftoken = getCookie('csrftoken')
//     xhr.setRequestHeader('X-CSRFToken', csrftoken)
   
    
   
//     xhr.onload = function ()
//     {
        
//       console.log('inside onload')
    
//        if (this.status===200)
//        {
//         let obj = JSON.parse(this.responseText)
//         console.log('inside onload if')    
//         let body = document.getElementById('body')

        
//         str = ""
        
//         obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))

        
//         for (key in obj)
//         {
//             str += `<tr>
//             <td id="id">${obj[key].id}</td> 
//             <td id="first_name">${obj[key].first_name}</td>  
//             <td id="last_name">${obj[key].last_name}</td>
//             <td id="email">${obj[key].email}</td>
//             <td><button id="${obj[key].id}" class="btn  btn-danger" onclick =" delete_data_student(event,this.id)">Delete</button></td>
//             <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_student_data(event,this.id)">Edit</button></a></td>`
//             str += `<br>`
           
//         }
//         body.innerHTML = str

//            console.log(this.status)
         
//        }
//     }
//     xhr.send()
//     request.send()


// }


// const form_student = document.getElementById('form_student');
// form_student.addEventListener('submit', delete_data_student);


// //  editing student data
// function update_student_data(event,click_id) 
// {
//     event.preventDefault();
//     var xhr = new XMLHttpRequest()

//     xhr.open('GET','http://127.0.0.1:8000/api/student-list/')
//     csrftoken = getCookie('csrftoken')
//     xhr.setRequestHeader('X-CSRFToken', csrftoken)
//     xhr.onload = function ()
//     {
//         console.log('inside on load of get')
//         if (this.status===200)
//         {
//             console.log('inside if')
//             let obj = JSON.parse(this.responseText)
//             // clicked id of object id
//             console.log(obj)
//             for (x in obj)
//             {
                
//                 console.log('printing obj id ')
//                 // console.log(obj[x].id)
//                 if (obj[x].id == click_id)
//                 {
                   
                   
                  
//                     document.getElementById('id').value = obj[x].id
//                     document.getElementById('first_name').value = obj[x].first_name
//                     document.getElementById('last_name').value = obj[x].last_name
//                     document.getElementById('email').value = obj[x].email
                    
//                 }
                
//             }
//         }
//     }
    
//     xhr.send()
//       document.getElementById("form_student").reset();
//     console.log('after sednig request of GET')
//     }