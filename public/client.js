    feather.replace();

    let clients = []; // À remplir avec les données réelles

    let currentPage = 1;
    let itemsPerPage = 10;

    function renderClients() {
        const tbody = document.querySelector("#clients-body");
        tbody.innerHTML = "";

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentClients = clients.slice(start, end);

        currentClients.forEach(client => {
            const initials = (client.prenom[0] + client.nom[0]).toUpperCase();
            const row = document.createElement("tr");
            row.classList.add("hover:bg-gray-50/30", "transition-colors", "group");

            row.innerHTML = `
                <td class="pl-6 pr-3 py-4">
                    <div class="flex items-center space-x-4">
                        <div class="relative">
                            <div class="h-10 w-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                                <span class="text-indigo-600 font-bold">${initials}</span>
                            </div>
                            <div class="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                            <p class="font-medium text-gray-900">${client.prenom} ${client.nom}</p>
                            <p class="text-sm text-gray-400">${client.email}</p>
                        </div>
                    </div>
                </td>
                <td class="px-3 py-4">
                    <div class="flex items-center space-x-2">
                        <i data-feather="phone" class="h-4 w-4 text-gray-400"></i>
                        <span class="text-gray-700">${client.telephone}</span>
                    </div>
                </td>
                <td class="px-3 py-4">
                    <div class="inline-flex items-center bg-green-50 px-3 py-1 rounded-full">
                        <div class="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span class="text-xs font-medium text-green-700">Actif</span>
                    </div>
                </td>
                <td class="px-3 py-4">
                    <div class="flex items-center space-x-2">
                        <i data-feather="map-pin" class="h-4 w-4 text-gray-400"></i>
                        <span class="text-gray-700">${client.adresse}</span>
                    </div>
                </td>
                <td class="pr-6 pl-3 py-4">
                    <div class="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="p-2 hover:bg-gray-100 rounded-lg">
                            <i data-feather="message-square" class="h-5 w-5 text-gray-500 hover:text-blue-600"></i>
                        </button>
                        <button class="p-2 hover:bg-gray-100 rounded-lg">
                            <i data-feather="edit" class="h-5 w-5 text-gray-500 hover:text-green-600"></i>
                        </button>
                        <button class="p-2 hover:bg-gray-100 rounded-lg">
                            <i data-feather="archive" class="h-5 w-5 text-gray-500 hover:text-purple-600"></i>
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

        const prevBtn = document.createElement("button");
        prevBtn.innerHTML = `<i data-feather="chevron-left" class="h-5 w-5 text-gray-500"></i>`;
        prevBtn.classList.add("p-2", "hover:bg-gray-200/30", "rounded-lg");
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
            currentPage--;
            renderClients();
            renderPagination();
        };
        pagination.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = `px-3 py-1.5 text-sm ${i === currentPage ? 'bg-gray-200' : 'text-gray-700 hover:bg-gray-200/30'} rounded-lg`;
            btn.onclick = () => {
                currentPage = i;
                renderClients();
                renderPagination();
            };
            pagination.appendChild(btn);
        }

        const nextBtn = document.createElement("button");
        nextBtn.innerHTML = `<i data-feather="chevron-right" class="h-5 w-5 text-gray-500"></i>`;
        nextBtn.classList.add("p-2", "hover:bg-gray-200/30", "rounded-lg");
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => {
            currentPage++;
            renderClients();
            renderPagination();
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
    fetch("http://khalil.ecole221.sn:8000/get_clients.php")
        .then(res => res.json())
        .then(data => {
            clients = data;
            document.getElementById("total-clients").textContent = `${clients.length} clients actifs`;
            renderClients();
            renderPagination();
        })
        .catch(err => console.error("Erreur :", err));
