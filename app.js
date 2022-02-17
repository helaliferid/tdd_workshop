const taxCalculator = (mt,tax)=>{
    if(mt < 0){
        return 'Montant doit etre > 0'
    }
    if(tax < 0 || tax > 100){
        return 'tax doit etre >0 et < 100'
    }
    return mt*(tax/100)+mt;
}
module.exports = taxCalculator;