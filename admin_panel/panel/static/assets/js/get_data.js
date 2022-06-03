if (window.location.pathname==='/table/')
{
    (function (event){
    
        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of task')
        xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function ()
        {
            console.log('inside onload')
            if (this.status===200)
            {
                console.log('inside onload if')
                
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
       console.log('post')
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
    click_id =0;

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


}


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



// // ===========================================================
// // ===========================================================
// // ===========================================================
// // ===========================================================
// // working for student api
// // ===========================================================
// // ===========================================================
// // ===========================================================
// // ===========================================================


// // function that will work on when the submit button clicked 

if (window.location.pathname === '/student/')
{(function (event){
    
    var xhr = new XMLHttpRequest();
    console.log('inside self invoking function of student')
    xhr.open('GET','http://127.0.0.1:8000/api/student-list/',true)
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
                <td id="first_name">${obj[key].first_name}</td> 
                <td id="last_name">${obj[key].last_name}</td>  
                <td id="email">${obj[key].email}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_student(event,this.id)">Delete</button></td>
                <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_student_data(event,this.id)">Edit</a></td>`
                str += `<br>`
            }
            body.innerHTML = str
        }
        else
        {
            console.log('Error')
        }
    }
    document?.getElementById('form_student')?.reset()
    xhr.send()

}())
id =0;
function handlesubmit(event) {
    event.preventDefault();
    var formdata = new FormData(event.target);
    first_name = formdata.get('first_name');
    last_name = formdata.get('last_name');
    email =formdata.get('email');
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    id = formdata.get('id')
     console.log('click_id'+click_id) 
    var request = new XMLHttpRequest();
    
    console.log('inside handle submit button =======')
    
    
    if (id ==0)
    {
        console.log('inside if of post')
        request.open("POST", 'http://127.0.0.1:8000/api/create-student/')
    }
    else if (id ==formdata.get('id'))
    {
        console.log('inside if of put')
         request.open("PUT",'http://127.0.0.1:8000/api/update-student/'+id+'/') 
    }

    
    csrftoken = getCookie('csrftoken')
    request.setRequestHeader('X-CSRFToken', csrftoken)
   
    request.onload = function ()
    {
    console.log('insde onload of handle submit button =======')
       if (this.status===200)
       {
            console.log('inside if of handle submit button =======')
           popbtnstudent();
           console.log(this.status)
          
       }
    }
 
    
    console.log('sending data from handle submit button =======')
     alert('form submitted successfully')
     request.send(formdata)
  
    
     document?.getElementById("form_student").reset();
   
    id =0;
    
}

const b = document?.getElementById('form_student');
b?.addEventListener('submit', handlesubmit);

// // poping data on tha page using onclick function 

function popbtnstudent()

    {
      
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/student-list/',true)
        
        

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
                <td id="first_name">${obj[key].first_name}</td>  
                <td id="last_name">${obj[key].last_name}</td>
                <td id="email">${obj[key].email}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_student(event,this.id)">Delete</button></td>
                <td><a href="#card" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_student_data(event,this.id)">Edit</a></td>`
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

// //   delete data function

function delete_data_student(event,click_id) 
{
    console.log('inside delete data function')
    event.preventDefault();
 
   
    var xhr = new XMLHttpRequest()
    var request = new XMLHttpRequest()
    console.log('inside del button')
    console.log(click_id)
    xhr.open("DELETE",'http://127.0.0.1:8000/api/delete-student/'+click_id+'/',true)
    console.log('after del request')

    request.open('GET','http://127.0.0.1:8000/api/student-list/',true) 
   
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
        
        obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))

        
        for (key in obj)
        {
            str += `<tr>
            <td id="id">${obj[key].id}</td> 
            <td id="first_name">${obj[key].first_name}</td>  
            <td id="last_name">${obj[key].last_name}</td>
            <td id="email">${obj[key].email}</td>
            <td><button id="${obj[key].id}" class="btn  btn-danger" onclick =" delete_data_student(event,this.id)">Delete</button></td>
            <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_student_data(event,this.id)">Edit</button></a></td>`
            str += `<br>`
           
        }
        body.innerHTML = str

           console.log(this.status)
         
       }
    }
    xhr.send()
    request.send()


}


const form_student = document?.getElementById('form_student');
form_student?.addEventListener('submit', delete_data_student);


// //  editing student data
function update_student_data(event,click_id) 
{
    event.preventDefault();
    var xhr = new XMLHttpRequest()

    xhr.open('GET','http://127.0.0.1:8000/api/student-list/')
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
                    document.getElementById('first_name').value = obj[x].first_name
                    document.getElementById('last_name').value = obj[x].last_name
                    document.getElementById('email').value = obj[x].email
                    
                }
                
            }
        }
    }
    
    xhr.send()
      document?.getElementById("form_student").reset();
    console.log('after sednig request of GET')
    }




}

// // ===========================================================
// // ===========================================================
// // ===========================================================
// // ===========================================================
// // working for teacher api
// // ===========================================================
// // ===========================================================
// // ===========================================================
// // ===========================================================


// // function that will work on when the submit button clicked 
teacher_id =0;
if (window.location.pathname === '/teacher/')
{
    (function (event){
    
        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of student')
        xhr.open('GET','http://127.0.0.1:8000/api/teacher-list',true)
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
                    <td id="first_name">${obj[key].first_name}</td> 
                    <td id="last_name">${obj[key].last_name}</td>  
                    <td id="email">${obj[key].email}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_teacher(event,this.id)">Delete</button></td>
                    <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_teacher_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else
            {
                console.log('Error')
            }
        }
        document?.getElementById('form_teacher')?.reset()
        xhr.send()
        
    
    }())

function handlesubmit(event) {
    event.preventDefault();
    // let myform = document.getElementById(form_stud)
    let  formdata = new FormData(event.target);
    first_name = formdata.get('first_name');
    last_name = formdata.get('last_name');
    email =formdata.get('email');
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    teacher_id = formdata.get('id')
    console.log('click_id'+click_id) 
    var request = new XMLHttpRequest();
    
    console.log('inside handle submit button =======')
    
    
    if (teacher_id ==0)
    {
        console.log('inside if of post')
        request.open("POST", 'http://127.0.0.1:8000/api/create-teacher/')
    }
    else if (teacher_id ==formdata.get('id'))
    {
        console.log('inside if of put')
         request.open("PUT",'http://127.0.0.1:8000/api/update-teacher/'+teacher_id+'/') 
    }

    
    csrftoken = getCookie('csrftoken')
    request.setRequestHeader('X-CSRFToken', csrftoken)
   
    request.onload = function ()
    {
    console.log('insde onload of handle submit button =======')
       if (this.status===200)
       {
            console.log('inside if of handle submit button =======')
           popbtnteacher();
           console.log(this.status)
          
       }
    }
 
    
    console.log('sending data from handle submit button =======')
    alert('form submitted successfully')
    request.send(formdata)
  
    
    document?.getElementById("form_teacher").reset();
   
    teacher_id =0;
    
}

const teacher = document?.getElementById('form_teacher');
teacher?.addEventListener('submit', handlesubmit);

//poping data on tha page using onclick function 

function popbtnteacher()

    {
      
        var xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/teacher-list/',true)
        
        

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
                <td id="first_name">${obj[key].first_name}</td>  
                <td id="last_name">${obj[key].last_name}</td>
                <td id="email">${obj[key].email}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_teacher(event,this.id)">Delete</button></td>
                <td><a href="#card" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_teacher_data(event,this.id)">Edit</a></td>`
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

//   delete data function

function delete_data_teacher(event,click_id) 
{
    console.log('inside delete data function')
    event.preventDefault();
 
   
    var xhr = new XMLHttpRequest()
    var request = new XMLHttpRequest()
    console.log('inside del button')
    console.log(click_id)
    xhr.open("DELETE",'http://127.0.0.1:8000/api/delete-teacher/'+click_id+'/',true)
    console.log('after del request')

    request.open('GET','http://127.0.0.1:8000/api/teacher-list/',true) 
   
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
        
        obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))

        
        for (key in obj)
        {
            str += `<tr>
            <td id="id">${obj[key].id}</td> 
            <td id="first_name">${obj[key].first_name}</td>  
            <td id="last_name">${obj[key].last_name}</td>
            <td id="email">${obj[key].email}</td>
            <td><button id="${obj[key].id}" class="btn  btn-danger" onclick =" delete_data_teacher(event,this.id)">Delete</button></td>
            <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_teacher_data(event,this.id)">Edit</button></a></td>`
            str += `<br>`
           
        }
        body.innerHTML = str

           console.log(this.status)
         
       }
    }
    xhr.send()
    request.send()


}


const form_teacher = document?.getElementById('form_teacher');
form_teacher?.addEventListener('submit', delete_data_teacher);


//  editing student data
function update_teacher_data(event,click_id) 
{
    event.preventDefault();
    var xhr = new XMLHttpRequest()

    xhr.open('GET','http://127.0.0.1:8000/api/teacher-list/')
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
                    document.getElementById('first_name').value = obj[x].first_name
                    document.getElementById('last_name').value = obj[x].last_name
                    document.getElementById('email').value = obj[x].email
                    
                }
                
            }
        }
    }
    
    xhr.send()
      document?.getElementById("form_teacher").reset();
    console.log('after sednig request of GET')
    }


 


    
}


// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================
// working for School api
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================

if (window.location.pathname==='/school/')
{
    (function (event){
    
        var xhr = new XMLHttpRequest();
        console.log('inside school')
        console.log('inside self invoking function of school')
        xhr.open('GET','http://127.0.0.1:8000/api/school-list/',true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function ()
        {
            console.log('inside onload')
            if (this.status===200)
            {
                console.log('inside onload if')
                
                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj= obj?.sort((a,b) => (a.id>b.id ? -1 :1))
                // console.log(obj)
                for (key in obj)
                {
                    str += `<tr>
                    <td id="school_name">${obj[key].school_name}</td> 
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
        // document.getElementById('form_school')?.reset()
        xhr.send()
    
    }())
school_id =0;
function handlesubmit(event) {
        event.preventDefault();

        let  formdata = new FormData(event.target);
        console.log(typeof(formdata))
        console.log('===school name===')
        console.log(formdata.get('school_name'))
        console.log('===school_id===')
        console.log(formdata.get('school_id'))
        console.log('===school address===')
        console.log(formdata.get('school_address'))
        console.log('===school state===')
        console.log(formdata.get('state'))
        console.log('===country===')
        console.log(formdata.get('country'))
        console.log('===postal code===')
        console.log(formdata.get('postal_code'))
        console.log('===ranking===')
        console.log(formdata.get('ranking'))
        console.log('===url===')
        console.log(formdata.get('url'))
        console.log('===school type===')
        console.log(formdata.get('school_type'))
        console.log('===school sieze===')
        console.log(formdata.get('school_size'))
        console.log('===phone number===')
        console.log(formdata.get('phone_input'))
        console.log('===file===')
        console.log(formdata.get('file'))
        console.log('===email===')
        console.log(formdata.get('email'))
       
        school_id = formdata.get('id')
        console.log('school_id : '+school_id) 
        var request = new XMLHttpRequest();
        
        console.log('inside handle submit button =======')
        
        
        request.open("POST", 'http://127.0.0.1:8000/api/create-school/')
        /* if (teacher_id ==0)
        {
            console.log('inside if of post')
        } */
        /* else if (teacher_id ==formdata.get('id'))
        {
            console.log('inside if of put')
             request.open("PUT",'http://127.0.0.1:8000/api/update-teacher/'+teacher_id+'/') 
        } */
    
        
        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)
       
        request.onload = function ()
        {
        console.log('insde onload of handle submit button =======')
           if (this.status===200)
           {
                console.log('inside if of handle submit button =======')
            //    popbtnteacher();
               console.log(this.status)
              
           }
        }
     
        
        console.log('sending data from handle submit button =======')
        alert('form submitted successfully')
        request.send(formdata)
      
        
        // document?.getElementById("form_school").reset();
       
        school_id =0;
        
    }
}
    
    const school = document?.getElementById('form_school');
    school?.addEventListener('submit', handlesubmit);
function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11)); 
}
$('[type="tel"]').keyup(phoneMask);