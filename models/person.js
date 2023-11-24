class person {
  constructor(id, hoTen, diaChi, email) {
    (this.id = id),
      (this.hoTen = hoTen),
      (this.diaChi = diaChi),
      (this.email = email);
  }
}

class student extends person {
  constructor(id, hoTen, diaChi, email, toan, ly, hoa, type) {
    super(id, hoTen, diaChi, email);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.type = type;
  }
  tinhdiemtb() {
    return (this.toan * 1 + this.ly * 1 + this.hoa * 1) / 3;
  }
}

class customer extends person {
  constructor(id, hoTen, diaChi, email, congTy, triGiahoaDon, danhGia, type) {
    super(id, hoTen, diaChi, email);
    this.congTy = congTy;
    this.triGiahoaDon = triGiahoaDon;
    this.danhGia = danhGia;
    this.type = type;
  }
}

class employee extends person {
  constructor(id, hoTen, diaChi, email, soNgaylam, luongTheongay, type) {
    super(id, hoTen, diaChi, email);
    this.soNgaylam = soNgaylam;
    this.luongTheongay = luongTheongay;
    this.type = type;
  }
  tinhLuong() {
    return this.soNgaylam * this.luongTheongay;
  }
}
