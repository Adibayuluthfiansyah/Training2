(function () {
  let input = document.querySelector(".input-number");
  let button = document.querySelectorAll(".btn");
  let hasil = document.querySelector(".btn-hasil");
  let hapus = document.querySelector(".btn-delete");
  let persen = document.querySelector(".btn-bool");
  let del = document.querySelector(".btn-del");

  // ===> Tampilkan Input User<===
  button.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      input.value += value;
    });
  });

  // ===> Memfungsikan Delete<===
  del.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
  });

  // ===> Memfungsikan Boolean <===
  persen.addEventListener("click", (e) => {
    if (input === "") {
      input.value = "";
    } else {
      let answer = eval((input.value /= 100));
      input.value = answer;
    }
  });

  // ===> Memfungsikan Sama dengan <===
  hasil.addEventListener("click", (e) => {
    if (input === "") {
      input.value = "";
    } else {
      let jawab = eval(input.value);
      input.value = jawab;
    }
  });

  // ==> Memfungsikan Hapus<==
  hapus.addEventListener("click", (e) => {
    input.value = "";
  });
})();
