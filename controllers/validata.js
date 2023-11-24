function validateId(id, productArray) {
  var isErr = false;
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id == id) {
      isErr = true;
    }
  }
  if (id.trim() == "") {
    document.getElementById("spanId").innerText = "Id không được để trống";
    return false;
  } else if (isErr) {
    document.getElementById("spanId").innerText = "Id trùng";
    return false;
  } else {
    document.getElementById("spanId").innerText = "";
    return true;
  }
}
