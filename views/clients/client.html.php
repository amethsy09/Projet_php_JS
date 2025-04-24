<div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/10 backdrop-blur-lg">
        <!-- En-tête -->
        <div class="px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 border-b border-white/10">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div class="text-white">
                    <h1 class="text-2xl font-bold">Clients</h1>
                    <p class="text-sm opacity-90 mt-1" id="total-clients">24 clients actifs</p>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="relative">
                        <input type="text"
                            class="bg-white/20 placeholder-white/60 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
                            placeholder="Rechercher...">
                        <i data-feather="search" class="h-4 w-4 text-white absolute left-3 top-3"></i>
                    </div>
                    <button
                        class="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all">
                        <i data-feather="plus" class="h-5 w-5"></i>
                        <span>Nouveau client</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Tableau des clients -->
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="bg-gray-50/80 backdrop-blur-sm">
                    <tr class="text-left border-b border-gray-100">
                        <th class="pl-6 pr-3 py-4">CLIENT</th>
                        <th class="px-3 py-4">TELEPHONE</th>
                        <th class="px-3 py-4">STATUT</th>
                        <th class="px-3 py-4">ADRESSE</th>
                        <th class="pr-6 pl-3 py-4">ACTIONS</th>
                    </tr>
                </thead>
                <tbody id="clients-body" class="divide-y divide-gray-100/50"></tbody>
            </table>
        </div>

        <!-- Pied de page -->
        <div class="px-6 py-4 border-t border-gray-100/30 flex flex-col md:flex-row items-center justify-between bg-gray-50/30">
            <div class="flex items-center space-x-4 mb-4 md:mb-0">
                <span class="text-sm text-gray-500">Afficher</span>
                <select id="items-per-page" class="bg-transparent border-none text-sm text-gray-700 focus:ring-0">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
                <span class="text-sm text-gray-500">éléments</span>
            </div>
            <div id="pagination" class="flex items-center space-x-2"></div>
        </div>
    </div>
</div>

<script src="https://unpkg.com/feather-icons"></script>
<script src="./client.js"></script>
