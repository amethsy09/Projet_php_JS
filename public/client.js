feather.replace();

let clients = [];
let currentPage = 1;
let itemsPerPage = 10;

function renderClients() {
    const tbody = document.querySelector("#clients-body");
    tbody.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentClients = clients.slice(start, end);

    if (currentClients.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                    <div class="flex flex-col items-center justify-center gap-3 animate-fade-in">
                        <i data-feather="users" class="w-12 h-12 text-gray-300 animate-bounce"></i>
                        <p class="animate-pulse">Aucun client trouvé</p>
                    </div>
                </td>
            </tr>
        `;
        feather.replace();
        return;
    }

    currentClients.forEach((client, index) => {
        const initials = (client.prenom[0] + client.nom[0]).toUpperCase();
        const row = document.createElement("tr");
        row.className = `hover:bg-gray-50 transition transform hover:scale-[1.002] duration-300 animate-fade-in-up delay-${index % 5}`;

        row.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                    <div class="avatar animate-wiggle hover:animate-spin h-11 w-11 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                        ${initials}
                    </div>
                    <div class="group">
                        <p class="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">${client.prenom} ${client.nom}</p>
                        <p class="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">${client.email}</p>
                    </div>
                </div>
            </td>
            <td class="px-3 py-4">
                <div class="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                    <i data-feather="phone" class="animate-bounce w-4 h-4 text-gray-400 hover:text-indigo-600 animate-float transition-all duration-1000"></i>
                    <span class="hover:scale-105 transition-transform duration-200">${client.telephone}</span>
                </div>
            </td>
            <td class="px-3 py-4">
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full hover:bg-green-200 transition-colors duration-300">
                    <span class="h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
                    <span class="hover:scale-105 transition-transform duration-200">Actif</span>
                </span>
            </td>
            <td class="px-3 py-4">
                <div class="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                    <i data-feather="map-pin" class=" animate-ping w-4 h-4 text-gray-400 hover:text-indigo-600 animate-wiggle-more transition-all duration-1000"></i>
                    <span class="hover:scale-105 transition-transform duration-200">${client.adresse}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex justify-end gap-2">
                    <button class="action-btn p-2 text-green-500 hover:bg-green-50 rounded-lg hover:scale-110 transition-all duration-300" title="Modifier">
                        <i data-feather="edit" class="w-5 h-5 hover:rotate-12 transition-transform duration-300"></i>
                    </button>
                    <button class="action-btn p-2 text-purple-500 hover:bg-purple-50 rounded-lg hover:scale-110 transition-all duration-300" title="Archiver">
                        <i data-feather="archive" class="w-5 h-5 hover:rotate-12 transition-transform duration-300"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    feather.replace();
}


function renderPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(clients.length / itemsPerPage);

    // Previous button
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = `<i data-feather="chevron-left" class="w-4 h-4 transition-transform hover:scale-125 duration-200"></i>`;
    prevBtn.className = `pagination-btn p-2 rounded-lg transition-all duration-300 ${
        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:shadow-sm'
    }`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderClients();
            renderPagination();
        }
    };
    pagination.appendChild(prevBtn);

    // Page buttons
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        const firstBtn = document.createElement("button");
        firstBtn.textContent = "1";
        firstBtn.className = `pagination-btn px-3 py-1.5 rounded-md transition-all duration-300 ${
            1 === currentPage 
                ? 'bg-indigo-600 text-white shadow-md hover:shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100 hover:shadow-sm'
        }`;
        firstBtn.onclick = () => {
            currentPage = 1;
            renderClients();
            renderPagination();
        };
        pagination.appendChild(firstBtn);

        if (startPage > 2) {
            const ellipsis = document.createElement("span");
            ellipsis.textContent = "...";
            ellipsis.className = "px-2 text-gray-500 animate-pulse";
            pagination.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = `pagination-btn px-3 py-1.5 rounded-md transition-all duration-300 ${
            i === currentPage 
                ? 'bg-indigo-600 text-white shadow-md hover:shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100 hover:shadow-sm hover:scale-105'
        }`;
        btn.onclick = () => {
            currentPage = i;
            renderClients();
            renderPagination();
        };
        pagination.appendChild(btn);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.textContent = "...";
            ellipsis.className = "px-2 text-gray-500 animate-pulse";
            pagination.appendChild(ellipsis);
        }

        const lastBtn = document.createElement("button");
        lastBtn.textContent = totalPages;
        lastBtn.className = `pagination-btn px-3 py-1.5 rounded-md transition-all duration-300 ${
            totalPages === currentPage 
                ? 'bg-indigo-600 text-white shadow-md hover:shadow-lg' 
                : 'text-gray-600 hover:bg-gray-100 hover:shadow-sm hover:scale-105'
        }`;
        lastBtn.onclick = () => {
            currentPage = totalPages;
            renderClients();
            renderPagination();
        };
        pagination.appendChild(lastBtn);
    }

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = `<i data-feather="chevron-right" class="w-4 h-4 transition-transform hover:scale-125 duration-200"></i>`;
    nextBtn.className = `pagination-btn p-2 rounded-lg transition-all duration-300 ${
        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:shadow-sm'
    }`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderClients();
            renderPagination();
        }
    };
    pagination.appendChild(nextBtn);

    feather.replace();
}

document.getElementById("items-per-page").addEventListener("change", (e) => {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderClients();
    renderPagination();
});

// Charger les clients depuis le serveur PHP
fetch("http://mouhamed.sy.ecole221.sn:8000/get_clients.php")
    .then(res => res.json())
    .then(data => {
        clients = data;
        document.getElementById("total-clients").textContent = `${clients.length} clients enregistrés`;
        renderClients();
        renderPagination();
    })
    .catch(err => {
        console.error("Erreur :", err);
        document.getElementById("total-clients").textContent = "Erreur de chargement des clients";
        document.getElementById("total-clients").classList.add("text-red-500", "animate-pulse");
    });

    