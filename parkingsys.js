var ParkingSystem = function(big, medium, small) {
    this.space = [big,medium,small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    return (this.space[carType-1]--) >0;
};

var parkingSystem = new ParkingSystem(1,1,0);
console.log(parkingSystem)
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(3));