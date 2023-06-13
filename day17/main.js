const inputName = document.getElementById("name");
const selectCity = document.getElementById("city");
console.log(document);
// [
//   {
//     name: "nghiem",
//     city: "HCM",
//   },
//   {
//     name: "nghiem1",
//     city: "HN",
//   },
//   {
//     name: "nghiem2",
//     city: "HN",
//   },
// ];
let listHocSinh = [];
const handleSubmit = () => {
  const newHs = {
    name: inputName.value,
    city: selectCity.value,
  };
  //   console.log(newHs, "newHs");
  listHocSinh = [...listHocSinh, newHs];
  console.log(listHocSinh, "listHocSinh");
  display(listHocSinh);
  reset();
};
// arr = listHocSinh
const display = (arrHS) => {
  console.log(arrHS, "display");
  let dataTable = arrHS
    .map((item) => {
      return `
    <tr>
          <td>${item.name}</td>
          <td>${item.city}</td>
        </tr>
    `;
    })
    .join("");

  console.log(document.getElementById("tbody"));
  // {
  //     // key-value
  //     innerHTML:""
  // }
  document.getElementById("tbody").innerHTML = dataTable;
};
// display();

const reset = () => {
  (inputName.value = ""), (selectCity.value = "");
};
