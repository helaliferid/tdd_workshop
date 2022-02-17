const taxCalculator= require('./app')

describe('Tax Calulator Test Suit',()=>{
    test('Ok Tax Calculator accept MntHT & Tax%',()=>{
        //AAA
        // Arrange
        const calculator = taxCalculator
        // Act
        result = calculator(300000,10)

        // Assert / Expect
        expect(result).toEqual(330000);
    })

    test('Ok Tax Calculator accept MntHT & Tax%',()=>{
 
        const calculator = taxCalculator
        // Act
        result = calculator(1000,10)

        // Assert / Expect
        expect(result).toEqual(1100);
    })

    test('It should be fail with out arguments',()=>{
 
        const calculator = taxCalculator
        // Act
        result = calculator()

        // Assert / Expect
        expect(result).not.toEqual(1100);
    })

    test('It should  fail with Mnt < 0',()=>{
 
        const calculator = taxCalculator
        // Act
        result = calculator(-100,10)

        // Assert / Expect
        expect(result).toMatch('Montant doit etre > 0');
    })
})

describe('Total Suite Totaux',()=>{})

// given [{label,price,qte,tax}] => Totaux (Mnt HT, TTC)
/* Sample [
  {label:'ordinateur',1500,3,19},
  {label:'Imprimante',700,1,19},
  {label:'Onduleur',600,2,19},
]*/