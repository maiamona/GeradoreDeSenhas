import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracters = document.querySelector('.qtd-caracteres');
const chkMauiusculas = document.querySelector('.chk-maiusculas');
const chkMenusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chksimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () =>{
    gerarSenha.addEventListener('click', () =>{
// console.log(chkMauiusculas.checked);
if (qtdCaracters.value > 20) {
  senhaGerada.innerHTML = '20 caracteres apenas';  
} else{
    senhaGerada.innerHTML = gera(); 
}

    });
};


function gera() {
    const senha = geraSenha(
        qtdCaracters.value,
        chkMauiusculas.checked,
        chkMenusculas.checked,
        chkNumeros.checked,
        chksimbolos.checked
    );

    return senha || 'Nada selecionado.';
}