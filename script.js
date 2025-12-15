const button = document.getElementById('task');

button.addEventListener('click', function() {
    const inputs = document.querySelectorAll('input[type="num"]');
    let sum = 0;

    inputs.forEach(input => {
        const value = Number(input.value);
        if (!isNaN(value)) {sum += value;}
    });

        const resultParagraph = document.getElementById('result');
        resultParagraph.textContent = `Сума: ${sum}`;
});