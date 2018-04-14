
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
    createInput("text", "이름을 입력해 주세요.")
]);

createWrapper([
    createPlaneText("이메일"),
    createInput("email", "이메일을 입력해 주세요."),
    createButton("blue", "인증번호 보내기")
]);

createWrapper([
    createPlaneText("인증번호"),
    createInput("text", "인증번호를 입력해주세요")
]);

createWrapper([
    createPlaneText("휴대폰 번호"),
    createInput("text", "휴대폰 번호를 입력해 주세요.")
]);

createWrapper([
    createPlaneText("비밀번호 설정"),
    createInput("text", "비밀번호를 입력해 주세요."),
    createInput("text", "재입력 해주세요")
]);

createWrapper([
    createPlaneText("개인정보 수집"),
    createCheckBox("동의"),
]);

createWrapper([
    createButton("yellow", "완료")
]);
