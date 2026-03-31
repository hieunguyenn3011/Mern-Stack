const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Chào mừng bạn đến với BlueMoon Backend!');
});

// ĐOẠN NÀY LÀ QUAN TRỌNG NHẤT: Giữ cho server luôn chạy
app.listen(PORT, () => {
    console.log(`Server dang chay tai: http://localhost:${PORT}`);
});