document.querySelector('#search-form').onsubmit = function(event) {
    event.preventDefault(); // 防止頁面重新載入
    const query = document.querySelector('#query').value;

    // 模擬搜尋結果（你可以改進這部分為真正的 API 呼叫）
    const results = [
        "Result 1: " + query,
        "Result 2: " + query,
        "Result 3: " + query
    ];

    const resultsContainer = document.querySelector('#results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result;
        resultsContainer.appendChild(div);
    });
};
