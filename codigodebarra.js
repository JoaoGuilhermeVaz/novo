function calcularDigitoVerificador(ean) {
    let soma = 0;
    for (let i = 0; i < 12; i++) {
        let digito = parseInt(ean[i]);
        soma += (i % 2 === 0) ? digito * 1 : digito * 3;
    }
    let digitoVerificador = (10 - (soma % 10)) % 10;
    return digitoVerificador;
}

function verificarEAN(ean) {
    if (ean.length !== 13) {
        return false;
    }
    let digitoVerificadorCalculado = calcularDigitoVerificador(ean);
    let digitoVerificadorReal = parseInt(ean[12]);
    return digitoVerificadorCalculado === digitoVerificadorReal;
}

function extrairInformacoes(ean) {
    if (!verificarEAN(ean)) {
        console.log("Código de barras inválido.");
        return;
    }
    let paisDeOrigem = ean.substring(0, 3);
    let codigoFabricante = ean.substring(3, 7);
    let codigoProduto = ean.substring(7, 12);
    let digitoVerificador = ean[12];

    console.log(`País de Origem: ${paisDeOrigem}`);
    console.log(`Código do Fabricante: ${codigoFabricante}`);
    console.log(`Código do Produto: ${codigoProduto}`);
    console.log(`Dígito Verificador: ${digitoVerificador}`);

}

let codigoEAN = "5431230567806";
extrairInformacoes(codigoEAN);