const daysToBirthday = (dateOfBirthday) => {
    let currentDate = new Date();
    let diff = Date.parse(dateOfBirthday) - currentDate;
    return Math.ceil(diff / (24 * 60 * 60 * 1000)); 
}

const checkInput = (inputValue) => {
    const errorMessage = document.getElementById("error");
    if (inputValue === "") {
        return NaN;
    } else {
        return inputValue;
    }
}   

const makeResult = () => {
    const input = document.getElementById("inp");
    let inputValue = input.value;
    let checkedValue = checkInput(inputValue);
    const resultMessage = document.getElementById("result");
    let errorMessage = document.getElementById('error');
    if (checkedValue !== checkedValue) {
    errorMessage.classList.remove("invisible");
    errorMessage.classList.add("visible");
    resultMessage.classList.add("invisible");
    } else {
    errorMessage.classList.remove("visible");
    errorMessage.classList.add("invisible");
    resultMessage.classList.remove('invisible');
    }
    const result = daysToBirthday(checkedValue);
    if (result < 0) {
        resultMessage.textContent = "Ваш День Рождения уже прошел...";
    } else if (result === 0) {
        resultMessage.textContent = "Поздравляю с Днем Рождения!!! Желаю всего самого прекрасного!";
    } else {
        let wordDay = "";
        let verb = "";
        switch (result % 10) {
            case 1:
                wordDay = "день";
                verb = "остался";
                break;
                case 2: 
                wordDay = "дня";
                verb = "осталось";
                break;
                case 3: 
                wordDay = "дня";
                verb = "осталось";
                break;
                case 4: 
                wordDay = "дня";
                verb = "осталось";
                break;
                default: 
                wordDay = "дней";
                verb = "осталось";    
            }
            resultMessage.textContent = `До Вашего Дня Рождения ${verb}: ${result} ${wordDay}`
        }
}    

const button = document.getElementById("button");
button.addEventListener('click', makeResult);

    