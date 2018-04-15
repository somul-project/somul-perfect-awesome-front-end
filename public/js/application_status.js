
createWrapper([
    createTitleText("신청 현황")
]);

createWrapper([
    createHr()
]);

createWrapper([
    createPlaneText("이메일"),
    createInput("email", "email","이메일을 입력해 주세요.")
]);

createWrapper([
    createPlaneText("비밀번호"),
    createInput("text", "password", "비밀번호를 입력해 주세요."),
]);

createWrapper([
    createButton("blue", "확인", "submit()"),
    createHyperText("p", "#", "비밀번호를 잊으셨나요?"),
]);

function submit() {
    if(!validateNotEmpty()) return false;
    
    // send
}
