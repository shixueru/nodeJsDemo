function testable(isTestable) {
    return function (target) {
        target.isTestable = isTestable;
    }
    target.isTestable = true;
}
@testable(true)
class Myclass {};
console.log(Myclass.isTestable);
