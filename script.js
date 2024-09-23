const form = document.getElementById("form");
const input = document.getElementById("input");
const containerList = document.getElementById("containerList");

// Carrega a lista do localStorage ao iniciar
let list = JSON.parse(localStorage.getItem("tasks")) || [];

// Função para atualizar a lista no HTML
function updateListDisplay() {
    containerList.innerHTML = '';
    list.forEach((item, index) => {
        containerList.innerHTML += `<li>${item} <span class="material-symbols-outlined" onclick="removeTask(${index})">close</span></li>`;
    });
}

// Função para remover tarefa
function removeTask(index) {
    list.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(list));
    updateListDisplay();
}

// Adiciona uma nova tarefa
function addTasks() {
    const text = input.value.trim(); // Remove espaços em branco
    if (text) {
        // Verifica se o texto do input existe na lista
        if (list.includes(text)) {
            alert("Tarefa já existe...")
            input.value = "";
            return;
        }
        list.push(text);
        localStorage.setItem("tasks", JSON.stringify(list));
        updateListDisplay();
        input.value = ""
    }
}

// Inicializa a lista ao carregar a página
updateListDisplay();

// Adiciona uma nova tarefa da função addTasks se estiver algo dentro do input
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTasks();
});