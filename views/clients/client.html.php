<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Clients</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container mx-auto px-4 py-8 max-w-7xl">
        <div class="card">
            <!-- Header -->
            <div class="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 class="text-2xl font-bold text-gray-800">Gestion des Clients</h1>
                    <p id="total-clients" class="text-gray-500 mt-1">Chargement en cours...</p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <div class="relative flex-1 sm:w-64">
                        <input type="text"
                        id="search"
                        placeholder="Rechercher un client..." 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition">
                        <i data-feather="search" class="absolute left-3 top-3 text-gray-400"></i>
                    </div>
                    <button class="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition">
                        <i data-feather="plus" class="w-4 h-4"></i>
                        <span>Ajouter</span>
                    </button>
                </div>
            </div>
            
            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50 text-gray-500 text-sm font-medium uppercase tracking-wider">
                        <tr class="border-b border-gray-200">
                            <th class="px-6 py-4 text-left">Client</th>
                            <th class="px-3 py-4 text-left">Contact</th>
                            <th class="px-3 py-4 text-left">Statut</th>
                            <th class="px-3 py-4 text-left">Localisation</th>
                            <th class="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="clients-body" class="divide-y divide-gray-200"></tbody>
                </table>
            </div>
            
            <!-- Footer -->
            <div class="px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                    <span>Affichage</span>
                    <select id="items-per-page" class="bg-transparent border-none text-gray-700 focus:ring-0">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <span>éléments par page</span>
                </div>
                
                <div id="pagination" class="flex items-center gap-1"></div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/feather-icons"></script>
    <script src="client.js"></script>
</body>
</html>