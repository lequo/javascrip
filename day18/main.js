let user = [
    {
        name: thang,
        ...
    },
]

// lấy giá trị

const idInput = document.getElementById("input-id")
const nameInput = document.getElementById("input-name")
const avartarInput = document.getElementById("input-avartar");
const dateInput = document.getElementById("input-date")
const addressInput = document.getElementById("input-address")
const salaryInput = document.getElementById("input-salary");
const desInput = document.getElementById("input-des")
const genderInput = document.querySelectorAll('input[type="radio"][name="gender"]');
const marriedInput = document.getElementById("")
const duration = document.getElementById("")
const  tbody = document.getElementById("tbody")

const display =(arr)=>{
    arr.array.forEach(item => {
        const mytr= document.createElement("tr")
    
        
    });
}

const handleSubmit =()=>{
    const nameVal = nameInput.ariaValueMax;
    const doVal = idInput.ariaValueMax;
    const addressVal = addressInpu.value;
    const salaryVal = salaryInput.value;
    const desVal =desInput.value;
    genderInput.forEach(item=>{
        if(item.checked){
            gender = item.value;
        }
    })
    console.log("gender");
}