# DBlogStudio — Hướng dẫn cập nhật

**Thiết kế web cho nhà báo hiện đại**
Giảng viên: Nguyễn Dũng · Khoa CNTT · Trường ĐH Khoa học, ĐH Huế

---

## Cấu trúc thư mục

```
dblogstudio/
├── index.html          ← Trang chính (ít khi cần sửa)
├── css/
│   └── style.css       ← Toàn bộ giao diện
├── js/
│   └── app.js          ← Logic render (ít khi cần sửa)
├── data/
│   └── lessons.js      ← Danh sách bài học + cấu hình site
└── lessons/
    ├── lesson-01.js    ← Nội dung Bài 01
    ├── lesson-02.js    ← Nội dung Bài 02 (tạo khi cần)
    └── ...
```

---

## Cách thêm bài học mới

### Bước 1: Cập nhật `data/lessons.js`
Tìm bài cần mở (ví dụ bài 02), đổi `status: "soon"` → `status: "live"`:
```js
{
  id: 2,
  status: "live",   // ← đổi từ "soon"
  file: "lesson-02" // ← thêm dòng này
  // ... các trường khác giữ nguyên
}
```

### Bước 2: Tạo file `lessons/lesson-02.js`
Sao chép `lesson-01.js`, đổi tên thành `lesson-02.js` và sửa nội dung:
```js
const LESSON_02 = {
  id: 2,
  num: "02",
  title: "Tên bài học",
  duration: "90 phút",
  level: "Cơ bản",
  tool: "Tên công cụ",
  prevLesson: { id: 1, title: "Bài 01: ..." },
  nextLesson: null,
  content: `
    <h2>Nội dung bài học...</h2>
    <p>Viết nội dung ở đây bằng HTML đơn giản.</p>
  `
};
```

### Bước 3: Thêm `<script>` vào `index.html`
```html
<script src="lessons/lesson-02.js"></script>
```

### Bước 4: Đăng ký bài trong `js/app.js`
Tìm dòng `const lessonDataMap` và thêm:
```js
const lessonDataMap = {
  1: LESSON_01,
  2: LESSON_02,  // ← thêm dòng này
};
```

---

## Các thành phần nội dung có sẵn

| HTML | Hiển thị |
|------|----------|
| `<h2>` | Tiêu đề phần chính |
| `<h3>` | Tiêu đề phụ (màu xanh) |
| `<p>` | Đoạn văn |
| `<ul>/<ol>/<li>` | Danh sách |
| `<div class="callout">` | Hộp thông tin xanh |
| `<div class="step-block">` | Khối bước thực hành |
| `<div class="tip-box">` | Hộp mẹo nền đen |

---

## Cập nhật thông tin giảng viên / site

Sửa trong `data/lessons.js`, phần `SITE_CONFIG`:
- Tên site, khẩu hiệu, học kỳ
- Thông tin giảng viên (tên, chức danh, email)
- Danh sách công cụ
- Quote hiển thị trang chủ

---

## Triển khai (Deploy)

Website này là **HTML tĩnh** — không cần server hay database.
Upload toàn bộ thư mục lên:
- **GitHub Pages** (miễn phí)
- **Google Drive** (dùng chung nội bộ)
- **Netlify / Vercel** (miễn phí, nhanh)
- Bất kỳ hosting nào hỗ trợ file HTML tĩnh
