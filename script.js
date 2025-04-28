// --- ДАННЫЕ ДЛЯ КАРТОЧЕК ---
// Вы можете легко добавить сюда больше карточек
const flashcardsData = [
    // --- Законы Ньютона ---
    {
        front: "Сформулируйте Первый закон Ньютона (Закон инерции).",
        back: "Существуют такие системы отсчёта (инерциальные), относительно которых тело сохраняет свою скорость постоянной (или покоится), если на него не действуют другие тела или действие этих тел скомпенсировано."
    },
    {
        front: "Сформулируйте Второй закон Ньютона.",
        back: "Ускорение тела прямо пропорционально равнодействующей сил, приложенных к телу, и обратно пропорционально его массе. Формула: F = m * a."
    },
    {
        front: "В каких единицах измеряется сила в СИ по Второму закону Ньютона?",
        back: "Ньютон (Н). 1 Н = 1 кг * м/с²."
    },
    {
        front: "Сформулируйте Третий закон Ньютона.",
        back: "Силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению. Формула: F₁₂ = -F₂₁."
    },

    // --- Линзы и Зеркала (Оптика) ---
    {
        front: "Формула тонкой собирающей линзы?",
        back: "1/F = 1/d + 1/f (F > 0 - фокусное расстояние, d - расстояние до объекта, f - расстояние до изображения). Действительный фокус."
    },
    {
        front: "Формула тонкой рассеивающей линзы?",
        back: "1/F = 1/d + 1/f (F < 0 - фокусное расстояние, d - расстояние до объекта, f - расстояние до мнимого изображения, f < 0). Мнимый фокус."
        // Альтернативная запись часто: 1/d - 1/|f| = -1/|F|
    },
    {
        front: "Что такое оптическая сила линзы (D)?",
        back: "Величина, обратная фокусному расстоянию линзы (D = 1/F). Измеряется в диоптриях (дптр), если F в метрах."
    },
    {
        front: "Формула линейного увеличения линзы (Г)?",
        back: "Г = |f| / d = H / h (где H - высота изображения, h - высота предмета)."
    },
    {
        front: "Формула сферического зеркала (вогнутого/выпуклого)?",
        back: "1/F = 1/d + 1/f (F = R/2 - фокусное расстояние, R - радиус кривизны). Знаки F, d, f зависят от типа зеркала и положения объекта/изображения."
    },
     {
        front: "Характеристики изображения в плоском зеркале?",
        back: "Мнимое, прямое (неперевернутое), равное по размеру предмету и находится на том же расстоянии за зеркалом, что и предмет перед ним."
    },

    // --- Электрический Ток ---
    {
        front: "Закон Ома для участка цепи?",
        back: "Сила тока (I) на участке цепи прямо пропорциональна напряжению (U) на концах этого участка и обратно пропорциональна его сопротивлению (R). Формула: I = U / R."
    },
    {
        front: "Единицы измерения силы тока, напряжения и сопротивления в СИ?",
        back: "Сила тока - Ампер (А), Напряжение - Вольт (В), Сопротивление - Ом (Ω)."
    },
     {
        front: "Как зависит сопротивление проводника от его размеров и материала?",
        back: "R = ρ * (L / S) (где ρ - удельное сопротивление материала, L - длина проводника, S - площадь поперечного сечения)."
    },
    {
        front: "Формулы для расчета мощности электрического тока (P)?",
        back: "P = U * I = I² * R = U² / R. Единица измерения - Ватт (Вт)."
    },
    {
        front: "Закон Джоуля-Ленца (Работа тока, Количество теплоты)?",
        back: "Количество теплоты (Q), выделяемое проводником с током, равно произведению квадрата силы тока, сопротивления проводника и времени прохождения тока. Q = I² * R * t = U * I * t = (U² / R) * t. Единица - Джоуль (Дж)."
    },

    // --- Электрическая цепь ---
    {
        front: "Назовите основные элементы простой электрической цепи.",
        back: "Источник тока (ЭДС), потребитель/нагрузка (резистор, лампа), соединительные провода, ключ (выключатель)."
    },
    {
        front: "Последовательное соединение проводников: Общее сопротивление?",
        back: "Общее сопротивление равно сумме сопротивлений отдельных проводников: Rобщ = R₁ + R₂ + ... + R𝘯."
    },
    {
        front: "Последовательное соединение: Сила тока и Напряжение?",
        back: "Сила тока одинакова во всех проводниках (Iобщ = I₁ = I₂). Общее напряжение равно сумме напряжений на каждом (Uобщ = U₁ + U₂)."
    },
    {
        front: "Параллельное соединение проводников: Общее сопротивление?",
        back: "Величина, обратная общему сопротивлению, равна сумме величин, обратных сопротивлениям отдельных проводников: 1/Rобщ = 1/R₁ + 1/R₂ + ... + 1/R𝘯."
    },
    {
        front: "Параллельное соединение: Сила тока и Напряжение?",
        back: "Напряжение одинаково на всех параллельно соединенных участках (Uобщ = U₁ = U₂). Общая сила тока равна сумме токов в ветвях (Iобщ = I₁ + I₂)."
    },
     {
        front: "Закон Ома для полной цепи?",
        back: "Сила тока в полной цепи равна ЭДС источника (ε), деленной на сумму внешнего сопротивления цепи (R) и внутреннего сопротивления источника (r). I = ε / (R + r)."
    }
];

// --- ЭЛЕМЕНТЫ DOM ---
const flashcardElement = document.querySelector('.flashcard');
const flashcardInner = document.querySelector('.flashcard-inner');
const frontElement = document.querySelector('.flashcard-front');
const backElement = document.querySelector('.flashcard-back');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const cardCounterElement = document.getElementById('card-counter');

// --- СОСТОЯНИЕ ПРИЛОЖЕНИЯ ---
let currentCardIndex = 0;
let isFlipped = false; // Отслеживаем, перевернута ли карточка

// --- ФУНКЦИИ ---

// Отобразить карточку по индексу
function displayCard(index) {
    if (index >= 0 && index < flashcardsData.length) {
        const cardData = flashcardsData[index];
        frontElement.innerHTML = "<span class='cardtitle'>ВОПРОС</span>"+cardData.front;
        backElement.innerHTML = "<span class='cardtitle'>ОТВЕТ</span>"+cardData.back;

        // Сбросить переворот при показе новой карточки
        if (isFlipped) {
            flashcardElement.classList.remove('is-flipped');
            isFlipped = false;
        }

        // Обновить счетчик
        cardCounterElement.textContent = `${index + 1} / ${flashcardsData.length}`;

        // Обновить состояние кнопок
        prevButton.disabled = index === 0;
        nextButton.disabled = index === flashcardsData.length - 1;

    } else {
        console.error("Неверный индекс карточки:", index);
    }
}

// Перевернуть карточку
function flipCard() {
    flashcardElement.classList.toggle('is-flipped');
    isFlipped = !isFlipped;
}

// Показать следующую карточку
function showNextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        displayCard(currentCardIndex);
    }
}

// Показать предыдущую карточку
function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCard(currentCardIndex);
    }
}

// --- ОБРАБОТЧИКИ СОБЫТИЙ ---
flashcardElement.addEventListener('click', flipCard);
nextButton.addEventListener('click', showNextCard);
prevButton.addEventListener('click', showPrevCard);

// --- ИНИЦИАЛИЗАЦИЯ ---
// Отображаем первую карточку при загрузке страницы
displayCard(currentCardIndex);



// --- ЭЛЕМЕНТЫ DOM (ДЛЯ ТЕСТА) ---
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const nextQuestionButton = document.getElementById('next-question-button');
const scoreElement = document.getElementById('score');

// --- СОСТОЯНИЕ ТЕСТА ---
let currentQuestion = {}; // Текущий вопрос (объект из flashcardsData)
let availableQuestions = []; // Массив доступных вопросов (копируется из flashcardsData)
let score = 0;
let questionCounter = 0;
let totalCurQuestions = 0;
const MAX_QUESTIONS = 10; // Максимальное количество вопросов в тесте (можно изменить)

// --- ФУНКЦИИ ТЕСТА ---

// Запуск теста
function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...flashcardsData]; // Копируем все вопросы
    scoreElement.innerText = `Счет: ${score}/${MAX_QUESTIONS}`;
    getNextQuestion();
}

// Получить следующий вопрос
function getNextQuestion() {
    // Проверка, не закончен ли тест
    questionCounter++;
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
       // Тест закончен!
       questionElement.innerText = "Тест завершен!";
       answersElement.innerHTML = "";
       nextQuestionButton.style.display = 'none';
       resultElement.innerText = `Ваш итоговый счет: ${score} из ${MAX_QUESTIONS}.`;
       return; // Останавливаем функцию
    }

    // Выбираем случайный вопрос
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.front;

    // Удаляем выбранный вопрос из доступных
    availableQuestions.splice(questionIndex, 1);

    // Генерируем варианты ответа
    generateAnswerChoices();
}

// Сгенерировать варианты ответа
function generateAnswerChoices() {
    const answers = [];
    const correctAnswer = currentQuestion.back; // Правильный ответ
    answers.push(correctAnswer);

    // Добавляем 3 неправильных ответа (дистрактора)
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * flashcardsData.length);
        let wrongAnswer = flashcardsData[randomIndex].back;

        // Убедимся, что неправильный ответ не совпадает с правильным или другими неправильными
        while (wrongAnswer === correctAnswer || answers.includes(wrongAnswer)) {
            randomIndex = Math.floor(Math.random() * flashcardsData.length);
            wrongAnswer = flashcardsData[randomIndex].back;
        }

        answers.push(wrongAnswer);
    }

    // Перемешиваем варианты ответа случайным образом
    shuffleArray(answers);

    // Отображаем варианты ответа на странице
    answersElement.innerHTML = ""; // Очищаем предыдущие варианты
    answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.innerText = answer;
        button.dataset.index = index; // Сохраняем индекс
        button.addEventListener('click', checkAnswer); // Добавляем обработчик
        answersElement.appendChild(button);
    });
}

// Функция перемешивания массива (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Проверка ответа
function checkAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswerIndex = selectedButton.dataset.index;
    const correctAnswer = currentQuestion.back;
    const selectedAnswer = selectedButton.innerText;

    // Отключаем кнопки, чтобы нельзя было ответить несколько раз
    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(button => button.disabled = true);

    if (selectedAnswer === correctAnswer) {
        resultElement.innerText = "Правильно!";
        resultElement.style.color = "green";
        score++;
        scoreElement.innerText = `Счет: ${score}`;

    } else {
        resultElement.innerText = `Неправильно! Правильный ответ: ${correctAnswer}`;
        resultElement.style.color = "red";
    }
}

// Обработчик нажатия на кнопку "Следующий вопрос"
nextQuestionButton.addEventListener('click', () => {
    resultElement.innerText = ""; // Очищаем сообщение о результате
    resultElement.style.color = "";
    getNextQuestion();
});

// --- ЗАПУСК ТЕСТА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ---
startQuiz(); // Запускаем тест сразу