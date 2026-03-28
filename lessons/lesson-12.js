// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-12.js
// Bài 12: Dự án cuối khóa
// ═══════════════════════════════════════════

const LESSON_12 = {
  id: 12,
  num: "12",
  title: "<em>Dự án</em> cuối khóa",
  duration: "135 phút",
  level: "Tổng hợp",
  tool: "Tất cả công cụ đã học",
  prevLesson: { id: 11, title: "Bài 11: Đo lường & phân tích web" },
  nextLesson: null,

  content: `
    <h2>Giới thiệu dự án</h2>
    <p>Bạn đã đi qua 11 bài học — từ tạo trang web đầu tiên bằng Google Sites, thiết kế đồ họa với Canva, xây dựng tòa soạn số trên WordPress, tối ưu SEO, phân phối nội dung qua mạng xã hội, bảo mật tác nghiệp, đến phân tích dữ liệu độc giả. Đây là lúc kết hợp tất cả thành một sản phẩm báo chí số hoàn chỉnh.</p>
    <p>Dự án cuối khóa không phải bài kiểm tra lý thuyết. Đây là bằng chứng thực tế rằng bạn có thể <em>độc lập xây dựng và vận hành một trang tin tức số</em> — kỹ năng mà bất kỳ tòa soạn nào cũng cần ở nhân sự mới.</p>

    <div class="callout">
      <strong>Yêu cầu dự án</strong>
      Xây dựng một <strong>trang tin tức chuyên đề hoàn chỉnh</strong> trên WordPress.com hoặc Google Sites, với tối thiểu: 5 bài viết được xuất bản, 1 bộ đồ họa thiết kế riêng, 1 biểu đồ dữ liệu tương tác, chiến lược phân phối đa kênh, và báo cáo phân tích sau 1 tuần vận hành. Tất cả xây dựng từ đầu trong vòng 2 tuần.
    </div>

    <h2>Phần 1: Xác định chủ đề và đối tượng độc giả</h2>
    <p>Bước đầu tiên — và quan trọng nhất — là chọn chủ đề đủ cụ thể để bạn có thể khai thác sâu, nhưng đủ rộng để có nhiều góc tiếp cận khác nhau. Trang tin tức "về tất cả mọi thứ" không tồn tại được — sự chuyên biệt tạo ra độc giả trung thành.</p>

    <h3>Tiêu chí chọn chủ đề tốt</h3>
    <ul>
      <li><strong>Bạn có kiến thức hoặc mối quan tâm thực sự</strong> — Viết về thứ mình không hiểu sẽ lộ ngay sau 2–3 bài</li>
      <li><strong>Có nguồn thông tin tiếp cận được</strong> — Nhân vật sẵn sàng phỏng vấn, dữ liệu công khai, sự kiện thực tế đang diễn ra</li>
      <li><strong>Đủ sự kiện trong 2 tuần</strong> — Ít nhất 5 góc tiếp cận khác nhau cho 5 bài viết</li>
      <li><strong>Có đối tượng độc giả xác định</strong> — Bạn biết họ là ai, họ đang tìm kiếm gì</li>
    </ul>

    <h3>Gợi ý chủ đề phù hợp với sinh viên báo chí tại Huế</h3>
    <ul>
      <li>Đời sống sinh viên ngoại tỉnh tại Huế — chi phí, nhà trọ, việc làm thêm</li>
      <li>Ẩm thực Huế đang thay đổi — giữa truyền thống và hiện đại hóa</li>
      <li>Khởi nghiệp trẻ tại miền Trung — câu chuyện người thật, thách thức thực tế</li>
      <li>Di sản Huế dưới mắt thế hệ Gen Z — bảo tồn hay thương mại hóa?</li>
      <li>Sức khỏe tâm thần sinh viên — chủ đề cần thiết nhưng ít được viết</li>
      <li>Thị trường lao động ngành báo chí — phỏng vấn nhà tuyển dụng, cựu sinh viên</li>
    </ul>

    <div class="step-block">
      <span class="step-num">Bài tập</span>
      <h4>Hoàn thiện bản mô tả trang trước khi bắt đầu xây dựng</h4>
      <p>Viết ra giấy (hoặc Google Docs) 4 điều sau — nếu không trả lời được rõ ràng, hãy đổi chủ đề:</p>
      <ul>
        <li><strong>Tên trang:</strong> Ngắn gọn, dễ nhớ, phản ánh chủ đề</li>
        <li><strong>Một câu mô tả:</strong> "Trang [tên] cung cấp [loại nội dung] cho [đối tượng độc giả] muốn [mục tiêu của họ]"</li>
        <li><strong>3 đối thủ/trang tham khảo:</strong> Trang nào đang làm tốt chủ đề này? Bạn sẽ khác gì họ?</li>
        <li><strong>5 tiêu đề bài đầu tiên:</strong> Nếu nghĩ ra được 5 tiêu đề thú vị ngay bây giờ, chủ đề đủ tốt</li>
      </ul>
    </div>

    <h2>Phần 2: Cấu trúc trang và kế hoạch nội dung</h2>
    <p>Trước khi mở WordPress hay Google Sites, hãy thiết kế cấu trúc trang trên giấy. Mười phút lên kế hoạch tiết kiệm nhiều giờ làm lại sau này.</p>

    <h3>Cấu trúc tối thiểu cần có</h3>

    <div class="step-block">
      <span class="step-num">Trang chủ</span>
      <h4>First impression — 5 giây quyết định tất cả</h4>
      <p>Người vào trang lần đầu phải hiểu ngay: trang này về gì, dành cho ai, và tại sao nên ở lại đọc. Header cần có: tên trang + tagline 1 câu + bài nổi bật gần đây. Không dùng ảnh stock chung chung — ảnh thực tế từ tác nghiệp của bạn luôn tốt hơn.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Chuyên mục</span>
      <h4>2–4 chuyên mục phản ánh các góc tiếp cận khác nhau</h4>
      <p>Không tạo quá nhiều chuyên mục khi chưa có đủ nội dung. Ví dụ cho trang về sinh viên ngoại tỉnh: <em>Chuyện trọ</em> (nhà ở, chi phí), <em>Việc làm thêm</em> (kinh nghiệm, cơ hội), <em>Góc học tập</em> (kỹ năng, tài nguyên), <em>Câu chuyện</em> (phóng sự nhân vật). Mỗi chuyên mục cần ít nhất 2 bài trước khi xuất hiện trên menu.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Trang Về chúng tôi</span>
      <h4>Xây dựng uy tín ngay từ đầu</h4>
      <p>Trang này trả lời: Ai đứng sau trang này? Tại sao họ viết về chủ đề này? Có thể liên hệ bằng cách nào? Đây là trang ảnh hưởng trực tiếp đến E-E-A-T (Bài 05). Thêm ảnh thật của bạn, bio ngắn nêu rõ chuyên môn và lý do lập trang, và thông tin liên hệ thực.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Trang Liên hệ</span>
      <h4>Mở kênh tiếp nhận nguồn tin và phản hồi</h4>
      <p>Nhúng Google Form đơn giản với các trường: Tên, Email, Nội dung. Ghi rõ bạn muốn nhận loại thông tin gì (gợi ý đề tài, thông tin tố giác, cộng tác). Đây cũng là nơi đặt form đăng ký newsletter.</p>
    </div>

    <h3>Kế hoạch 5 bài viết — Đa dạng thể loại</h3>
    <p>Dự án yêu cầu tối thiểu 5 bài — hãy phân bổ để thể hiện được nhiều kỹ năng khác nhau:</p>
    <ul>
      <li><strong>Bài 1 — Tin tức sự kiện:</strong> Tường thuật một sự kiện đang xảy ra, ngắn gọn 300–400 chữ, có ảnh thực tế</li>
      <li><strong>Bài 2 — Phóng sự nhân vật:</strong> Câu chuyện một người thật liên quan đến chủ đề, 600–800 chữ, có trích dẫn trực tiếp</li>
      <li><strong>Bài 3 — Báo chí dữ liệu:</strong> Bài phân tích có biểu đồ Datawrapper hoặc Flourish nhúng trực tiếp (Bài 06)</li>
      <li><strong>Bài 4 — Phóng sự ảnh / multimedia:</strong> Kết hợp ảnh + văn bản + có thể thêm video hoặc audio (Bài 08)</li>
      <li><strong>Bài 5 — Bài phân tích / bình luận:</strong> Góc nhìn riêng về một vấn đề trong chủ đề, 500–700 chữ, thể hiện quan điểm của bạn</li>
    </ul>

    <h2>Phần 3: Xây dựng bộ nhận diện thương hiệu</h2>
    <p>Một trang tin tức chuyên nghiệp cần nhất quán về mặt hình ảnh — người đọc nhận ra trang của bạn dù đang xem trên web, Facebook hay Instagram.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Logo và bảng màu — Dùng Canva (Bài 03)</h4>
      <p>Tạo logo đơn giản: tên trang + font chữ nhất quán. Chọn 2–3 màu chính và ghi lại mã hex để dùng xuyên suốt. Tạo sẵn template cho: ảnh bìa bài viết (1200×630px), ảnh vuông Instagram (1080×1080px), ảnh Story (1080×1920px). Việc tạo template một lần và điền nội dung vào mỗi bài sẽ tiết kiệm rất nhiều thời gian.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Giọng văn nhất quán</h4>
      <p>Xác định rõ: trang của bạn viết theo giọng điệu nào? Nghiêm túc và chuyên sâu như báo kinh tế? Gần gũi và thân thiện như blog? Sắc bén và đặt câu hỏi như báo điều tra? Một khi đã chọn, duy trì nhất quán trong mọi bài — người đọc đăng ký vì họ thích phong cách đó.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Tạo tài khoản mạng xã hội cho trang</h4>
      <p>Tạo ít nhất một tài khoản mạng xã hội dưới tên trang (không phải tên cá nhân). Điền đầy đủ bio, ảnh đại diện là logo, ảnh bìa phù hợp. Đây là kênh phân phối chính trong 2 tuần dự án.</p>
    </div>

    <h2>Phần 4: Checklist kỹ thuật trước khi xuất bản</h2>
    <p>Trước khi chia sẻ link trang cho người khác, đảm bảo mọi yếu tố kỹ thuật đã được kiểm tra:</p>

    <h3>SEO cơ bản (Bài 05)</h3>
    <ul>
      <li>Mỗi bài có title tag dưới 60 ký tự, chứa từ khóa chính</li>
      <li>Meta description 150–160 ký tự đã được viết cho mỗi bài</li>
      <li>URL đã chỉnh slug — không dấu, không ký tự lạ</li>
      <li>Mỗi ảnh có alt text mô tả nội dung</li>
      <li>Cấu trúc H1 → H2 → H3 đúng thứ bậc, không bỏ cấp</li>
    </ul>

    <h3>Trải nghiệm người dùng (Bài 02)</h3>
    <ul>
      <li>Trang hiển thị tốt trên điện thoại — xem trước trên nhiều kích cỡ màn hình</li>
      <li>Menu điều hướng rõ ràng, không có link chết (404)</li>
      <li>Tốc độ tải trang dưới 3 giây — kiểm tra bằng PageSpeed Insights</li>
      <li>Font chữ đủ to (tối thiểu 16px), đủ tương phản, khoảng dòng thoáng</li>
      <li>Có ít nhất 2 internal links trong mỗi bài dài</li>
    </ul>

    <h3>Nội dung và đạo đức (Bài 09)</h3>
    <ul>
      <li>Mọi thông tin, số liệu đã được xác minh từ nguồn đáng tin cậy</li>
      <li>Ảnh và video có ghi nguồn hoặc là tài liệu của bạn</li>
      <li>Nhân vật được phỏng vấn đã đồng ý được dẫn tên và trích dẫn</li>
      <li>Có trang Giới thiệu và thông tin tác giả rõ ràng</li>
      <li>Footer có thông tin liên hệ và chính sách bản quyền cơ bản</li>
    </ul>

    <h3>Analytics và đo lường (Bài 11)</h3>
    <ul>
      <li>Google Analytics 4 đã cài và xác nhận đang nhận dữ liệu (kiểm tra Realtime)</li>
      <li>Google Search Console đã kết nối và sitemap đã submit</li>
      <li>Form đăng ký newsletter đã hoạt động — tự test bằng email phụ</li>
    </ul>

    <h2>Phần 5: Chiến lược ra mắt và vận hành 2 tuần</h2>

    <div class="step-block">
      <span class="step-num">Tuần 1</span>
      <h4>Ra mắt và xây dựng nền tảng</h4>
      <p><strong>Ngày 1–2:</strong> Hoàn thiện thiết lập kỹ thuật, đăng ít nhất 3 bài đầu tiên. Không ra mắt trang trống — người vào lần đầu mà không thấy nội dung sẽ không quay lại.</p>
      <p><strong>Ngày 3:</strong> Soft launch — chia sẻ link trong nhóm bạn bè, gia đình, lớp học. Thu thập phản hồi về trải nghiệm đọc (không phải khen/chê nội dung — hỏi cụ thể: "Bạn có hiểu trang này về gì không? Có gì khó tìm không?").</p>
      <p><strong>Ngày 4–7:</strong> Đăng bài 4 và 5. Chia sẻ mỗi bài lên mạng xã hội với caption theo công thức HOOK–VALUE–CTA (Bài 07). Bắt đầu tương tác với comment và nhắn tin.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Tuần 2</span>
      <h4>Phân tích, tối ưu và báo cáo</h4>
      <p><strong>Ngày 8–10:</strong> Xem báo cáo GA4 sau 1 tuần. Bài nào có traffic cao nhất? Từ kênh nào? Engagement time bài nào tốt nhất? Dùng dữ liệu đó để quyết định chủ đề bài tiếp theo.</p>
      <p><strong>Ngày 11–12:</strong> Gửi newsletter đầu tiên (Mailchimp hoặc Substack) tóm tắt nội dung nổi bật tuần 1, kèm preview bài sắp đăng. Mời người đăng ký — form đặt ở cuối mỗi bài và trên mạng xã hội.</p>
      <p><strong>Ngày 13–14:</strong> Hoàn thiện báo cáo tổng kết. Chuẩn bị bài thuyết trình.</p>
    </div>

    <h2>Phần 6: Báo cáo tổng kết và bài thuyết trình</h2>
    <p>Sản phẩm nộp gồm hai phần: trang web đã vận hành và báo cáo phân tích.</p>

    <h3>Trang web — Tiêu chí chấm điểm</h3>

    <div class="step-block">
      <span class="step-num">40 điểm</span>
      <h4>Chất lượng nội dung</h4>
      <ul>
        <li>5 bài viết đầy đủ, đúng thể loại đã đề ra (10đ)</li>
        <li>Thông tin chính xác, có nguồn dẫn rõ ràng (10đ)</li>
        <li>Có ít nhất 1 bài báo chí dữ liệu với biểu đồ tương tác (10đ)</li>
        <li>Có ít nhất 1 bài multimedia kết hợp nhiều định dạng (10đ)</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">30 điểm</span>
      <h4>Kỹ thuật và trải nghiệm người dùng</h4>
      <ul>
        <li>SEO on-page đầy đủ: title, meta description, URL, alt text, heading (10đ)</li>
        <li>Giao diện responsive, tốc độ tải tốt, điều hướng rõ ràng (10đ)</li>
        <li>Nhận diện thương hiệu nhất quán: logo, màu sắc, đồ họa (10đ)</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">30 điểm</span>
      <h4>Phân phối và đo lường</h4>
      <ul>
        <li>Có tài khoản mạng xã hội với ít nhất 5 bài đăng chất lượng (10đ)</li>
        <li>GA4 cài đặt đúng, có dữ liệu thực sau 1 tuần vận hành (10đ)</li>
        <li>Báo cáo phân tích có nhận xét và quyết định nội dung dựa trên dữ liệu (10đ)</li>
      </ul>
    </div>

    <h3>Báo cáo phân tích — Nội dung cần có</h3>
    <p>Viết báo cáo 500–700 chữ (hoặc trình bày dạng slide 8–10 trang) gồm:</p>
    <ol>
      <li><strong>Tổng quan dự án:</strong> Tên trang, chủ đề, đối tượng độc giả nhắm đến, lý do chọn chủ đề này</li>
      <li><strong>Số liệu sau 1 tuần:</strong> Tổng users, tổng sessions, top 3 bài có traffic cao nhất, nguồn traffic chính</li>
      <li><strong>Điều hoạt động tốt:</strong> Bài nào / kênh nào / thời điểm nào mang lại kết quả tốt nhất? Tại sao bạn nghĩ vậy?</li>
      <li><strong>Điều cần cải thiện:</strong> Nếu làm lại, bạn sẽ thay đổi gì? (chủ đề, cấu trúc, phân phối...)</li>
      <li><strong>Kế hoạch 1 tháng tới:</strong> Nếu tiếp tục vận hành trang này sau khóa học, bạn sẽ làm gì trong tháng đầu tiên?</li>
    </ol>

    <h3>Bài thuyết trình trước lớp — 5 phút</h3>
    <p>Trình bày trực tiếp trên trang web đã xây dựng (không dùng slide PowerPoint riêng). Dẫn người nghe đi qua: trang chủ, một bài viết tiêu biểu, tài khoản mạng xã hội, và báo cáo GA4. Trả lời câu hỏi từ giảng viên và các bạn trong 2–3 phút.</p>

    <div class="callout">
      <strong>Lịch nộp bài</strong>
      <ul style="margin-top: 8px;">
        <li><strong>Cuối tuần 1 (Ngày 7):</strong> Nộp link trang web đã có ít nhất 3 bài — để giảng viên xem trước và góp ý</li>
        <li><strong>Cuối tuần 2 (Ngày 14):</strong> Nộp link trang web hoàn chỉnh + file báo cáo phân tích</li>
        <li><strong>Buổi học cuối:</strong> Thuyết trình 5 phút trước lớp</li>
      </ul>
    </div>

    <h2>Tài nguyên hỗ trợ</h2>
    <p>Trong quá trình làm dự án, bạn có thể cần dùng lại các công cụ và tài liệu từ các bài học trước. Dưới đây là danh sách tổng hợp nhanh:</p>

    <div class="step-block">
      <span class="step-num">Tạo trang web</span>
      <h4>Bài 01 (Google Sites) · Bài 04 (WordPress)</h4>
      <p>Google Sites: <strong>sites.google.com</strong> — Nhanh, miễn phí, phù hợp nếu đã quen.<br>
      WordPress.com: <strong>wordpress.com</strong> — Chuyên nghiệp hơn, nhiều tính năng hơn, khuyến nghị cho dự án này.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Thiết kế đồ họa</span>
      <h4>Bài 03 (Canva)</h4>
      <p><strong>canva.com</strong> — Template ảnh bìa bài viết, banner mạng xã hội, infographic. Tạo Brand Kit (màu sắc, font chữ) để mọi ảnh nhất quán nhau.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Biểu đồ dữ liệu</span>
      <h4>Bài 06 (Datawrapper & Flourish)</h4>
      <p><strong>datawrapper.de</strong> — Biểu đồ cột, đường, bản đồ — đơn giản và nhúng dễ.<br>
      <strong>flourish.studio</strong> — Biểu đồ tương tác đẹp hơn, nhiều loại hơn, phù hợp bài báo chí dữ liệu.</p>
    </div>

    <div class="step-block">
      <span class="step-num">SEO</span>
      <h4>Bài 05</h4>
      <p><strong>trends.google.com</strong> — Nghiên cứu từ khóa theo xu hướng.<br>
      <strong>search.google.com/search-console</strong> — Theo dõi hiệu suất SEO.<br>
      <strong>pagespeed.web.dev</strong> — Kiểm tra tốc độ tải trang.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Phân phối nội dung</span>
      <h4>Bài 07</h4>
      <p><strong>buffer.com</strong> — Lên lịch đăng mạng xã hội miễn phí (3 kênh).<br>
      <strong>business.facebook.com</strong> — Meta Business Suite quản lý Facebook + Instagram.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Newsletter</span>
      <h4>Bài 10</h4>
      <p><strong>mailchimp.com</strong> — Gói miễn phí đến 500 người đăng ký.<br>
      <strong>substack.com</strong> — Nếu muốn đơn giản hơn và có trang web đi kèm tự động.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Analytics</span>
      <h4>Bài 11</h4>
      <p><strong>analytics.google.com</strong> — GA4, hoàn toàn miễn phí.<br>
      <strong>hotjar.com</strong> — Heatmap và session recording, gói miễn phí đủ dùng.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Lời khuyên cuối khóa:</strong> Đừng chờ mọi thứ hoàn hảo mới ra mắt. Trang "đủ tốt" được xuất bản và cải thiện dần luôn có giá trị hơn trang "hoàn hảo" mãi trong bản nháp. Nhà báo học nghề bằng cách làm — mỗi bài bạn xuất bản là một bài học thực sự. Chúc bạn thành công với dự án cuối khóa và xa hơn nữa trong hành trình làm báo số.</p>
    </div>

    <h2>Lời kết khóa học</h2>
    <p>Bạn đã hoàn thành 12 bài học bao phủ toàn bộ hành trình của một nhà báo số hiện đại — từ kỹ thuật tạo trang web, thiết kế, viết nội dung chuẩn SEO, phân phối đa kênh, bảo mật tác nghiệp, đến phân tích dữ liệu. Đây không phải điểm kết thúc — đây là nền tảng để bạn tiếp tục học và thực hành.</p>
    <p>Công nghệ thay đổi nhanh. Công cụ hôm nay có thể lỗi thời sau 5 năm. Nhưng tư duy — hiểu người đọc, kể câu chuyện có cấu trúc, đưa ra quyết định dựa trên dữ liệu, và luôn đặt chất lượng thông tin lên trên — đó là những gì không bao giờ lỗi thời.</p>
    <p style="text-align: center; margin-top: 32px; font-style: italic; color: var(--muted);">— Nguyễn Dũng · Khoa Công nghệ thông tin · Đại học Khoa học, Đại học Huế —</p>
  `
};
