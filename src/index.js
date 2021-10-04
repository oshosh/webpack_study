const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const { getCircleArea, getSquareArea } = require("./mathUtil");
const { logFigureError, logInput, logResult } = require("./log");

rl.question(
    "넓이를 구하고자 하는 도형의 종류를 입력해주세요. (정사각형, 원) : ",
    (figure) => {
        console.log(`선택된 도형 ${figure}`);

        switch (figure) {
            case "정사각형":
                rl.question("변의 길이를 입력해주세요 :", (input) => {
                    console.log(logInput(input));
                    console.log(logResult(figure, getSquareArea(input)));
                    rl.close();
                });
                break;
            case "원":
                rl.question("반지름의 길이를 입력해주세요 : ", (input) => {
                    console.log(logInput(input));
                    console.log(logResult(figure, getCircleArea(input)));
                    rl.close();
                });
                break;
            default:
                console.log(logFigureError);
                rl.close();
        }
    }
);


//output 설정
// 번들파일 이름과 번들파일이 생성되는 파일 경로 설정
// 파일이 생성되는 경로이기 때문에 절대 경로로 설정해야함
// __dirname , path module
// __dirname: 이 변수를 사용하고 있는 모듈의 절대 경로를 담고 있음
// path module 파일 경로를 쉽게 조작해줌
// resolve 매소드
// 파라메터마다 문자열을 넣으면 슬래쉬가 자동 적용
// node .pathTest.js
// npx webpack