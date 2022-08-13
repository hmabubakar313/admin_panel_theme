if (window.location.pathname === '/dashboard/') {

    (function (event) {

        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of task')
        xhr.open('GET', 'http://127.0.0.1:8000/api/task-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if')

                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="title">${obj[key].title}</td>  
                    <td id="description">${obj[key].description}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].student}</td>
                    <td>${obj[key].class_name}</td>
                    <td>${obj[key].teacher_name}</td>
                    <td>${obj[key].user_name}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                    <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)">Edit</button></a></td>`
                        str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document.getElementById('form_task')?.reset()
        xhr.send()

    }())
}
if (window.location.pathname === '/table/') {
(function (event) {

        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of task')
        xhr.open('GET', 'http://127.0.0.1:8000/api/task-list/', true)
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if')

                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="title">${obj[key].title}</td>  
                    <td id="description">${obj[key].description}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].student}</td>
                    <td>${obj[key].class_name}</td>
                    <td>${obj[key].teacher_name}</td>
                    <td>${obj[key].user_name}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                    <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)">Edit</button></a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document.getElementById('form_task')?.reset()
        xhr.send()

    }())

    // =================== 
    // ==================
    // dropdown function

    
function dropdown() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)
        console.log('calling dropdown function')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if of and asasadas')

                let obj = JSON.parse(this.responseText)
                console.log('after obj')
                let select = document.getElementById('select')
                str = ""
                str += `<option value="" selected disabled>Select School</option>`
                // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(obj)                
                for (key in obj) 
                {
                
                    // set if statement to check if the school is already in the local storage
                    // if it is, then set the selected attribute to true
                    // if it is not, then set the selected attribute to false
                    var school_id    = localStorage.getItem('school_id')
                    console.log('school_id : '+school_id)
                    
                    if (school_id == obj[key].id) {
                        str += `<option value="${obj[key].id}" selected>${obj[key].school_name}</option>`
                    }
                    else {
                        console.log('inside else of student of option')
                        str += `<option value="${obj[key].id}">${obj[key].school_name}</option>`
                    }
                }
                select.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        
        xhr.send()
    }
    dropdown();
    // get school id and store it in loal storage
function SetSchoolId(event){
    // set school id in local storage
    console.log('inside set school id')
    console.log(event.value)
    let school_id = event.value
    localStorage.setItem('school_id',school_id)
    console.log(school_id)

}

// setting student ID
// function SetStudentId(event){
//     // set school id in local storage
//     console.log('inside set student id')
//     console.log(event.value)
//     var student_id = event.value
//     localStorage.setItem('student_id',student_id)
//     console.log(student_id)

// }
     // EventListned For Student
//      var select = document.getElementById('select');
// select.addEventListener('change', function handleChange(event) {
//     console.log(event.target.value); // 👉️ get selected VALUE
//     console.log('inside event listner')
//    // 👇️ get selected VALUE even outside event handler
//    // console.log('event listner')
//    const value = select.options[select.selectedIndex].value;

//    console.log('printing value')
//    console.log(value);
//    // 👇️ get selected TEXT in or outside event handler
//    // console.log(select.options[select.selectedIndex].text);
// });
    
  // EventListned For School 

    // getting student data 
    function dropdownstudent_list() {
        var xhr = new XMLHttpRequest();
        console.log('dropdown of studetn list')
        xhr.open('GET', 'http://127.0.0.1:8000/api/student-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('dropdownstudent_lists')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if of and asasadas')

                let obj = JSON.parse(this.responseText)
                console.log('after obj')
                let select = document.getElementById('select_student')
                str = ""
                str += `<option value="" selected disabled>Select Student</option>`
                // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(obj)                
                for (key in obj) 
                {
                    console.log('inside loop')
                    console.log('inside if student of option')
                    str += `<option value="${obj[key].id}">${obj[key].last_name}</option>`
                }
                select.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }

        
        xhr.send()
    }
    dropdownstudent_list();
    // getting class data 
     // getting student data 
     function dropdownclass_list() {
        var xhr = new XMLHttpRequest();
        console.log('dropdown of class list')
        xhr.open('GET', 'http://127.0.0.1:8000/api/classroom-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('dropdownstudent_lists')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if of and class')

                let obj = JSON.parse(this.responseText)
                console.log('after obj')
                let select = document.getElementById('select_class')
                str = ""
                str += `<option value="" selected disabled>Select Class</option>`
                // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(obj)                
                for (key in obj) 
                {
                    console.log('inside loop')
                    console.log('inside if class of option')
                    str += `<option value="${obj[key].id}">${obj[key].name}</option>`
                }
                select.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }

        
        xhr.send()
    }
    dropdownclass_list();
    function dropdownteacher_list() {
        var xhr = new XMLHttpRequest();
        console.log('dropdown of class list')
        xhr.open('GET', 'http://127.0.0.1:8000/api/teacher-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('dropdownstudent_lists')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if of and teacher')

                let obj = JSON.parse(this.responseText)
                console.log('after obj')
                let select = document.getElementById('select_teacher')
                str = ""
                str += `<option value="" selected disabled>Select Teacher</option>`
                // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(obj)                
                for (key in obj) 
                {
                    console.log('inside loop')
                    console.log('inside if Teacher of option')
                    str += `<option value="${obj[key].id}">${obj[key].last_name}</option>`
                }
                select.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }

        
        xhr.send()
    }
    dropdownteacher_list();
    // students  event listner 
 select.addEventListener('change', function handleChangestudent_list(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
    console.log('inside event listner')
   // 👇️ get selected VALUE even outside event handler
   // console.log('event listner')
   const value = select.options[select.selectedIndex].value;

   console.log('printing value')
   console.log(value);

   // 👇️ get selected TEXT in or outside event handler
   // console.log(select.options[select.selectedIndex].text);
});
  
   
    // ----------------------------------------
    // ----------------------------------------
    // ----------------------------------------
    click_id = 0;

    function handlesubmit(event) {
        event.preventDefault();
        var formdata = new FormData(event.target);
        var school_id    = localStorage.getItem('school_id')
        formdata.set('school',school_id)
        
        console.log('formdata : '+formdata)
        click_id = formdata.get('id');
        // console.log(typeof ("clicked id is :" + click_id));
        // console.log('click_id' + click_id);
        // select = formdata.get('school')
        // console.log('select is : '+select)
        var request = new XMLHttpRequest();
        student = formdata.get('student')
        console.log('student is : '+student)
        // console.log(formdata.get('select'))
        // console.log('school_id : ' + school)

        console.log('inside handlesubmit')
        if (click_id == 0) {
            console.log('post')
            request.open("POST", 'http://127.0.0.1:8000/api/create-task/', true)
        }
        else if (click_id == formdata.get('id')) {
            request.open("PUT", 'http://127.0.0.1:8000/api/update-task/' + click_id + '/', true)
        }

        console.log('after request')
        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)

        request.onload = function () {

            if (this.status === 200) {
                popBtnHandler();
                console.log('inside if')
                console.log(this.status)
            }
        }

        alert('form submitted successfully')
        request.send(formdata)


        document.getElementById("form_task").reset();
        click_id = 0;

    }
    
    const a = document.getElementById('form_task');
    a?.addEventListener('submit', handlesubmit)

   
 

    // ===== 
    // popbtn
    function popBtnHandler() {

        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8000/api/task-list/', true)



        xhr.onload = function () {

            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)


                let body = document.getElementById('body')

                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="title">${obj[key].title}</td>  
                    <td id="description">${obj[key].description}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].student}</td>
                    <td>${obj[key].class_name}</td>
                    <td>${obj[key].teacher_name}</td>
                    <td>${obj[key].user_name}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                    <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)">Edit</button></a></td>`
                        str += `<br>`
                }
                body.innerHTML = str

            }
            else {
                console.log('Error')
            }
        }
        xhr.send()

    }

    function delete_data(event, click_id) {

        event.preventDefault();


        var xhr = new XMLHttpRequest()
        var request = new XMLHttpRequest()

        xhr.open("DELETE", 'http://127.0.0.1:8000/api/delete-task/' + click_id + '/', true)

        request.open('GET', 'http://127.0.0.1:8000/api/task-list/', true)

        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)



        xhr.onload = function () {



            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)
                console.log('inside onload if')
                let body = document.getElementById('body')


                str = ""

                console.log(typeof (obj))

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))


                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="title">${obj[key].title}</td>  
                    <td id="description">${obj[key].description}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].student}</td>
                    <td>${obj[key].class_name}</td>
                    <td>${obj[key].teacher_name}</td>
                    <td>${obj[key].user_name}</td>
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



    function update_data(event, click_id) {
        event.preventDefault();
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://127.0.0.1:8000/api/task-list/')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside on load of get')
            if (this.status === 200) {
                console.log('inside if')
                let obj = JSON.parse(this.responseText)
                // clicked id of object id
                console.log(obj)
                for (x in obj) {

                    console.log('printing obj id ')
                    // console.log(obj[x].id)
                    if (obj[x].id == click_id) {
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
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
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

if (window.location.pathname === '/student/') {
    (function (event) {

        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of student')
        xhr.open('GET', 'http://127.0.0.1:8000/api/student-list/', true)
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            if (this.status === 200) {

                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="first_name">${obj[key].first_name}</td> 
                    <td id="last_name">${obj[key].last_name}</td>  
                    <td id="email">${obj[key].email}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].class_name}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_student(event,this.id)">Delete</button></td>
                    <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_student_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document?.getElementById('form_student')?.reset()
        xhr.send()

    }())
    // =================== 
    // ==================
    // dropdown function

    
    function dropdownstudent() {
        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of Student School')
        xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if of and student school')

                let obj = JSON.parse(this.responseText)
                console.log('after obj')
                let select = document.getElementById('select')
                str = ""
                str += `<option value="" selected disabled>Select School</option>`
                // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(obj)                
                for (key in obj) 
                {
                    
                    var school_id    = localStorage.getItem('school_id')
                    console.log('school_id : '+school_id)
                    
                    if (school_id == obj[key].id) {
                        str += `<option value="${obj[key].id}" selected>${obj[key].school_name}</option>`
                    }
                    else {
                        console.log('inside else of student of option')
                        str += `<option value="${obj[key].id}">${obj[key].school_name}</option>`
                    }
                }
                select.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        
        
     
    
        xhr.send()
    }
    
      
    dropdownstudent();
    // classrom drodpdown function
    function dropdownclass_list() {
        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of class')
        xhr.open('GET', 'http://127.0.0.1:8000/api/classroom-list/', true)
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if of and class school')

                let obj = JSON.parse(this.responseText)
                console.log('after obj')
                let select = document.getElementById('select_class')
                str = ""
                str += `<option value="" selected disabled>Select Class</option>`
                // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(obj)                
                for (key in obj) 
                {
                    
                   str += `<option value="${obj[key].id}">${obj[key].name}</option>`
                    
                }
                select.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        
        
     
    
        xhr.send()
    }
    
      
    dropdownclass_list();
function SetSchoolId(event){
    // set school id in local storage
    console.log('inside set school id')
    console.log(event.value)
    let school_id = event.value
    localStorage.setItem('school_id',school_id)
    console.log(school_id)

}
      /*   select.addEventListener('change', function handleChangestudent(event) {
            console.log(event.target.value); // 👉️ get selected VALUE
            console.log('inside event listner')
           // 👇️ get selected VALUE even outside event handler
           // console.log('event listner')
           const value = select.options[select.selectedIndex].value;

           console.log('printing value')
           console.log(value);

           // 👇️ get selected TEXT in or outside event handler
           // console.log(select.options[select.selectedIndex].text);
       });
 */

    
    id = 0;
    function handlesubmit(event) {
        event.preventDefault();
        var formdata = new FormData(event.target);
        first_name = formdata.get('first_name');
        last_name = formdata.get('last_name');
        email = formdata.get('email');
        console.log(first_name);
        console.log(last_name);
        console.log(email);
        id = formdata.get('id')
        var school_id    = localStorage.getItem('school_id')
        formdata.set('school',school_id)
         
        // school = formdata.get('school')
        // console.log('school is : '+school)
        // console.log('click_id' + click_id)
        var request = new XMLHttpRequest();

        console.log('inside handle submit button =======')


        if (id == 0) {
            console.log('inside if of post')
            request.open("POST", 'http://127.0.0.1:8000/api/create-student/')
        }
        else if (id == formdata.get('id')) {
            console.log('inside if of put')
            request.open("PUT", 'http://127.0.0.1:8000/api/update-student/' + id + '/')
        }


        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)

        request.onload = function () {
            console.log('insde onload of handle submit button =======')
            if (this.status === 200) {
                console.log('inside if of handle submit button =======')
                popbtnstudent();
                console.log(this.status)

            }
        }


        console.log('sending data from handle submit button =======')
        alert('form submitted successfully')
        request.send(formdata)


        document?.getElementById("form_student").reset();

        id = 0;

    }

    const b = document?.getElementById('form_student');
    b?.addEventListener('submit', handlesubmit);
    

    // // poping data on tha page using onclick function 

    function popbtnstudent() {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8000/api/student-list/', true)



        xhr.onload = function () {

            console.log('inside on load of get')
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)


                let body = document.getElementById('body')

                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                // console.log(("type : " + typeof (obj)))
                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="first_name">${obj[key].first_name}</td>  
                    <td id="last_name">${obj[key].last_name}</td>
                    <td id="email">${obj[key].email}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].class_name}</td> 
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_student(event,this.id)">Delete</button></td>
                    <td><a href="#card" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_student_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str

            }
            else {
                console.log('Error')
            }
        }
        xhr.send()

    }

//   delete data function

    function delete_data_student(event, click_id) {
        console.log('inside delete data function')
        event.preventDefault();


        var xhr = new XMLHttpRequest()
        var request = new XMLHttpRequest()
        console.log('inside del button')
        console.log(click_id)
        xhr.open("DELETE", 'http://127.0.0.1:8000/api/delete-student/' + click_id + '/', true)
        console.log('after del request')

        request.open('GET', 'http://127.0.0.1:8000/api/student-list/', true)

        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)



        xhr.onload = function () {

            console.log('inside onload')

            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)
                console.log('inside onload if')
                let body = document.getElementById('body')


                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))


                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="first_name">${obj[key].first_name}</td>  
                    <td id="last_name">${obj[key].last_name}</td>
                    <td id="email">${obj[key].email}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].class_name}</td> 
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_student(event,this.id)">Delete</button></td>
                    <td><a href="#card" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_student_data(event,this.id)">Edit</a></td>`
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
    function update_student_data(event, click_id) {
        event.preventDefault();
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://127.0.0.1:8000/api/student-list/')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside on load of get')
            if (this.status === 200) {
                console.log('inside if')
                let obj = JSON.parse(this.responseText)
                // clicked id of object id
                console.log(obj)
                for (x in obj) {

                    console.log('printing obj id ')
                    // console.log(obj[x].id)
                    if (obj[x].id == click_id) {



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

// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================
// working for teacher api
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================


// function that will work on when the submit button clicked 
teacher_id = 0;
if (window.location.pathname === '/teacher/') {
    (function (event) {

        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of teacher')
        xhr.open('GET', 'http://127.0.0.1:8000/api/teacher-list', true)
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            if (this.status === 200) {

                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                for (key in obj) {
                    str += `<tr>
                        <td id="id">${obj[key].id}</td> 
                        <td id="first_name">${obj[key].first_name}</td> 
                        <td id="last_name">${obj[key].last_name}</td>  
                        <td id="email">${obj[key].email}</td>
                        <td>${obj[key].school}</td>
                        <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_teacher(event,this.id)">Delete</button></td>
                        <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_teacher_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document?.getElementById('form_teacher')?.reset()
        xhr.send()


    }())
    // =================== 
    // ==================
    // dropdown function

       
function dropdownteacher() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)
    console.log('calling dropdown function')
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
    xhr.onload = function () {
        console.log('inside onload')
        if (this.status === 200) {
            console.log('inside onload if of and asasadas')

            let obj = JSON.parse(this.responseText)
            console.log('after obj')
            let select = document.getElementById('select')
            str = ""
            str += `<option value="" selected disabled>Select School</option>`
            // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
            // console.log(obj)                
            for (key in obj) 
            {
            
                // set if statement to check if the school is already in the local storage
                // if it is, then set the selected attribute to true
                // if it is not, then set the selected attribute to false
                var school_id    = localStorage.getItem('school_id')
                console.log('school_id : '+school_id)
                
                if (school_id == obj[key].id) {
                    str += `<option value="${obj[key].id}" selected>${obj[key].school_name}</option>`
                }
                else {
                    console.log('inside else of student of option')
                    str += `<option value="${obj[key].id}">${obj[key].school_name}</option>`
                }
            }
            select.innerHTML = str
        }
        else {
            console.log('Error')
        }
    }
    
    xhr.send()
}
dropdownteacher();
function SetSchoolId(event){
    // set school id in local storage
    console.log('inside set school id')
    console.log(event.value)
    let school_id = event.value
    localStorage.setItem('school_id',school_id)
    console.log(school_id)

}

        
       
      
        /* select.addEventListener('change', function handleChangeteacher(event) {
            console.log(event.target.value); // 👉️ get selected VALUE
            console.log('inside event listner')
           // 👇️ get selected VALUE even outside event handler
           // console.log('event listner')
           const value = select.options[select.selectedIndex].value;

           console.log('printing value')
           console.log(value);

           // 👇️ get selected TEXT in or outside event handler
           // console.log(select.options[select.selectedIndex].text);
       });
    
        xhr.send()
    }
 */
    function handlesubmit(event) {
        event.preventDefault();
        // let myform = document.getElementById(form_stud)
        let formdata = new FormData(event.target);
        first_name = formdata.get('first_name');
        last_name = formdata.get('last_name');
        email = formdata.get('email');
        console.log(first_name);
        console.log(last_name);
        console.log(email);
        var school_id    = localStorage.getItem('school_id')
        formdata.set('school',school_id)
        
        // teacher_id = formdata.get('id')
        // console.log('click_id' + click_id)
        var request = new XMLHttpRequest();

        console.log('inside handle submit button =======')


        if (teacher_id == 0) {
            console.log('inside if of post')
            request.open("POST", 'http://127.0.0.1:8000/api/create-teacher/')
        }
        else if (teacher_id == formdata.get('id')) {
            console.log('inside if of put')
            request.open("PUT", 'http://127.0.0.1:8000/api/update-teacher/' + teacher_id + '/')
        }


        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)

        request.onload = function () {
            console.log('insde onload of handle submit button =======')
            if (this.status === 200) {
                console.log('inside if of handle submit button =======')
                popbtnteacher();
                console.log(this.status)

            }
        }


        console.log('sending data from handle submit button =======')
        alert('form submitted successfully')
        request.send(formdata)


        document?.getElementById("form_teacher").reset();

        teacher_id = 0;

    }

    const teacher = document?.getElementById('form_teacher');
    teacher?.addEventListener('submit', handlesubmit);

    //poping data on tha page using onclick function 

    function popbtnteacher() {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8000/api/teacher-list/', true)



        xhr.onload = function () {

            console.log('inside on load of get')
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)


                let body = document.getElementById('body')

                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                console.log(("type : " + typeof (obj)))
                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                        <td id="id">${obj[key].id}</td> 
                        <td id="first_name">${obj[key].first_name}</td> 
                        <td id="last_name">${obj[key].last_name}</td>  
                        <td id="email">${obj[key].email}</td>
                        <td>${obj[key].school}</td>
                        <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_teacher(event,this.id)">Delete</button></td>
                        <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_teacher_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str

            }
            else {
                console.log('Error')
            }
        }
        xhr.send()

    }

    //   delete data function

    function delete_data_teacher(event, click_id) {
        console.log('inside delete data function')
        event.preventDefault();


        var xhr = new XMLHttpRequest()
        var request = new XMLHttpRequest()
        console.log('inside del button')
        console.log(click_id)
        xhr.open("DELETE", 'http://127.0.0.1:8000/api/delete-teacher/' + click_id + '/', true)
        console.log('after del request')

        request.open('GET', 'http://127.0.0.1:8000/api/teacher-list/', true)

        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)



        xhr.onload = function () {

            console.log('inside onload')

            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)
                console.log('inside onload if')
                let body = document.getElementById('body')


                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))


                for (key in obj) {
                    str += `<tr>
                        <td id="id">${obj[key].id}</td> 
                        <td id="first_name">${obj[key].first_name}</td> 
                        <td id="last_name">${obj[key].last_name}</td>  
                        <td id="email">${obj[key].email}</td>
                        <td>${obj[key].school}</td>
                        <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_teacher(event,this.id)">Delete</button></td>
                        <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_teacher_data(event,this.id)">Edit</a></td>`
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
    function update_teacher_data(event, click_id) {
        event.preventDefault();
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://127.0.0.1:8000/api/teacher-list/')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside on load of get')
            if (this.status === 200) {
                console.log('inside if')
                let obj = JSON.parse(this.responseText)
                // clicked id of object id
                console.log(obj)
                for (x in obj) {

                    console.log('printing obj id ')
                    // console.log(obj[x].id)
                    if (obj[x].id == click_id) {



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
// working for classroom api
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================


class_id = 0;
if (window.location.pathname === '/classroom/') {
    (function (event) {
        console.log('inside classroom')
        var xhr = new XMLHttpRequest();
        // console.log('inside school')
        console.log('inside self invoking function of classroom')
        xhr.open('GET', 'http://127.0.0.1:8000/api/classroom-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if')

                let obj = JSON.parse(this.responseText)
                console.log(obj)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                
                for (key in obj)
                
                {

                    str += `<tr>
                        <td id="id">${obj[key].id}</td> 
                        <td id="name">${obj[key].name}</td>  
                        <td id="number_of_student">${obj[key].number_of_student}</td>
                        <td>${obj[key].school}</td>
                        <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_class(event,this.id)">Delete</button></td>
                        <td><a href="" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_class_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document.getElementById('form_class')?.reset()
        xhr.send()

    }())
 
      
function dropdownclassroom() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)
    console.log('calling dropdown function')
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
    xhr.onload = function () {
        console.log('inside onload')
        if (this.status === 200) {
            console.log('inside onload if of and asasadas')

            let obj = JSON.parse(this.responseText)
            console.log('after obj')
            let select = document.getElementById('select')
            str = ""
            str += `<option value="" selected disabled>Select School</option>`
            // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
            // console.log(obj)                
            for (key in obj) 
            {
            
                // set if statement to check if the school is already in the local storage
                // if it is, then set the selected attribute to true
                // if it is not, then set the selected attribute to false
                var school_id    = localStorage.getItem('school_id')
                console.log('school_id : '+school_id)
                
                if (school_id == obj[key].id) {
                    str += `<option value="${obj[key].id}" selected>${obj[key].school_name}</option>`
                }
                else {
                    console.log('inside else of student of option')
                    str += `<option value="${obj[key].id}">${obj[key].school_name}</option>`
                }
            }
            select.innerHTML = str
        }
        else {
            console.log('Error')
        }
    }
    
    xhr.send()
}
dropdownclassroom();
// get school id
    // get school id and store it in loal storage
function SetSchoolId(event){
    // set school id in local storage
    console.log('inside set school id')
    console.log(event.value)
    let school_id = event.value
    localStorage.setItem('school_id',school_id)
    console.log(school_id)

}      
       /*  select.addEventListener('change', function handleChangeclassroom(event) {
            console.log(event.target.value); // 👉️ get selected VALUE
            console.log('inside event listner')
           // 👇️ get selected VALUE even outside event handler
           // console.log('event listner')
           const value = select.options[select.selectedIndex].value;

           console.log('printing value')
           console.log(value);

           // 👇️ get selected TEXT in or outside event handler
           // console.log(select.options[select.selectedIndex].text);
       });
    
        xhr.send()
    }
     */
    



    function handlesubmit(event) {
        event.preventDefault();

        let formdata = new FormData(event.target);
        
        select = formdata.get('select')
        console.log('select is : '+select)
        var request = new XMLHttpRequest();
        class_id = formdata.get('id')
        class_name = formdata.get('name')
        var school_id    = localStorage.getItem('school_id')
        formdata.set('school',school_id)
        
        console.log('name is :'+class_name)
        console.log('------------- class id is : --------- '+class_id)
        console.log('inside handle submit button =======')


        if (class_id == 0) {
            console.log('-- inside if of post --')
            request.open("POST", 'http://127.0.0.1:8000/api/create-class/')
        }
        else if (class_id == formdata.get('id')) {
            console.log('-- inside if of put of classroom --')
            request.open("PUT", 'http://127.0.0.1:8000/api/update-class/' + class_id + '/')
        }


        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)

        request.onload = function () {
            console.log('insde onload of handle submit button =======')
            if (this.status === 200) {
                console.log('inside if of handle submit button =======')
                popbtnclass();
                console.log(this.status)

            }
        }


        console.log('sending data from handle submit button =======')
        alert('form submitted successfully')
        request.send(formdata)


        document?.getElementById("form_class").reset();

        class_id = 0;

    }

     function popbtnclass() {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8000/api/classroom-list/', true)




        xhr.onload = function () {

            console.log('inside on load of get')
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)

                console.log('obj is : '+obj)
                let body = document.getElementById('body')

                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))

                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="name">${obj[key].name}</td>  
                    <td id="number_of_student">${obj[key].number_of_student}</td>
                    <td>${obj[key].school}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_class(event,this.id)">Delete</button></td>
                    <td><a href="" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_class_data(event,this.id)">Edit</a></td>
                    `
                    str += `<br>`
                }
                body.innerHTML = str

            }
            else {
                console.log('Error')
            }
        }
        xhr.send()





    }
 
     // delete school function
     function delete_data_class(event, click_id) {
        console.log('inside delete data function')
        event.preventDefault();


        var xhr = new XMLHttpRequest()
        var request = new XMLHttpRequest()
        console.log('inside del button')

        xhr.open("DELETE", 'http://127.0.0.1:8000/api/delete-class/' + click_id + '/', true)
        console.log('after del request')

        request.open('GET', 'http://127.0.0.1:8000/api/classroom-list/', true)

        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)



        xhr.onload = function () {

            console.log('inside onload')

            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)
                console.log('inside onload if')
                let body = document.getElementById('body')


                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))


                for (key in obj) {
                    str += `<tr>
                <td id="id">${obj[key].id}</td> 
                <td id="name">${obj[key].name}</td>  
                <td id="number_of_student">${obj[key].number_of_student}</td>
                <td>${obj[key].school}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_class(event,this.id)">Delete</button></td>
                <td><a href=" " id="${obj[key].id}" class="btn btn-secondary" onclick ="update_class_data(event,this.id)">Edit</a></td>`
                    str += `<br>`

                }
                body.innerHTML = str

                console.log(this.status)

            }
        }
        xhr.send()
        request.send()


    }


    const form_class = document?.getElementById('form_class');
    form_class?.addEventListener('submit', delete_data_class);
    
    
    // update class data
    function update_class_data(event, click_id) {
        event.preventDefault();
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://127.0.0.1:8000/api/classroom-list/')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside on load of get')
            if (this.status === 200) {
                console.log('inside if')
                let obj = JSON.parse(this.responseText)
                // clicked id of object id
                console.log(obj)
                for (x in obj) {

                    console.log('printing obj id of class')
                    // console.log(obj[x].id)
                    if (obj[x].id == click_id) {



                        document.getElementById('id').value = obj[x].id
                        document.getElementById('name').value = obj[x].name
                        document.getElementById('number_of_student').value = obj[x].number_of_student
                        }

                }
            }
        }

        xhr.send()
        document?.getElementById("form_class").reset();
        console.log('after sednig request of GET')
    }

 

}

const classroom = document?.getElementById('form_class');
classroom?.addEventListener('submit', handlesubmit);
 

// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================
// working for admin api
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================


admin_id = 0;
if (window.location.pathname === '/staff/') {
    (function (event) {
        console.log('inside staff')
        var xhr = new XMLHttpRequest();
        // console.log('inside school')
        console.log('inside self invoking function of staff')
        xhr.open('GET', 'http://127.0.0.1:8000/api/admin-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if')

                let obj = JSON.parse(this.responseText)
                console.log(obj)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                
                for (key in obj)
                
                {

                    str += `<tr>
                        <td id="id">${obj[key].id}</td> 
                        <td id="staff_name">${obj[key].staff_name}</td>  
                        <td id="staff_degree">${obj[key].staff_degree}</td>
                        <td id="staff_address">${obj[key].staff_address}</td>
                        <td>${obj[key].school}</td>
                        <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_staff(event,this.id)">Delete</button></td>
                        <td><a href="" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_staff_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document.getElementById('form_staff')?.reset()
        xhr.send()

    }())
 
    
      
function dropdownstaff() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)
    console.log('calling dropdown function')
    csrftoken = getCookie('csrftoken')
    xhr.setRequestHeader('X-CSRFToken', csrftoken)
    xhr.onload = function () {
        console.log('inside onload')
        if (this.status === 200) {
            console.log('inside onload if of and staff')

            let obj = JSON.parse(this.responseText)
            console.log('after obj')
            let select = document.getElementById('select')
            str = ""
            str += `<option value="" selected disabled>Select School</option>`
            // obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
            // console.log(obj)                
            for (key in obj) 
            {
            
                // set if statement to check if the school is already in the local storage
                // if it is, then set the selected attribute to true
                // if it is not, then set the selected attribute to false
                var school_id    = localStorage.getItem('school_id')
                console.log('school_id : '+school_id)
                
                if (school_id == obj[key].id) {
                    str += `<option value="${obj[key].id}" selected>${obj[key].school_name}</option>`
                }
                else {
                    console.log('inside else of student of option')
                    str += `<option value="${obj[key].id}">${obj[key].school_name}</option>`
                }
            }
            select.innerHTML = str
        }
        else {
            console.log('Error')
        }
    }
    
    xhr.send()
}
dropdownstaff();
// get school id
    // get school id and store it in loal storage
function SetSchoolId(event){
    // set school id in local storage
    console.log('inside set school id')
    console.log(event.value)
    let school_id = event.value
    localStorage.setItem('school_id',school_id)
    console.log(school_id)

} 
      
      /*   select.addEventListener('change', function handleChangestaff(event) {
            console.log(event.target.value); // 👉️ get selected VALUE
            console.log('inside event listner')
           // 👇️ get selected VALUE even outside event handler
           // console.log('event listner')
           const value = select.options[select.selectedIndex].value;

           console.log('printing value')
           console.log(value);

           // 👇️ get selected TEXT in or outside event handler
           // console.log(select.options[select.selectedIndex].text);
       });
    
        xhr.send()
    }
     */
    



    function handlesubmit(event) {
        event.preventDefault();

        let formdata = new FormData(event.target);
        s_name =  formdata.get('staff_name')
        staff_degree = formdata.get('staff_degree')
        console.log('staf name is : '+s_name)
        console.log('staf degree is : '+staff_degree)
        var school_id = localStorage.getItem('school_id')
        formdata.set('school_id',school_id)
        
        select = formdata.get('select')
        console.log('select is : '+select)
        var request = new XMLHttpRequest();
        admin_id = formdata.get('id')
        
        
        console.log('------------- admin id is : --------- '+admin_id)
        console.log('inside handle submit button =======')


        if (admin_id == 0) {
            console.log('-- inside if of post --')
            request.open("POST", 'http://127.0.0.1:8000/api/create-admin/')
        }
        else if (admin_id  == formdata.get('id')) {
            console.log('-- inside if of put of classroom --')
            request.open("PUT", 'http://127.0.0.1:8000/api/update-admin/' + admin_id  + '/')
        }


        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)

        request.onload = function () {
            console.log('insde onload of handle submit button =======')
            if (this.status === 200) {
                console.log('inside if of handle submit button =======')
                popbtnstaff();
                console.log(this.status)

            }
        }


        console.log('sending data from handle submit button =======')
        alert('form submitted successfully')
        request.send(formdata)


        document?.getElementById("form_staff").reset();

        admin_id = 0;

    }

      function popbtnstaff() {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8000/api/admin-list/', true)




        xhr.onload = function () {

            console.log('inside on load of get')
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)

                console.log('obj is : '+obj)
                let body = document.getElementById('body')

                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))

                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="staff_name">${obj[key].staff_name}</td>  
                    <td id="staff_degree">${obj[key].staff_degree}</td>
                    <td id="staff_address">${obj[key].staff_address}</td>
                    <td>${obj[key].school}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_staff(event,this.id)">Delete</button></td>
                    <td><a href="" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_staff_data(event,this.id)">Edit</a></td>`
                str += `<br>`
                    
                }
                body.innerHTML = str

            }
            else {
                console.log('Error')
            }
        }
        xhr.send()


    } 
 
     // delete school function
      function delete_data_staff(event, click_id) {
        console.log('inside delete data function')
        event.preventDefault();


        var xhr = new XMLHttpRequest()
        var request = new XMLHttpRequest()
        console.log('inside del button')

        xhr.open("DELETE", 'http://127.0.0.1:8000/api/delete-admin/' + click_id + '/', true)
        console.log('after del request')

        request.open('GET', 'http://127.0.0.1:8000/api/admin-list/', true)

        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)



        xhr.onload = function () {

            console.log('inside onload')

            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)
                console.log('inside onload if')
                let body = document.getElementById('body')


                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))


                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="staff_name">${obj[key].staff_name}</td>  
                    <td id="staff_degree">${obj[key].staff_degree}</td>
                    <td id="staff_address">${obj[key].staff_address}</td>
                    <td>${obj[key].school}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_staff(event,this.id)">Delete</button></td>
                    <td><a href="" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_staff_data(event,this.id)">Edit</a></td>`
                    str += `<br>`

                }
                body.innerHTML = str

                console.log(this.status)

            }
        }
        xhr.send()
        request.send()


    }


    const form_staff = document?.getElementById('form_staff');
    form_staff?.addEventListener('submit', delete_data_staff);

    
    // update class data
    function update_staff_data(event, click_id) {
        event.preventDefault();
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://127.0.0.1:8000/api/admin-list/')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside on load of get')
            if (this.status === 200) {
                console.log('inside if')
                let obj = JSON.parse(this.responseText)
                // clicked id of object id
                console.log(obj)
                for (x in obj) {

                    console.log('printing obj id of staff')
                    // console.log(obj[x].id)
                    if (obj[x].id == click_id) {
                        document.getElementById('id').value = obj[x].id
                        document.getElementById('staff_name').value = obj[x].staff_name
                        document.getElementById('staff_degree').value = obj[x].staff_degree
                        document.getElementById('staff_address').value = obj[x].staff_address
                        }

                }
            }
        }

        xhr.send()
        document?.getElementById("form_staff").reset();
        console.log('after sednig request of GET')
    } 

}

const staff = document?.getElementById('form_staff');
staff?.addEventListener('submit', handlesubmit);
 

// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================
// working for School api
// ===========================================================
// ===========================================================
// ===========================================================
// ===========================================================

if (window.location.pathname === '/school/') {
    (function (event) {

        var xhr = new XMLHttpRequest();
        console.log('inside school')
        console.log('inside self invoking function of school')
        xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if')

                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                for (key in obj)
                // console.log(obj)
                {

                    str += `<tr>
                        <td id="id">${obj[key].id}</td> 
                        <td id="school_name">${obj[key].school_name}</td>  
                        <td id="school_id">${obj[key].school_id}</td>
                        <td id="school_address">${obj[key].school_address}</td>
                        <td id="state">${obj[key].state}</td>
                        <td id="country">${obj[key].country}</td>
                        <td id="postal_code">${obj[key].postal_code}</td>
                        <td id="ranking">${obj[key].ranking}</td>
                        <td id="url">${obj[key].url}</td>
                        <td id="school_type">${obj[key].school_type}</td>
                        <td id="school_size">${obj[key].school_size}</td>
                        <td id="phone_input">${obj[key].phone_input}</td>
                        <td id="file">${obj[key].file}</td>
                        <td id="email">${obj[key].email}</td>
                        <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_school(event,this.id)">Delete</button></td>
                        <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_school_data(event,this.id)">Edit</a></td>`
                    str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        // document.getElementById('form_school')?.reset()
        xhr.send()

    }())
    id = 0;
    function handlesubmit(event) {
        event.preventDefault();

        let formdata = new FormData(event.target);
        console.log(typeof (formdata))
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
        console.log('id : ' + id)
        // school_id = formdata.get('id')

        var request = new XMLHttpRequest();

        console.log('inside handle submit button =======')


        if (id == 0) {
            console.log('inside if of post')
            request.open("POST", 'http://127.0.0.1:8000/api/create-school/')
        }
        else if (id == formdata.get('id')) {
            console.log('inside if of put')
            request.open("PUT", 'http://127.0.0.1:8000/api/update-school/' + id + '/')
        }


        csrftoken = getCookie('csrftoken')
        request.setRequestHeader('X-CSRFToken', csrftoken)

        request.onload = function () {
            console.log('insde onload of handle submit button =======')
            if (this.status === 200) {
                console.log('inside if of handle submit button =======')
                popbtnschool();
                console.log(this.status)

            }
        }


        console.log('sending data from handle submit button =======')
        alert('form submitted successfully')
        request.send(formdata)


        // document?.getElementById("form_school").reset();

        school_id = 0;

    }

    function popbtnschool() {

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)




        xhr.onload = function () {

            console.log('inside on load of get')
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)


                let body = document.getElementById('body')

                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))

                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="school_name">${obj[key].school_name}</td>  
                    <td id="school_id">${obj[key].school_id}</td>
                    <td id="school_address">${obj[key].school_address}</td>
                    <td id="state">${obj[key].state}</td>
                    <td id="country">${obj[key].country}</td>
                    <td id="postal_code">${obj[key].postal_code}</td>
                    <td id="ranking">${obj[key].ranking}</td>
                    <td id="url">${obj[key].url}</td>
                    <td id="school_type">${obj[key].school_type}</td>
                    <td id="school_size">${obj[key].school_size}</td>
                    <td id="phone_input">${obj[key].phone_input}</td>
                    <td id="file">${obj[key].file}</td>
                    <td id="email">${obj[key].email}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_school(event,this.id)">Delete</button></td>
                    <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_school_data(event,this.id)">Edit</a></td>
                    `
                    str += `<br>`
                }
                body.innerHTML = str

            }
            else {
                console.log('Error')
            }
        }
        xhr.send()





    }

    // delete school function
    function delete_data_school(event, click_id) {
        console.log('inside delete data function')
        event.preventDefault();


        var xhr = new XMLHttpRequest()
        var request = new XMLHttpRequest()
        console.log('inside del button')

        xhr.open("DELETE", 'http://127.0.0.1:8000/api/delete-school/' + click_id + '/', true)
        console.log('after del request')

        request.open('GET', 'http://127.0.0.1:8000/api/school-list/', true)

        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)



        xhr.onload = function () {

            console.log('inside onload')

            if (this.status === 200) {
                let obj = JSON.parse(this.responseText)
                console.log('inside onload if')
                let body = document.getElementById('body')


                str = ""

                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))


                for (key in obj) {
                    str += `<tr>
                <td id="id">${obj[key].id}</td> 
                <td id="school_name">${obj[key].school_name}</td>  
                <td id="school_id">${obj[key].school_id}</td>
                <td id="school_address">${obj[key].school_address}</td>
                <td id="state">${obj[key].state}</td>
                <td id="country">${obj[key].country}</td>
                <td id="postal_code">${obj[key].postal_code}</td>
                <td id="ranking">${obj[key].ranking}</td>
                <td id="url">${obj[key].url}</td>
                <td id="school_type">${obj[key].school_type}</td>
                <td id="school_size">${obj[key].school_size}</td>
                <td id="phone_input">${obj[key].phone_input}</td>
                <td id="file">${obj[key].file}</td>
                <td id="email">${obj[key].email}</td>
                <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data_school(event,this.id)">Delete</button></td>
                <td><a href="#form" id="${obj[key].id}" class="btn btn-secondary" onclick ="update_school_data(event,this.id)">Edit</a></td>
                <td><a href="{% url 'table' %}"  class="btn btn-secondary" >Add Task</a></td>`
                    str += `<br>`

                }
                body.innerHTML = str

                console.log(this.status)

            }
        }
        xhr.send()
        request.send()


    }


    const form_school = document?.getElementById('form_school');
    form_school?.addEventListener('submit', delete_data_school);

    // update school
    function update_school_data(event, click_id) {
        event.preventDefault();
        var xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://127.0.0.1:8000/api/school-list/')
        csrftoken = getCookie('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside on load of get')
            if (this.status === 200) {
                console.log('inside if')
                let obj = JSON.parse(this.responseText)
                // clicked id of object id
                console.log(obj)
                for (x in obj) {

                    console.log('printing obj id ')
                    // console.log(obj[x].id)
                    if (obj[x].id == click_id) {



                        document.getElementById('id').value = obj[x].id
                        document.getElementById('school_name').value = obj[x].school_name
                        document.getElementById('school_id').value = obj[x].school_id
                        document.getElementById('school_address').value = obj[x].school_address
                        document.getElementById('school_address').value = obj[x].school_address
                        document.getElementById('state').value = obj[x].state
                        document.getElementById('country').value = obj[x].country
                        document.getElementById('postal_code').value = obj[x].postal_code
                        document.getElementById('ranking').value = obj[x].ranking
                        document.getElementById('url').value = obj[x].url
                        document.getElementById('school_type').value = obj[x].school_type
                        document.getElementById('school_size').value = obj[x].school_size
                        document.getElementById('phone_input').value = obj[x].phone_input
                        document.getElementById('file').value = obj[x].file
                        document.getElementById('email').value = obj[x].email
                    }

                }
            }
        }

        xhr.send()
        document?.getElementById("form_school").reset();
        console.log('after sednig request of GET')
    }



}

const school = document?.getElementById('form_school');
school?.addEventListener('submit', handlesubmit);






function phoneMask() {
    var num = $(this).val().replace(/\D/g, '');
    $(this).val(num.substring(0, 1) + '(' + num.substring(1, 4) + ')' + num.substring(4, 7) + '-' + num.substring(7, 11));
}
$('[type="tel"]').keyup(phoneMask);




if (window.location.pathname === '/signup/') {

    (function (event) {

        var xhr = new XMLHttpRequest();
        console.log('inside self invoking function of task')
        xhr.open('GET', 'http://127.0.0.1:8000/api/register/', true)
        csrftoken = getCookie('csrftoken')
        console.log('csrftoken')
        xhr.setRequestHeader('X-CSRFToken', csrftoken)
        xhr.onload = function () {
            console.log('inside onload')
            if (this.status === 200) {
                console.log('inside onload if')

                let obj = JSON.parse(this.responseText)
                let body = document.getElementById('body')
                str = ""
                obj = obj?.sort((a, b) => (a.id > b.id ? -1 : 1))
                console.log(obj)
                for (key in obj) {
                    str += `<tr>
                    <td id="id">${obj[key].id}</td> 
                    <td id="title">${obj[key].title}</td>  
                    <td id="description">${obj[key].description}</td>
                    <td>${obj[key].school}</td>
                    <td>${obj[key].student}</td>
                    <td>${obj[key].class_name}</td>
                    <td>${obj[key].teacher_name}</td>
                    <td>${obj[key].user_name}</td>
                    <td><button id="${obj[key].id}" class="btn  btn-danger" onclick ="delete_data(event,this.id)">Delete</button></td>
                    <td><a href="#card"><button id="${obj[key].id}" class="btn  btn-secondary" onclick ="update_data(event,this.id)">Edit</button></a></td>`
                        str += `<br>`
                }
                body.innerHTML = str
            }
            else {
                console.log('Error')
            }
        }
        document.getElementById('form_task')?.reset()
        xhr.send()

    }())
}
// save current login user username in local storage

