// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-11.js
// Bài 11: Đo lường & phân tích web
// ═══════════════════════════════════════════

const LESSON_11 = {
  id: 11,
  num: "11",
  title: "Đo lường &amp; <em>phân tích web</em>",
  duration: "90 phút",
  level: "Trung cấp",
  tool: "Google Analytics 4 · Google Search Console · Hotjar",
  prevLesson: { id: 10, title: "Bài 10: Newsletter & Email marketing" },
  nextLesson: { id: 12, title: "Bài 12: Dự án cuối khóa" },

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Bạn đã học cách tạo nội dung, tối ưu SEO, phân phối qua mạng xã hội và email. Nhưng làm sao biết những gì đang hoạt động và những gì đang lãng phí thời gian? Câu trả lời nằm trong dữ liệu. <strong>Google Analytics 4 (GA4)</strong> là công cụ miễn phí ghi lại mọi tương tác của người dùng trên trang web — từ bài nào được đọc nhiều nhất, người đọc đến từ đâu, đến việc họ rời đi ở bước nào trong hành trình đọc bài.</p>
    <p>Nhà báo biết đọc và hành động dựa trên dữ liệu có lợi thế cạnh tranh rõ rệt: họ tạo ra nội dung khán giả thực sự muốn đọc, thay vì chỉ nội dung mình nghĩ là hay.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: cài đặt Google Analytics 4 cho trang web; hiểu và đọc được các báo cáo cốt lõi; xác định được bài viết nào đang hoạt động tốt và tại sao; kết hợp dữ liệu GA4 và Search Console để có bức tranh toàn diện; đưa ra quyết định nội dung dựa trên dữ liệu thực.
    </div>

    <h2>Phần 1: Thiết lập Google Analytics 4</h2>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Tạo tài khoản GA4</h4>
      <p>Vào <strong>analytics.google.com</strong>, đăng nhập bằng tài khoản Google. Nhấn <strong>"Start measuring"</strong>. Điền thông tin:</p>
      <ul>
        <li><strong>Account name:</strong> Tên tổ chức hoặc tên bạn</li>
        <li><strong>Property name:</strong> Tên trang web (ví dụ: "DBlogStudio - Nguyễn Văn A")</li>
        <li><strong>Reporting time zone:</strong> Vietnam (GMT+7)</li>
        <li><strong>Currency:</strong> Vietnamese Dong</li>
      </ul>
      <p>Chọn <strong>"Web"</strong> làm nền tảng. Nhập URL trang web và tên stream. GA4 sẽ cấp cho bạn một <strong>Measurement ID</strong> dạng <code>G-XXXXXXXXXX</code> — đây là mã định danh duy nhất của trang bạn.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Cài đặt tracking code</h4>
      <p>GA4 theo dõi trang web thông qua một đoạn JavaScript được nhúng vào mỗi trang. Tùy nền tảng:</p>
      <ul>
        <li><strong>WordPress:</strong> Cài plugin <strong>Site Kit by Google</strong> (miễn phí, chính thức từ Google) → kết nối tài khoản Google → tự động nhúng GA4 và Search Console cùng lúc</li>
        <li><strong>Google Sites:</strong> Vào Settings → Analytics → dán Measurement ID vào ô tương ứng</li>
        <li><strong>HTML thuần:</strong> Dán đoạn code gtag.js vào thẻ <code>&lt;head&gt;</code> của mỗi trang</li>
      </ul>
      <p>Sau khi cài đặt, vào GA4 → tab <strong>Realtime</strong> → mở trang web của bạn trên tab khác. Nếu thấy "1 user in last 30 minutes" — tracking đang hoạt động.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Thiết lập cơ bản trước khi thu thập dữ liệu</h4>
      <p>Vào <strong>Admin → Data Settings → Data Retention</strong>: đổi từ 2 tháng lên <strong>14 tháng</strong> — đây là thời gian lưu dữ liệu sự kiện chi tiết. Miễn phí, nhưng phải chỉnh thủ công vì mặc định chỉ 2 tháng.</p>
      <p>Vào <strong>Admin → Property Settings → Enhanced Measurement</strong>: bật tất cả — GA4 sẽ tự động theo dõi scroll, click link ngoài, tìm kiếm trên trang và xem video mà không cần code thêm.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>GA4 vs Universal Analytics:</strong> GA4 (ra mắt 2020, thay thế hoàn toàn từ 2023) có cách tư duy khác — thay vì đếm "phiên truy cập" (sessions), GA4 đếm "sự kiện" (events). Mọi tương tác của người dùng đều là một event. Giao diện khác nhiều so với Analytics cũ — đừng nản nếu ban đầu thấy lạ.</p>
    </div>

    <h2>Phần 2: Các báo cáo cốt lõi cần nắm</h2>
    <p>GA4 có hàng chục báo cáo — nhưng với nhà báo, 5 báo cáo dưới đây là những gì bạn cần mở mỗi tuần.</p>

    <h3>1. Realtime — Theo dõi trực tiếp</h3>
    <p>Vào <strong>Reports → Realtime</strong>. Hiển thị số người đang trên trang ngay lúc này, họ đang đọc trang nào, đến từ đâu. Dùng khi: vừa đăng bài mới để xem lượng truy cập đổ vào, hoặc sau khi chia sẻ lên mạng xã hội để theo dõi phản hồi tức thì.</p>

    <h3>2. Acquisition — Nguồn lưu lượng truy cập</h3>
    <p>Vào <strong>Reports → Acquisition → Traffic acquisition</strong>. Báo cáo này trả lời câu hỏi: <em>Người đọc đến trang từ đâu?</em></p>
    <ul>
      <li><strong>Organic Search:</strong> Tìm thấy qua Google — đây là lưu lượng SEO của bạn</li>
      <li><strong>Direct:</strong> Gõ thẳng URL hoặc bookmark — người đọc trung thành</li>
      <li><strong>Referral:</strong> Click từ link trên trang khác — ai đang dẫn link đến bạn?</li>
      <li><strong>Organic Social:</strong> Từ mạng xã hội không trả phí</li>
      <li><strong>Email:</strong> Từ newsletter của bạn</li>
    </ul>
    <p>Kênh nào chiếm tỷ lệ cao nhất? Đó là kênh bạn đang làm tốt — hãy đầu tư thêm. Kênh nào quá thấp so với kỳ vọng? Đó là nơi cần cải thiện.</p>

    <h3>3. Engagement — Mức độ tương tác</h3>
    <p>Vào <strong>Reports → Engagement → Pages and screens</strong>. Đây là báo cáo quan trọng nhất với nhà báo — cho thấy từng trang cụ thể đang hoạt động như thế nào.</p>

    <div class="step-block">
      <span class="step-num">Chỉ số</span>
      <h4>Views, Users, Engaged Sessions và Average Engagement Time</h4>
      <ul>
        <li><strong>Views:</strong> Tổng số lần trang được xem (1 người xem 3 lần = 3 views)</li>
        <li><strong>Users:</strong> Số người dùng duy nhất đã xem trang</li>
        <li><strong>Engaged Sessions:</strong> Phiên truy cập có tương tác — người dùng ở lại hơn 10 giây, xem hơn 1 trang, hoặc thực hiện một sự kiện. Đây là chỉ số chất lượng quan trọng hơn Views đơn thuần</li>
        <li><strong>Average Engagement Time:</strong> Thời gian tương tác trung bình. Với bài phóng sự dài, kỳ vọng 2–4 phút. Dưới 30 giây thường là dấu hiệu nội dung không đáp ứng kỳ vọng từ tiêu đề</li>
      </ul>
    </div>

    <h3>4. Demographics — Chân dung người đọc</h3>
    <p>Vào <strong>Reports → User → User attributes → Overview</strong>. Cho biết: độ tuổi, giới tính, quốc gia, thành phố, thiết bị (điện thoại/máy tính/máy tính bảng) và trình duyệt của người đọc.</p>
    <p>Thông tin này cực kỳ giá trị để định hướng nội dung. Nếu 80% người đọc dùng điện thoại — tối ưu hóa cho mobile là ưu tiên số 1. Nếu phần lớn đến từ Hà Nội và TP.HCM nhưng bạn đang viết về Huế — cần suy nghĩ về cách mở rộng chủ đề cho phù hợp.</p>

    <h3>5. Landing Pages — Trang đầu vào</h3>
    <p>Vào <strong>Reports → Acquisition → Landing page</strong>. Cho biết trang nào người dùng vào đầu tiên khi đến website. Trang chủ không phải lúc nào cũng là trang đầu vào — với trang báo chí, hầu hết người đọc đến thẳng từ Google vào bài cụ thể. Landing page có bounce rate cao (thoát ngay không tương tác) cần được xem xét lại về nội dung hoặc tốc độ tải.</p>

    <h2>Phần 3: Kết hợp GA4 và Search Console</h2>
    <p>GA4 và Google Search Console bổ sung cho nhau — kết hợp cả hai cho bức tranh hoàn chỉnh nhất về hiệu suất trang.</p>

    <div class="callout">
      <strong>GA4 vs Search Console — Mỗi công cụ trả lời câu hỏi khác nhau</strong>
      <ul style="margin-top: 8px;">
        <li><strong>Search Console hỏi:</strong> Google hiển thị trang của tôi cho từ khóa nào? Bao nhiêu người thấy và click?</li>
        <li><strong>GA4 hỏi:</strong> Sau khi người dùng vào trang, họ làm gì? Họ ở lại bao lâu? Họ đi đâu tiếp theo?</li>
      </ul>
      Search Console = trước khi click. GA4 = sau khi click.
    </div>

    <div class="step-block">
      <span class="step-num">Kết nối</span>
      <h4>Liên kết GA4 với Search Console</h4>
      <p>Trong GA4: vào <strong>Admin → Property Settings → Search Console links → Link</strong>. Chọn tài khoản Search Console tương ứng. Sau khi liên kết, GA4 sẽ có thêm báo cáo <strong>Search Console</strong> trong mục Acquisition — cho thấy từ khóa nào dẫn người dùng vào và họ tương tác như thế nào sau đó.</p>
    </div>

    <h3>Quy trình phân tích kết hợp hàng tuần</h3>
    <ol>
      <li><strong>Search Console → Performance:</strong> Từ khóa nào đang tăng impressions? Bài nào có CTR thấp dù hiển thị nhiều?</li>
      <li><strong>GA4 → Pages and screens:</strong> Bài đó có engagement time tốt không? Người đọc có tiếp tục đọc bài khác không?</li>
      <li><strong>Kết hợp:</strong> Tìm bài có impressions cao (Search Console) nhưng engagement time thấp (GA4) — đây là bài cần cải thiện nội dung để xứng với kỳ vọng từ tiêu đề</li>
    </ol>

    <h2>Phần 4: Đọc dữ liệu để ra quyết định nội dung</h2>
    <p>Dữ liệu chỉ có giá trị khi dẫn đến hành động cụ thể. Dưới đây là các tình huống phổ biến và cách phản ứng.</p>

    <div class="step-block">
      <span class="step-num">Tình huống 1</span>
      <h4>Một bài cũ đang nhận nhiều traffic từ Google</h4>
      <p><strong>Dấu hiệu:</strong> Bài đăng từ 6–12 tháng trước đột nhiên tăng views trong báo cáo Organic Search.<br>
      <strong>Hành động:</strong> Cập nhật bài — thêm thông tin mới, cải thiện hình ảnh, mở rộng các phần còn thiếu. Bài được cập nhật thường được Google xếp hạng cao hơn và giữ traffic lâu hơn. Đây là kỹ thuật gọi là <em>content refresh</em> — ít tốn công hơn viết bài mới nhưng hiệu quả SEO rất cao.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Tình huống 2</span>
      <h4>Engagement time rất thấp trên hầu hết bài</h4>
      <p><strong>Dấu hiệu:</strong> Average Engagement Time dưới 30 giây trên các bài dài.<br>
      <strong>Nguyên nhân có thể:</strong> Tốc độ tải chậm (người thoát trước khi trang load xong), nội dung không khớp với kỳ vọng từ tiêu đề, font chữ quá nhỏ hoặc khó đọc trên điện thoại.<br>
      <strong>Hành động:</strong> Kiểm tra tốc độ tải bằng <strong>PageSpeed Insights</strong> (pagespeed.web.dev), đối chiếu tiêu đề với nội dung thực, và xem lại trải nghiệm mobile.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Tình huống 3</span>
      <h4>Một chủ đề liên tục thu hút nhiều người đọc</h4>
      <p><strong>Dấu hiệu:</strong> Nhiều bài cùng chủ đề đều có views và engagement tốt hơn mức trung bình.<br>
      <strong>Hành động:</strong> Đây là <em>niche</em> (ngách) của bạn — tập trung khai thác sâu hơn. Tạo series bài, xây dựng tag/category riêng, và đây có thể là chủ đề chính cho newsletter. Đừng dàn trải — chuyên sâu một chủ đề luôn tốt hơn viết tản mạn mọi thứ.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Tình huống 4</span>
      <h4>Traffic từ mạng xã hội cao nhưng không ở lại</h4>
      <p><strong>Dấu hiệu:</strong> Organic Social là kênh lớn nhưng Engaged Sessions thấp, người dùng chỉ xem 1 trang rồi thoát.<br>
      <strong>Hành động:</strong> Cải thiện "móc kéo người đọc tiếp tục" — thêm internal links nổi bật, widget "Bài liên quan", hoặc CTA mời đọc thêm ở cuối mỗi bài. Mục tiêu: từ 1 bài/phiên tăng lên 2–3 bài/phiên.</p>
    </div>

    <h2>Phần 5: Hotjar — Nhìn thấy hành vi người dùng</h2>
    <p>GA4 cho bạn biết con số. Hotjar cho bạn thấy <em>hình ảnh</em> — cụ thể là người dùng đang làm gì trên trang của bạn. Gói miễn phí đủ dùng cho trang cá nhân.</p>

    <h3>Heatmap — Bản đồ nhiệt</h3>
    <p>Heatmap hiển thị khu vực nào trên trang được click và scroll đến nhiều nhất bằng màu sắc: đỏ/cam = nhiều tương tác, xanh/lạnh = ít tương tác. Bạn sẽ ngạc nhiên khi thấy người dùng click vào những chỗ không phải link, hoặc gần như không ai scroll xuống dưới 50% trang — đây là dữ liệu quý giá không thể thấy trong GA4.</p>

    <h3>Session Recording — Ghi hình phiên truy cập</h3>
    <p>Hotjar ghi lại chuyển động chuột và thao tác cuộn của người dùng thực (đã ẩn danh hóa). Xem 5–10 recording của người dùng mới đến từ Google sẽ cho bạn thấy điểm bối rối, điểm thoát và những gì thu hút sự chú ý — không thể suy đoán từ bảng số liệu.</p>

    <div class="callout">
      <strong>Thiết lập Hotjar</strong>
      Đăng ký tại <strong>hotjar.com</strong> → nhận tracking code → nhúng vào website tương tự GA4. Với WordPress, có plugin Hotjar chính thức. Dữ liệu bắt đầu xuất hiện sau 24–48 giờ. Gói miễn phí: 35 sessions/ngày, 3 heatmaps — đủ để học và phân tích trang cá nhân.
    </div>

    <h2>Phần 6: Xây dựng thói quen phân tích dữ liệu</h2>
    <p>Analytics chỉ có giá trị nếu bạn xem đều đặn và hành động dựa trên nó. Dưới đây là lịch review đề xuất:</p>

    <h3>Review hàng tuần — 20 phút</h3>
    <ul>
      <li>Bài nào có views cao nhất tuần qua? Từ kênh nào?</li>
      <li>Có xu hướng bất thường nào không (tăng đột biến hoặc giảm mạnh)?</li>
      <li>Chủ đề / từ khóa nào đang tăng trong Search Console?</li>
    </ul>

    <h3>Review hàng tháng — 60 phút</h3>
    <ul>
      <li>So sánh với tháng trước: tổng users, engaged sessions, top pages</li>
      <li>Kênh traffic nào đang tăng / giảm?</li>
      <li>Xác định 3 bài cần cập nhật (traffic từ SEO nhưng nội dung cũ)</li>
      <li>Xác định 1–2 chủ đề mới cần viết dựa trên từ khóa đang tăng</li>
    </ul>

    <h3>Review hàng quý — Chiến lược</h3>
    <ul>
      <li>Đặt mục tiêu cụ thể cho quý tiếp theo (ví dụ: tăng organic traffic 20%, giảm bounce rate xuống dưới 60%)</li>
      <li>Đánh giá lại định hướng nội dung dựa trên dữ liệu tích lũy</li>
      <li>So sánh hiệu quả các kênh phân phối để phân bổ thời gian hợp lý hơn</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Cẩn thận với "vanity metrics":</strong> Lượt xem trang và số follower là những con số trông đẹp nhưng ít nói lên điều gì thực chất. Chỉ số thực sự quan trọng: <em>Engaged Sessions</em> (người đọc thực sự), <em>Average Engagement Time</em> (họ đọc hay chỉ mở rồi thoát?), và <em>Return Users</em> (họ có quay lại không?). Ba chỉ số này phản ánh chất lượng nội dung trung thực hơn bất kỳ con số nào khác.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Cài đặt GA4 cho trang WordPress hoặc Google Sites của bạn. Sau 48 giờ thu thập dữ liệu (chia sẻ link trang lên ít nhất 2 kênh để có traffic), viết báo cáo phân tích ngắn 300 chữ gồm: (1) Tổng số users và nguồn traffic chính, (2) Bài/trang có engagement time cao nhất — lý do tại sao bạn nghĩ vậy, (3) Một quyết định nội dung cụ thể bạn sẽ thực hiện dựa trên dữ liệu. Nộp kèm screenshot báo cáo GA4.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Dữ liệu không thay thế trực giác và bản năng của nhà báo — nó bổ sung cho chúng. Bạn vẫn cần chọn góc tiếp cận sắc bén, viết hay và kể chuyện thuyết phục. Nhưng dữ liệu giúp bạn biết bài đó có đang đến đúng người không, họ phản hồi như thế nào, và bước tiếp theo nên làm gì. Nhà báo tốt + tư duy dữ liệu = nhà báo số xuất sắc.</p>
    <p>Bài học cuối cùng của khóa học sẽ tổng hợp mọi kỹ năng đã học: <strong>Dự án cuối khóa</strong> — xây dựng một trang tin tức hoàn chỉnh từ đầu đến cuối.</p>
  `
};
