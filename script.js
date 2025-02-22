document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado correctamente");

    const display = document.getElementById("display"); // Corrección aquí
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText.trim();

            if (value === "C") {
                display.value = ""; // Corrección aquí
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (!isNaN(key) || "+-*/.".includes(key)) {
            display.value += key;
        } else if (key === "Enter") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
        } else if (key === "Escape") {
            display.value = "";
        }
    });
});
