// --- ДАННЫЕ ДЛЯ КАРТОЧЕК ---
const flashcardsData = [
    // --- Законы Ньютона ---
    {
        front: "Первый закон Ньютона",
        back: "Существуют такие системы отсчёта (инерциальные), относительно которых тело сохраняет свою скорость постоянной (или покоится), если на него не действуют другие тела или действие этих тел скомпенсировано.",
        test_variants: [
            "Существуют такие системы отсчёта, где тело ускоряется, даже если на него не действуют силы.",
            "Существуют такие системы отсчёта, где тело сохраняет скорость только при действии внешней силы.",
            "Существуют такие системы отсчёта (неинерциальные), где тело сохраняет постоянное ускорение без внешних воздействий."
        ]
    },
    {
        front: "Второй закон Ньютона.",
        back: "Ускорение тела прямо пропорционально равнодействующей сил, приложенных к телу, и обратно пропорционально его массе. Формула: F = m * a.",
        test_variants: [
            "Ускорение тела обратно пропорционально равнодействующей силе и прямо пропорционально массе тела. Формула: a = F / m.",
            "Ускорение тела прямо пропорционально его массе и обратно пропорционально приложенной силе. Формула: F = a / m.",
            "Ускорение тела определяется произведением массы на равнодействующую силу. Формула: a = m * F."
        ]
    },
    {
        front: "Третий закон Ньютона.",
        back: "Силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению. Формула: F₁₂ = -F₂₁.",
        test_variants: [
            "Силы, с которыми тела действуют друг на друга, равны и направлены в одну сторону. Формула: F₁₂ = F₂₁.",
            "Силы взаимодействия между телами зависят от их масс и направлены произвольно. Формула: F₁₂ ≠ -F₂₁.",
            "При взаимодействии двух тел одна сила всегда больше другой, но направления противоположны. Формула: F₁₂ > -F₂₁."
        ]
    },

    // --- Линзы и Зеркала (Оптика) ---
    {
        front: "Формула тонкой собирающей линзы?",
        back: "1/F = 1/d + 1/f (F > 0 - фокусное расстояние, d - расстояние до объекта, f - расстояние до изображения). Действительный фокус.",
        test_variants: [
            "1/F = d + f (F > 0 - фокусное расстояние, d - расстояние до линзы, f - расстояние до объекта). Мнимый фокус.",
            "F = 1/d + 1/f (F > 0 - фокусное расстояние, d - расстояние до фокуса, f - расстояние до изображения).",
            "1/F = 1/f - 1/d (F > 0 - фокусное расстояние, d - расстояние до изображения, f - расстояние до объекта). Действительный фокус."
        ]
    },
    {
        front: "Формула тонкой рассеивающей линзы?",
        back: "1/F = 1/d + 1/f (F < 0 - фокусное расстояние, d - расстояние до объекта, f - расстояние до мнимого изображения, f < 0). Мнимый фокус.",
        test_variants: [
            "1/F = d - f (F < 0 - фокусное расстояние, d - расстояние до изображения, f - расстояние до объекта). Мнимый фокус.",
            "F = 1/d - 1/f (F < 0 - фокусное расстояние, d - расстояние до мнимого изображения, f - расстояние до линзы).",
            "1/F = 1/f - 1/d (F > 0 - фокусное расстояние, d - расстояние до объекта, f - расстояние до изображения). Действительный фокус."
        ]
    },
    {
        front: "Что такое оптическая сила линзы (D)?",
        back: "Величина, обратная фокусному расстоянию линзы (D = 1/F). Измеряется в диоптриях (дптр), если F в метрах.",
        test_variants: [
            "Величина, равная квадрату фокусного расстояния линзы (D = F²). Измеряется в метрах.",
            "Величина, обратно пропорциональная квадрату фокусного расстояния линзы (D = 1/F²). Измеряется в сантиметрах.",
            "Величина, равная произведению фокусного расстояния линзы на её диаметр (D = F * d). Измеряется в диоптриях."
        ]
    },
    {
        front: "Формула линейного увеличения линзы (Г)?",
        back: "Г = |f| / d = H / h (где H - высота изображения, h - высота предмета).",
        test_variants: [
            "Г = d / |f| = H / h (где H - высота изображения, h - высота предмета).",
            "Г = h / H = d / |f| (где H - высота предмета, h - высота изображения).",
            "Г = (H * h) / (d * |f|) (где H - высота изображения, h - высота предмета)."
        ]
    },
    {
        front: "Формула сферического зеркала (вогнутого/выпуклого)?",
        back: "1/F = 1/d + 1/f (F = R/2 - фокусное расстояние, R - радиус кривизны). Знаки F, d, f зависят от типа зеркала и положения объекта/изображения.",
        test_variants: [
            "F = R/2 (F - фокусное расстояние, R - радиус кривизны). Знаки F, d, f не зависят от типа зеркала.",
            "1/F = d + f (F = R/2 - фокусное расстояние, R - радиус кривизны).",
            "F = 2R (F - фокусное расстояние, R - радиус кривизны). Знаки F, d, f одинаковы для всех зеркал."
        ]
    },
    {
        front: "Характеристики изображения в плоском зеркале?",
        back: "Мнимое, прямое (неперевернутое), равное по размеру предмету и находится на том же расстоянии за зеркалом, что и предмет перед ним.",
        test_variants: [
            "Действительное, перевернутое, увеличенное изображение, расположенное за зеркалом на двойном расстоянии.",
            "Мнимое, перевернутое, уменьшенное изображение, находящееся ближе к зеркалу, чем предмет.",
            "Действительное, прямое, увеличенное изображение, расположенное перед зеркалом."
        ]
    },

    // --- Электрический Ток ---
    {
        front: "Закон Ома для участка цепи?",
        back: "Сила тока (I) на участке цепи прямо пропорциональна напряжению (U) на концах этого участка и обратно пропорциональна его сопротивлению (R). Формула: I = U / R.",
        test_variants: [
            "Сила тока (I) прямо пропорциональна сопротивлению участка и обратно пропорциональна напряжению. Формула: I = R / U.",
            "Сила тока (I) равна произведению напряжения на сопротивление. Формула: I = U * R.",
            "Сила тока (I) обратно пропорциональна квадрату напряжения. Формула: I = R² / U."
        ]
    },
    {
        front: "Единица измерения силы тока?",
        back: "Ампер (А)",
        test_variants: [
            "Ом (Ω)",
            "Вольт (В)",
            "Ватт (Вт)"
        ]
    },
    {
        front: "Единица измерения напряжения?",
        back: "Вольт (В)",
        test_variants: [
            "Ампер (А)",
            "Ом (Ω)",
            "Ньютон (Н)"
        ]
    },
    {
        front: "Единица измерения сопротивления?",
        back: "Ом (Ω)",
        test_variants: [
            "Вольт (В)",
            "Ампер (А)",
            "Джоуль (Дж)"
        ]
    },
    {
        front: "Как зависит сопротивление проводника от его размеров и материала?",
        back: "R = ρ * (L / S) (где ρ - удельное сопротивление материала, L - длина проводника, S - площадь поперечного сечения).",
        test_variants: [
            "R = ρ * (S / L) (где ρ - удельное сопротивление материала, L - длина проводника, S - площадь поперечного сечения).",
            "R = (L * S) / ρ (где ρ - удельное сопротивление материала, L - длина проводника, S - площадь поперечного сечения).",
            "R = (ρ * S) / L (где ρ - удельное сопротивление материала, L - длина проводника, S - площадь поперечного сечения)."
        ]
    },
    {
        front: "Формулы для расчета мощности электрического тока (P)?",
        back: "P = U * I = I² * R = U² / R",
        test_variants: [
            "P = U / I = R² / U = I / R",
            "P = U * R = I² / U = R / I",
            "P = U² * R = I / U = R² * I"
        ]
    },
    {
        front: "Закон Джоуля-Ленца (Работа тока, Количество теплоты)?",
        back: "Количество теплоты (Q), выделяемое проводником с током, равно произведению квадрата силы тока, сопротивления проводника и времени прохождения тока. Q = I² * R * t = U * I * t = (U² / R) * t. Единица - Джоуль (Дж).",
        test_variants: [
            "Количество теплоты (Q), выделяемое проводником, равно произведению сопротивления на время и на напряжение. Q = R * t * U. Единица - Ватт (Вт).",
            "Количество теплоты (Q) определяется как произведение силы тока и сопротивления без учета времени. Q = I * R. Единица - Джоуль (Дж).",
            "Количество теплоты (Q) вычисляется как произведение напряжения и сопротивления проводника за единицу времени. Q = U * R / t. Единица - Джоуль (Дж)."
        ]
    },

    // --- Электрическая цепь ---
    {
        front: "Назовите основные элементы простой электрической цепи.",
        back: "Источник тока (ЭДС), потребитель/нагрузка (резистор, лампа), соединительные провода, ключ (выключатель).",
        test_variants: [
            "Источник тока, аккумулятор, предохранитель, переключатель, амперметр.",
            "Источник света, выключатель, аккумулятор, резистор, реостат.",
            "Источник напряжения, амперметр, реостат, диод, соединительные провода."
        ]
    },
    {
        front: "Последовательное соединение проводников: Общее сопротивление?",
        back: "Общее сопротивление равно сумме сопротивлений отдельных проводников: Rобщ = R₁ + R₂ + ... + R𝘯.",
        test_variants: [
            "Общее сопротивление равно произведению сопротивлений: Rобщ = R₁ * R₂ * ... * R𝘯.",
            "Общее сопротивление равно разности сопротивлений: Rобщ = R₁ - R₂ - ... - R𝘯.",
            "Общее сопротивление определяется как среднее арифметическое сопротивлений: Rобщ = (R₁ + R₂ + ... + R𝘯) / n."
        ]
    },
    {
        front: "Последовательное соединение: Сила тока и Напряжение?",
        back: "Сила тока одинакова во всех проводниках (Iобщ = I₁ = I₂). Общее напряжение равно сумме напряжений на каждом (Uобщ = U₁ + U₂).",
        test_variants: [
            "Сила тока делится между всеми проводниками, а напряжение на каждом одинаково (Uобщ = U₁ = U₂).",
            "Сила тока суммируется на каждом участке, напряжение одинаково на всех проводниках.",
            "Сила тока и напряжение всегда одинаковы на всех проводниках независимо от соединения."
        ]
    },
    {
        front: "Параллельное соединение проводников: Общее сопротивление?",
        back: "Величина, обратная общему сопротивлению, равна сумме величин, обратных сопротивлениям отдельных проводников: 1/Rобщ = 1/R₁ + 1/R₂ + ... + 1/R𝘯.",
        test_variants: [
            "Общее сопротивление равно сумме сопротивлений всех ветвей: Rобщ = R₁ + R₂ + ... + R𝘯.",
            "Общее сопротивление равно разности сопротивлений всех ветвей: Rобщ = R₁ - R₂ - ... - R𝘯.",
            "Общее сопротивление определяется произведением сопротивлений всех ветвей: Rобщ = R₁ * R₂ * ... * R𝘯."
        ]
    },
    {
        front: "Параллельное соединение: Сила тока и Напряжение?",
        back: "Напряжение одинаково на всех параллельно соединенных участках (Uобщ = U₁ = U₂). Общая сила тока равна сумме токов в ветвях (Iобщ = I₁ + I₂).",
        test_variants: [
            "Сила тока одинакова во всех ветвях, а напряжение делится пропорционально сопротивлениям.",
            "Сила тока одинакова и напряжение складывается по всем ветвям.",
            "И сила тока, и напряжение одинаковы на всех параллельно соединённых участках."
        ]
    },
    {
        front: "Закон Ома для полной цепи?",
        back: "Сила тока в полной цепи равна ЭДС источника (ε), деленной на сумму внешнего сопротивления цепи (R) и внутреннего сопротивления источника (r). I = ε / (R + r).",
        test_variants: [
            "Сила тока в полной цепи равна ЭДС источника (ε), умноженной на сумму сопротивлений цепи и источника. I = ε * (R + r).",
            "Сила тока в полной цепи равна разности ЭДС источника и сопротивлений: I = ε - (R + r).",
            "Сила тока в полной цепи равна ЭДС, делённой только на внутреннее сопротивление источника: I = ε / r."
        ]
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

// * Другие переменные
const colors = []; // цвета для карточек (рандомная генерация)
for (let i = 0; i < flashcardsData.length; i++) {
    const hue = Math.round((360 / flashcardsData.length) * i);  // равномерно по цветовому кругу
    const saturation = 60 + Math.random() * 10; // насыщенность 60–70%
    const lightness = 40 + Math.random() * 10;  // яркость 40–50% — мягкие, но не тёмные
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    colors.push(hsl);
}

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

        frontElement.style.backgroundColor = colors[index]; // Цвет фона карточки
        backElement.style.backgroundColor = colors[colors.length-index]; // Цвет фона карточки

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
        let wrongAnswer = currentQuestion.test_variants[i]; // Берем неправильный ответ из массива test_variants

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

// Функция перемешивания массива
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

    // Подсвечиваем правильный и неправильный ответ

    if (selectedAnswer === correctAnswer) {
        resultElement.innerText = "Правильно!";
        resultElement.style.color = "green";
        selectedButton.style.backgroundColor = " #2ecc71"
        score++;
        scoreElement.innerText = `Счет: ${score}/${MAX_QUESTIONS}`;

    } else {
        resultElement.innerText = `Неправильно! Правильный ответ: ${correctAnswer}`;
        resultElement.style.color = "red";

        answerButtons.forEach(button => {
            if (button.innerText === correctAnswer) {
                button.style.backgroundColor = " #2ecc71"
            } else if (button.innerText === selectedAnswer) {
                button.style.border = "red 4px dashed"
            }
        });
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