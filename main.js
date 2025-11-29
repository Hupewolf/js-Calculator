function calc(test) {
    const n1 = Number(document.querySelector(".num1").value);
    const n2 = Number(document.querySelector(".num2").value);
    const kqBox = document.querySelector(".kq");

    if (isNaN(n1) || isNaN(n2) || n1.trim() === "" || n2.trim() === "") {
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

    kqBox.innerHTML = `Kết quả: ${Number(kq.toFixed(10))}`;
    kqBox.style.color = "green";
}