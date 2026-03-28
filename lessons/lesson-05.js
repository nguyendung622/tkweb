// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-05.js
// Bài 05: SEO cho nhà báo
// ═══════════════════════════════════════════

const LESSON_05 = {
  id: 5,
  num: "05",
  title: "SEO cho <em>nhà báo</em>",
  duration: "90 phút",
  level: "Lý thuyết & Thực hành",
  tool: "Google Search Console · Yoast SEO · Ubersuggest",
  prevLesson: { id: 4, title: "Bài 04: WordPress cơ bản" },
  nextLesson: { id: 6, title: "Bài 06: Báo chí dữ liệu & trực quan hóa" },

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Bạn viết một bài phóng sự công phu, đăng lên web — nhưng không ai tìm thấy. Đây không phải chuyện hiếm. Theo thống kê của Backlinko, <strong>hơn 90% nội dung trên internet không nhận được bất kỳ lượt truy cập nào từ Google</strong>. SEO (Search Engine Optimization) là tập hợp kỹ thuật giúp bài báo của bạn xuất hiện đúng lúc, đúng chỗ, trước mắt đúng người.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: hiểu cách Google tìm kiếm và xếp hạng nội dung; viết tiêu đề, mô tả và URL chuẩn SEO; biết cách nghiên cứu từ khóa phù hợp chủ đề báo chí; tối ưu cấu trúc bài viết để Google hiểu đúng nội dung; theo dõi hiệu quả bằng Google Search Console.
    </div>

    <h2>Phần 1: Google hoạt động như thế nào?</h2>
    <p>Trước khi tối ưu, bạn cần hiểu hệ thống mình đang làm việc cùng. Google vận hành qua ba bước liên tục:</p>

    <div class="step-block">
      <span class="step-num">1</span>
      <h4>Crawling — Thu thập dữ liệu</h4>
      <p>Google dùng các chương trình gọi là <em>spider</em> (hoặc <em>bot</em>) để liên tục duyệt web, theo dõi từng đường link và đọc nội dung trang. Nếu trang của bạn không có link từ nơi khác trỏ tới, bot có thể mất nhiều tuần mới tìm thấy.</p>
      <p><strong>Hàm ý thực tế:</strong> Khi đăng bài mới trên Google Sites hay WordPress, hãy chia sẻ ngay lên mạng xã hội hoặc nhúng link vào trang hiện có — điều này giúp bot tìm thấy nhanh hơn.</p>
    </div>

    <div class="step-block">
      <span class="step-num">2</span>
      <h4>Indexing — Lập chỉ mục</h4>
      <p>Sau khi crawl, Google phân tích và lưu trữ nội dung trang vào cơ sở dữ liệu khổng lồ gọi là <em>index</em>. Google đọc văn bản, ảnh (qua alt text), tiêu đề và cấu trúc trang để hiểu bài viết về chủ đề gì.</p>
      <p><strong>Hàm ý thực tế:</strong> Nội dung phải là văn bản thực — không nên chứa toàn hình ảnh, vì Google không đọc được chữ trong ảnh.</p>
    </div>

    <div class="step-block">
      <span class="step-num">3</span>
      <h4>Ranking — Xếp hạng</h4>
      <p>Khi người dùng tìm kiếm, Google dùng hơn 200 tín hiệu để quyết định trang nào xuất hiện đầu tiên. Các yếu tố quan trọng nhất gồm: mức độ liên quan đến từ khóa, chất lượng và độ tin cậy của trang, tốc độ tải, trải nghiệm trên điện thoại và số lượng trang khác dẫn link tới (backlink).</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Quan niệm sai lầm phổ biến:</strong> SEO không phải "đánh lừa Google". Các thuật toán hiện đại như BERT và MUM của Google đủ thông minh để nhận ra nội dung được viết cho người đọc hay viết để spam từ khóa. Chiến lược tốt nhất: viết hay, cấu trúc rõ ràng.</p>
    </div>

    <h2>Phần 2: Nghiên cứu từ khóa</h2>
    <p>Từ khóa là cầu nối giữa điều người đọc tìm kiếm và nội dung bạn cung cấp. Nghiên cứu từ khóa không phải chèn thật nhiều chữ vào bài — mà là <em>hiểu ngôn ngữ của độc giả</em>.</p>

    <h3>Phân loại từ khóa</h3>
    <ul>
      <li><strong>Từ khóa đầu (Head keywords)</strong> — Ngắn, tìm kiếm nhiều, cạnh tranh cực cao. Ví dụ: "bóng đá", "covid", "chứng khoán". Rất khó xếp hạng nếu bạn không phải trang lớn.</li>
      <li><strong>Từ khóa đuôi dài (Long-tail keywords)</strong> — Dài hơn, cụ thể hơn, ít cạnh tranh hơn. Ví dụ: "cách theo dõi phiên tòa trực tuyến tại Việt Nam", "kỹ năng phỏng vấn nhân chứng tai nạn". Đây là mảnh đất màu mỡ cho báo chí chuyên sâu.</li>
      <li><strong>Từ khóa câu hỏi</strong> — Bắt đầu bằng ai, cái gì, ở đâu, khi nào, tại sao, như thế nào. Google dành riêng ô "Featured Snippet" (hộp câu trả lời) cho loại này — cơ hội vàng để xuất hiện trên cùng trang kết quả.</li>
    </ul>

    <h3>Công cụ nghiên cứu từ khóa miễn phí</h3>
    <ul>
      <li><strong>Google Search (gợi ý tự động)</strong> — Gõ chủ đề vào thanh tìm kiếm, chú ý các gợi ý xuất hiện. Đây là dữ liệu thực từ hàng triệu lượt tìm kiếm.</li>
      <li><strong>Google Trends</strong> — So sánh mức độ quan tâm theo thời gian và địa lý. Hữu ích để biết chủ đề đang lên hay đang xuống.</li>
      <li><strong>Ubersuggest</strong> — Giao diện thân thiện, cho thấy lượng tìm kiếm hàng tháng và mức độ cạnh tranh. Miễn phí 3 lượt/ngày.</li>
      <li><strong>"Mọi người cũng hỏi" (People also ask)</strong> — Phần box câu hỏi trên trang kết quả Google. Đây là danh sách từ khóa câu hỏi miễn phí, cực kỳ giá trị.</li>
    </ul>

    <div class="callout">
      <strong>Ví dụ thực hành: Nghiên cứu từ khóa cho bài về "biến đổi khí hậu"</strong>
      Thay vì nhắm "biến đổi khí hậu" (cạnh tranh cực cao), hãy thử: "biến đổi khí hậu ảnh hưởng nông nghiệp miền Trung", "người dân ven biển đối phó nước biển dâng như thế nào", "nhiệt độ Hà Nội tăng bao nhiêu độ trong 20 năm". Từ khóa cụ thể → đúng đối tượng → tỷ lệ đọc hết bài cao hơn.
    </div>

    <h2>Phần 3: Tối ưu On-page — Trực tiếp trên bài viết</h2>
    <p>On-page SEO là những gì bạn kiểm soát hoàn toàn trên trang của mình. Đây là nơi nhà báo có thể tác động ngay lập tức.</p>

    <div class="step-block">
      <span class="step-num">Yếu tố 1</span>
      <h4>Tiêu đề trang (Title Tag) — Quan trọng nhất</h4>
      <p>Đây là dòng chữ màu xanh to xuất hiện trên Google. Giới hạn <strong>50–60 ký tự</strong>. Từ khóa chính nên ở đầu tiêu đề. So sánh:</p>
      <ul>
        <li>❌ <em>"Bài viết về tình trạng ô nhiễm không khí tại các thành phố lớn ở Việt Nam năm 2024"</em> (quá dài, bị cắt)</li>
        <li>✅ <em>"Ô nhiễm không khí Hà Nội 2024: Chỉ số AQI nguy hiểm như thế nào?"</em> (đúng độ dài, có từ khóa, có câu hỏi)</li>
      </ul>
      <p>Trên WordPress, chỉnh title tag qua plugin Yoast SEO. Trên Google Sites, title tag lấy từ tên trang — đặt tên trang cẩn thận.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Yếu tố 2</span>
      <h4>Meta Description — Đoạn mô tả dưới tiêu đề</h4>
      <p>Không ảnh hưởng trực tiếp đến xếp hạng nhưng quyết định tỷ lệ người <em>click vào</em> bài. Giới hạn <strong>150–160 ký tự</strong>. Phải chứa từ khóa chính và một "lời hứa" rõ ràng với người đọc.</p>
      <p>Ví dụ tốt: <em>"Chỉ số AQI Hà Nội liên tục vượt ngưỡng 150 trong tháng 11. Chuyên gia giải thích nguyên nhân và cách bảo vệ sức khỏe khi không khí ô nhiễm nặng."</em></p>
    </div>

    <div class="step-block">
      <span class="step-num">Yếu tố 3</span>
      <h4>URL — Đường dẫn bài viết</h4>
      <p>URL ngắn, không dấu, dùng dấu gạch ngang (-) thay khoảng trắng. Bao gồm từ khóa chính.</p>
      <ul>
        <li>❌ <code>example.com/bai-viet-moi-123456</code></li>
        <li>✅ <code>example.com/o-nhiem-khong-khi-ha-noi-2024</code></li>
      </ul>
      <p>Trên WordPress, chỉnh URL trong phần "Permalink" khi viết bài. Không thay đổi URL sau khi bài đã được index — sẽ mất hết thứ hạng đã có.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Yếu tố 4</span>
      <h4>Tiêu đề trong bài (H1, H2, H3)</h4>
      <p>Mỗi bài chỉ có <strong>một H1</strong> — thường là tiêu đề bài báo. H2 dùng cho các phần chính, H3 cho các mục nhỏ. Google đọc các tiêu đề này để hiểu cấu trúc bài. Đặt từ khóa vào H2 một cách tự nhiên — không nhồi nhét.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Yếu tố 5</span>
      <h4>Alt Text cho ảnh</h4>
      <p>Google không "nhìn" được ảnh — nó đọc văn bản mô tả ảnh (alt text). Mỗi ảnh cần có alt text mô tả nội dung ảnh và chứa từ khóa khi phù hợp.</p>
      <ul>
        <li>❌ <code>alt="img_20241105.jpg"</code></li>
        <li>✅ <code>alt="Chỉ số AQI Hà Nội hiển thị 178 trên bảng điện tử ngày 5/11/2024"</code></li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Yếu tố 6</span>
      <h4>Internal Linking — Liên kết nội bộ</h4>
      <p>Trong bài viết, chủ động dẫn link tới các bài liên quan trên cùng trang. Điều này giúp độc giả đọc thêm và giúp Google hiểu cấu trúc chủ đề của bạn. Quy tắc đơn giản: mỗi bài dài trên 800 chữ nên có ít nhất 2–3 internal link.</p>
    </div>

    <h2>Phần 4: SEO cho báo chí — Những đặc thù riêng</h2>
    <p>Báo chí có những yêu cầu SEO khác với blog hay website thương mại. Dưới đây là các điểm đặc thù bạn cần biết.</p>

    <h3>Tin tức thời sự — Tốc độ là ưu tiên số 1</h3>
    <p>Google News ưu tiên bài mới nhất cho các từ khóa tin tức. Khi một sự kiện xảy ra, bài đăng trong vòng 1–2 giờ đầu có lợi thế lớn. Sau 24 giờ, thứ hạng dịch chuyển về các bài phân tích sâu hơn. Chiến lược: đăng nhanh với thông tin cơ bản, sau đó cập nhật và bổ sung chi tiết.</p>

    <h3>Evergreen Content — Nội dung xanh lá</h3>
    <p>Đây là bài viết không bị lỗi thời — hướng dẫn, giải thích, phân tích chuyên sâu. Ví dụ: "Luật báo chí Việt Nam quy định gì về quyền tác giả?", "Hướng dẫn tiếp cận hồ sơ công khai cho phóng viên điều tra". Loại bài này tích lũy lượng truy cập ổn định theo thời gian và rất phù hợp với SEO dài hạn.</p>

    <h3>E-E-A-T — Tín nhiệm là tài sản</h3>
    <p>Google đánh giá cao trang có <strong>Experience (Trải nghiệm), Expertise (Chuyên môn), Authoritativeness (Thẩm quyền) và Trustworthiness (Uy tín)</strong>. Với nhà báo, điều này có nghĩa: để tên tác giả rõ ràng trên bài, liên kết đến nguồn đáng tin cậy (báo lớn, tổ chức uy tín, nghiên cứu khoa học), và xây dựng trang giới thiệu tác giả đầy đủ.</p>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Mẹo nhanh:</strong> Google ưu tiên bài có <em>tên tác giả thật</em> kèm bio ngắn và ảnh chân dung trong các chủ đề nhạy cảm như y tế, tài chính, pháp lý, chính trị. Đây là một trong các tín hiệu E-E-A-T quan trọng nhất.</p>
    </div>

    <h2>Phần 5: Đo lường với Google Search Console</h2>
    <p>Google Search Console (GSC) là công cụ miễn phí của Google cho phép bạn xem trang của mình hoạt động như thế nào trong kết quả tìm kiếm — hoàn toàn miễn phí.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Đăng ký Google Search Console</h4>
      <p>Vào <strong>search.google.com/search-console</strong>, đăng nhập bằng tài khoản Google. Thêm trang web bằng cách nhập URL và xác minh quyền sở hữu (với Google Sites, chọn phương thức "Google Analytics" hoặc dán thẻ HTML vào phần cài đặt).</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Các chỉ số cần theo dõi</h4>
      <ul>
        <li><strong>Impressions (Hiển thị)</strong> — Số lần trang xuất hiện trên kết quả tìm kiếm, dù không được click</li>
        <li><strong>Clicks (Lượt click)</strong> — Số lần người dùng thực sự vào trang</li>
        <li><strong>CTR (Click-through rate)</strong> — Tỷ lệ click / hiển thị. CTR thấp (<2%) thường do tiêu đề hoặc meta description kém hấp dẫn</li>
        <li><strong>Position (Vị trí)</strong> — Thứ hạng trung bình. Vị trí 1–3 nhận phần lớn lượt click; vị trí >10 gần như không có ai thấy</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Tìm cơ hội cải thiện</h4>
      <p>Trong GSC, vào tab <strong>"Kết quả tìm kiếm"</strong> → lọc theo trang → tìm những bài có <em>Impressions cao nhưng CTR thấp</em>. Đây là bài đang xuất hiện trên Google nhưng không ai click vào — vấn đề nằm ở tiêu đề hoặc meta description. Viết lại hai yếu tố này và theo dõi sự thay đổi sau 2–4 tuần.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Chọn một bài đã đăng trên trang Google Sites của bạn. (1) Dùng Google Trends và gợi ý tự động để tìm 3 từ khóa đuôi dài liên quan đến chủ đề bài. (2) Viết lại tiêu đề và meta description theo chuẩn SEO. (3) Kiểm tra cấu trúc H1/H2 và thêm alt text cho ít nhất 2 ảnh. Nộp bài gốc và bài đã tối ưu để so sánh trong buổi học sau.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>SEO không phải phép thuật — đó là thói quen viết có cấu trúc, hiểu người đọc và biết cách trình bày nội dung để máy tìm kiếm hiểu đúng ý định của bạn. Với nhà báo, SEO tốt không chỉ mang thêm lượt đọc — nó giúp câu chuyện của bạn đến tay đúng người vào đúng thời điểm họ cần nhất.</p>
    <p>Bài học tiếp theo, chúng ta sẽ đến với <strong>Báo chí dữ liệu & trực quan hóa</strong> — cách biến những con số khô khan thành câu chuyện hấp dẫn bằng biểu đồ tương tác.</p>
  `
};
