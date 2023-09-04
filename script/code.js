
function random(x){
    let numeroFinal = Math.random() * x;
    numeroFinal = Math.floor(numeroFinal);
    return numeroFinal
}

function ADNARN(x){
    let cadena = "ATG"
    let cadena2 = ""
    let arn = ""
    let codones = []

    let proteinas= [
        "TTT", "TTA", "TTG", "TTC",
        "TAT", "TAC",
        "TGT", "TGG", "TGC",
        "TCT", "TCA", "TCG", "TCC",
        "ATT", "ATA", "ATG", "ATC",
        "AAT", "AAA", "AAG", "AAC",
        "AGT", "AGA", "AGG", "AGC",
        "ACT", "ACA", "ACG", "ACC",
        "CTT", "CTA", "CTG", "CTC",
        "CAT", "CAA", "CAG", "CAC",
        "CGT", "CGA", "CGG", "CGC",
        "CCT", "CCA", "CCG", "CCC",
        "GTT", "GTA", "GTG", "GTC",
        "GAT", "GAA", "GAG", "GAC",
        "GGT", "GGA", "GGG", "GGC",
        "GCT", "GCA", "GCG", "GCC"
        ];

        for (i=0; i<x; i++){
        cadena+=proteinas[random(61)]
        }

        let fin = ["TAG", "TGA", "TAA"]
        
        cadena += fin[random(3)]

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

    for(let i=0; i<arn.length; i= i+3){
        let prote = arn[i] + arn[i+1] + arn[i+2]
        switch (prote) {

            case 'AAA' :
            case 'AAG' :
            codones.push(" Lisina")
            break;

            case 'UUU':
            case 'UUC':
            codones.push(" Felinanalina")
            break;
            
            case 'UUG':
            case "CUU":
            case "CUC":
            case 'CUA':
            case 'CUG':
            case 'UUA':
            codones.push(" Leucina")
            break;

            case 'AUU' :
            case'AUC' :
            case 'AUA' :
            codones.push(' Isoleucina')
            break;

            case 'AUG' :
            codones.push(' Metionina')
            break;

            case "GUA":
            case "GUU":
            case "GUC":
            case "GUG":
            codones.push(" Valina");
            break;

            case 'UCU':
            case 'UCA':
            case 'UCC' :
            case 'UCG' :
            case 'AGU' :
            case 'AGC' :
            codones.push(' Serina')
            break;

            case 'CCU':
            case 'CCC':
            case 'CCA' :
            case 'CCG' :
            codones.push(' Prolina')
            break;

            case 'ACU':
            case 'ACC':
            case 'ACA' :
            case 'ACG' :
            codones.push(' Treonina')
            break;

            case 'GCU':
            case 'GCC':
            case 'GCA' :
            case 'GCG' :
            codones.push(' Alanina')
            break;

            case 'UAU' :
            case 'UAC' :
            codones.push(' Tirosina')
            break;

            case 'UAA' :
            case 'UAG' :
            case 'UGA' :
            codones.push(' STOP')
            break;

            case 'CAU' :
            case 'CAC' :
            codones.push(' Histidina')
            break;

            case 'CAA' :
            case 'CAG' :
            codones.push(' Glutamina')
            break;

            case 'AAU' :
            case 'AAC' :
            codones.push(' Asparagina')
            break;

            case 'GAA' :
            case 'GAG' :
            codones.push(' Ácido Glutámico')
            break;

            case 'GAU' :
            case 'GAC' :
            codones.push(' Ácido Aspártico')

            case 'UGG' :
            codones.push(' Triptófano')
            break;

            case 'UGU' :
            case 'UGC' :
            codones.push(" Clisteína")
            break;

            case 'AGG':
            case "AGA":
            case "CGG":
            case 'CGA':
            case 'CGC':
            case 'CGU':
            codones.push(" Arginina")
            break;
            
            case 'GGU':
            case 'GGC':
            case 'GGA' :
            case 'GGG' :
            codones.push(' Glicina')
            break;

            default:
            break;
        }
codones[0] = "Metionina (de inicio)"
    }
    let adn = {
        ADN: {
            helice1: cadena,
            helice2: cadena2
        },
        ARN : arn,
        codones: codones
    }
    
    
    
        return adn
        

}

const boton = document.getElementById('h');
const C1HTML= document.getElementById("c1");
const C2HTML = document.getElementById("c2");
const ARNHTML = document.getElementById("arn");
const CODONS = document.getElementById("codons")

boton.addEventListener("click", function() {
    console.log("generando")
    let newADN = ADNARN(4)
    C1HTML.textContent = newADN.ADN.helice1
    C2HTML.textContent = newADN.ADN.helice2
    ARNHTML.textContent = newADN.ARN
    CODONS.textContent = newADN.codones


})
console.log(ADNARN(20))