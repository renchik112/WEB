(function (global) {
    const difficulty = document.getElementById("difficulty");
    const color = document.getElementById("color");
    const menu = document.getElementById("menu");
    const game = document.getElementById("game");
    const scoreField = document.getElementById("score");
    const scoreTable = document.getElementById("scoreTable");
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("#score-template");
    const timerContainer = document.getElementById("time");
    let timer = 0;
    let score = 0;
    let interval;

    const range = {
        x:
            difficulty.value === "Easy"
                ? Math.round(global.innerWidth / 4)
                : difficulty.value === "Medium"
                ? Math.round(global.innerWidth / 2)
                : difficulty.value === "Hard"
                ? global.innerWidth
                : Math.round(global.innerWidth / 3),
        y:
            difficulty.value === "Easy"
                ? Math.round(global.innerHeight / 4)
                : difficulty.value === "Medium"
                ? Math.round(global.innerHeight / 2)
                : difficulty.value === "Hard"
                ? global.innerHeight
                : Math.round(global.innerHeight / 3),
    };

    const start = function () {
        setPlayerPosition(player, generateRandomPosition({ left: 1, top: 1 }));
        player.addEventListener("click", kill);
        if (difficulty.value && color.value) {
            timer =
                difficulty.value === "Easy"
                    ? 50
                    : difficulty.value === "Medium"
                    ? 20
                    : difficulty.value === "Hard"
                    ? 10
                    : 30;
            timerContainer.textContent = timer;
            interval = setInterval(() => {
                timer--;
                timerContainer.textContent = timer;
                timer == -1 && end();
            }, 1000);
            const player = document.getElementById("player");
            menu.style.display = "none";
            scoreTable.style.display = "none";
            game.style.display = "block";
            player.style.display = "block";
            player.style.backgroundColor = color.value;
        }
    };

    const kill = function () {
        addScore();
        setPlayerPosition(this, generateRandomPosition(this.getBoundingClientRect()));
    };

    const addScore = function () {
        score++;
        scoreField.textContent = score;
    };

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }

    function getPlayerSize() {
        switch (difficulty.value) {
            case "Easy":
                return 150;
            case "Medium":
                return 100;
            case "Hard":
                return 50;
        }
    }

    const setPlayerPosition = function (player, [x, y]) {
        player.style.left = `${x}px`;
        player.style.top = `${y}px`;
    };

    const generateRandomPosition = function (currentPosition) {
        return [
            filter(
                getRandomIntInclusive(
                    currentPosition.left - range.x < 0 ? 0 : currentPosition.left - range.x,
                    currentPosition.left + range.x
                ),
                0,
                global.innerWidth
            ),
            filter(
                getRandomIntInclusive(
                    currentPosition.top - range.y < 0 ? 0 : currentPosition.top - range.y,
                    currentPosition.top + range.y
                ),
                0,
                global.innerHeight
            ),
        ];
    };

    function filter(current, left, right) {
        if (current < left) {
            return left;
        } else if (current > right - getPlayerSize()) {
            return right - getPlayerSize();
        } else {
            return current;
        }
    }

    const end = function () {
        if (!alert(`Your score - ${score}`)) {
            menu.style.display = "block";
            scoreTable.style.display = "block";
            game.style.display = "none";
            player.style.display = "none";
            player.removeEventListener("click", addScore, true);
            addScoreToTable(difficulty.value, score);
            score = 0;
            scoreField.textContent = score;
            clearInterval(interval);
        }
    };
    function addScoreToTable(difficulty, score) {
        const clone = template.content.cloneNode(true);
        let th = clone.querySelectorAll("th");
        th[0].textContent = difficulty;
        th[1].textContent = score;
        tbody.appendChild(clone);
    }
    document.getElementById("start").addEventListener("click", start);
})(window);