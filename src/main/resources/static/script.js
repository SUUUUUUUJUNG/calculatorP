// 버튼들을 모두 선택
const buttons = document.querySelectorAll('.btn');
const screen = document.getElementById('screen');
let currentInput = '';
let operator = '';
let previousInput = '';

// 버튼에 클릭 이벤트 추가
buttons.forEach(button =>{
    button.addEventListener('click', (e) =>{
        const value = e.target.value;

        if(value === 'clear'){
            // 화면과 입력 값 초기화
            currentInput = '';
            operator = '';
            previousInput = '';
            screen.value = '';
        } else if (value === '='){
            // 연산을 수행하고 화면에 결과 표시
            if(operator && previousInput){
                const result = eval(`${previousInput} ${operator} ${currentInput}`);
                screen.value = result;
                currentInput = result; //새로운 연산 시작
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)){
            // 연산자가 눌리면
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            // 숫자나 .이 눌리면
            currentInput += value;
            screen.value = currentInput;
        }
    })
})