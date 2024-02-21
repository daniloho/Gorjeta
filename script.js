function calculateTip() {
    const preco = parseFloat(document.getElementById("preco").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(preco)) {
        alert("Por favor, digite um valor numérico válido para a conta.");
        return;
    }

    const gorjeta = (preco * tipPercentage).toFixed(2);
    const total = (preco + parseFloat(gorjeta)).toFixed(2);

    document.getElementById("gorjeta").innerText = `Valor da Gorjeta: R$ ${gorjeta}`;
    document.getElementById("total").innerText = `Valor Total: R$ ${total}`;
}
