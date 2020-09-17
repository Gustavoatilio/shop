function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}
function btn(id){
    var obj = {
        1 : {
        'titulo' : 'Gel Lubrificante',
        'texto' : 'Mais do que extremo prazer, uma dose de bem estar e segurança para tornar qualquer momento inesquecível',
        'valor' : '18.50',
        },
        2 : {
            'titulo' : 'Tanga Pompom',
            'texto' : 'Personalizada com aberturas laterais e pompons com fios brilhantes',
            'valor' : '10.90',
            },
        3 : {
                'titulo' : 'Preservativo Prudence',
                'texto' : 'Embalagem com 3 unidades',
                'valor' : '9.99',
                },
        4 : {
                    'titulo' : 'Baralho Kama Sutra',
                    'texto' : 'Baralho com fotos de 52 posições originais do livro kama sutra',
                    'valor' : '19.90',
                    },
        
         5 : {
                        'titulo' : 'Vibrador Recarregável',
                        'texto' : 'Possui bateria recarregável com adaptador para tomada 110V/220V, também pode ser recarregado via USB. Carregue-o durante 40 minutos e desfrute até 80 minutos de prazer, a bateria de lítio interna é muito eficiente, pode ser usado repetidamente',
                        'valor' : '399.90',
                        },  
         6 : {
                            'titulo' : 'Algema Regulável de Pelúcia',
                            'texto' : 'Par de algemas para você realizar todos seus fetiches! <br> Com trava de segurança e chave',
                            'valor' : '15.00',
                            },
         7 : {
                                'titulo' : 'Ducha Higiene Unissex',
                                'texto' : 'O aplicador é confeccionado em plástico rígido e a bomba de sucção, em borracha macia',
                                'valor' : '39.90',
                                }, 
         8 : {
                                    'titulo' : 'Suplemento Mineral Erectoviril - 60cáp',
                                    'texto' : 'Este produto é um suplemento mineral seguro e eficaz que foi desenvolvido a base de elementos minerais naturais para potencializar o seu desempenho na hora do sexo',
                                    'valor' : '49.90',
                                    },
         9 : {
                                        'titulo' : 'Fantasia Alerquina',
                                        'texto' : 'Venha viver esse clássico dos cinemas entre quatro paredes, use todas suas armas para encontrar seu Pudinzinho malvado.',
                                        'valor' : '87.90',
                                        }, 
        10 : {
                                            'titulo' : 'Gel para Massagem Corporal - 17ml',
                                            'texto' : 'Por ser extremamente forte aconselhamos sempre começar com poucas borrifadas',
                                            'valor' : '49.90',
                                            },
        };
        return obj[id]
        
    }

var id = queryString("id")
var dados = btn(id)
var titulo = dados['titulo']
var texto = dados['texto']
var valor = dados['valor']
document.getElementById("titulo").innerHTML = titulo
document.getElementById("texto").innerHTML = texto
document.getElementById("valor").innerHTML = "$: "+valor
