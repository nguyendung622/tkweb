// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-04.js
// Bài 04: WordPress cơ bản
// ═══════════════════════════════════════════

const LESSON_04 = {
  id: 4,
  num: "04",
  title: "WordPress <em>cơ bản</em>",
  duration: "120 phút",
  level: "Cơ bản – Trung cấp",
  tool: "WordPress.com · Gutenberg Editor",
  prevLesson: { id: 3, title: "Bài 03: Thiết kế Poster & Banner với Canva" },
  nextLesson: { id: 5, title: "Bài 05: SEO cho nhà báo" },

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>WordPress là nền tảng quản lý nội dung (CMS) phổ biến nhất thế giới — chiếm hơn <strong>43% toàn bộ các trang web trên internet</strong>. Từ blog cá nhân đến tờ báo lớn như The New York Times, TechCrunch hay VnExpress đều từng hoặc đang dùng WordPress. Hiểu WordPress không chỉ là kỹ năng kỹ thuật — đó là ngôn ngữ chung của ngành truyền thông số hiện đại.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: phân biệt được WordPress.com và WordPress.org; tạo và quản lý trang web báo chí trên WordPress.com; sử dụng thành thạo Gutenberg Editor để viết và định dạng bài; quản lý bài viết, danh mục và thẻ; tùy chỉnh giao diện cơ bản phù hợp phong cách báo chí.
    </div>

    <h2>Phần 1: WordPress.com vs WordPress.org — Chọn cái nào?</h2>
    <p>Đây là câu hỏi đầu tiên — và thường gây nhầm lẫn nhất — khi bắt đầu với WordPress.</p>

    <h3>WordPress.com — Dùng ngay, không cần cài đặt</h3>
    <p>WordPress.com là dịch vụ lưu trữ sẵn: bạn đăng ký tài khoản và bắt đầu viết ngay, không cần lo về server hay hosting. Gói miễn phí đủ dùng để học và thực hành trong khóa học này.</p>
    <ul>
      <li><strong>Ưu điểm:</strong> Miễn phí, không cần kỹ thuật, bảo mật và cập nhật tự động, tên miền dạng <em>tên-bạn.wordpress.com</em></li>
      <li><strong>Hạn chế:</strong> Không cài plugin tùy ý, ít quyền tùy chỉnh giao diện ở gói miễn phí, không thể chạy quảng cáo riêng</li>
      <li><strong>Phù hợp:</strong> Sinh viên báo chí, blog cá nhân, trang portfolio, tòa soạn nhỏ chưa có ngân sách</li>
    </ul>

    <h3>WordPress.org — Toàn quyền kiểm soát</h3>
    <p>WordPress.org là phần mềm mã nguồn mở bạn tự cài lên server riêng. Đây là lựa chọn của hầu hết tờ báo và trang tin tức chuyên nghiệp.</p>
    <ul>
      <li><strong>Ưu điểm:</strong> Toàn quyền tùy chỉnh, hơn 60.000 plugin, giao diện chuyên nghiệp, SEO tối đa</li>
      <li><strong>Hạn chế:</strong> Cần thuê hosting (từ 50.000–200.000đ/tháng), tự quản lý bảo mật và cập nhật</li>
      <li><strong>Phù hợp:</strong> Tòa soạn, trang tin tức thực sự, khi bạn đã nắm vững WordPress.com</li>
    </ul>

    <div class="callout">
      <strong>Quyết định cho khóa học này</strong>
      Chúng ta sẽ dùng <strong>WordPress.com gói miễn phí</strong>. Mọi kỹ năng học được đều áp dụng trực tiếp cho WordPress.org sau này — giao diện quản trị và cách viết bài hoàn toàn giống nhau.
    </div>

    <h2>Phần 2: Tạo trang WordPress đầu tiên</h2>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Đăng ký tài khoản</h4>
      <p>Vào <strong>wordpress.com</strong>, nhấn "Start your website". Nhập email, chọn tên miền phụ (ví dụ: <em>nguyenvana-baochi.wordpress.com</em>). Chọn gói <strong>Free</strong> — nhấn "Start with Free".</p>
      <p>Đặt tên miền ngắn, không dấu, dễ nhớ. Tên miền này sẽ xuất hiện trong mọi link bài của bạn.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Làm quen Dashboard (Bảng điều khiển)</h4>
      <p>Sau khi đăng ký, bạn vào <strong>Dashboard</strong> — trung tâm điều khiển của toàn bộ trang. Thanh menu bên trái có các mục chính:</p>
      <ul>
        <li><strong>Posts (Bài viết)</strong> — Quản lý tất cả bài báo</li>
        <li><strong>Pages (Trang)</strong> — Trang tĩnh như Giới thiệu, Liên hệ</li>
        <li><strong>Media (Thư viện media)</strong> — Ảnh, video đã tải lên</li>
        <li><strong>Appearance (Giao diện)</strong> — Theme và tùy chỉnh giao diện</li>
        <li><strong>Settings (Cài đặt)</strong> — Cấu hình tên trang, múi giờ, định dạng ngày</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Cài đặt cơ bản trước khi viết</h4>
      <p>Vào <strong>Settings → General</strong>: đặt tên trang (Site Title) và tagline mô tả trang. Ví dụ: <em>"Nguyễn Văn A — Phóng viên mảng kinh tế"</em>.</p>
      <p>Vào <strong>Settings → Reading</strong>: chọn trang nào hiển thị làm trang chủ. Với trang tin tức, chọn "Your latest posts" để bài mới nhất luôn lên đầu.</p>
    </div>

    <h2>Phần 3: Chọn Theme — Bộ mặt của trang</h2>
    <p>Theme quyết định giao diện và bố cục toàn bộ trang. WordPress.com có hàng trăm theme miễn phí, trong đó nhiều theme được thiết kế riêng cho báo chí và blog.</p>

    <h3>Tiêu chí chọn theme cho trang báo chí</h3>
    <ul>
      <li><strong>Responsive</strong> — Hiển thị tốt trên điện thoại (kiểm tra bằng cách thu nhỏ trình duyệt)</li>
      <li><strong>Tốc độ tải nhanh</strong> — Theme nhẹ, không nhiều hiệu ứng rườm rà</li>
      <li><strong>Typography rõ ràng</strong> — Chữ dễ đọc, đủ to, đủ tương phản</li>
      <li><strong>Hỗ trợ featured image</strong> — Ảnh đại diện bài viết hiển thị đẹp</li>
    </ul>

    <h3>Một số theme phù hợp báo chí (miễn phí)</h3>
    <ul>
      <li><strong>Twenty Twenty-Four</strong> — Theme mặc định mới nhất, tối giản, linh hoạt</li>
      <li><strong>Newspack</strong> — Được thiết kế riêng cho tòa soạn báo, rất chuyên nghiệp</li>
      <li><strong>Hemingway</strong> — Đơn giản, typography đẹp, phù hợp blog báo chí</li>
      <li><strong>Dara</strong> — Hỗ trợ tốt cho trang tin tức dạng grid ảnh lớn</li>
    </ul>

    <div class="step-block">
      <span class="step-num">Cách cài theme</span>
      <h4>Appearance → Themes → Add New Theme</h4>
      <p>Tìm tên theme → nhấn "Install" → "Activate". Trang sẽ thay đổi giao diện ngay lập tức. Bạn có thể thay đổi theme bất kỳ lúc nào mà không mất nội dung.</p>
    </div>

    <h2>Phần 4: Gutenberg Editor — Soạn thảo bài viết</h2>
    <p>Kể từ năm 2018, WordPress dùng <strong>Gutenberg</strong> — trình soạn thảo dạng block (khối). Mỗi đoạn văn, tiêu đề, ảnh, hay trích dẫn là một block riêng biệt, có thể di chuyển và tùy chỉnh độc lập.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Tạo bài viết mới</h4>
      <p>Vào <strong>Posts → Add New Post</strong>. Giao diện Gutenberg xuất hiện với ô tiêu đề lớn ở trên và khu vực nội dung bên dưới.</p>
      <p>Nhấn vào ô tiêu đề, nhập tiêu đề bài báo. Đây sẽ tự động trở thành H1 của bài — chỉ có một, không thêm H1 trong nội dung.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Các block cơ bản</h4>
      <p>Nhấn nút <strong>"+"</strong> để thêm block mới, hoặc gõ <strong>"/"</strong> rồi tên block để tìm nhanh:</p>
      <ul>
        <li><strong>/paragraph</strong> — Đoạn văn thông thường</li>
        <li><strong>/heading</strong> — Tiêu đề (chọn H2, H3, H4)</li>
        <li><strong>/image</strong> — Chèn ảnh từ máy tính hoặc URL</li>
        <li><strong>/quote</strong> — Trích dẫn (blockquote), hiển thị nổi bật</li>
        <li><strong>/list</strong> — Danh sách gạch đầu dòng hoặc đánh số</li>
        <li><strong>/table</strong> — Bảng dữ liệu</li>
        <li><strong>/separator</strong> — Đường kẻ ngang ngăn cách phần</li>
        <li><strong>/embed</strong> — Nhúng YouTube, Twitter, SoundCloud...</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Thêm ảnh đại diện (Featured Image)</h4>
      <p>Ở cột phải giao diện Gutenberg (nếu không thấy, nhấn biểu tượng Settings ⚙ góc trên phải), tìm mục <strong>"Featured image"</strong> → "Set featured image".</p>
      <p>Ảnh này hiển thị khi bài xuất hiện trên trang chủ, danh mục và kết quả tìm kiếm mạng xã hội. Kích thước lý tưởng: <strong>1200 × 630px</strong> (tỷ lệ 16:9).</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 4</span>
      <h4>Trích dẫn nguồn đúng cách</h4>
      <p>Với bài báo, việc trích nguồn không chỉ là đạo đức — còn là SEO tốt. Dùng block <strong>Quote</strong> cho lời trích nguyên văn, sau đó ghi rõ tên người phát ngôn và chức danh. Dùng block <strong>Paragraph</strong> thông thường với link dẫn nguồn cho dữ liệu và số liệu.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Phím tắt hữu ích trong Gutenberg:</strong> <strong>Ctrl+Z</strong> để hoàn tác, <strong>Ctrl+S</strong> để lưu nháp, <strong>Ctrl+Shift+P</strong> để xem trước, <strong>/</strong> để tìm kiếm block nhanh. Di chuyển block bằng cách kéo biểu tượng 6 chấm ở cạnh trái mỗi block.</p>
    </div>

    <h2>Phần 5: Tổ chức nội dung — Categories & Tags</h2>
    <p>Hệ thống phân loại là xương sống của một trang tin tức. Cấu trúc tốt giúp độc giả dễ dàng khám phá nội dung và giúp SEO hiệu quả hơn.</p>

    <h3>Categories (Danh mục) — Phân loại chính</h3>
    <p>Danh mục là các chuyên mục lớn của trang. Mỗi bài <em>phải</em> thuộc ít nhất một danh mục. Ví dụ cấu trúc danh mục cho trang tin tức sinh viên:</p>
    <ul>
      <li>Thời sự</li>
      <li>Giáo dục</li>
      <li>Văn hóa – Giải trí</li>
      <li>Thể thao</li>
      <li>Phóng sự – Điều tra</li>
    </ul>
    <p>Tạo danh mục tại: <strong>Posts → Categories</strong>. Không tạo quá nhiều danh mục — 5 đến 8 là lý tưởng cho trang tin tức vừa và nhỏ.</p>

    <h3>Tags (Thẻ) — Từ khóa chi tiết</h3>
    <p>Tags là các từ khóa mô tả nội dung cụ thể của bài. Khác với danh mục (phân cấp, cố định), tags linh hoạt và chi tiết hơn. Ví dụ: bài thuộc danh mục <em>"Giáo dục"</em> có thể có tags: <em>thi đại học, điểm chuẩn, Đại học Huế, xét học bạ</em>.</p>
    <p>Nguyên tắc: thêm 3–5 tags mô tả đúng nội dung bài, không spam tags để tăng traffic.</p>

    <div class="callout">
      <strong>Slug — Đường dẫn thân thiện</strong>
      WordPress tự động tạo URL từ tiêu đề bài. Với tiếng Việt có dấu, URL thường rất xấu. Hãy chỉnh <strong>Permalink (Slug)</strong> thủ công trong phần Settings của Gutenberg (cột phải) — đặt URL ngắn, không dấu, dùng gạch ngang. Ví dụ: tiêu đề "Trường đại học Huế tuyển 5.000 chỉ tiêu năm 2025" → slug: <strong>tuyen-sinh-dai-hoc-hue-2025</strong>
    </div>

    <h2>Phần 6: Xuất bản và lên lịch đăng bài</h2>

    <div class="step-block">
      <span class="step-num">Tùy chọn 1</span>
      <h4>Xuất bản ngay (Publish)</h4>
      <p>Nhấn nút <strong>"Publish"</strong> màu xanh góc trên phải. WordPress sẽ hỏi xác nhận lần nữa. Bài xuất hiện công khai ngay lập tức.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Tùy chọn 2</span>
      <h4>Lên lịch đăng (Schedule)</h4>
      <p>Nhấn mũi tên cạnh "Publish" → chọn "Schedule". Đặt ngày giờ cụ thể. WordPress sẽ tự động đăng đúng thời điểm — rất hữu ích để duy trì lịch đăng bài đều đặn hoặc đăng bài vào giờ vàng (7–9 giờ sáng, 11–12 giờ trưa, 8–10 giờ tối).</p>
    </div>

    <div class="step-block">
      <span class="step-num">Tùy chọn 3</span>
      <h4>Lưu nháp (Save Draft)</h4>
      <p>Nhấn <strong>"Save draft"</strong> để lưu bài chưa đăng. Bạn có thể quay lại chỉnh sửa bất kỳ lúc nào. Bài nháp không hiển thị công khai.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Quy trình xuất bản chuẩn cho tòa soạn:</strong> Phóng viên tạo bài → lưu nháp → Biên tập viên đọc duyệt → sửa lỗi → đặt trạng thái "Pending Review" → Tổng biên tập duyệt lần cuối → Publish. WordPress hỗ trợ đủ vai trò: Subscriber, Contributor, Author, Editor, Administrator.</p>
    </div>

    <h2>Phần 7: Thực hành — Xây dựng trang tin tức sinh viên</h2>
    <p>Áp dụng toàn bộ kiến thức vào bài tập thực tế.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Thiết lập trang</h4>
      <p>Tạo trang WordPress.com mới (hoặc dùng trang đã có). Đặt tên trang và tagline. Cài theme phù hợp báo chí. Tạo 4–5 danh mục phản ánh chuyên mục bạn muốn viết.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Viết 2 bài đầu tiên</h4>
      <p>Bài 1: Tin tức ngắn (300–400 chữ) về một sự kiện trong trường hoặc khu vực bạn đang sống. Bài 2: Phóng sự ngắn (500–700 chữ) có ảnh và ít nhất một trích dẫn từ nhân vật thực.</p>
      <p>Mỗi bài phải có: tiêu đề hấp dẫn, featured image, thuộc đúng danh mục, có 3–5 tags, URL đã chỉnh slug.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Tạo trang Giới thiệu (About)</h4>
      <p>Vào <strong>Pages → Add New Page</strong>. Tạo trang "Giới thiệu" với thông tin về trang, tác giả và liên hệ. Đây là trang tĩnh — không phải bài viết, không có ngày đăng.</p>
      <p>Sau khi tạo xong, thêm vào menu: <strong>Appearance → Menus → thêm trang Giới thiệu vào menu chính.</strong></p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Hoàn thiện trang WordPress với tối thiểu 3 bài đăng, 1 trang Giới thiệu, menu điều hướng rõ ràng, và hồ sơ tác giả (vào Users → Profile để thêm ảnh và bio). Nộp link trang đã xuất bản. Chuẩn bị trình bày trước lớp trong 3 phút: giải thích lý do chọn theme, cấu trúc danh mục và loại nội dung bạn muốn phát triển.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>WordPress là nền tảng mà bất kỳ nhà báo số nghiêm túc nào cũng cần biết. Bạn đã nắm được toàn bộ luồng làm việc: từ thiết lập trang, chọn theme, viết bài bằng Gutenberg, tổ chức nội dung đến xuất bản. Đây là kỹ năng bạn có thể dùng ngay tại bất kỳ tòa soạn nào.</p>
    <p>Bài học tiếp theo sẽ giúp bạn đưa nội dung đã tạo lên vị trí đầu Google — <strong>SEO cho nhà báo</strong>.</p>
  `
};
