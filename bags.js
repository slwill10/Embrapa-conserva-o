$(document).ready( function () {
  $('#myTable').DataTable({
    paging: false
  });
} );

const buttons = document.querySelectorAll('.letter-btn');
const catButtons = document.querySelectorAll('.cat-btn');
const allBtn = document.querySelector('.all-btn');
const allBtnCat = document.querySelector('.allcat-btn');
const table = document.getElementById('myTable');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

// Função para filtrar linhas por vertente
function filterByCategory(letter) {
  for (const row of rows) {
    const firstCellText = row.querySelector('td:nth-child(2)').textContent.toUpperCase();
    row.style.display = firstCellText.startsWith(letter) ? 'table-row' : 'none';
  }
}

// Função para filtrar linhas por letra inicial
function filterByLetter(letter) {
  for (const row of rows) {
    const firstCellText = row.querySelector('td:first-child').textContent.toUpperCase();
    row.style.display = firstCellText.startsWith(letter) ? 'table-row' : 'none';
  }
}

// Adicionar evento de clique aos botões de letra
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.dataset.letter;
    filterByLetter(letter);
  });
});

catButtons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.dataset.letter;
    filterByCategory(letter);
  });
});

// Adicionar evento de clique ao botão "Todos"
allBtn.addEventListener('click', () => {
  filterByLetter(''); // Exibe todas as linhas
});

allBtnCat.addEventListener('click', () => {
  filterByCategory(''); // Exibe todas as linhas
});

function abrirPDF(url, pagina) {
    var pdfContainer = document.getElementById('pdf-container');

    pdfContainer.innerHTML = '<iframe id="pdfFrame" src="' + url + '#page=' + pagina + '&view=FitH&toolbar=0&navpanes=0&scrollbar=0" width="700" height="800" frameborder="0" scrolling="no"></iframe>';
    
    document.getElementById('pdf-container').classList.remove('esconde');
    document.getElementById('myTable').classList.add('esconde');
    document.getElementById('myTable_wrapper').classList.add('esconde');
    document.getElementsByClassName('buttons')[0].classList.add('esconde');
    document.getElementsByClassName('buttons')[1].classList.add('esconde');
    document.getElementById('btn_voltar').classList.remove('esconde');
}

function voltar(){
  document.getElementById('pdf-container').classList.add('esconde');
  document.getElementsByClassName('buttons')[0].classList.remove('esconde');
  document.getElementsByClassName('buttons')[1].classList.remove('esconde');
  document.getElementById('myTable').classList.remove('esconde');
  document.getElementById('myTable_wrapper').classList.remove('esconde');
  document.getElementById('btn_voltar').classList.add('esconde');
}


