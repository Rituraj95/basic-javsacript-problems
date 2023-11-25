const isPangram = (string) => {
    let alpha = string.toUpperCase().split("");
    for (let beta = 65; beta < 65 + alpha.length; beta++) {
        let gamma = String.fromCharCode(beta);
        if (alpha.includes(gamma)) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isPangram("Detect Pangram"));
