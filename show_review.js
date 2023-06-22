function show(subjectId) {
    const url = `subject.php?method=${getTitle}`;

// GETリクエストを送信
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data); // PHPからのレスポンスを表示
        });
}

function edit(subjectId) {

}

function close() {

}