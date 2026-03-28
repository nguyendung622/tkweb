// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-03.js
// Bài 03: Thiết kế Poster & Banner với Canva
// ═══════════════════════════════════════════

const LESSON_03 = {
  id: 3,
  num: "03",
  title: "Thiết kế <em>Poster & Banner</em> với Canva",
  duration: "120 phút",
  level: "Cơ bản – Trung cấp",
  tool: "Canva",
  prevLesson: { id: 2, title: "Bài 02: Cấu trúc thông tin & UX cơ bản" },
  nextLesson: null,

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Trong thời đại báo chí số, hình ảnh không còn chỉ là minh họa — chúng <em>kể chuyện</em>. Một poster sự kiện bắt mắt, một banner mạng xã hội chuyên nghiệp hay một infographic rõ ràng có thể tăng gấp đôi lượng người đọc bài viết của bạn. Canva là công cụ thiết kế đồ họa trực tuyến hàng đầu thế giới, cho phép bất kỳ ai — kể cả người chưa từng học thiết kế — tạo ra ấn phẩm đẹp trong vòng vài chục phút.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: hiểu giao diện và các tính năng cốt lõi của Canva; thiết kế được poster sự kiện hoàn chỉnh theo đúng kích thước; tạo banner cho mạng xã hội (Facebook, Instagram); áp dụng nguyên tắc thiết kế cơ bản vào sản phẩm thực tế; xuất file đúng định dạng cho từng mục đích sử dụng.
    </div>

    <h2>Phần 1: Tại sao nhà báo cần Canva?</h2>
    <p>Tòa soạn hiện đại không còn chờ bộ phận kỹ thuật xử lý từng tấm ảnh. Phóng viên tự tạo ảnh bìa, biên tập viên tự thiết kế banner quảng bá bài viết, social media editor cần nội dung mới mỗi giờ. Canva lấp đầy khoảng trống đó.</p>

    <h3>Canva miễn phí vs. Canva Pro</h3>
    <p>Phiên bản miễn phí đã đủ dùng cho 90% nhu cầu trong khóa học này. Bảng so sánh nhanh:</p>
    <ul>
      <li><strong>Miễn phí:</strong> 250.000+ mẫu, 1 triệu+ hình ảnh/icon, 5GB lưu trữ, xuất PNG/JPG/PDF</li>
      <li><strong>Pro (trả phí):</strong> Xóa nền tự động (Background Remover), thay đổi kích thước 1 click (Magic Resize), thư viện hình ảnh premium, Brand Kit, xuất video MP4</li>
      <li><strong>Canva cho Giáo dục:</strong> Giảng viên và sinh viên được dùng Canva Pro hoàn toàn miễn phí — đăng ký tại <a href="https://www.canva.com/education/" target="_blank">canva.com/education</a></li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">🎓</span>
      <p><strong>Đăng ký Canva for Education ngay:</strong> Dùng email trường (<em>@husc.edu.vn</em> hoặc <em>@hueuni.edu.vn</em>) để đăng ký Canva Pro miễn phí dành cho sinh viên. Toàn bộ tính năng Pro sẽ được mở khóa trong suốt thời gian học.</p>
    </div>

    <h2>Phần 2: Làm quen giao diện Canva</h2>
    <p>Truy cập <a href="https://www.canva.com" target="_blank">canva.com</a> và đăng nhập. Giao diện Canva chia làm 3 khu vực chính:</p>

    <h3>Trang chủ Canva (Home Dashboard)</h3>
    <ul>
      <li><strong>Thanh tìm kiếm trung tâm:</strong> Gõ kích thước hoặc loại thiết kế (ví dụ: "A4 poster", "Facebook post", "Instagram story")</li>
      <li><strong>Thiết kế gần đây:</strong> Tất cả dự án bạn đã tạo, sắp xếp theo thời gian</li>
      <li><strong>Mẫu theo danh mục:</strong> Presentations, Social Media, Video, Print, v.v.</li>
      <li><strong>Thương hiệu (Brand Kit):</strong> Lưu màu sắc, font chữ, logo của tổ chức (Pro)</li>
    </ul>

    <h3>Trình chỉnh sửa (Editor) — 5 khu vực</h3>
    <ul>
      <li><strong>Thanh công cụ trái:</strong> Templates, Elements, Text, Brand, Uploads, Photos, Background — đây là kho nguyên liệu của bạn</li>
      <li><strong>Vùng canvas trung tâm:</strong> Nơi bạn thiết kế, có thể zoom in/out bằng Ctrl + scroll</li>
      <li><strong>Thanh thuộc tính trên:</strong> Thay đổi font, cỡ chữ, màu sắc, căn lề — xuất hiện theo ngữ cảnh khi bạn chọn phần tử</li>
      <li><strong>Thanh trang (Pages):</strong> Dưới cùng, quản lý nhiều trang trong một thiết kế</li>
      <li><strong>Nút Share / Download:</strong> Góc trên phải — xuất bản hoặc tải về</li>
    </ul>

    <div class="callout">
      <strong>Phím tắt quan trọng</strong>
      T — thêm text box · R — thêm hình chữ nhật · C — thêm hình tròn · Ctrl+Z — hoàn tác · Ctrl+D — nhân đôi phần tử · Ctrl+G — nhóm các phần tử · Giữ Shift khi kéo — giữ tỉ lệ · Giữ Alt khi kéo — sao chép nhanh
    </div>

    <h2>Phần 3: Nguyên tắc thiết kế cơ bản cho nhà báo</h2>
    <p>Trước khi thực hành, hãy nắm 4 nguyên tắc nền tảng của thiết kế truyền thông — viết tắt là <strong>CRAP</strong> (Contrast, Repetition, Alignment, Proximity):</p>

    <h3>1. Tương phản (Contrast)</h3>
    <p>Làm cho các yếu tố quan trọng nổi bật bằng cách tạo sự khác biệt rõ ràng: chữ đậm vs. chữ mảnh, màu tối vs. màu sáng, hình lớn vs. hình nhỏ. Tránh dùng hai màu gần nhau trên cùng nền — ví dụ chữ xám trên nền trắng rất khó đọc.</p>

    <h3>2. Lặp lại (Repetition)</h3>
    <p>Dùng cùng một bộ font, màu sắc, và phong cách xuyên suốt thiết kế để tạo sự nhất quán. Một poster dùng 5 font khác nhau trông rất nghiệp dư. Nguyên tắc: tối đa 2–3 font, 2–4 màu chủ đạo.</p>

    <h3>3. Căn lề (Alignment)</h3>
    <p>Mọi phần tử đều phải được căn với một điểm tham chiếu. Không đặt chữ "nổi lơ lửng" giữa trang. Dùng tính năng <strong>Rulers & Guides</strong> của Canva (View → Show Rulers) để căn chỉnh chính xác.</p>

    <h3>4. Gần nhau (Proximity)</h3>
    <p>Các thông tin liên quan cần đặt gần nhau, thông tin không liên quan cần cách xa. Ví dụ: tên diễn giả và chức danh nên đi kèm nhau, không nên tách ra hai góc khác nhau của poster.</p>

    <div class="tip-box">
      <span class="tip-icon">🎨</span>
      <p><strong>Chọn màu chuyên nghiệp:</strong> Không biết phối màu? Dùng công cụ <a href="https://coolors.co" target="_blank" style="color:var(--gold)">coolors.co</a> hoặc <a href="https://color.adobe.com" target="_blank" style="color:var(--gold)">color.adobe.com</a> để tạo bảng màu hài hòa. Trong Canva, khi click vào màu bất kỳ, bạn có thể chọn "Document colors" để dùng lại đúng màu đã dùng trước đó.</p>
    </div>

    <h2>Phần 4: Thực hành — Thiết kế Poster sự kiện</h2>
    <p>Tình huống: Bạn cần thiết kế poster cho <strong>Hội thảo "Báo chí số trong kỷ nguyên AI"</strong> — diễn ra ngày 20/11/2025 tại Trường ĐH Khoa học, Đại học Huế. Làm theo từng bước dưới đây.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Tạo thiết kế mới với kích thước đúng</h4>
      <p>Trên trang chủ Canva, nhấn <strong>"Tạo thiết kế"</strong> (Create a design) → chọn <strong>"Kích thước tùy chỉnh"</strong> (Custom size).</p>
      <p>Nhập kích thước poster A2 dọc: <strong>Rộng 420mm × Cao 594mm</strong>. Đơn vị chọn <strong>mm</strong>. Nhấn <strong>"Tạo thiết kế mới"</strong>.</p>
      <p><em>Lưu ý kích thước phổ biến:</em></p>
      <ul>
        <li>Poster A3: 297 × 420mm</li>
        <li>Poster A2: 420 × 594mm</li>
        <li>Facebook Post: 1200 × 630px</li>
        <li>Instagram Post (vuông): 1080 × 1080px</li>
        <li>Instagram Story / Reels: 1080 × 1920px</li>
        <li>Banner website (leaderboard): 728 × 90px</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Chọn nền và màu chủ đạo</h4>
      <p>Click vào vùng canvas trống → thanh trái xuất hiện tab <strong>"Background"</strong>. Chọn màu nền. Gợi ý cho hội thảo học thuật: nền tối (xanh navy <code>#1a237e</code> hoặc đen <code>#0d0d0d</code>) tạo cảm giác trang trọng.</p>
      <p>Hoặc vào tab <strong>Photos</strong> → tìm "conference abstract blue" → chọn ảnh nền miễn phí. Click vào ảnh để đặt làm nền, kéo để điều chỉnh vị trí.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Thêm tên sự kiện — yếu tố quan trọng nhất</h4>
      <p>Nhấn phím <strong>T</strong> hoặc click tab <strong>Text</strong> → chọn <strong>"Thêm tiêu đề"</strong> (Add a heading). Nhập: <strong>BÁO CHÍ SỐ TRONG KỶ NGUYÊN AI</strong>.</p>
      <p>Điều chỉnh font và cỡ chữ: click vào text box → chọn font <em>Playfair Display</em> hoặc <em>Montserrat Bold</em> (gõ tên vào ô tìm kiếm font). Cỡ chữ: khoảng 80–100pt. Căn giữa.</p>
      <p>Màu chữ: trắng (<code>#FFFFFF</code>) hoặc vàng (<code>#FFD700</code>) nếu nền tối.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 4</span>
      <h4>Thêm thông tin phụ (ngày, giờ, địa điểm)</h4>
      <p>Nhấn <strong>T</strong> → <strong>"Thêm văn bản phụ"</strong> (Add a subheading). Nhập thông tin theo dạng ngắn gọn:</p>
      <ul>
        <li>📅 Thứ Năm, 20 tháng 11 năm 2025</li>
        <li>⏰ 8:00 – 17:00</li>
        <li>📍 Trường ĐH Khoa học, Đại học Huế</li>
      </ul>
      <p>Font: cùng loại với tiêu đề nhưng nhẹ hơn (Regular thay vì Bold). Cỡ chữ: 32–40pt. Tạo khoảng cách rõ ràng giữa từng dòng thông tin.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 5</span>
      <h4>Thêm logo và hình ảnh minh họa</h4>
      <p>Tab <strong>Uploads</strong> → <strong>"Tải tệp lên"</strong> → upload logo trường hoặc đơn vị tổ chức. Đặt logo ở góc trên hoặc dưới poster.</p>
      <p>Để thêm hình minh họa: tab <strong>Elements</strong> → gõ từ khóa "AI technology", "journalism", "digital media" → chọn icon hoặc illustration phù hợp. Dùng các icon cùng bộ (same style) để đảm bảo nhất quán.</p>
      <p>Giữ <strong>Shift</strong> khi kéo góc hình ảnh để thay đổi kích thước mà không bị méo.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 6</span>
      <h4>Thêm đường kẻ và hình học trang trí</h4>
      <p>Nhấn phím <strong>R</strong> → vẽ một hình chữ nhật mỏng (dùng làm đường kẻ trang trí). Đổi màu thành màu accent (ví dụ: vàng, cam). Dùng làm dải phân cách giữa tiêu đề và thông tin.</p>
      <p>Tab <strong>Elements</strong> → <strong>Lines</strong> → chọn đường thẳng. Kéo dài ngang poster để tạo phân cách sạch sẽ.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 7</span>
      <h4>Căn chỉnh và kiểm tra tổng thể</h4>
      <p>Chọn tất cả phần tử (Ctrl+A) → tab trên xuất hiện nút <strong>"Vị trí"</strong> (Position) → chọn <strong>"Căn giữa theo chiều ngang"</strong> để đảm bảo mọi thứ đối xứng.</p>
      <p>Kiểm tra checklist:</p>
      <ul>
        <li>✅ Tiêu đề đọc được từ xa 3 mét?</li>
        <li>✅ Thông tin ngày/giờ/địa điểm đầy đủ và rõ ràng?</li>
        <li>✅ Không có lỗi chính tả?</li>
        <li>✅ Độ tương phản màu chữ/nền đủ cao?</li>
        <li>✅ Logo đủ sắc nét, không bị pixelate?</li>
      </ul>
    </div>

    <h2>Phần 5: Thực hành — Thiết kế Banner mạng xã hội</h2>
    <p>Tiếp theo, tạo bộ banner quảng bá cùng sự kiện cho Facebook và Instagram. Sức mạnh của Canva là bạn có thể tái sử dụng thiết kế poster vừa làm.</p>

    <div class="step-block">
      <span class="step-num">Bước 8</span>
      <h4>Tạo Facebook Post (1200 × 630px)</h4>
      <p>Tạo thiết kế mới: <strong>Kích thước tùy chỉnh</strong> → <strong>1200 × 630px</strong> (hoặc tìm "Facebook post" trong thanh tìm kiếm).</p>
      <p>Thay vì làm từ đầu: Tab <strong>Templates</strong> → gõ "event announcement" → chọn mẫu phù hợp với phong cách đã thiết kế ở poster. Thay thế văn bản và hình ảnh trong mẫu.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 9</span>
      <h4>Magic Resize — Đổi kích thước 1 click (Pro)</h4>
      <p>Nếu bạn có Canva Pro (hoặc tài khoản Education): Mở thiết kế Facebook Post đã làm → click <strong>"Thay đổi kích thước"</strong> (Resize) ở góc trên trái → tích vào <strong>Instagram Post (1080×1080px)</strong> và <strong>Instagram Story (1080×1920px)</strong> → nhấn <strong>"Sao chép & thay đổi kích thước"</strong>.</p>
      <p>Canva tự động điều chỉnh bố cục. Bạn chỉ cần kiểm tra và tinh chỉnh thêm nếu cần. Tiết kiệm 80% thời gian so với làm lại từ đầu.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 10</span>
      <h4>Thiết kế Banner website (728 × 90px — Leaderboard)</h4>
      <p>Kích thước banner ngang tiêu chuẩn. Tạo mới → <strong>728 × 90px</strong>. Vì không gian rất hẹp, nguyên tắc thiết kế banner:</p>
      <ul>
        <li>Chỉ 1 thông điệp duy nhất — không nhồi quá nhiều chữ</li>
        <li>Logo + Tên sự kiện + Ngày + Nút CTA (Call-to-action: "Đăng ký ngay")</li>
        <li>Font đủ lớn để đọc được khi thu nhỏ (tối thiểu 14px)</li>
        <li>Màu nút CTA phải tương phản mạnh với nền</li>
      </ul>
    </div>

    <h2>Phần 6: Xuất file đúng định dạng</h2>
    <p>Nhấn nút <strong>"Chia sẻ"</strong> (Share) → <strong>"Tải xuống"</strong> (Download). Chọn định dạng phù hợp với mục đích:</p>

    <h3>Khi nào dùng định dạng nào?</h3>
    <ul>
      <li><strong>PNG</strong> — In ấn chất lượng cao, đăng web cần nền trong suốt (logo, icon). File lớn hơn JPG.</li>
      <li><strong>JPG</strong> — Ảnh đăng mạng xã hội, gửi email. File nhỏ, không hỗ trợ trong suốt.</li>
      <li><strong>PDF (In ấn)</strong> — Gửi cho nhà in. Chọn "PDF Print" để giữ chất lượng vector, tick "Crop marks and bleed" nếu nhà in yêu cầu.</li>
      <li><strong>PDF (Chuẩn)</strong> — Chia sẻ tài liệu qua email, đăng web.</li>
      <li><strong>SVG</strong> — Đồ họa vector, dùng cho website (Pro).</li>
      <li><strong>MP4/GIF</strong> — Nếu thiết kế có animation (Pro).</li>
    </ul>

    <div class="callout">
      <strong>Mẹo xuất file cho in ấn</strong>
      Khi tạo thiết kế để in, luôn dùng đơn vị mm hoặc cm (không dùng px). Chọn độ phân giải 300 DPI khi tải PNG. Thêm vùng chảy tràn (bleed) 3–5mm nếu nhà in yêu cầu. Màu sắc in thực tế có thể khác màu trên màn hình — nên xem trước bản in thử.
    </div>

    <h2>Phần 7: Tính năng nâng cao đáng biết</h2>

    <h3>Làm việc nhóm trên Canva</h3>
    <p>Canva hỗ trợ cộng tác thời gian thực như Google Docs. Nhấn <strong>Share</strong> → nhập email đồng nghiệp → phân quyền <strong>Can edit</strong> (chỉnh sửa) hoặc <strong>Can view</strong> (chỉ xem). Nhiều người có thể cùng chỉnh sửa một thiết kế đồng thời.</p>

    <h3>Canva AI — Magic Studio</h3>
    <p>Các tính năng AI mới trong Canva (2024–2025):</p>
    <ul>
      <li><strong>Magic Write:</strong> Viết nội dung text tự động theo yêu cầu</li>
      <li><strong>Magic Design:</strong> Nhập văn bản mô tả, AI tạo layout đề xuất</li>
      <li><strong>Text to Image:</strong> Tạo hình ảnh từ mô tả văn bản</li>
      <li><strong>Background Remover:</strong> Xóa nền ảnh 1 click (Pro)</li>
      <li><strong>Magic Eraser:</strong> Xóa vật thể trong ảnh tự động</li>
    </ul>

    <h3>Tạo Brand Kit cho tòa soạn</h3>
    <p>Nếu bạn quản lý nhận diện thương hiệu cho một tòa soạn hoặc câu lạc bộ báo chí: vào <strong>Brand Hub</strong> → thêm logo, bảng màu, và font chữ chính thức. Mọi thành viên trong nhóm đều truy cập được và dùng đúng bộ nhận diện, tránh sai sót về màu sắc hay font chữ.</p>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập thực hành:</strong> Thiết kế bộ ấn phẩm cho một sự kiện tự chọn (hội thảo, tọa đàm, buổi ra mắt ấn phẩm…) gồm: (1) Poster A3 dọc, (2) Facebook Post 1200×630px, (3) Instagram Story 1080×1920px. Ba sản phẩm phải cùng bộ nhận diện (màu sắc, font, logo). Xuất file PNG và nộp cả 3 file trước buổi học tiếp theo.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Canva là công cụ thiết kế mạnh mẽ và dễ tiếp cận nhất hiện nay cho nhà báo. Bạn đã nắm được giao diện, 4 nguyên tắc thiết kế CRAP, quy trình tạo poster và banner từ đầu đến xuất file. Quan trọng hơn, bạn đã hiểu tại sao mỗi quyết định thiết kế — từ màu sắc, font chữ đến bố cục — đều phục vụ mục tiêu truyền thông.</p>
    <p>Hãy nhớ: thiết kế tốt không phải là thêm thật nhiều thứ vào — mà là biết <em>bỏ đi</em> những thứ không cần thiết.</p>
  `
};
