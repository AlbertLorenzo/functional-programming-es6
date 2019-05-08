const MayBe = function(val) {
    this.val = val
}

MayBe.of = function(val) {
    return new MayBe(val)
}

MayBe.prototype.isNothing = function() {
    return this.val === null || this.val === undefined
}

MayBe.prototype.map = function(fnt) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fnt(this.val))
} 

const testString = MayBe.of('Albert').map((e) => e.toUpperCase()).map(e => `Mr. ${e}`)

console.log(testString.val)