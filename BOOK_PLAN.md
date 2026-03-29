# Kế hoạch Xuất bản Sách — Làm báo trên môi trường số
**Giảng viên:** Nguyễn Dũng · Trường Đại học Khoa học, Đại học Huế
**Cập nhật lần cuối:** 2026-03-28

---

## 1. Tầm nhìn & Mục tiêu

Biên soạn một **giáo trình bài bản, độc lập** về Thiết kế web cho nhà báo. Đây là dự án riêng, không phụ thuộc vào website DBlogStudio (vốn chỉ là bản tóm tắt hỗ trợ dạy học).

**Sự khác biệt quan trọng:**

| DBlogStudio (web) | Giáo trình (sách) |
|-------------------|-------------------|
| Nội dung tóm tắt, gợi nhớ | Nội dung đầy đủ, bài bản |
| Hỗ trợ giảng dạy trực tiếp | Người học tự đọc được, không cần thầy |
| Cập nhật liên tục | Ấn định tại thời điểm xuất bản |
| Không cần mạch logic liên tục | Mỗi chương có đầu/thân/cuối rõ ràng |

**Mục tiêu cụ thể:**
- Có ISBN, xuất bản qua NXB trong nước
- Dùng làm giáo trình chính thức của học phần
- Bán/phát hành tại các trường báo chí toàn quốc

---

## 2. Loại sách & Định dạng

| Hạng mục | Lựa chọn đề xuất | Ghi chú |
|----------|-----------------|---------|
| Thể loại | Giáo trình đại học | Kèm bài tập thực hành |
| Định dạng in | Khổ B5 (17×24 cm) | Chuẩn giáo trình VN |
| Số trang dự kiến | 180–220 trang | |
| Bìa | Màu, tráng bóng | 4 màu |
| Ebook | PDF có bookmark | Song song với bản in |
| Ngôn ngữ | Tiếng Việt | |

---

## 3. Cấu trúc Nội dung

### Phần mở đầu
- Lời nói đầu (vai trò web với báo chí hiện đại)
- Hướng dẫn sử dụng sách
- Giới thiệu bộ công cụ

### Chương 1 — Làm quen với Google Sites
*(tương ứng Bài 01)*

### Chương 2 — Cấu trúc thông tin & UX cơ bản
*(tương ứng Bài 02)*

### Chương 3 — Thiết kế Poster & Banner với Canva
*(tương ứng Bài 03)*

### Chương 4 — WordPress cơ bản
*(tương ứng Bài 04)*

### Chương 5 — SEO cho nhà báo
*(tương ứng Bài 05)*

### Chương 6 — Báo chí dữ liệu & Trực quan hóa
*(tương ứng Bài 06)*

### Chương 7 — Mạng xã hội & Phân phối nội dung
*(tương ứng Bài 07)*

### Chương 8 — Multimedia Storytelling
*(tương ứng Bài 08)*

### Chương 9 — Bảo mật & Đạo đức số
*(tương ứng Bài 09)*

### Chương 10 — Newsletter & Email Marketing
*(tương ứng Bài 10)*

### Chương 11 — Đo lường & Phân tích web
*(tương ứng Bài 11)*

### Chương 12 — Dự án cuối khóa
*(tương ứng Bài 12)*

### Phần cuối
- Bảng thuật ngữ (Glossary)
- Tài liệu tham khảo
- Chỉ mục (Index)

---

## 4. Sự khác biệt so với nội dung Web

Sách in cần điều chỉnh để đứng độc lập, không phụ thuộc link:

| Trên Web | Trong sách |
|----------|-----------|
| Link công cụ, video hướng dẫn | QR code trỏ về tài nguyên |
| Screenshot giao diện web | Hình minh họa + chú thích rõ ràng |
| Bài tập thực hành online | Bài tập có thể làm offline |
| Nội dung cập nhật liên tục | Ghi rõ phiên bản tại thời điểm in |
| Ví dụ link kết quả học viên | Bài mẫu in tĩnh trong sách |

**Thêm vào sách (không có trên web):**
- Hộp "Lưu ý" / "Mẹo thực hành" trong mỗi chương
- Câu hỏi ôn tập cuối chương
- Rubric chấm điểm từng bài tập
- Bảng so sánh công cụ (pros/cons)

---

## 5. Cấu trúc Dự án (thư mục riêng)

```
/book-thiet-ke-web/
│
├── index.html              ← Trang chủ sách (mục lục, điều hướng)
├── css/
│   ├── book.css            ← Style đọc trên màn hình
│   └── print.css           ← Style xuất PDF / in
├── chapters/
│   ├── 00-loi-noi-dau.html
│   ├── 01-google-sites.html
│   ├── 02-ux-co-ban.html
│   ├── ...
│   └── 12-du-an-cuoi-khoa.html
├── appendix/
│   ├── glossary.html       ← Bảng thuật ngữ
│   ├── references.html     ← Tài liệu tham khảo
│   └── index.html          ← Chỉ mục
└── images/                 ← Hình minh họa, screenshot
```

> Dự án này **độc lập hoàn toàn** với tkweb/DBlogStudio.

---

## 6. Quy trình Biên soạn

```
Giai đoạn 1 — SOẠN THẢO (HTML)
  Bước 1 — Tạo thư mục dự án book-thiet-ke-web/
  Bước 2 — Soạn từng chương dưới dạng file HTML riêng
            Mỗi chương: lý thuyết đầy đủ + ví dụ thực tế + bài tập
  Bước 3 — Thêm các thành phần giáo trình
            - Hộp "Khái niệm" / "Lưu ý" / "Thực hành" / "Mở rộng"
            - Câu hỏi ôn tập cuối chương
            - Rubric chấm điểm bài tập
  Bước 4 — Viết phần mở đầu, glossary, tài liệu tham khảo
  Bước 5 — Xem trước bản in: mở trình duyệt → Ctrl+P
            Chỉnh print.css cho đến khi layout đẹp

Giai đoạn 2 — XUẤT & BIÊN TẬP
  Bước 6 — In/xuất từng chương thành PDF (từ trình duyệt)
            hoặc dùng Pandoc: HTML → DOCX
  Bước 7 — Chuẩn hóa hình minh họa (300 DPI cho bản in)
  Bước 8 — Dàn trang chính thức: Adobe InDesign hoặc nhờ NXB

Giai đoạn 3 — XUẤT BẢN
  Bước 9  — Phản biện nội bộ (1–2 đồng nghiệp)
  Bước 10 — Nộp NXB xét duyệt
  Bước 11 — Chỉnh sửa, in thử, phát hành
```

---

## 7. Công cụ

| Giai đoạn | Công cụ |
|-----------|---------|
| **Soạn thảo nội dung** | HTML + CSS (project riêng) |
| Xem trước bản in | `@media print` CSS + Ctrl+P trình duyệt |
| Xuất sang Word | Pandoc: `pandoc chapter.html -o chapter.docx` |
| Xuất PDF trực tiếp | Chrome/Edge → Print → Save as PDF |
| **Dàn trang chuyên nghiệp** | Adobe InDesign (hoặc nhờ NXB) |
| Hình minh họa | Canva + screenshot (Export 300 DPI) |
| QR code | qr-code-generator.com |
| Tài liệu tham khảo | Zotero |
| Kiểm tra đạo văn | iThenticate |

---

## 8. Nhà xuất bản

**Ưu tiên NXB phù hợp giáo trình đại học:**

1. **NXB Đại học Huế** — ưu tiên số 1, gần, hỗ trợ giảng viên trong hệ thống
2. **NXB Giáo dục Việt Nam** — phổ biến toàn quốc, phát hành rộng
3. **NXB Thông tin và Truyền thông** — phù hợp chủ đề báo chí/truyền thông
4. **NXB Đại học Quốc gia Hà Nội / TP.HCM** — uy tín cao

**Hồ sơ thường cần nộp NXB:**
- Đề cương chi tiết (mục lục + tóm tắt từng chương)
- Bản thảo hoàn chỉnh (file Word)
- Lý lịch khoa học tác giả
- Công văn của Khoa/Trường (nếu là giáo trình chính thức)

---

## 9. Chi phí Dự kiến

| Hạng mục | Ước tính |
|----------|---------|
| Phí xuất bản (NXB Đại học Huế) | 5–15 triệu đồng |
| Thiết kế bìa chuyên nghiệp | 2–5 triệu đồng |
| In thử (10 bản để phản biện) | 500k–1 triệu |
| In chính thức (200 bản) | 15–25 triệu |
| **Tổng dự kiến** | **~25–45 triệu** |

> *Chi phí có thể thấp hơn nếu được Trường hỗ trợ kinh phí biên soạn giáo trình.*

---

## 10. Timeline Dự kiến

| Giai đoạn | Thời gian | Mốc |
|-----------|----------|-----|
| Chuyển đổi & bổ sung nội dung | 2 tháng | Tháng 4–5/2026 |
| Hình minh họa & dàn trang sơ bộ | 1 tháng | Tháng 6/2026 |
| Phản biện nội bộ & chỉnh sửa | 1 tháng | Tháng 7/2026 |
| Nộp NXB xét duyệt | — | Tháng 8/2026 |
| Chỉnh sửa theo NXB + dàn trang | 1–2 tháng | Tháng 9–10/2026 |
| In ấn & phát hành | — | Cuối 2026 / đầu 2027 |

---

## 11. Câu hỏi cần quyết định

- [ ] Chọn NXB nào?
- [ ] Tự bỏ kinh phí hay xin đề tài biên soạn giáo trình của Trường?
- [ ] Số lượng in lần đầu bao nhiêu bản?
- [ ] Có làm ebook PDF song song không?
- [ ] Bìa sách do ai thiết kế?
- [ ] Có mời đồng tác giả hoặc người phản biện không?
