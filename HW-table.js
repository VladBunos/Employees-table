let data = [];
let empName = document.querySelector('#emp-name');
let empBDay = document.querySelector('#emp-bday');
let empJDay = document.querySelector('#emp-jday');
let empSal = document.querySelector('#emp-sal');
let empNum = document.querySelector('#emp-num');
let empSalAll = document.querySelector('#emp-sal-all');
let empAdd = document.querySelector('#emp-add');
let empTableForm = document.querySelector('#emp-table-form')
let empTableBody = document.querySelector('#emp-table-body');
let empId = -1;
let empSumToShow = document.querySelector('#emp-sum-toshow');
let empFireButton = document.querySelector('#emp-fire')
let empBdayDOSButton = document.querySelector('#emp-bday-descending-order-sort');
let empBdayIOSButton = document.querySelector('#emp-bday-increasing-order-sort');
let empJdayDOSButton = document.querySelector('#emp-jday-descending-order-sort');
let empJdayIOSButton = document.querySelector('#emp-jday-increasing-order-sort');




function addData(empName, empBDay, empJDay, empSal){
    data.push({id: uniqueId(), name: empName, bday: empBDay, jday: empJDay, salary: empSal})
}

function createTable(){
    empTableBody.innerHTML = ``;
    data.forEach(arrayElement => {
        empTableBody.innerHTML += `
        <tr>
        <td><label> <input type="checkbox" id="${arrayElement.id}"></label></td>  
        <td>${arrayElement.name}</td> 
        <td>${arrayElement.bday}</td> 
        <td>${arrayElement.jday}</td> 
        <td>${arrayElement.salary}</td>
        </tr>`
    })
    empNum.innerHTML = `<p id="emp-num">Количество сотрудников: <span>${data.length}</span></p>`   
}

function uniqueId(){
    ++empId
    return empId
}

function empBDaySort(descending){

    if (descending){
        data.sort((a, b)=>{
            return b.bday - a.bday
        })
    } else {
        data.sort((a, b)=>{
            return a.bday - b.bday
        })
    }
}

function empJDaySort(descending){

    if (descending){
        data.sort((a, b)=>{
            let dateA = new Date(a.jday);
            let dateB = new Date(b.jday);
            console.log('Первая дата', dateA);
            console.log('Вторая дата', dateB);
            return dateB - dateA;
        })
    } else {
        data.sort((a, b)=>{
            let dateA = new Date(a.jday);
            let dateB = new Date(b.jday);
            console.log('Первая дата', dateA);
            console.log('Вторая дата', dateB);
            return dateA - dateB;
        })

    }
    
}

function empFireChecked(){
    let checkedCheckboxArray = [...document.querySelectorAll('input[type=checkbox]:checked')]
    checkedCheckboxArray.forEach(arrayElement =>{
        let elementToDelete = data.findIndex(item => item.id === +arrayElement.id);
        data.splice([elementToDelete], 1)
    })
}



empAdd.addEventListener('click', (event) => {
    event.preventDefault();
    addData(empName.value, empBDay.value, empJDay.value, empSal.value);
    createTable();
    empTableForm.reset()
})

empSumToShow.addEventListener('click', (event) =>{
    event.preventDefault();
    let salaryAll = 0;
    data.forEach(arrayElement =>{
        salaryAll = salaryAll + +arrayElement.salary
    })
    empSalAll.innerHTML=`<p id="emp-sal-all">Сумма заработной платы: <span>${salaryAll}</span></p>`
})

empBdayDOSButton.addEventListener('click', (event) =>{
    event.preventDefault();
    empBDaySort(true);
    createTable()
})

empBdayIOSButton.addEventListener('click', (event) =>{
    event.preventDefault();
    empBDaySort(false)
    createTable()
})


empJdayDOSButton.addEventListener('click', (event) =>{
    event.preventDefault();
    empJDaySort(true);
    createTable()
})

empJdayIOSButton.addEventListener('click', (event) =>{
    event.preventDefault();
    empJDaySort(false)
    createTable()
})

empFireButton.addEventListener('click', (event) =>{
    event.preventDefault();
    empFireChecked()
    createTable();
})













// function empFireChecked(){
//     // let uncheckedCheckboxArray = ([...document.querySelectorAll('input[type=checkbox]')]).filter(arrayElement => arrayElement.checked === false);
//     // console.log(checkedCheckboxArray)
//     // uncheckedCheckboxArray.forEach(arrayElement =>{
//     // })
    
//     let checkedCheckboxArray = [...document.querySelectorAll('input[type=checkbox]:checked')]
//     checkedCheckboxArray.forEach(arrayElement =>{
//         let elementToDelete = data.findIndex(item => item.id === +arrayElement.id);
//         data.splice([elementToDelete], 1)
//     })
//     createTable();

    

//     // let valuesToDelete = [];
//     // checkedCheckboxArray.forEach(arrayElement =>{
//     //     for(let element of data){
//     //         if (+arrayElement.id === element.id){
//     //             // console.log('match !')
//     //             valuesToDelete.push(element.id)
//     //             valuesToDelete.sort((a,b)=>{
//     //                 return a - b
//     //             })
//     //             console.log(valuesToDelete)

//     //         }
//     //     }
//     // })


    





//     // let counter = 0;
//     // for (element of valuesToDelete){
//     //     if(element === data[counter].id){
//     //         data.splice([counter], 1)
//     //         console.log('deleted')
//     //     }
//     //     counter++
//     // }
// }