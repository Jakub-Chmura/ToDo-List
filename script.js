{
    const tasks = [
        
    ];

    const render = () => {
        let htmlString = "";


        for (const task of tasks) {
            htmlString += `
        <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
        <button class="js-done">Zrobione</button>
        ${task.content}
        </li>
        <button class="js-remove">Usuń</button>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        });
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("click", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            document.querySelector(".js-newTask").value = ""; //* ta linijka czyści input po dodaniu zadania

            document.getElementById("taskInput").focus(); //* ustawia focus na inpucie po naciśnięciu buttona

            if (newTaskContent === "") {

                return;
            }

            tasks.push({
                content: newTaskContent,
            })

            render();
        });
    };

    init();
}