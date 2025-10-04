function calculateElectricBill(kwh) {
    let total = 0;

    if (kwh <= 50) {
        total = kwh * 1500;
    } else if (kwh <= 100) {
        total = (50 * 1500) + ((kwh - 50) * 2000);
    } else {
        total = (50 * 1500) + (50 * 2000) + ((kwh - 100) * 3000);
    }

    return total;
}

console.log("Tiền điện 45 kWh:", calculateElectricBill(45));
console.log("Tiền điện 80 kWh:", calculateElectricBill(80));
console.log("Tiền điện 120 kWh:", calculateElectricBill(120));