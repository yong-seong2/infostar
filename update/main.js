// 로그인 버튼 기능 
document.querySelector('.login').addEventListener('click', function() {
    window.location.href = 'login.html'; // 로그인 페이지로 이동
});

// 회원가입 버튼 기능
document.querySelector('.signup').addEventListener('click', function() {
    window.location.href = 'join.html'; // 회원가입 페이지로 이동
});

// 홈화면 버튼 기능
document.querySelector('.title-container').addEventListener('click', function() {
    window.location.href = '홈화면2.html'; // 홈화면 페이지로 이동
});


// 검색창 X 버튼 기능 (입력 내용 삭제)
document.querySelector(".cancel-button").addEventListener("click", function () {
    document.querySelector(".search-input").value = "";
});

// 검색 버튼 클릭 시 검색결과 페이지로 이동
document.querySelector(".glasses").addEventListener("click", function () {
    let query = document.querySelector(".search-input").value.trim();

    if (query !== "") {
        window.location.href = `검색결과.html?query=${encodeURIComponent(query)}`;
    }
});




























