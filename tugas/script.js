const kamar = document.getElementsByTagName("option");

let dataPesanan = [];

const handleSubmit = (e) => {
  e.preventDefault();

  const pemesanan = document.getElementById("pemesanan").value;
  const pemesan = document.getElementById("pemesan").value;
  const identitas = document.getElementById("identitas").value;
  const harga = document.getElementById("harga").value;
  const kamar = document.getElementById("kamar").value;
  const pesan = document.getElementById("pesan").value;
  const menginap = document.getElementById("menginap").value;
  const breakfast = document.getElementById("breakfast").checked;
  const bayar = document.getElementById("bayar").value;

  const btnContainer = document.querySelector(".btn-container");

  const loading = document.querySelector(".loading");

  //   add data
  if (dataPesanan.length > 1) {
    dataPesanan = [
      ...dataPesanan,
      {
        pemesanan,
        pemesan,
        identitas,
        kamar,
        harga,
        pesan,
        menginap,
        breakfast,
        bayar,
      },
    ];
  } else {
    dataPesanan.push({
      pemesanan,
      pemesan,
      identitas,
      kamar,
      harga,
      pesan,
      menginap,
      breakfast,
      bayar,
    });
  }

  //   loading data
  console.log(btnContainer);

  btnContainer.classList.remove("btn-visible");
  btnContainer.classList.add("btn-invisible");
  loading.classList.remove("loading-hidden");

  setTimeout(() => {
    btnContainer.classList.remove("btn-invisible");
    btnContainer.classList.add("btn-visible");
    loading.classList.add("loading-hidden");
  }, 2000);
  setTimeout;

  console.log(dataPesanan);
};
