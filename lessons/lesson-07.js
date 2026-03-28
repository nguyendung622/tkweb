// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-07.js
// Bài 07: Mạng xã hội & phân phối nội dung
// ═══════════════════════════════════════════

const LESSON_07 = {
  id: 7,
  num: "07",
  title: "Mạng xã hội &amp; <em>phân phối nội dung</em>",
  duration: "90 phút",
  level: "Trung cấp",
  tool: "Facebook · TikTok · Instagram · Buffer · Meta Business Suite",
  prevLesson: { id: 6, title: "Bài 06: Báo chí dữ liệu & trực quan hóa" },
  nextLesson: { id: 8, title: "Bài 08: Multimedia Storytelling" },

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Viết xong bài là mới đi được nửa đường. Nửa còn lại — đưa bài đến tay người đọc — đang ngày càng phụ thuộc vào mạng xã hội. Theo Reuters Institute Digital News Report 2024, <strong>hơn 60% người đọc tin tức trực tuyến tại Đông Nam Á khám phá bài báo thông qua mạng xã hội</strong>, không phải qua trang chủ của tòa soạn. Nếu không có chiến lược phân phối, nội dung hay nhất cũng sẽ chết trong im lặng.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: hiểu đặc thù từng nền tảng mạng xã hội phổ biến tại Việt Nam; biết cách điều chỉnh cùng một nội dung cho nhiều nền tảng khác nhau; xây dựng lịch đăng bài đều đặn; đo lường hiệu quả và điều chỉnh chiến lược dựa trên dữ liệu thực.
    </div>

    <h2>Phần 1: Hiểu từng nền tảng</h2>
    <p>Mỗi mạng xã hội là một hệ sinh thái riêng với người dùng khác nhau, thuật toán khác nhau và định dạng nội dung ưu tiên khác nhau. Dùng cùng một nội dung cho mọi nền tảng là sai lầm phổ biến nhất.</p>

    <h3>Facebook — Vẫn là nền tảng số 1 tại Việt Nam</h3>
    <p>Với hơn <strong>76 triệu người dùng tại Việt Nam</strong>, Facebook vẫn là kênh phân phối nội dung báo chí chủ lực. Tuy nhiên, organic reach (lượt tiếp cận tự nhiên không trả phí) của trang (Page) đã giảm mạnh — trung bình chỉ còn 2–5% số người theo dõi thấy bài.</p>
    <ul>
      <li><strong>Định dạng hoạt động tốt:</strong> Video ngắn (Reels), ảnh carousel, bài viết có câu hỏi kêu gọi bình luận</li>
      <li><strong>Thời điểm đăng tốt nhất:</strong> 7–9 giờ sáng, 12–13 giờ trưa, 20–22 giờ tối</li>
      <li><strong>Độ dài caption lý tưởng:</strong> 40–80 chữ — đủ để tóm tắt, đủ ngắn để người đọc không ngại đọc</li>
      <li><strong>Công cụ quản lý:</strong> Meta Business Suite (miễn phí) — lên lịch đăng, xem analytics, quản lý nhiều trang</li>
    </ul>

    <h3>TikTok — Kênh báo chí trẻ nhất và tăng nhanh nhất</h3>
    <p>TikTok đang trở thành nguồn tin tức chính của Gen Z. Theo khảo sát Pew Research 2023, <strong>32% người dùng TikTok tại Mỹ thường xuyên đọc tin tức trên nền tảng này</strong> — con số tương tự đang tăng nhanh ở Việt Nam.</p>
    <ul>
      <li><strong>Định dạng bắt buộc:</strong> Video dọc 9:16, độ dài 30–90 giây cho tin tức, 3–5 phút cho phân tích sâu</li>
      <li><strong>Hook — 3 giây đầu là tất cả:</strong> Phải có câu mở kéo người xem ở lại. Ví dụ: <em>"Điều này xảy ra ngay tại [địa điểm quen thuộc] — và ít ai biết"</em></li>
      <li><strong>Caption:</strong> Ngắn, có hashtag liên quan (5–8 hashtag), luôn có call-to-action</li>
      <li><strong>Thuật toán TikTok:</strong> Ưu tiên tỷ lệ xem hết video (completion rate) và lượt chia sẻ hơn là số follower</li>
    </ul>

    <h3>Instagram — Kể chuyện bằng hình ảnh</h3>
    <p>Instagram phù hợp nhất với báo chí ảnh, phóng sự ảnh và infographic. Đây cũng là nền tảng xây dựng thương hiệu cá nhân nhà báo hiệu quả nhất.</p>
    <ul>
      <li><strong>Feed Posts:</strong> Ảnh chất lượng cao, caption có chiều sâu (có thể dài đến 2.200 ký tự), 5–10 hashtag</li>
      <li><strong>Stories:</strong> Nội dung hàng ngày, thăm dò ý kiến, hỏi đáp với người theo dõi, link bài viết</li>
      <li><strong>Reels:</strong> Video ngắn 15–90 giây, định dạng giống TikTok, được thuật toán ưu tiên mạnh</li>
      <li><strong>Carousel:</strong> Bộ ảnh 2–10 tấm — định dạng tốt nhất để kể một câu chuyện có cấu trúc</li>
    </ul>

    <h3>YouTube — Báo chí video dài hơi</h3>
    <p>YouTube phù hợp với phóng sự dài, phỏng vấn chuyên sâu và talkshow. Video YouTube tồn tại lâu dài và có thể được tìm kiếm — đây là kho lưu trữ nội dung giá trị.</p>
    <ul>
      <li><strong>Độ dài lý tưởng:</strong> 8–15 phút cho nội dung báo chí (đủ dài để YouTube chèn quảng cáo, đủ ngắn để giữ người xem)</li>
      <li><strong>Thumbnail:</strong> Ảnh bìa rõ mặt người, chữ to tương phản cao, màu sắc nổi bật</li>
      <li><strong>SEO YouTube:</strong> Tiêu đề có từ khóa, description dài 150–300 chữ, chapters (mục lục thời gian)</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Nguyên tắc chọn nền tảng:</strong> Đừng cố gắng có mặt ở mọi nơi — bạn sẽ không làm tốt nền tảng nào cả. Chọn 2 nền tảng phù hợp nhất với đối tượng độc giả bạn nhắm đến và làm thật tốt trước khi mở rộng.</p>
    </div>

    <h2>Phần 2: Điều chỉnh nội dung theo nền tảng (Content Repurposing)</h2>
    <p>Một bài phóng sự tốn nhiều công sức — hãy khai thác tối đa bằng cách biến nó thành nhiều định dạng cho nhiều nền tảng khác nhau. Đây gọi là <em>content repurposing</em> (tái chế nội dung).</p>

    <div class="callout">
      <strong>Ví dụ thực tế: Phóng sự "Sinh viên Huế và áp lực tìm việc sau tốt nghiệp"</strong>
      <ul style="margin-top: 8px;">
        <li><strong>Website/WordPress:</strong> Bài phóng sự đầy đủ 1.500 chữ + ảnh + biểu đồ số liệu</li>
        <li><strong>Facebook:</strong> Tóm tắt 3 điểm chính + 1 ảnh nổi bật + link bài gốc</li>
        <li><strong>TikTok/Reels:</strong> Video 60 giây phỏng vấn 1 sinh viên kể câu chuyện thật</li>
        <li><strong>Instagram Carousel:</strong> 5 slide — mỗi slide 1 con số đáng chú ý từ bài</li>
        <li><strong>YouTube:</strong> Video phóng sự đầy đủ 8–10 phút với b-roll và phỏng vấn</li>
        <li><strong>Stories:</strong> Hỏi followers: "Bạn có lo về việc làm sau tốt nghiệp không?"</li>
      </ul>
    </div>

    <h3>Công thức viết caption hiệu quả</h3>
    <p>Caption tốt không phải là tóm tắt bài viết — mà là <em>lý do để người ta dừng lại và click</em>. Áp dụng công thức <strong>HOOK — VALUE — CTA</strong>:</p>

    <div class="step-block">
      <span class="step-num">H</span>
      <h4>Hook — Câu mở gây chú ý</h4>
      <p>Dòng đầu tiên phải đủ sức kéo người dùng ngừng scroll. Một số công thức hiệu quả:</p>
      <ul>
        <li>Con số bất ngờ: <em>"73% sinh viên ra trường không tìm được việc đúng ngành trong 6 tháng đầu."</em></li>
        <li>Câu hỏi gây tò mò: <em>"Tại sao tòa soạn lớn nhất Việt Nam lại bỏ Facebook?"</em></li>
        <li>Phản trực giác: <em>"Học báo chí xong, tôi không trở thành phóng viên — và đó là quyết định đúng nhất."</em></li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">V</span>
      <h4>Value — Giá trị cụ thể bạn cung cấp</h4>
      <p>Sau hook, nói rõ người đọc sẽ nhận được gì khi đọc bài / xem video. Không cần dài — 1–2 câu đủ. Ví dụ: <em>"Trong bài này, tôi phỏng vấn 12 sinh viên năm cuối và tổng hợp 5 kỹ năng được nhà tuyển dụng yêu cầu nhiều nhất hiện nay."</em></p>
    </div>

    <div class="step-block">
      <span class="step-num">CTA</span>
      <h4>Call to Action — Kêu gọi hành động</h4>
      <p>Luôn kết thúc bằng một hành động cụ thể: đọc bài (link in bio / link comment), bình luận ý kiến, chia sẻ cho bạn bè, hoặc theo dõi để không bỏ lỡ. Không có CTA = để người đọc tự biết làm gì = mất cơ hội tương tác.</p>
    </div>

    <h2>Phần 3: Xây dựng lịch đăng bài (Content Calendar)</h2>
    <p>Đều đặn quan trọng hơn nhiều. Một tài khoản đăng 3 bài/tuần liên tục 3 tháng sẽ xây dựng được lượng người theo dõi bền vững hơn nhiều so với đăng 20 bài trong 1 tuần rồi im lặng.</p>

    <h3>Tần suất đề xuất cho sinh viên báo chí</h3>
    <ul>
      <li><strong>Facebook Page:</strong> 4–5 bài/tuần — kết hợp tin nhanh, bài phân tích và nội dung hậu trường</li>
      <li><strong>Instagram:</strong> 3–4 Feed posts/tuần + Stories hàng ngày</li>
      <li><strong>TikTok:</strong> 5–7 video/tuần (thuật toán TikTok thưởng cho tài khoản đăng thường xuyên)</li>
      <li><strong>YouTube:</strong> 1–2 video/tuần — chất lượng ưu tiên hơn số lượng</li>
    </ul>

    <h3>Cấu trúc lịch nội dung trong tuần</h3>
    <p>Thay vì nghĩ từng bài riêng lẻ, hãy thiết kế <em>chủ đề theo ngày</em>:</p>
    <ul>
      <li><strong>Thứ Hai:</strong> Tin tức đầu tuần / sự kiện sắp diễn ra</li>
      <li><strong>Thứ Ba:</strong> Phóng sự / bài phân tích chuyên sâu</li>
      <li><strong>Thứ Tư:</strong> Infographic / dữ liệu trực quan</li>
      <li><strong>Thứ Năm:</strong> Phỏng vấn / câu chuyện con người</li>
      <li><strong>Thứ Sáu:</strong> Tổng hợp tuần / nội dung nhẹ nhàng hơn</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Công cụ lên lịch miễn phí:</strong> <strong>Buffer</strong> (miễn phí 3 kênh, lên lịch 10 bài/kênh) và <strong>Meta Business Suite</strong> (miễn phí cho Facebook + Instagram) cho phép bạn chuẩn bị cả tuần nội dung vào cuối tuần và hẹn giờ đăng tự động — không cần online đúng giờ vàng.</p>
    </div>

    <h2>Phần 4: Đo lường hiệu quả</h2>
    <p>Làm mạng xã hội mà không xem số liệu giống như lái xe nhắm mắt. Dữ liệu cho bạn biết nội dung nào đang hoạt động, để làm thêm — và nội dung nào đang thất bại, để dừng lại.</p>

    <h3>Các chỉ số quan trọng cần theo dõi</h3>

    <div class="step-block">
      <span class="step-num">Reach & Impressions</span>
      <h4>Tiếp cận và Hiển thị</h4>
      <p><strong>Reach</strong> là số người dùng duy nhất đã thấy bài. <strong>Impressions</strong> là tổng số lần bài được hiển thị (một người thấy 3 lần = 1 reach, 3 impressions). Reach thấp so với số follower cho thấy thuật toán đang hạn chế bài của bạn — cần thay đổi định dạng hoặc chủ đề.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Engagement Rate</span>
      <h4>Tỷ lệ tương tác</h4>
      <p>Tính bằng: (Likes + Comments + Shares + Saves) / Reach × 100%. Mức trung bình ngành: Facebook 1–3%, Instagram 3–6%, TikTok 5–10%. Engagement rate thấp hơn mức này nghĩa là nội dung chưa đủ hấp dẫn hoặc chưa đúng đối tượng.</p>
      <p><strong>Lưu ý:</strong> Shares và Saves có giá trị cao hơn Likes — chúng cho thấy nội dung đủ hay để người ta muốn giữ lại hoặc chia sẻ với người khác.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Click-through Rate</span>
      <h4>Tỷ lệ click vào link</h4>
      <p>Với bài có link dẫn về trang web, CTR cho biết bao nhiêu % người thấy bài thực sự click vào đọc. CTR dưới 1% nghĩa là caption chưa đủ thuyết phục. Thử thay đổi hook và CTA để cải thiện.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Follower Growth</span>
      <h4>Tăng trưởng người theo dõi</h4>
      <p>Theo dõi hàng tuần, không hàng ngày. Đột biến tăng follower thường đến từ một bài viral — phân tích bài đó để hiểu <em>tại sao</em> nó lan rộng và tái tạo yếu tố đó. Mất follower sau một bài gây tranh cãi là chuyện bình thường — quan trọng là giữ được những người thực sự quan tâm đến nội dung của bạn.</p>
    </div>

    <h3>Quy trình review hàng tuần (30 phút)</h3>
    <ol>
      <li>Xem lại 3–5 bài đăng tuần qua, so sánh chỉ số</li>
      <li>Xác định bài hoạt động tốt nhất — tại sao? (chủ đề, định dạng, thời điểm đăng?)</li>
      <li>Xác định bài hoạt động kém nhất — lý do gì?</li>
      <li>Rút ra 1–2 điều chỉnh cho tuần tới</li>
      <li>Lên lịch nội dung tuần tiếp theo</li>
    </ol>

    <div class="callout">
      <strong>Đạo đức truyền thông số — Ranh giới cần nhớ</strong>
      Mạng xã hội tạo áp lực lớn phải đăng nhanh, câu like và tạo nội dung gây tranh cãi. Nhà báo cần giữ vững các nguyên tắc: <strong>không đăng thông tin chưa kiểm chứng</strong> dù đang viral; <strong>không dùng ảnh / video của người khác</strong> mà không ghi nguồn; <strong>không giật tít câu view</strong> sai lệch nội dung; <strong>phân biệt rõ</strong> bài báo chính thức và ý kiến cá nhân trên trang cá nhân. Uy tín xây dựng hàng năm, mất đi trong một bài đăng bất cẩn.
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Chọn một bài đã viết trên WordPress (từ Bài 04). Tạo bộ nội dung phân phối cho 3 nền tảng: (1) Caption Facebook theo công thức HOOK–VALUE–CTA, (2) Script 60 giây cho TikTok/Reels, (3) Bộ 4 slide Instagram Carousel. Nộp file Google Docs với đầy đủ 3 phiên bản và giải thích ngắn lý do bạn điều chỉnh nội dung khác nhau cho từng nền tảng.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Phân phối nội dung là kỹ năng ngày càng quan trọng ngang với kỹ năng viết. Nhà báo hiện đại không chỉ sản xuất nội dung — họ còn phải là người phân phối chiến lược, biết dùng đúng định dạng đúng nền tảng đúng thời điểm, và liên tục học hỏi từ dữ liệu để cải thiện.</p>
    <p>Bài học tiếp theo sẽ tổng hợp nhiều kỹ năng đã học vào một sản phẩm hoàn chỉnh: <strong>Multimedia Storytelling</strong> — kể chuyện đa phương tiện kết hợp văn bản, ảnh, video, âm thanh và dữ liệu.</p>
  `
};
