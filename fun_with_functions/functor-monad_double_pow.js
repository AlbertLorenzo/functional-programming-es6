// Functor JS -> Objeto plano que implementa una función map que mientras 
// recorre cada valor, crea un objeto nuevo 

// Objeto plano
const Container = function(val) {
    this.val = val
}

// Método of de Container
Container.of = function(val) {
    return new Container(val)
}

// Map function
Container.prototype.map = function (fnt) {
    return Container.of(fnt(this.val))   
}

const pow = (x) => x ** x

const double = (x) => x + x

const testDouble = Container.of(3).map(double).map(double)

const testPow = Container.of(2).map(double).map(pow)

console.log(`TestDobule: ${testDouble.val} TestPow: ${testPow.val}`)


