// var let const
//---var redcalre allowed and reassign allowed
// var a = 10;
// var a = 20;
//---let redcalre not allowed and reassign allowed
// let b = 20;
// let b = 30;
//---const redcalre not allowed and reassign not allowed

// const fullName="Rawan"
// fullName="R"
// console.log(fullName)


// function Test(){
//     if(true){
//         var a=10
//         let =20
//         const c=30
//     }


// let createElement = (tagName) => {
//     return document.createElement(tagName);
// };

// let form = createElement("form");
// let fullName = createElement("input");
// let email = createElement("input");
// let button = createElement("button");

// let table = createElement("table");
// let thead = createElement("thead");
// let tbody = createElement("tbody");

// fullName.type = "text";
// fullName.placeholder = "Enter your name";
// email.type = "email";
// email.placeholder = "Enter your email";
// button.innerText = "Add User";

// let headerRow = createElement("tr");
// let nameHeader = createElement("th");
// let emailHeader = createElement("th");

// nameHeader.innerText = "Name";
// emailHeader.innerText = "Email";
// headerRow.appendChild(nameHeader);
// headerRow.appendChild(emailHeader);
// thead.appendChild(headerRow);

// form.appendChild(fullName);
// form.appendChild(email);
// form.appendChild(button);
// table.appendChild(thead);
// table.appendChild(tbody);

// document.body.appendChild(form);
// document.body.appendChild(table);

// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     let userName = fullName.value.trim();
//     let userEmail = email.value.trim();
//     let row = createElement("tr");
//     let userNameCell = createElement("td");
//     let userEmailCell = createElement("td");

//     userNameCell.innerText = userName;
//     userEmailCell.innerText = userEmail;

//     row.appendChild(userNameCell);
//     row.appendChild(userEmailCell);
//     tbody.appendChild(row);

// });


    // var input = document.querySelector("#userName");
        // input.addEventListener("change", function (event)
        // {
        //     console.log(input.value);
        //     input.nextElementSibling.innerText=input.value;
        // }) 
        

    //     function changeDiv(element)
    //     {
    //         element.style.color="teal"
    //         element.style.fontWeight="bold"
    //         element.style.cursor="pointer"
    //         element.style.transition="all 0.5s ease-in-out"
    //     }
          
    //     function resetDiv(element)
    //     {
    //         element.style.color="black"
    //         element.style.fontWeight="normal"
    //         element.style.cursor="default"
    //         element.style.transition="all 0.5s ease-in-out"
    //     }




    // let scrollDiv = document.getElementById('scrollDiv')
    // scrollDiv.addEventListener('scroll', function (e) {
    //     console.log(e.target.scrollTop)
    //     if (e.target.scrollTop > 100) {
    //         scrollDiv.style.backgroundColor = 'red'
    //     }
    //     else {
    //         scrollDiv.style.backgroundColor = 'teal'
    //     }
    // })

    // window.addEventListener('scroll', () =>{
    //     let arrowBtn=document.querySelector('#arrow')
    //     if(window.scrollY>100){
    //         arrowBtn.style.display='block'
    //     }else{
    //         arrowBtn.style.display='none'
    //     }
    // })

    