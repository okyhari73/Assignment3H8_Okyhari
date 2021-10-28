function renderTable(hasil) {
  let covidTableEl = document.getElementById("covidTable");

  hasil.forEach((el) => {
    covidTableEl.innerHTML += `
    <tr>
    <td>${el.provinsi}</td>
    <td class="text-end">${el.kasusPosi}</td>
    <td class="text-end">${el.kasusSemb}</td>
    <td class="text-end">${el.kasusMeni}</td>
    </tr> `;
  });
}

function hitungPositif(hasil) {
  let countEl = 0;

  hasil.forEach((el) => {
    countEl += Number(el.kasusPosi);
  });
  return countEl;
}

function hitungSembuh(hasil) {
  let countEl = 0;

  hasil.forEach((el) => {
    countEl += Number(el.kasusSemb);
  });
  return countEl;
}

function hitungMeninggal(hasil) {
  let countEl = 0;

  hasil.forEach((el) => {
    countEl += Number(el.kasusMeni);
  });
  return countEl;
}

fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
  .then((response) => response.json())
  .then((el) => el.data)
  .then((hasil) => {
    renderTable(hasil);

    let jumlahPositif = hitungPositif(hasil);
    let positifEl = document.getElementById("totalPositif");
    positifEl.innerText += jumlahPositif;

    let jumlahSembuh = hitungSembuh(hasil);
    let sembuhEl = document.getElementById("totalSembuh");
    sembuhEl.innerText += jumlahSembuh;

    let jumlahMeninggal = hitungMeninggal(hasil);
    let meninggalEl = document.getElementById("totalMeninggal");
    meninggalEl.innerText += jumlahMeninggal;
  });
