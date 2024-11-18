document.querySelector('.login').addEventListener('click', function() {
    window.location.href = 'login.html'; // 다른 페이지로 이동
});

// 회원가입 버튼 기능
document.querySelector('.signup').addEventListener('click', function() {
    alert('Sign up functionality is not implemented yet.');
    // 회원가입 모달이나 페이지 이동 기능을 여기에 추가
});

// 공모전 대외활동 버튼 기능
document.querySelectorAll('.contest-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Navigating to the contest section.');
        // 공모전 관련 페이지로 이동하는 코드 추가 가능
    });
});

// 팀빌딩 버튼 기능
document.querySelectorAll('.teambuilding-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Navigating to the team building section.');
        // 팀빌딩 관련 페이지로 이동하는 코드 추가 가능
    });
});