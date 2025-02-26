function validarCartaoCredito(numeroCartao) {
    let soma = 0;
    let alternar = false;

    for (let i = numeroCartao.length - 1; i >= 0; i--) {
        let digito = parseInt(numeroCartao[i]);

        if (alternar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
        alternar = !alternar;
    }

    return (soma % 10 === 0);
}

let numeroCartao = "543123056780698";
if (validarCartaoCredito(numeroCartao)) {
    console.log("O número do cartão é válido.");
} else {
    console.log("O número do cartão é inválido.");
}