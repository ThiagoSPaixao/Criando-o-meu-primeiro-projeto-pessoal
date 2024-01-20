/* Projeto de Programa para Calcular o valor gasto em combustível em uma viagem.
    Nele estou utilizando muitas Variáveis.
    Falta adicionar:
    ( ) Comandos de entradas
    ( ) Tipo de Veiculo
    ( ) Criar um Front End
    ( ) Desenvolver em forma de APP para Smartphone


    Até então, eu tenho... 

    1 - Preço do Etanol;
    2 - Preço da Gasolina;
    3 - O Tipo de combustível que está no seu carro;
    4 - Gasto Médio de combustível
    4 - Dstância em KM da viagem;

    

    */

    const veiculo = "Carro"
    const precoEtanol = 3.64;
    const precoGasolina = 5.49;
    const kmPorLitroGasolina = 13;
    const kmPorLitroEtanol = 9;
    const distanciaDaViagem = 290;
    const tipoCombustivel = 'Gasolina';
    
    
    const litroConsumidoGasolina = distanciaDaViagem / kmPorLitroGasolina;
    const litroConsumidoEtanol = distanciaDaViagem / kmPorLitroEtanol;
    
    
    const valorGastoGasolina = litroConsumidoGasolina * precoGasolina;
    const valorGastoEtanol = litroConsumidoEtanol * precoEtanol;
    
    if (tipoCombustivel === "Gasolina") {
        console.log("O Seu Veículo é movido à " + tipoCombustivel);
        console.log("O Valor do Combustível é " + precoGasolina);
        console.log("O Seu Veículo faz " + kmPorLitroGasolina + "KM por Litro");
        console.log("Em uma viagem de " + distanciaDaViagem + "KM, você irá gastar " + valorGastoGasolina.toFixed(2) + " Reais");
    } 
    else {
        const valorGastoEtanol = litroConsumidoEtanol * precoEtanol;
        console.log("O Seu Veículo é movido à " + tipoCombustivel);
        console.log("O Valor do Combustível é " + precoEtanol);
        console.log("O Seu Veículo faz " + kmPorLitroEtanol + "KM por Litro");
        console.log("Em uma viagem de " + distanciaDaViagem + "KM, você irá gastar " + valorGastoEtanol.toFixed(2) + " Reais");
        
    }