
// console.log(String.fromCharCode(33));
// ver tabela ASCII na internet

const aleatorio = (min, max) => Math.floor(Math.random() * (max -min) + min);

const geraMaiuscula = () => String.fromCharCode(aleatorio(65, 91));
const geraMinuscula = () => String.fromCharCode(aleatorio(97, 123));
const geraNumero = () => String.fromCharCode(aleatorio(48, 58));
const simbolos = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØáíóúñÑªº¿®¬¡«»¦ÁÂÀ©¢¥ãÃ¤ðÐÊËÈÍÎÏÌÓßÔÒÕµÞÚÛÙýÝ¯´±¶§÷°·';
const geraSimbolos = () => simbolos[aleatorio(0, simbolos.length)];//pega de '0' ate o tamanho do array

// console.log(geraMaiuscula());
// console.log(geraMinuscula());
// console.log(geraNumero());
// console.log(geraSimbolos());

export default function geraSenha(quantidade, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    quantidade = Number(quantidade);

    for (let i = 0; i < quantidade; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolos());
        
        
    }

   return senhaArray.join('').slice(0, quantidade);//sem espaçamento 'join('')' e começa do 0 ate a quantidade desejada
}

// geraSenha(5, true, true, true, true);