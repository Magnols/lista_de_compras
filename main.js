document.addEventListener("DOMContentLoaded", function() {
    const itemInput = document.getElementById("itemInput");
    const itemCategoria = document.getElementById("itemCategoria");
    const adicionarButton = document.getElementById("adicionarButton");
    const removerButton = document.getElementById("removerButton");

    const listaCompras = {
        Frutas: document.getElementById("FrutasList"),
        Congelados: document.getElementById("CongeladosList"),
        Laticinios: document.getElementById("LaticiniosList"),
        Doces: document.getElementById("DocesList"),
        Outros: document.getElementById("OutrosList"),
    };

    function atualizarBotoes() {
        if (itemInput.value.length >= 2) {
            adicionarButton.removeAttribute("disabled");
            removerButton.removeAttribute("disabled");
        } else {
            adicionarButton.setAttribute("disabled", "disabled");
            removerButton.setAttribute("disabled", "disabled");
        }
    }

    itemInput.addEventListener("input", atualizarBotoes);

    atualizarBotoes();

    adicionarButton.addEventListener("click", function(event) {
        event.preventDefault();
        const itemValue = itemInput.value;
        const categoriaValue = itemCategoria.value;

        if (itemValue && categoriaValue) {
            const categoriaList = listaCompras[categoriaValue];
            if (categoriaList) {
                const newItem = document.createElement("li");
                newItem.textContent = itemValue;
                categoriaList.appendChild(newItem);
            }
        }
    });

    removerButton.addEventListener("click", function(event) {
        event.preventDefault();
        const itemValue = itemInput.value;
        if (itemValue) {
            let itemRemoved = false;
            for (const categoria in listaCompras) {
                const categoriaList = listaCompras[categoria];
                const items = categoriaList.getElementsByTagName("li");
                for (const item of items) {
                    if (item.textContent === itemValue) {
                        categoriaList.removeChild(item);
                        itemRemoved = true;
                        break;
                    }
                }
            }
            if (!itemRemoved) {
                alert("O item não está na lista de compras.");
            }
        }
    });
});