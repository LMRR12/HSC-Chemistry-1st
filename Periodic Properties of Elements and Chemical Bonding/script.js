const container =
document.getElementById("questionContainer");

const knowledgeBtn =
document.getElementById("knowledgeBtn");

const understandingBtn =
document.getElementById("understandingBtn");

const count =
document.getElementById("questionCount");

let currentType = "জ্ঞানমূলক";

function render() {

    container.innerHTML = "";

    const list = questions.filter(
        q => q.type === currentType
    );

    count.innerText =
        `মোট প্রশ্ন : ${list.length}`;

    list.forEach((q, index) => {

        container.innerHTML += `

        <div class="questionCard">

            <div class="questionNumber">

                প্রশ্ন ${index + 1}

            </div>

            <div class="question">

                ${q.question}

            </div>

            <div class="answer">

                ${q.answer}

            </div>

        </div>

        `;

    });

}

knowledgeBtn.onclick = function () {

    currentType = "জ্ঞানমূলক";

    knowledgeBtn.classList.add("active");

    understandingBtn.classList.remove("active");

    render();

};

understandingBtn.onclick = function () {

    currentType = "অনুধাবনমূলক";

    understandingBtn.classList.add("active");

    knowledgeBtn.classList.remove("active");

    render();

};

render();