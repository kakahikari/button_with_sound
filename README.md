# button_with_sound
就是一些按鈕

## 說明
做了一個網頁音效板，在波普貓愛吃魚2023生日時送給觀眾
- 網頁參考別人的css，加上一點vue做點擊標題到一定數量就逐個觸發的彩蛋
- 用GitHub Pages 提供靜態網頁
- 剪輯好的音檔放在Google Cloud Storage上
- 2023/07/21 因為GCS試用期間到期，故暫時關閉了
- 2023/12/04 實驗性的播放清單
- 2023/12/27 播放器可帶特定query播放單一檔案
- 2023/12/30 播放器query調整, 音效板復刻
- 讀網址參數
- Dark Mode
- (未完成) RWD
- 預覽播放
- 下雪 好奇怪 會跨到其他分頁 飄動也好怪 模糊也好怪
- 播放器頁面隱藏
- 2024/05/04 quiz第一版，打地鼠
- 2024/05/08 問答功能加上列表與舉報，本體大致完成
- 2024/05/09 打蘑菇排行榜，跳轉頁面時要停止bgm，舉報按鈕回饋
前端根目錄是怎樣
答題bgm 與開關
兩次舉報 隱藏題目

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
