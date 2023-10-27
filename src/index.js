module.exports = function toReadable(number) {

    const num = number.toString()

    const ones = (onesNumber) => {
            let onesNumberReadable

        switch (onesNumber) {
                case '0':
                    onesNumberReadable = 'zero';
                    break;
                case '1':
                    onesNumberReadable = 'one';
                    break;
                case '2':
                    onesNumberReadable = 'two';
                    break;
                case '3':
                    onesNumberReadable = 'three';
                    break;
                case '4':
                    onesNumberReadable = 'four';
                    break;
                case '5':
                    onesNumberReadable = 'five';
                    break;
                case '6':
                    onesNumberReadable = 'six';
                    break;
                case '7':
                    onesNumberReadable = 'seven';
                    break;
                case '8':
                    onesNumberReadable = 'eight';
                    break;
                case '9':
                    onesNumberReadable = 'nine';
                    break;
        }
        return onesNumberReadable
    }


    const tens = (tensNumber) => {

        let tensNumberReadable

        if (tensNumber === '10') {
            tensNumberReadable = 'ten'
        } else if (tensNumber === '11') {
            tensNumberReadable = 'eleven'
        } else if (tensNumber === '12') {
            tensNumberReadable = 'twelve'
        } else if (tensNumber[0] === '1') {
            switch (tensNumber[1]) {
                case '3':
                    tensNumberReadable = 'thirteen';
                    break;
                case '4':
                    tensNumberReadable = 'fourteen';
                    break;  
                case '5':
                    tensNumberReadable = 'fifteen';
                    break;           
                case '6':
                    tensNumberReadable = 'sixteen';
                    break; 
                 case '7':
                    tensNumberReadable = 'seventeen';
                    break;  
                case '8':
                    tensNumberReadable = 'eighteen';
                    break;    
                case '9':
                    tensNumberReadable = 'nineteen';
                    break;                   
                    
            } 
        } else {
            switch (tensNumber[0]) {
                case '2':
                    tensNumberReadable = 'twenty';
                    break;
                case '3':
                    tensNumberReadable = 'thirty';
                    break;
                case '4':
                    tensNumberReadable = 'forty';
                    break;  
                case '5':
                    tensNumberReadable = 'fifty';
                    break;           
                case '6':
                    tensNumberReadable = 'sixty';
                    break; 
                 case '7':
                    tensNumberReadable = 'seventy';
                    break;  
                case '8':
                    tensNumberReadable = 'eighty';
                    break;    
                case '9':
                    tensNumberReadable = 'ninety';
                    break;  
            }
            if (tensNumber[1] === '0') {
                tensNumberReadable = tensNumberReadable
            } else {
                tensNumberReadable = tensNumberReadable + ' ' + ones(tensNumber[1])
            }
        }
        return tensNumberReadable
    
    }

    let fullNumber

    if (num.length === 1) {
        fullNumber = ones(num)
    } else if (num.length === 2) {
        fullNumber = tens(num)
    } else if (num[1] === '0') {
        if (num[2] === '0') {
            fullNumber = ones(num[0]) + ' hundred'
        } else {
            fullNumber = ones(num[0]) + ' hundred ' + ones(num[2])
        }
        
    } else (fullNumber = ones(num[0]) + ' hundred ' + tens(num.slice(1)))

    return fullNumber
}


console.log(module.exports(342))
