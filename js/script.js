const form = document.querySelector('#volunteerForm');
const statusBox = document.querySelector('#formStatus');
const cpfInput = document.querySelector('#cpf');
const telefoneInput = document.querySelector('#telefone');
const cepInput = document.querySelector('#cep');
const dataNascimentoInput = document.querySelector('#dataNascimento');

function onlyDigits(value) {
    return value.replace(/\D/g, '');
}

function formatCPF(value) {
    const digits = onlyDigits(value).slice(0, 11);
    return digits
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function formatTelefone(value) {
    const digits = onlyDigits(value).slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatCEP(value) {
    const digits = onlyDigits(value).slice(0, 8);
    return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}

function isValidCPF(value) {
    const cpf = onlyDigits(value);
    if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i += 1) sum += Number(cpf[i]) * (10 - i);
    let remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;
    if (remainder !== Number(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i += 1) sum += Number(cpf[i]) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10) remainder = 0;

    return remainder === Number(cpf[10]);
}

cpfInput?.addEventListener('input', () => {
    cpfInput.value = formatCPF(cpfInput.value);
});

telefoneInput?.addEventListener('input', () => {
    telefoneInput.value = formatTelefone(telefoneInput.value);
});

cepInput?.addEventListener('input', () => {
    cepInput.value = formatCEP(cepInput.value);
});

dataNascimentoInput?.setAttribute('max', new Date().toISOString().split('T')[0]);

form?.addEventListener('submit', (event) => {
    event.preventDefault();
    statusBox.className = 'form-status';
    statusBox.textContent = '';

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    if (!isValidCPF(cpfInput.value)) {
        statusBox.textContent = 'Informe um CPF válido.';
        cpfInput.focus();
        return;
    }

    const telefoneDigits = onlyDigits(telefoneInput.value);
    if (telefoneDigits.length !== 11) {
        statusBox.textContent = 'Informe um telefone celular válido com DDD.';
        telefoneInput.focus();
        return;
    }

    const cepDigits = onlyDigits(cepInput.value);
    if (cepDigits.length !== 8) {
        statusBox.textContent = 'Informe um CEP válido.';
        cepInput.focus();
        return;
    }

    statusBox.className = 'form-status success';
    statusBox.textContent = 'Cadastro validado com sucesso! Nesta versão demonstrativa, nenhum dado é enviado para um servidor.';
});

form?.addEventListener('reset', () => {
    statusBox.className = 'form-status';
    statusBox.textContent = '';
});