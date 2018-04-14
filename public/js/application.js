
createWrapper([
    createTitleText("소프트웨어에<br>물들다<br>참여신청")
]);

createWrapper([
    createHr()
]);

createWrapper([
    createSubTitleText("개인정보 입력")
]);

createWrapper([
    createRadio(["강연자", "봉사자"])
]);

createWrapper([
    createPlaneText("이름"),
    createInput("text", null, "이름을 입력해 주세요.")
]);

createWrapper([
    createPlaneText("이메일"),
    createInput("email", "email", "이메일을 입력해 주세요."),
    createButton("blue", "인증번호 보내기", "sendConfirmMail('email')")
]);

createWrapper([
    createPlaneText("인증번호"),
    createInput("text", null, "인증번호를 입력해주세요")
]);

createWrapper([
    createPlaneText("휴대폰 번호"),
    createInput("text", "phone", "휴대폰 번호를 입력해 주세요.")
]);

createWrapper([
    createPlaneText("비밀번호 설정"),
    createInput("password", "password", "비밀번호를 입력해 주세요."),
    createInput("password", "check_password","재입력 해주세요")
]);

createWrapper([
    createPlaneText("개인정보 수집"),
    createCheckBox("동의"),
]);

createWrapper([
    createButton("yellow", "완료", "submit()")
]);

// Functions

function sendConfirmMail(id) {
    // validate
    var email = document.getElementById(id);
    if(!validateEmail(email.value)) {
        alert("잘못 된 이메일 형식입니다.");
        return false;
    }
    // send
    // 살려줘요 TODO AM 02:46
}

function submit() {
    /*
    if(!validateRadio()) return false;
    if(!validateNotEmpty()) return false;
    if(!validatePhone()) return false;
    if(!validatePasswordCheck()) return false;*/
    if(!validateCheckBox()) return false;
    // send
}