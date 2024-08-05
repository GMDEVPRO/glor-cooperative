/**
 * Como usar:
 * Adicionar os scripts js na tag head
 * 1. idiomas.js  - dicionario com os tipo (identificadores) e sua tradução
 * 2. texto.js - classe responsavel pelos metodos e funcoes para traduzir
 * 3. textoController.js - consumo a classe e exeuta as chamadas
 * 
 * Traduzir um conteudo de um tag, deve-se:
 * 1. definir um id ou classe
 * 2. adicionar mais um tratativa em JQuery no metodo: setTextos(), onde:
 *  a) obter o conteudo da tag (html,value,text), sempre que possivel manter o mesmo nome para o tipo
 *  b) adiconar no arquivo idiomas.js - o tipo nos diversos idiomas e suas repectivas traduções; 
 * 
 * Depois somente testar
 * duvidas e sugestões: http://about.me/robsonamendonca
 * Desenvolvedor: Robson Mendonça
 * 2020-04-10


 */

 var Textos = function(){
    var lingua;
    var self =this;

    self.verificaLingua =function(){
        var aux = localStorage.getItem('lingua');
        if(aux === null){
            localStorage.setItem('lingua','en-us');
            lingua = 'en-us';
        }else{
            lingua = aux;
        }        
    }

    self.setLingua = function(ling){
        if(ling !== undefined){
            localStorage.setItem('lingua',ling);
            lingua = ling;
            return true;
        }else{
            return false;
        }
    }

    self.TrocaLingua = function(idioma){
            self.setLingua(idioma);
    }

    self.getLingua = function(){
        return lingua;
    }

    self.getTexto = function(tipo){
        var array = idiomas[lingua];
        return array[tipo];
    }

    self.setTextos = function(){
        /*  ATENÇÃO: Sempre usar classes ou id nas tag, evitar uso de nome de tag, 
        e sempre a classe tem que esta onde somente estiver texto, pois podera perder 
        outra tags se a mesma tive dentro delas */

        //select de opções
       
        $('select#tselecao option').eq(0).text(txt.getTexto('lngptbr'));
        $('select#tselecao option').eq(1).text(txt.getTexto('lngenus'));
        $('select#tselecao option').eq(2).text(txt.getTexto('lngfrfr'));

       
        $('select#tselecaom option').eq(0).text(txt.getTexto('lngptbr'));
        $('select#tselecaom option').eq(1).text(txt.getTexto('lngenus'));
        $('select#tselecaom option').eq(2).text(txt.getTexto('lngfrfr'));

       
        //mantem select com mesmo texto
        
        $('#tselecao option:selected').text(txt.getTexto(txt.trataTextoOpcao()));
        $('#tselecaom option:selected').text(txt.getTexto(txt.trataTextoOpcao()));

        $('.lng__home').html(txt.getTexto('lng__home'));
        $('.lng__about').html(txt.getTexto('lng__about'));
        $('.lng__service').html(txt.getTexto('lng__service'));
        $('.lng__ride').html(txt.getTexto('lng__ride'));
        $('.lng__contact').html(txt.getTexto('lng__contact'));
        $('.lng__title__a').html(txt.getTexto('lng__title__a'));
        $('.lng__title__b').html(txt.getTexto('lng__title__b'));
        $('.lng__title__c').html(txt.getTexto('lng__title__c'));
        $('.lng__title__c1').html(txt.getTexto('lng__title__c1'));
        $('.lng__title__c2').html(txt.getTexto('lng__title__c2'));
        $('.lng__title__c3').html(txt.getTexto('lng__title__c3'));
        $('.lng__title__c4').html(txt.getTexto('lng__title__c4'));
        $('.lng__title__c5').html(txt.getTexto('lng__title__c5'));
        $('.lgn__title__c6').html(txt.getTexto('lgn__title__c6'));
        $('.lgn__title__c7').html(txt.getTexto('lgn__title__c7'));
        $('.lgn__title__c8').html(txt.getTexto('lgn__title__c8'));
        $('.lgn__title__c99').html(txt.getTexto('lgn__title__c99'));
        $('.lgn__title__c9').html(txt.getTexto('lgn__title__c9'));
        $('.lgn__title__c10').html(txt.getTexto('lgn__title__c10'));
        $('.lgn__title__c11').html(txt.getTexto('lgn__title__c11'));
        $('.lgn__title__c12').html(txt.getTexto('lgn__title__c12'));
        $('.lgn__title__c13').html(txt.getTexto('lgn__title__c13'));
        $('.lgn__title__c14').html(txt.getTexto('lgn__title__c14'));
        $('.lgn__title__c15').html(txt.getTexto('lgn__title__c15'));
        $('.lgn__title__c16').html(txt.getTexto('lgn__title__c16'));
        $('.lgn__title__c17').html(txt.getTexto('lgn__title__c17'));
        $('.lgn__title__c18').html(txt.getTexto('lgn__title__c18'));
        $('.lgn__title__c19').html(txt.getTexto('lgn__title__c19'));
        $('.lgn__title__c20').html(txt.getTexto('lgn__title__c20'));
        $('.lgn__title__c21').html(txt.getTexto('lgn__title__c21'));
        $('.lgn__title__c22').html(txt.getTexto('lgn__title__c22'));
        $('.lgn__title__c23').html(txt.getTexto('lgn__title__c23'));
        $('.lgn__title__c24').html(txt.getTexto('lgn__title__c24'));
        $('.lgn__title__c25').html(txt.getTexto('lgn__title__c25'));
    }

    self.trataTextoOpcao = function(){
        return 'lng'+lingua.replace('-','');
    }


 }

 