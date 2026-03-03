// ===== МАССИВ ПРОЕКТОВ =====
let projects = [
    {
        id: 1,
        name: "Проект: Развитие внутреннего туризма. Провинциальная Россия",
        subject: "chemistry",
        description: "Индивидуальный проект по географии на тему Развитие внутреннего туризма",
        rating: "5.0",
        tags: ["ГЕОРГРАФИЯ"],
        link: "https://obuchonok.ru/node/12274",
        category: "chemistry"
    },
];

// ===== ПЕРЕМЕННЫЕ ТАЙМЕРА (15 секунд) =====
let timer;
let timeLeft = 15; // Изменено с 20 на 15 секунд
let isRunning = false;
let currentSlide = 0;
const totalSlides = 5;
let isPaused = false;

// ===== СЛАЙДЫ ДЛЯ ТАЙМЕРА (с длинными текстами) =====
const slides = [
    {
        "title": "Слайд 1: Введение",
        "image": "fas fa-seedling",
        "text": "Добрый день! Меня зовут [Ваше имя], я ученик 9А класса. Я представляю исследовательский проект по выращиванию авокадо из косточки в домашних условиях. Работа выполнена под руководством [ФИО учителя]."
    },
    {
        "title": "Слайд 2: Цель и задачи",
        "image": "fas fa-bullseye",
        "text": "Цель проекта: изучить и освоить технологию выращивания авокадо дома, определив оптимальные условия для его роста. Для этого были поставлены задачи: изучить биологию растения, сравнить методы проращивания, провести эксперимент и дать практические рекомендации."
    },
    {
        "title": "Слайд 3: Методы и эксперимент",
        "image": "fas fa-flask",
        "text": "Использовались теоретический анализ и практический эксперимент. Три косточки авокадо сорта «Хасс» проращивались разными способами (в воде, грунте и вате) в течение двух месяцев с ежедневными наблюдениями и замерами."
    },
    {
        "title": "Слайд 4: Результаты",
        "image": "fas fa-chart-line",
        "text": "Эксперимент показал, что самый быстрый и эффективный метод — проращивание в воде (рост за 21 день, корни до 8 см). Грунт и вата дали более медленные результаты. Ключевые условия успеха: температура 22–25°C и рассеянное освещение."
    },
    {
        "title": "Слайд 5: Выводы и перспектива",
        "image": "fas fa-check-circle",
        "text": "Вывод: технология эффективна, лучший метод — проращивание в воде. Рекомендации: поддерживать температуру и свет, пересаживать при корнях 5–7 см. Перспектива — продолжить наблюдение за развитием растения. Спасибо за внимание!"
    }
]

// ===== БАЗА ЗНАНИЙ ИИ КЛАУД =====
const aiKnowledge = {
    "структура": {
        question: "Какая должна быть структура проекта?",
        answer: "Идеальная структура проекта для УИПД в 9 классе:\n\n1. Титульный лист\n2. Оглавление\n3. Введение (1.5-2 стр.)\n   - Актуальность\n   - Цель\n   - Задачи (4-6 пунктов)\n   - Объект и предмет\n   - Методы\n   - Гипотеза\n   - Практическая значимость\n\n4. Основная часть (10-12 стр.)\n   - Глава 1: Теоретическая часть\n   - Глава 2: Практическая часть\n\n5. Заключение (1-1.5 стр.)\n   - Выводы по цели и задачам\n   - Практическая значимость\n   - Перспективы\n\n6. Список литературы (10-15 источников)\n7. Приложения"
    },
    "введение": {
        question: "Как написать введение?",
        answer: "Введение - самая важная часть! Должно содержать:\n\n1. АКТУАЛЬНОСТЬ: Почему эта тема важна сейчас? (2-3 аргумента)\n2. ЦЕЛЬ: Что хотите достичь? (Начинается с глагола: изучить, разработать, определить...)\n3. ЗАДАЧИ: Конкретные шаги для достижения цели (4-6 пунктов)\n4. ОБЪЕКТ И ПРЕДМЕТ: Объект - что исследуете, предмет - конкретный аспект\n5. МЕТОДЫ: Какие методы используете? (теоретические, эмпирические)\n6. ГИПОТЕЗА: Ваше предположение о результатах\n7. ПРАКТИЧЕСКАЯ ЗНАЧИМОСТЬ: Где можно использовать результаты?"
    },
    "защита": {
        question: "Как подготовиться к защите?",
        answer: "Советы от КЛАУД для успешной защиты:\n\n1. Презентация: 10-12 слайдов максимум\n2. Текст: 7-10 минут выступления\n3. Структура выступления:\n   - Приветствие (30 сек)\n   - Актуальность и цель (1.5 мин)\n   - Методы (1 мин)\n   - Результаты (3 мин)\n   - Выводы (1.5 мин)\n   - Благодарность (30 сек)\n\n4. Внешний вид: деловой стиль\n5. Репетиция: минимум 3 раза с таймером\n6. Подготовка к вопросам: продумайте ответы на возможные вопросы\n7. Уверенность: вы знаете свою работу лучше всех!"
    },
    "таймер": {
        question: "Как использовать тренажер речи?",
        answer: "Тренажер КЛАУД поможет вам:\n\n1. Уложиться в 15 секунд на каждый слайд\n2. Научиться говорить четко и по делу\n3. Тренировать паузы между слайдами (5 секунд)\n\nИнструкция:\n1. Нажмите 'Старт'\n2. Говорите текст слайда\n3. Старайтесь уложиться в 15 секунд\n4. После паузы переходите к следующему слайду\n5. Практикуйтесь до идеального результата!\n\nСовет: Запишите свою речь на диктофон и проанализируйте."
    },
    "уипд": {
        question: "Что такое УИПД?",
        answer: "УИПД - Учебно-Исследовательская Проектная Деятельность\n\nЭто специальная форма учебной работы, где ученик:\n1. Самостоятельно выбирает тему\n2. Проводит исследование или создает проект\n3. Оформляет работу по определенным требованиям\n4. Защищает перед комиссией\n\nДля 9 класса требования:\n- Объем: 15-20 страниц\n- Сроки: 2-3 месяца\n- Оценка: по 20-балльной системе\n- Защита: 7-10 минут\n\nЦель УИПД: развить исследовательские навыки и подготовить к будущей учебной деятельности."
    },
    "оценка": {
        question: "Как оценивается проект?",
        answer: "Проект оценивается по 20-балльной системе:\n\n1. Актуальность темы (0-3 балла)\n2. Глубина исследования (0-4 балла)\n3. Практическая значимость (0-3 балла)\n4. Оформление работы (0-3 балла)\n5. Качество презентации (0-4 балла)\n6. Ответы на вопросы (0-3 балла)\n\nОценки:\n- 18-20 баллов = '5' (Отлично)\n- 14-17 баллов = '4' (Хорошо)\n- 10-13 баллов = '3' (Удовлетворительно)\n- Менее 10 = '2' (Неудовлетворительно)\n\nСовет от КЛАУД: Стремитесь набрать минимум 16 баллов!"
    }
};

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initProjects();
    initTimer();
    initProgressTracker();
    initAIAssistant();
    initEventListeners();
    
    showNotification('Привет! Я КЛАУД - твой ИИ-помощник для учебных проектов. Готов помочь!');
});

// ===== ТЕМА =====
function initTheme() {
    const themeBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('cloudTheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('cloudTheme', isDark ? 'dark' : 'light');
        
        showNotification(`Режим: ${isDark ? 'Ночной' : 'Дневной'} | КЛАУД адаптирован`);
    });
}

// ===== НАВИГАЦИЯ =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const navIndicator = document.querySelector('.nav-indicator');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (navIndicator) {
                const linkRect = this.getBoundingClientRect();
                const navRect = document.querySelector('.main-nav').getBoundingClientRect();
                navIndicator.style.left = `${linkRect.left - navRect.left}px`;
                navIndicator.style.width = `${linkRect.width}px`;
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
                
                if (navIndicator) {
                    const linkRect = link.getBoundingClientRect();
                    const navRect = document.querySelector('.main-nav').getBoundingClientRect();
                    navIndicator.style.left = `${linkRect.left - navRect.left}px`;
                    navIndicator.style.width = `${linkRect.width}px`;
                }
            }
        });
    });
    
    document.getElementById('startProjectBtn').addEventListener('click', function() {
        document.querySelector('#visualizer').scrollIntoView({ behavior: 'smooth' });
        showNotification('Отлично! Начнем с визуализатора проекта. КЛАУД с тобой!');
    });
}

// ===== ПРОЕКТЫ =====
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    displayProjects('all');
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            displayProjects(filter);
        });
    });
    
    document.getElementById('addProjectBtn').addEventListener('click', function() {
        const name = document.getElementById('projectName').value.trim();
        const category = document.getElementById('projectCategory').value;
        const link = document.getElementById('projectLink').value.trim();
        
        if (!name) {
            showNotification('Введите название проекта!', 'warning');
            return;
        }
        
        const newProject = {
            id: projects.length + 1,
            name: name,
            subject: category,
            description: "Проект добавлен пользователем через систему КЛАУД",
            rating: "Новый",
            tags: ["добавлен", category],
            link: link || "#",
            category: category
        };
        
        projects.push(newProject);
        displayProjects('all');
        
        document.getElementById('projectName').value = '';
        document.getElementById('projectLink').value = '';
        
        showNotification('Проект добавлен в базу КЛАУД!');
    });
}

function displayProjects(filter) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <span class="project-subject">${getSubjectName(project.subject)}</span>
                <span class="project-rating">★ ${project.rating}</span>
            </div>
            <h4>${project.name}</h4>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i> Посмотреть проект
            </a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

function getSubjectName(subject) {
    const subjects = {
        'biology': 'Биология',
        'chemistry': 'Химия',
        'ecology': 'Экология',
        'technology': 'Технологии',
        'social': 'Социальные',
        'physics': 'Физика',
        'other': 'Другое'
    };
    return subjects[subject] || subject;
}

// ===== ТАЙМЕР (15 секунд) =====
function initTimer() {
    const startBtn = document.getElementById('startTimer');
    const pauseBtn = document.getElementById('pauseTimer');
    const resetBtn = document.getElementById('resetTimer');
    const countdown = document.getElementById('countdown');
    const timeCircle = document.querySelector('.time-circle');
    
    function updateTimer() {
        if (isPaused) return;
        
        countdown.textContent = timeLeft;
        
        const percentage = ((15 - timeLeft) / 15) * 100; // 15 секунд
        if (timeCircle) {
            timeCircle.style.background = `conic-gradient(var(--ai-color) ${percentage}%, var(--border-color) 0%)`;
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            
            setTimeout(() => {
                nextSlide();
                timeLeft = 15; // Сброс на 15 секунд
                updateTimer();
                
                if (currentSlide < totalSlides - 1) {
                    startTimer();
                } else {
                    showNotification('Презентация завершена! Отличная работа! КЛАУД гордится тобой!');
                    startBtn.innerHTML = '<i class="fas fa-play"></i> Начать заново';
                }
            }, 5000);
        } else {
            timeLeft--;
        }
    }
    
    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            isPaused = false;
            timer = setInterval(updateTimer, 1000);
            startBtn.innerHTML = '<i class="fas fa-play"></i> Идет...';
            showNotification('Таймер запущен! Говорите четко. У вас 15 секунд на слайд.');
        }
    }
    
    function pauseTimer() {
        if (isRunning) {
            isPaused = !isPaused;
            if (isPaused) {
                pauseBtn.innerHTML = '<i class="fas fa-play"></i> Продолжить';
                showNotification('Таймер на паузе');
            } else {
                pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Пауза';
                showNotification('Таймер продолжен');
            }
        }
    }
    
    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        isPaused = false;
        timeLeft = 15; // Сброс на 15 секунд
        currentSlide = 0;
        updateTimer();
        updateSlide();
        startBtn.innerHTML = '<i class="fas fa-play"></i> Старт';
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Пауза';
        showNotification('Таймер сброшен. Готов к новой тренировке!');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }
    
    function updateSlide() {
        const slideTitle = document.getElementById('slideTitle');
        const slideCounter = document.getElementById('slideCounter');
        const slideImage = document.getElementById('slideImage');
        const slideText = document.getElementById('slideText');
        
        if (slideTitle) slideTitle.textContent = slides[currentSlide].title;
        if (slideCounter) slideCounter.textContent = `${currentSlide + 1}/${totalSlides}`;
        if (slideImage) {
            slideImage.innerHTML = `
                <i class="${slides[currentSlide].image}"></i>
                <span>Изображение слайда</span>
            `;
        }
        if (slideText) {
            slideText.innerHTML = `
                <h4>${slides[currentSlide].title.split(': ')[1]}</h4>
                <p>${slides[currentSlide].text}</p>
                <p class="speech-tip"><i class="fas fa-lightbulb"></i> <strong>Совет от КЛАУД:</strong> Старайтесь уложиться в 15 секунд! Говорите четко и уверенно.</p>
            `;
        }
    }
    
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    
    updateSlide();
}

// ===== ПРОГРЕСС =====
function initProgressTracker() {
    const checkboxes = document.querySelectorAll('.step-checkbox input[type="checkbox"]');
    const saveBtn = document.getElementById('saveProgressBtn');
    const resetBtn = document.getElementById('resetProgressBtn');
    const aiAdviceBtn = document.getElementById('aiAdviceBtn');
    const progressCircle = document.getElementById('progressCircle');
    
    const savedProgress = localStorage.getItem('cloudProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = progress[index] || false;
            updateStepStatus(checkbox);
        });
        updateProgress();
    }
    
    updateDaysLeft();
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateStepStatus(this);
            updateProgress();
            saveProgress();
        });
    });
    
    saveBtn.addEventListener('click', function() {
        saveProgress();
        showNotification('Прогресс сохранен в памяти КЛАУД!');
    });
    
    resetBtn.addEventListener('click', function() {
        if (confirm('КЛАУД: Вы уверены, что хотите сбросить весь прогресс?')) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                updateStepStatus(checkbox);
            });
            updateProgress();
            saveProgress();
            showNotification('Прогресс сброшен. Начинаем заново!');
        }
    });
    
    aiAdviceBtn.addEventListener('click', function() {
        const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
        const total = checkboxes.length;
        
        let advice = "";
        if (completed === 0) {
            advice = "Начните с выбора темы! Выберите то, что вам действительно интересно. Посоветуйтесь с учителем.";
        } else if (completed <= 2) {
            advice = "Отлично! Вы начали работу. Теперь сформулируйте четкую цель и задачи. Помните: цель должна быть конкретной!";
        } else if (completed <= 4) {
            advice = "Хороший прогресс! Не забывайте вести дневник наблюдений и собирать данные систематически.";
        } else if (completed <= 6) {
            advice = "Почти готово! Уделите время оформлению работы и подготовке презентации. Репетируйте защиту!";
        } else {
            advice = "Поздравляю! Вы полностью готовы. Уверенно защищайте проект! Вы знаете свою работу лучше всех.";
        }
        
        showNotification(`Совет от КЛАУД: ${advice}`);
    });
}

function updateStepStatus(checkbox) {
    const stepItem = checkbox.closest('.step-item');
    const statusElement = stepItem.querySelector('.step-status');
    
    if (checkbox.checked) {
        statusElement.textContent = 'Выполнено';
        statusElement.style.background = '#d4edda';
        statusElement.style.color = '#155724';
    } else {
        statusElement.textContent = 'Не начато';
        statusElement.style.background = '#fff3cd';
        statusElement.style.color = '#856404';
    }
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.step-checkbox input[type="checkbox"]');
    const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
    const total = checkboxes.length;
    const percentage = Math.round((completed / total) * 100);
    
    const progressCircle = document.getElementById('progressCircle');
    if (progressCircle) {
        const circumference = 2 * Math.PI * 90;
        const offset = circumference - (percentage / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    document.getElementById('progressPercent').textContent = `${percentage}%`;
    document.getElementById('completedStages').textContent = `${completed}/${total}`;
    
    const gradeElement = document.getElementById('predictedGrade');
    if (percentage >= 90) {
        gradeElement.textContent = '5 (Отлично)';
        gradeElement.style.color = '#27ae60';
    } else if (percentage >= 70) {
        gradeElement.textContent = '4 (Хорошо)';
        gradeElement.style.color = '#f39c12';
    } else if (percentage >= 50) {
        gradeElement.textContent = '3 (Удовлетворительно)';
        gradeElement.style.color = '#e74c3c';
    } else {
        gradeElement.textContent = 'Нужно работать';
        gradeElement.style.color = '#7f8c8d';
    }
    
    document.getElementById('aiHelp').textContent = percentage >= 50 ? 'Готов помочь' : 'Активен';
}

function saveProgress() {
    const checkboxes = document.querySelectorAll('.step-checkbox input[type="checkbox"]');
    const progress = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem('cloudProgress', JSON.stringify(progress));
}

function updateDaysLeft() {
    const today = new Date();
    const defenseDate = new Date(today);
    defenseDate.setDate(today.getDate() + 30);
    
    const daysLeft = Math.ceil((defenseDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById('daysLeft').textContent = daysLeft;
}

// ===== ИИ-ПОМОЩНИК =====
function initAIAssistant() {
    const chatMessages = document.getElementById('chatMessages');
    const sendBtn = document.getElementById('sendMessage');
    const aiInput = document.getElementById('aiInput');
    const commandBtns = document.querySelectorAll('.command-btn');
    
    function addMessage(text, isAI = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isAI ? 'ai' : 'user'}`;
        
        if (isAI) {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    ${text.replace(/\n/g, '<br>')}
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function processCommand(command) {
        if (aiKnowledge[command]) {
            addMessage(`<strong>${aiKnowledge[command].question}</strong><br><br>${aiKnowledge[command].answer}`);
        } else {
            addMessage("КЛАУД: Я не понял ваш запрос. Попробуйте использовать одну из быстрых команд или задайте вопрос иначе.");
        }
    }
    
    commandBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const command = this.dataset.command;
            processCommand(command);
        });
    });
    
    sendBtn.addEventListener('click', function() {
        const message = aiInput.value.trim();
        if (!message) return;
        
        aiInput.value = '';
        
        let response = "КЛАУД: Я обрабатываю ваш запрос...\n\n";
        
        if (message.toLowerCase().includes('структур')) {
            response += aiKnowledge['структура'].answer;
        } else if (message.toLowerCase().includes('введен')) {
            response += aiKnowledge['введение'].answer;
        } else if (message.toLowerCase().includes('защит')) {
            response += aiKnowledge['защита'].answer;
        } else if (message.toLowerCase().includes('таймер') || message.toLowerCase().includes('тренажер')) {
            response += aiKnowledge['таймер'].answer;
        } else if (message.toLowerCase().includes('уипд')) {
            response += aiKnowledge['уипд'].answer;
        } else if (message.toLowerCase().includes('оценк')) {
            response += aiKnowledge['оценка'].answer;
        } else if (message.toLowerCase().includes('привет') || message.toLowerCase().includes('здравств')) {
            response = "Привет! Я КЛАУД - ваш ИИ-помощник для учебных проектов. Чем могу помочь?";
        } else if (message.toLowerCase().includes('спасибо') || message.toLowerCase().includes('благодар')) {
            response = "Всегда рад помочь! Удачи в подготовке проекта!";
        } else {
            response = "КЛАУД: Я специализируюсь на помощи с учебными проектами. Вы можете спросить меня о:\n- Структуре проекта\n- Написании введения\n- Подготовке к защите\n- Использовании тренажера речи\n- Что такое УИПД\n- Критериях оценки\n\nИли используйте быстрые команды ниже!";
        }
        
        addMessage(response);
    });
    
    aiInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
}

// ===== ОБЩИЕ ФУНКЦИИ =====
function initEventListeners() {
    document.getElementById('copyLinkBtn').addEventListener('click', function() {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                showNotification('Ссылка на КЛАУД скопирована! Поделитесь с одноклассниками.');
            })
            .catch(err => {
                showNotification('Не удалось скопировать ссылку', 'error');
            });
    });
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notificationText');
    
    if (!notification || !text) return;
    
    text.textContent = message;
    
    notification.style.background = type === 'error' ? '#f44336' : 
                                  type === 'warning' ? '#ff9800' : 
                                  'var(--ai-color)';
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

setInterval(updateDaysLeft, 24 * 60 * 60 * 1000);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(el => {
    observer.observe(el);
});