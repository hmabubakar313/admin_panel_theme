
let popbtn = document.getElementById('popbtn')
popbtn.addEventListener('click', popBtnHandler)

function popBtnHandler()
    {
        console.log('inside function')
        const xhr = new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:8000/api/task-list/',true)
        console.log('after api')


        xhr.onload = function ()
        {
            if (this.status===200)
            {
                let obj = JSON.parse(this.responseText)
            console.log(obj)
            let body = document.getElementById('body')
            str = ""
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
    }