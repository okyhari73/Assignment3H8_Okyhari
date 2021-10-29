function renderAPI(hasil) {
  let covidTableEl = document.getElementById("covidTable");
  let positifEl = document.getElementById("totalPositif");
  let sembuhEl = document.getElementById("totalSembuh");
  let meninggalEl = document.getElementById("totalMeninggal");

  let countPositifEl = 0;
  let countSembuhEl = 0;
  let countMeninggalEl = 0;

  hasil.forEach((el) => {
    covidTableEl.innerHTML += `
    <tr>
    <td>${el.provinsi}</td>
    <td class="text-end">${el.kasusPosi}</td>
    <td class="text-end">${el.kasusSemb}</td>
    <td class="text-end">${el.kasusMeni}</td>
    </tr> `;
    countPositifEl += Number(el.kasusPosi);
    countSembuhEl += Number(el.kasusSemb);
    countMeninggalEl += Number(el.kasusMeni);
  });

  positifEl.innerText += countPositifEl;
  sembuhEl.innerText += countSembuhEl;
  meninggalEl.innerText += countMeninggalEl;
}

fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
  .then((response) => response.json())
  .then((el) => el.data)
  .then((hasil) => {
    renderAPI(hasil);
  });
