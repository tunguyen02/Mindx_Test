document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const resetButton = document.querySelector(".btn-reset");
    const turnButton = document.querySelector(".btn-turn");
    const btn = document.querySelectorAll(".btn");
    let totalClicks = 0;
    const dices = document.querySelectorAll('.result img');

    let figures = [
        {
            index: 0,
            image: 'image/bau.png',
            percent: 16.6666,
            coin: 0,
        },
        {
            index: 1,
            image: 'image/cua.png',
            percent: 16.6666,
            coin: 0,
        },
        {
            index: 2,
            image: 'image/tom.png',
            percent: 16.6666,
            coin: 0,
        },
        {
            index: 3,
            image: 'image/ca.png',
            percent: 16.6666,
            coin: 0,
        },
        {
            index: 4,
            image: 'image/huou.png',
            percent: 16.6666,
            coin: 0,
        },
        {
            index: 5,
            image: 'image/ga.png',
            percent: 16.6666,
            coin: 0,
        },
    ];


    // Xử lý sự kiện click trên các items
    options.forEach(option => {
        option.addEventListener("click", function () {
            if (totalClicks < 3) {
                const pointElement = option.querySelector("h3");
                let clickCount = parseInt(pointElement.textContent);
                if (clickCount < 3) {
                    clickCount++;
                    pointElement.textContent = clickCount;
                    totalClicks++;
                }
            }
        });
    });

    // Xử lý sự kiện click nút Đặt lại
    function resetButtonClick() {
        totalClicks = 0;
        document.querySelectorAll(".point").forEach(point => {
            point.textContent = "0";
        });
    }

    //Xử lý sự kiện nút quay
    let isTurning = false; //lúc chưa quay
    function startButtonClick() {


        if (totalClicks < 3) {
            return;
        }
        let iterations = 100;
        let interval = setInterval(() => {
            // Random ngẫu nhiên hình ảnh mỗi ô
            dices.forEach((dice) => {
                let randomIndex = Math.floor(Math.random() * figures.length);
                let randomFigure = figures[randomIndex];
                dice.src = randomFigure.image;
            });

            iterations--;

            if (iterations <= 0) {
                clearInterval(interval);
                showFinalResult();
            }
        }, 10);

        // Hàm hiển thị kết quả cuối cùng
        function showFinalResult() {
            let finalResult = [];
            dices.forEach((dice) => {
                let imageSrc = dice.src;
                let figure = figures.find((figure) => figure.image === imageSrc);
                finalResult.push(figure);
            });

            // Hiển thị kết quả cuối cùng
            dices.forEach((dice, index) => {
                dice.src = finalResult[index].image;
            });

        }
        // isTurning = false;
        // resetButton.removeEventListener("click", resetButtonClick);
        // turnButton.removeEventListener("click", startButtonClick);
    }

    resetButton.addEventListener("click", resetButtonClick);
    turnButton.addEventListener("click", startButtonClick);
});
