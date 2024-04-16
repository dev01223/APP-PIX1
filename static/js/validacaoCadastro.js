// ---------------------- VALIDADOR DE CPF ----------------------------//
function validadorCPF(cpf) {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
        return false
    
    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCPF) !== -1)
        return false

    for (i=1; i<=9; i++)
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)) )
        return false

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false

    return true
}
// ---------------------- VALIDADOR DE CPF ----------------------------//



// ---------------------- VALIDADOR DE CELULAR ----------------------------//
function validadorCELULAR(celular) {
    var strCelular =  String(celular).replace(/[^\d]/g, '')

    if (strCelular.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCelular) !== -1)
        return false
        
    var telOK = strCelular.match(/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/);

    if(!telOK)
        return false
    
    return true
    
}
// ---------------------- VALIDADOR DE CPF ----------------------------//




// ---------------------- AUTO COMPLETE EXTENSOES DE EMAIL ----------------------------//
$(document).ready(function() {
    //pegando o id do formulario
    $('#emailAux').autocomplete({
        //Aqui declaro algumas possiveis extensoes de email para autocompletar
        data: {
        '@gmail.com': null,
        '@hotmail.com': null,
        '@outlook.com': null,
        '@icloud.com': null,
        '@terra.com.br': null,
        '@yahoo.com.br': null
        },
        limit: 1, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
        // FunÃ§Ã£o quando Ã© valido ou seja completado!
        //alert("ok");
        },
        minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
    });
    detectChanges();
});

let lastLength = $('#emailAux').val().length;

$('#emailUsuario').on('input', function(e) {
    let countSymbol = $(this)
        .val()
        .match(/@/g);
    if (countSymbol) {
        if ($('#emailUsuario').val().substr($('#emailUsuario').val().indexOf('@')).length - 1 > 0) {
            if ($('.autocomplete-content').is(':visible')) {
                $('#emailAux').val($('#emailUsuario').val().substr($('#emailUsuario').val().indexOf('@')));
                $('#emailAux').trigger(
                jQuery.Event('keyup', {
                    keycode: 13
                })
                );
            } else {
                $('#emailAux').val($('#emailUsuario').val().substr($('#emailUsuario').val().indexOf('@')));
                $('#emailAux').trigger(
                jQuery.Event('keyup', {
                    keycode: 13
                })
                );
                $('.autocomplete-content').show();
                e.stopPropagation();
            }
            lastLength = $('#emailAux').val().length;

        } else {
            $('.autocomplete-content').hide();
        }
    } else {
        $('.autocomplete-content').hide();
    }
});

$('#emailUsuario').on('blur', function(e) {
    $('#emailAux').blur();
});

let intervalID = null;

intervalManager(true, detectChanges, 1);

function intervalManager(flag, animate, time) {
    if (flag) intervalID = setInterval(animate, time);
    else clearInterval(intervalID);
}

function detectChanges() {
    if ($('#emailAux').val().length - lastLength > 1) {
        $('#emailUsuario').val($('#emailUsuario').val().substr(0, $('#emailUsuario').val().indexOf('@')) + $('#emailAux').val());
        $('#emailUsuario').focus().blur();
        intervalManager(false);
        $('#emailAux').val('');
        intervalManager(true, detectChanges, 1);
    }
}
// ---------------------- AUTO COMPLETE EXTENSOES DE EMAIL ----------------------------//




// ---------------------- VALIDADOR DE EMAIL ----------------------------//
            function validadorEMAIL(email) {
                var re = /\S+@\S+\.\S+/;
                var teste = re.test(email);

                if(!teste)
                    return false
                
                return true
            }
        
// ---------------------- VALIDADOR DE EMAIL ----------------------------//






// ---------------------- FUNCAO CADASTRO DE CPF ----------------------------//
function validacaoCadastroCpf(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var validaNome = document.getElementById("validaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var validaCelular = document.getElementById("validaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var validaEmail = document.getElementById("validaEmail");   


    var userName = document.getElementById("userName");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");


    if(cpfDigitado.length == 14){
        if(validadorCPF(cpfDigitado) == true){
            textoCpf.classList.remove("textoFalse");
            textoCpf.classList.add("textoTrue");

            campoCpf.classList.remove("campoFalse");
            campoCpf.classList.remove("campoWriting");
            campoCpf.classList.add("campoTrue");

            validacaoCpf.innerHTML = ""
            validacaoCpf.style.color = "unset";

            textoGuiaCpf.style.display = "none";
            textoGuiaNome.style.display = "block";
            textoGuiaCelular.style.display = "none";
            textoGuiaEmail.style.display = "none";
            textoGuiaFim.style.display = "none";             

            validaNome.style.display = "block";
            validaCpf.style.margin = "15px 0 0 0";
            campoNome.focus();
        } else {
            textoCpf.classList.remove("textoTrue");
            textoCpf.classList.add("textoFalse");
            
            campoCpf.classList.remove("campoTrue");
            campoCpf.classList.add("campoFalse");
            campoCpf.classList.remove("campoWriting");

            validacaoCpf.innerHTML = "cpf inválido"
            validacaoCpf.style.color = "red";

            textoGuiaCpf.style.display = "block";
            textoGuiaNome.style.display = "none";
            textoGuiaCelular.style.display = "none";
            textoGuiaEmail.style.display = "none";
            textoGuiaFim.style.display = "none";  

            validaNome.style.display = "none";
            validaCelular.style.display = "none";
            validaEmail.style.display = "none";

            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";
        }
    } 
    else if(cpfDigitado.length < 14){
        textoCpf.classList.remove("textoTrue");
        textoCpf.classList.remove("textoFalse");

        campoCpf.classList.remove("campoTrue");
        campoCpf.classList.remove("campoFalse");
        campoCpf.classList.add("campoWriting");

        validacaoCpf.innerHTML = ""
        validacaoCpf.style.color = "unset";    

        textoGuiaCpf.style.display = "block";
        textoGuiaNome.style.display = "none";
        textoGuiaCelular.style.display = "none";
        textoGuiaEmail.style.display = "none";
        textoGuiaFim.style.display = "none";  

        validaNome.style.display = "none";
        validaCelular.style.display = "none";
        validaEmail.style.display = "none";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE CPF ----------------------------//



// ---------------------- FUNCAO CADASTRO DE NOME ----------------------------//
function validacaoCadastroNome(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var validaNome = document.getElementById("validaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var validaCelular = document.getElementById("validaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var validaEmail = document.getElementById("validaEmail");   


    var userName = document.getElementById("userName");
    var primeiroNome = nomeDigitado.split(" ");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");
    
    if(nomeDigitado.length >= 5){
        textoNome.classList.remove("textoFalse");
        textoNome.classList.add("textoTrue");

        campoNome.classList.remove("campoFalse");
        campoNome.classList.add("campoTrue");
        campoNome.classList.remove("campoWriting");

        validacaoNome.innerHTML = ""
        validacaoNome.style.color = "unset";

        textoGuiaCpf.style.display = "none";
        textoGuiaNome.style.display = "none";
        textoGuiaCelular.style.display = "block";
        textoGuiaEmail.style.display = "none";
        textoGuiaFim.style.display = "none";

        validaCelular.style.display = "block";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";

        userName.innerHTML = primeiroNome[0];

    } else {
        textoNome.classList.remove("textoTrue");
        textoNome.classList.remove("textoFalse");
        
        campoNome.classList.remove("campoTrue");
        campoNome.classList.remove("campoFalse");
        campoNome.classList.add("campoWriting");


        validacaoNome.innerHTML = "informe seu nome e sobrenome"
        validacaoNome.style.color = "black";

        textoGuiaCpf.style.display = "none";
        textoGuiaNome.style.display = "block";
        textoGuiaCelular.style.display = "none";
        textoGuiaEmail.style.display = "none";
        textoGuiaFim.style.display = "none";

        validaCelular.style.display = "none";
        validaEmail.style.display = "none";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE NOME ----------------------------//



// ---------------------- FUNCAO CADASTRO DE CELULAR ----------------------------//
function validacaoCadastroCelular(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var validaNome = document.getElementById("validaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var validaCelular = document.getElementById("validaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var validaEmail = document.getElementById("validaEmail");   


    var userName = document.getElementById("userName");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");

    if(celularDigitado.length == 15){
        if(validadorCELULAR(celularDigitado) == true){
            textoCelular.classList.remove("textoFalse");
            textoCelular.classList.add("textoTrue");

            campoCelular.classList.remove("campoFalse");
            campoCelular.classList.add("campoTrue");
            campoCelular.classList.remove("campoWriting");

            validacaoCelular.innerHTML = ""
            validacaoCelular.style.color = "unset";

            textoGuiaCpf.style.display = "none";
            textoGuiaNome.style.display = "none";
            textoGuiaCelular.style.display = "none";
            textoGuiaEmail.style.display = "block";
            textoGuiaFim.style.display = "none";

            validaEmail.style.display = "block";

            campoEmail.focus();

            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";

        } else {
            textoCelular.classList.remove("textoTrue");
            textoCelular.classList.add("textoFalse");
            
            campoCelular.classList.remove("campoTrue");
            campoCelular.classList.add("campoFalse");
            campoCelular.classList.remove("campoWriting");


            validacaoCelular.innerHTML = "celular inválido"
            validacaoCelular.style.color = "red";

            textoGuiaCpf.style.display = "none";
            textoGuiaNome.style.display = "none";
            textoGuiaCelular.style.display = "block";
            textoGuiaEmail.style.display = "none";
            textoGuiaFim.style.display = "none";

            validaEmail.style.display = "none";

            botaoCadastoInativo.style.display = "block";
            botaoCadastoAtivo.style.display = "none";
        }
    } 
    else if(celularDigitado.length < 15){
        textoCelular.classList.remove("textoTrue");
        textoCelular.classList.remove("textoFalse");

        campoCelular.classList.remove("campoTrue");
        campoCelular.classList.remove("campoFalse");
        campoCelular.classList.add("campoWriting");
        
        validacaoCelular.innerHTML = ""

        campoCelular.innerHTML = ""
        campoCelular.style.color = "unset";    

        textoGuiaCpf.style.display = "none";
        textoGuiaNome.style.display = "none";
        textoGuiaCelular.style.display = "block";
        textoGuiaEmail.style.display = "none";
        textoGuiaFim.style.display = "none";

        validaEmail.style.display = "none";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE CELULAR ----------------------------//



// ---------------------- FUNCAO CADASTRO DE EMAIL ----------------------------//
function validacaoCadastroEmail(){
    var validacaoCpf = document.getElementById("validacaoCpf");
    var campoCpf = document.getElementById("cpfUsuario");
    var textoCpf = document.getElementById("textoCpf");
    var cpfDigitado = document.getElementById("cpfUsuario").value;
    var textoGuiaCpf = document.getElementById("textoGuiaCpf"); 
    var validaCpf = document.getElementById("validaCpf");   


    var validacaoNome = document.getElementById("validacaoNome");
    var campoNome = document.getElementById("nomeUsuario");
    var textoNome = document.getElementById("textoNome");
    var nomeDigitado = document.getElementById("nomeUsuario").value;
    var textoGuiaNome = document.getElementById("textoGuiaNome");     
    var validaNome = document.getElementById("validaNome");  
    
    
    var validacaoCelular = document.getElementById("validacaoCelular");
    var campoCelular = document.getElementById("celularUsuario");
    var textoCelular = document.getElementById("textoCelular");
    var celularDigitado = document.getElementById("celularUsuario").value;
    var textoGuiaCelular = document.getElementById("textoGuiaCelular");     
    var validaCelular = document.getElementById("validaCelular");   


    var validacaoEmail = document.getElementById("validacaoEmail");
    var campoEmail = document.getElementById("emailUsuario");
    var textoEmail = document.getElementById("textoEmail");
    var emailDigitado = document.getElementById("emailUsuario").value;
    var textoGuiaEmail = document.getElementById("textoGuiaEmail");     
    var validaEmail = document.getElementById("validaEmail");   


    var userName = document.getElementById("userName");
    var botaoCadastoInativo = document.getElementById("continuarCadastroInativo");
    var botaoCadastoAtivo = document.getElementById("continuarCadastroAtivo");


    var cliqueAutoComplete = document.querySelector(".autocomplete-content");


    if(validadorEMAIL(emailDigitado) == true){
        textoEmail.classList.remove("textoFalse");
        textoEmail.classList.add("textoTrue");

        campoEmail.classList.remove("campoFalse");
        campoEmail.classList.add("campoTrue");
        campoEmail.classList.remove("campoWriting");

        validacaoEmail.innerHTML = ""
        validacaoEmail.style.color = "unset";

        textoGuiaCpf.style.display = "none";
        textoGuiaNome.style.display = "none";
        textoGuiaCelular.style.display = "none";
        textoGuiaEmail.style.display = "none";
        textoGuiaFim.style.display = "block";

        botaoCadastoInativo.style.display = "none";
        botaoCadastoAtivo.style.display = "block";

        userName.innerHTML = nomeDigitado;
        cliqueAutoComplete.style.display = "none";

    } else {
        textoEmail.classList.remove("textoTrue");
        textoEmail.classList.remove("textoFalse");
        
        campoEmail.classList.remove("campoTrue");
        campoEmail.classList.remove("campoFalse");
        campoEmail.classList.add("campoWriting");


        validacaoEmail.innerHTML = "digite um email válido"
        validacaoEmail.style.color = "black";

        textoGuiaCpf.style.display = "none";
        textoGuiaNome.style.display = "none";
        textoGuiaCelular.style.display = "none";
        textoGuiaEmail.style.display = "block";
        textoGuiaFim.style.display = "none";

        botaoCadastoInativo.style.display = "block";
        botaoCadastoAtivo.style.display = "none";
    }
}
// ---------------------- FUNCAO CADASTRO DE EMAIL ----------------------------//