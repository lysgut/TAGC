let CATG = ['G', 'C', 'A', 'T']

function random(x){
    let numeroFinal = Math.random() * x;
    numeroFinal = Math.floor(numeroFinal);
    return numeroFinal
}

function cadenaADN(){
    let cadena = 'ATG'
    let fin = ['TAA','TAG', 'TGA']
    for(let i = 0; i < 12; i++){
        cadena += CATG[random(4)]
    }
    cadena+= fin[random(3)]

    let cadena2 = ''
    let arn = ''
    for(elem of cadena){
        switch (elem) {
            case 'A':
                cadena2+= 'T'
                arn+= 'A'
                break
                case 'C':
                cadena2+= 'G'
                arn += 'C'
                break
                case 'T':
                cadena2+= 'A'
                arn += 'U'
                break
                case 'G':
                    cadena2+= 'C'
                    arn += 'G'
                    break
            default:
                break;
        }
    }
    let adn = {
        'helice1' : cadena,
        'helice2' : cadena2,
        'arn' : arn,
    }
    return adn
}

console.log(cadenaADN())