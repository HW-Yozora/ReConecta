document.addEventListener("DOMContentLoaded", () => {

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    function mascaraCPF(valor) {
        valor = valor.replace(/\D/g, "").slice(0, 11);
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return valor;
    }

    function mascaraTelefone(valor) {
        valor = valor.replace(/\D/g, "").slice(0, 11);
        valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        return valor;
    }

    function mascaraCEP(valor) {
        valor = valor.replace(/\D/g, "").slice(0, 8);
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        return valor;
    }

    if (cpf) {
        cpf.addEventListener("input", () => {
            cpf.value = mascaraCPF(cpf.value);
        });
    }

    if (telefone) {
        telefone.addEventListener("input", () => {
            telefone.value = mascaraTelefone(telefone.value);
        });
    }

    if (cep) {
        cep.addEventListener("input", () => {
            cep.value = mascaraCEP(cep.value);
        });
    }

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                mostrarToast("Revise os campos destacados antes de enviar.");
                return;
            }

            event.preventDefault();
            mostrarToast("Cadastro validado com sucesso!");
        });
    }

    function mostrarToast(mensagem) {
        let toast = document.querySelector(".toast");

        if (!toast) {
            toast = document.createElement("div");
            toast.className = "toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            document.body.appendChild(toast);
        }

        toast.textContent = mensagem;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    }
});