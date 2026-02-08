// 1. تقسيم الكويزات لمجموعات (كل المواد في مكان واحد)
const allData = {
    "ds": [
        { title: "DS Quiz 1", questions: "10 q", link: "../quizzes/ds_quiz1.html" },
        { title: "DS Quiz 2", questions: "10 q", link: "../quizzes/ds_quiz2.html" }
    ],
    "ai": [
        { title: "AI Quiz 1", questions: "10 q", link: "../quizzes/ai_quiz1.html" },
        { title: "AI Quiz 2", questions: "10 q", link: "../quizzes/ai_quiz2.html" }
    ],
    "prob": [
        { title: "Prob Quiz 1", questions: "10 q", link: "../quizzes/prob_quiz1.html" },
        { title: "Prob Quiz 2", questions: "10 q", link: "../quizzes/prob_quiz2.html" }
    ],
    "discrete": [
        { title: "Discrete Quiz 1", questions: "10 q", link: "../quizzes/discrete_quiz1.html" }
    ],
    "prog2": [
        { title: "quiz 1 ", questions: "10 q", link: "../quizzes/prog2_quiz1.html" },
        { title: "quiz 2", questions: "10 q", link: "../quizzes/prog2_quiz2.html" }
    ],
    // 💡 تم إضافة مادة الابتكار هنا
    "innovation": [
        { title: "Innovation Quiz 1", questions: "10 q", link: "../quizzes/innovation_quiz1.html" },
        { title: "Entrepreneurship Quiz 1", questions: "10 q", link: "../quizzes/innovation_quiz2.html" }
    ]
};

const list = document.getElementById('quiz-list');

if (list) {
    // 2. تحديد المادة بناءً على اسم الفولدر في الرابط
    let currentSubject = "ds"; // الافتراضي
    
    if (window.location.pathname.includes("ai")) {
        currentSubject = "ai";
    } 
    else if (window.location.pathname.includes("prob")) {
        currentSubject = "prob";
    }
    else if (window.location.pathname.includes("discrete")) {
        currentSubject = "discrete";
    }
    else if (window.location.pathname.includes("prog2")) {
        currentSubject = "prog2";
    }
    // 💡 تم إضافة الشرط لمادة الابتكار هنا
    else if (window.location.pathname.includes("innovation")) {
        currentSubject = "innovation";
    }

    // 3. جلب بيانات المادة المختارة وعرضها
    const selectedQuizzes = allData[currentSubject];

    if (selectedQuizzes) {
        selectedQuizzes.forEach(q => {
            list.innerHTML += `
                <div class="quiz-card">
                    <h3>${q.title}</h3>
                    <p>${q.questions}</p>
                    <a href="${q.link}" class="btn-start">start quiz</a>
                </div>
            `;
        });
    }
}

// 4. كود الفوتر (اسمك) في نهاية كل صفحة
const footer = document.createElement('footer');
footer.style.cssText = "margin-top: 50px; padding: 20px 0; text-align: center; color: #6c757d; font-weight: bold; border-top: 1px solid #dee2e6; width: 60%; margin-left: auto; margin-right: auto;";
footer.innerHTML = `Developed by: Eng/ Moataz Hassien`;
document.body.appendChild(footer);
// كود ذكي لوضع اللوجو في كل الصفحات مهما كان مكانها
(function() {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    
    // الحل السحري: بندور على ملف logo.png بالنسبة لمكان ملف main.js نفسه
    // ده بيضمن إن اللوجو يظهر سواء كنت في الصفحة الرئيسية أو جوه فولدر مادة
    const isRoot = !window.location.pathname.includes('/ds/') && 
                   !window.location.pathname.includes('/ai/') && 
                   !window.location.pathname.includes('/prob/') && 
                   !window.location.pathname.includes('/discrete/') && 
                   !window.location.pathname.includes('/prog2/') && 
                   !window.location.pathname.includes('/innovation/');

    favicon.href = isRoot ? 'logo.png' : '../logo.png';
    
    document.head.appendChild(favicon);
})();