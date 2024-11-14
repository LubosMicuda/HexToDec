// Funkce pro přepočet hexadecimálního čísla do desítkové soustavy
function hexadecimalToDecimal(hexNumber) {
    // Definování proměnných pro výpočet 
    let decimalValue = 0;
    let hexLength = hexNumber.length;

    /**
     * Přepočet znaků hexadecimálního čísla na decimální číslo
     * OPRAVIT CHYBU! iterace musí probíhat od nejnižšího řádu
     */
    for (let n = 0; n < hexLength; n++) {
        let currentChar = hexNumber[hexLength - 1 - n];

        // Je-li číslice 0-9, hodnotu neměníme, pro znaky A-F přiřadí hodnotu 10-15, v případě neplatného znaku vrátí chybu
        let decimalDigit;
        if (currentChar >= '0' && currentChar <= '9') {
            decimalDigit = currentChar.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (currentChar >= 'A' && currentChar <= 'F') {
            decimalDigit = currentChar.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        } else if (currentChar >= 'a' && currentChar <= 'f') {
            decimalDigit = currentChar.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
        } else {
            throw new Error("Neplatný hexadecimální znak.");
        }

        // Přičtení hodnoty aktuální číslice k celkovému decimálnímu číslu
        decimalValue += decimalDigit * Math.pow(16, n);
    }

    // Hodnota výpočtu

    return decimalValue;
}


/**
 * Funkce pro vyžádání hodnoty hexadecimálního čísla od uživatele
 * Uživatel zadá číslo do textového <label> elementu
 */
function convertHexToDecimal() {
    let hexInput = document.getElementById("hexInput").value;

    // Výsledek bude vypsán do elementu <p>
    try {
        let decimalResult = hexadecimalToDecimal(hexInput);
        document.getElementById("result").textContent = `Desítková hodnota: ${decimalResult}`;
    } catch (error) {
        document.getElementById("result").textContent = error.message;
    }
}