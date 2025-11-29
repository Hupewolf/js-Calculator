function calc(test) {
    const n1 = parseFloat(document.querySelector(".num1").value);
    const n2 = parseFloat(document.querySelector(".num2").value);
    const kqBox = document.querySelector(".kq");

    if (isNaN(n1) || isNaN(n2)) {
        kqBox.innerHTML = "không đủ dữ kiện";
        kqBox.style.color = "red";
        return;
    }

    if (test === "/" && n2 === 0) {
        kqBox.innerHTML = "Không chia được cho 0";
        kqBox.style.color = "red";
        return;
    }

    let kq;

    switch (test) {
        case "+": kq = n1 + n2; break;
        case "-": kq = n1 - n2; break;
        case "*": kq = n1 * n2; break;
        case "/": kq = n1 / n2; break;
    }

    kqBox.innerHTML = `Kết quả: ${parseFloat(kq.toFixed(10))}`;
    kqBox.style.color = "green";
}