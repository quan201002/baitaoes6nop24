let personList = [];
personList = JSON.parse(localStorage.getItem("person-list"))
  ? JSON.parse(localStorage.getItem("person-list"))
  : [];
console.log(personList);
renderPersonList(personList);
function showInputForm() {
  let value = document.getElementById("person").value;
  let modal = document.getElementById("inputForm");
  ///person input
  let content = `
  <div class="mb-3">
  <label for="id" class="form-label">ID</label>
  <input
    type="text"
    class="form-control"
    id="id"
    name="id"
    aria-describedby="emailHelp"
  />
  <span id="spanId"></span>
    </div>
<div class="mb-3">
  <label for="Name" class="form-label">Name</label>
  <input
    type="text"
    class="form-control"
    id="Name"
    name="hoTen"
    aria-describedby="emailHelp"
  />
</div>
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control"
    id="email"
    name="email"
    aria-describedby="emailHelp"
  />
</div>
<div class="mb-3">
  <label for="address" class="form-label">Adress</label>
  <input type="text" class="form-control" id="address"name="diaChi" />
</div>`;
  ///content
  switch (value) {
    case "student":
      content += `
      <div class="mb-3">
      <label for="toan" class="form-label">Toan</label>
      <input type="number" class="form-control" id="toan" name="toan" />
    </div>
    <div class="mb-3">
      <label for="ly" class="form-label">Ly</label>
      <input type="number" class="form-control" id="ly" name="ly" />
    </div>
    <div class="mb-3">
      <label for="hoa" class="form-label">Hoa</label>
      <input type="number" class="form-control" id="hoa" name="hoa" />
    </div>
        `;

      modal.innerHTML = content;
      break;
    case "employee":
      content += `
      <div class="mb-3">
      <label for="soNgaylam" class="form-label">Số ngày làm</label>
      <input type="number" class="form-control" id="soNgaylam" name="soNgaylam" />
    </div>
    <div class="mb-3">
      <label for="luongTheongay" class="form-label">Lương theo ngày</label>
      <input type="number" class="form-control" id="luongTheongay" name="luongTheongay"/>
    </div>

        `;
      modal.innerHTML = content;
      break;
    case "customer":
      content += `
      <div class="mb-3">
      <label for="companyName" class="form-label">Tên công ty</label>
      <input
        type="text"
        class="form-control"
        id="companyName"
        aria-describedby="emailHelp"
        name="congTy"
      />
    </div>
      <div class="mb-3">
        <label for="triGiahoaDon" class="form-label">Trị giá hoá đơn</label>
        <input type="number" class="form-control" id="triGiahoaDon" name="triGiahoaDon" />
      </div>
      <div class="mb-3">
      <label for="danhGia" class="form-label">Đánh giá</label>
      <input type="text" class="form-control" id="danhGia" name="danhGia" />
    </div>
          `;
      modal.innerHTML = content;
      break;
  }
}
function renderPersonList(list) {
  document.querySelector(".person-list-container");
  let content = "";
  list.map((item) => {
    switch (item.type) {
      case "student":
        content += `
      <div class="card m-2" style="width: 18rem;">
  <div class="card-header text-success">
   <p class="text-succes">Student</p>
   <div><button class="btn btn-danger" onclick="deletePerson(${item.id})">Delete</button></div>
   <div class="mt-2">     <button
   type="button"
   class="btn btn-primary mb-5"
   data-bs-toggle="modal"
   data-bs-target="#exampleModal"
   onclick="getDataForm(${item.id})"
 >
   Cập nhật
 </button></div>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Họ và tên:${item.hoTen}</li>
    <li class="list-group-item">Email:${item.email}</li>
    <li class="list-group-item">Địa chỉ:${item.diaChi}</li>
    <li class="list-group-item">Toán${item.toan}</li>
    <li class="list-group-item">Lý:${item.ly}</li>
    <li class="list-group-item">Hoá:${item.hoa}</li>
    <li class="list-group-item">Điểm trung bình:${item.tinhdiemTb}</li>
  </ul>
    </div>
      `;
        break;
      case "customer":
        content += `
      <div class="card m-2" style="width: 18rem;">
      <div class="card-header ">
       <p class="text-warning">Customer</p>
       <div><button class="btn btn-danger" onclick="deletePerson(${item.id})">Delete</button></div>

      <div class="mt-2">     <button
      type="button"
      class="btn btn-primary mb-5"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      onclick="getDataForm(${item.id})"
    >
      Cập nhật
    </button></div>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.hoTen}</li>
        <li class="list-group-item">${item.email}</li>
        <li class="list-group-item">${item.diaChi}</li>
        <li class="list-group-item">${item.congTy}</li>
        <li class="list-group-item">${item.triGiahoaDon}</li>
        <li class="list-group-item">${item.danhGia}</li>
      </ul>
        </div>`;
        break;
      case "employee":
        content += `
        <div class="card m-2" style="width: 18rem;">
        <div class="card-header ">
         <p class="text-primary">Employee</p>
         <div><button class="btn btn-danger" onclick="deletePerson(${item.id})">Delete</button></div>
         <div class="mt-2">     <button
         type="button"
         class="btn btn-primary mb-5"
         data-bs-toggle="modal"
         data-bs-target="#exampleModal"
         onclick="getDataForm(${item.id})"
       >
         Cập nhật
       </button></div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${item.hoTen}</li>
          <li class="list-group-item">${item.email}</li>
          <li class="list-group-item">${item.diaChi}</li>
          <li class="list-group-item">${item.soNgaylam}</li>
          <li class="list-group-item">${item.luongTheongay}</li>
          <li class="list-group-item">${item.tinhLuong}</li>
        </ul>
        </div>`;
        break;
    }
  });
  document.querySelector(".tab-pane").innerHTML = content;
}
function addPerson() {
  let idVal = document.getElementById("id").value;
  let isErr = validateId(idVal, personList);
  if (isErr) {
    const inputs = document.querySelectorAll("#inputForm input");
    const value = document.getElementById("person").value;
    switch (value) {
      case "student":
        let s = {};
        inputs.forEach((el) => {
          const { name, value } = el;
          s[name] = value;
        });
        s.type = "student";
        console.log(s);
        let stu = new student(
          s.id,
          s.hoTen,
          s.diaChi,
          s.email,
          s.toan,
          s.ly,
          s.hoa,
          s.type
        );
        console.log(stu);
        personList.push(stu);
        localStorage.setItem("person-list", JSON.stringify(personList));
        renderPersonList(personList);
        break;
      case "customer":
        let cus = {};
        inputs.forEach((el) => {
          const { name, value } = el;
          cus[name] = value;
        });
        cus.type = "customer";
        console.log(cus);
        let khach = new customer(
          cus.id,
          cus.hoTen,
          cus.diaChi,
          cus.email,
          cus.congTy,
          cus.triGiahoaDon,
          cus.danhGia,
          cus.type
        );
        console.log(khach);
        personList.push(khach);
        localStorage.setItem("person-list", JSON.stringify(personList));
        renderPersonList(personList);
        break;
      case "employee":
        let emp = {};
        inputs.forEach((el) => {
          const { name, value } = el;
          emp[name] = value;
        });
        emp.type = "employee";
        console.log(emp);
        let tho = new employee(
          emp.id,
          emp.hoTen,
          emp.diaChi,
          emp.email,
          emp.soNgaylam,
          emp.luongTheongay,
          emp.type
        );
        console.log(tho);
        personList.push(tho);
        localStorage.setItem("person-list", JSON.stringify(personList));
        renderPersonList(personList);
        break;
    }
  }

  const setLocalStorage = (list) => {
    localStorage.setItem(`"${list}"`, JSON.stringify(list));
  };
  const getLocalStorage = (list) => {
    return JSON.parse(localStorage.getItem(`${list}`));
  };
  renderPersonList(personList);
  function deletePerson(id) {
    const index = personList.findIndex((item) => {
      return item.id == id;
    });
    personList.splice(index, index + 1);
    renderPersonList(personList);
    localStorage.setItem("person-list", JSON.stringify(personList));
    filterPerson();
  }
  function filterPerson() {
    let filterValue = document.getElementById("filter").value;
    if (filterValue == "all") {
      console.log(personList);
      renderPersonList(personList);
    } else {
      let filterList = personList.filter((item) => {
        return item.type === filterValue;
      });
      renderPersonList(filterList);
    }
  }
}
let sortArrayByName = () => {
  let sortedArrayByName = personList.sort((next, current) => {
    let nextName = next.hoTen.toLowerCase();
    let currentName = current.hoTen.toLocaleLowerCase();
    if (nextName >= currentName) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(sortedArrayByName);
  renderPersonList(sortedArrayByName);
};
function getDataForm(id) {
  let modalBody = document.querySelector("#inputForm");
  modalBody.innerHTML = "";
  let vitri = personList.findIndex((item) => {
    return item.id == id;
  });
  console.log(vitri);
  let per = personList[vitri];
  console.log(personList[vitri].type);
  let content = `
  <div class="mb-3">
  <label for="id" class="form-label">ID</label>
  <input
    type="text"
    class="form-control"
    id="id"
    name="id"
    aria-describedby="emailHelp"
  />
</div>
<div class="mb-3">
  <label for="Name" class="form-label">Name</label>
  <input
    type="text"
    class="form-control"
    id="Name"
    name="hoTen"
    aria-describedby="emailHelp"
  />
</div>
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control"
    id="email"
    name="email"
    aria-describedby="emailHelp"
  />
</div>
<div class="mb-3">
  <label for="address" class="form-label">Adress</label>
  <input type="text" class="form-control" id="address"name="diaChi" />
</div>`;
  console.log(vitri);
  console.log(per);
  console.log(per.type);
  switch (per.type) {
    case "student":
      content += `
  <div class="mb-3">
  <label for="toan" class="form-label">Toan</label>
  <input type="number" class="form-control" id="toan" name="toan" />
</div>
<div class="mb-3">
  <label for="ly" class="form-label">Ly</label>
  <input type="number" class="form-control" id="ly" name="ly" />
</div>
<div class="mb-3">
  <label for="hoa" class="form-label">Hoa</label>
  <input type="number" class="form-control" id="hoa" name="hoa" />
</div>
    `;
      modalBody.innerHTML = content;
      document.getElementById("id").value = personList[vitri].id;
      document.getElementById("Name").value = personList[vitri].hoTen;
      document.getElementById("address").value = personList[vitri].diaChi;
      document.getElementById("email").value = personList[vitri].email;
      document.getElementById("toan").value = personList[vitri].toan;
      document.getElementById("ly").value = personList[vitri].ly;
      document.getElementById("hoa").value = personList[vitri].hoa;

      break;
    case "employee":
      content += `
  <div class="mb-3">
  <label for="soNgaylam" class="form-label">Số ngày làm</label>
  <input type="number" class="form-control" id="soNgaylam" name="soNgaylam" />
</div>
<div class="mb-3">
  <label for="luongTheongay" class="form-label">Lương theo ngày</label>
  <input type="number" class="form-control" id="luongTheongay" name="luongTheongay"/>
</div>

    `;
      modalBody.innerHTML = content;
      document.getElementById("id").value = personList[vitri].id;
      document.getElementById("Name").value = personList[vitri].hoTen;
      document.getElementById("address").value = personList[vitri].diaChi;
      document.getElementById("email").value = personList[vitri].email;
      document.getElementById("soNgaylam").value = personList[vitri].soNgaylam;
      document.getElementById("luongTheongay").value =
        personList[vitri].luongTheongay;
      break;
    case "customer":
      content += `
  <div class="mb-3">
  <label for="companyName" class="form-label">Tên công ty</label>
  <input
    type="text"
    class="form-control"
    id="companyName"
    aria-describedby="emailHelp"
    name="congTy"
  />
</div>
  <div class="mb-3">
    <label for="triGiahoaDon" class="form-label">Trị giá hoá đơn</label>
    <input type="number" class="form-control" id="triGiahoaDon" name="triGiahoaDon" />
  </div>
  <div class="mb-3">
  <label for="danhGia" class="form-label">Đánh giá</label>
  <input type="text" class="form-control" id="danhGia" name="danhGia" />
  </div>
      `;
      modalBody.innerHTML = content;
      document.getElementById("id").value = personList[vitri].id;
      document.getElementById("Name").value = personList[vitri].hoTen;
      document.getElementById("address").value = personList[vitri].diaChi;
      document.getElementById("email").value = personList[vitri].email;
      document.getElementById("triGiahoaDon").value =
        personList[vitri].triGiahoaDon;
      document.getElementById("companyName").value = personList[vitri].congTy;
      document.getElementById("danhGia").value = personList[vitri].danhGia;
      break;
  }
}
function editPerson() {
  const inputs = document.querySelectorAll("#inputForm input");
  let id = document.getElementById("id").value;
  console.log(id);
  var vitri = personList.findIndex((item) => {
    return item.id == id;
  });
  let type = personList[vitri].type;
  switch (type) {
    case "student":
      let stu = {};
      inputs.forEach((el) => {
        const { name, value } = el;
        stu[name] = value;
      });
      stu.type = "student";
      console.log(stu);
      let s = new student(
        stu.id,
        stu.hoTen,
        stu.diaChi,
        stu.email,
        stu.toan,
        stu.ly,
        stu.hoa,
        stu.type
      );
      console.log(s);
      personList[vitri] = s;
      localStorage.setItem("person-list", JSON.stringify(personList));
      renderPersonList(personList);
      break;
    case "customer":
      let cus = {};
      inputs.forEach((el) => {
        const { name, value } = el;
        cus[name] = value;
      });
      cus.type = "customer";
      console.log(cus);
      let custom = new customer(
        cus.id,
        cus.hoTen,
        cus.diaChi,
        cus.email,
        cus.congTy,
        cus.triGiahoaDon,
        cus.danhGia,
        cus.type
      );
      console.log(cus);
      personList[vitri] = custom;
      localStorage.setItem("person-list", JSON.stringify(personList));
      renderPersonList(personList);
      break;
    case "employee":
      let emp = {};
      inputs.forEach((el) => {
        const { name, value } = el;
        emp[name] = value;
      });
      emp.type = "employee";
      console.log(emp);
      let employ = new employee(
        emp.id,
        emp.hoTen,
        emp.diaChi,
        emp.email,
        emp.soNgaylam,
        emp.luongTheongay,
        emp.type
      );
      console.log(employ);
      personList[vitri] = employ;
      localStorage.setItem("person-list", JSON.stringify(personList));
      renderPersonList(personList);
      break;
  }
}
function filterPerson() {
  let type = document.getElementById("filter").value;
  if (type == "all") {
    renderPersonList(personList);
  } else {
    let filterArray = personList.filter((item) => {
      return item.type == type;
    });
    console.log(filterArray);
    renderPersonList(filterArray);
  }
}
function deletePerson(id) {
  var vitri = personList.findIndex((item) => {
    return item.id == id;
  });
  personList.splice(vitri, vitri + 1);
  filterPerson();
  // renderPersonList(personList);
  localStorage.setItem("person-list", JSON.stringify(personList));
}
