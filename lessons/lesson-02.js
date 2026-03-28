// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-02.js
// Bài 02: Cấu trúc thông tin & UX cơ bản
// ═══════════════════════════════════════════

const LESSON_02 = {
  id: 2,
  num: "02",
  title: "Cấu trúc thông tin &amp; <em>UX cơ bản</em>",
  duration: "90 phút",
  level: "Lý thuyết & Thực hành",
  tool: "Google Sites",
  prevLesson: { id: 1, title: "Bài 01: Làm quen với Google Sites" },
  nextLesson: { id: 3, title: "Bài 03: Thiết kế Poster & Banner với Canva" },

  // Nội dung HTML của bài học — thêm/sửa nội dung tại đây
  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Bạn đã biết cách tạo một trang web bằng Google Sites. Nhưng một trang web <em>trông đẹp</em> và một trang web <em>hoạt động hiệu quả</em> là hai chuyện khác nhau. Bài học này trang bị cho bạn tư duy thiết kế thông tin (Information Architecture) và nguyên tắc trải nghiệm người dùng (UX) — hai nền tảng quyết định liệu độc giả có ở lại đọc bài của bạn hay không.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: hiểu nguyên tắc tổ chức thông tin trên trang báo chí số; biết cách áp dụng tư duy UX vào cấu trúc nội dung; phân tích được điểm mạnh và điểm yếu của một trang web báo chí; cải thiện cấu trúc trang Google Sites đã tạo từ Bài 01.
    </div>

    <h2>Phần 1: Information Architecture là gì?</h2>
    <p>Information Architecture (IA) — hay Kiến trúc thông tin — là nghệ thuật và khoa học tổ chức, đặt nhãn, và cấu trúc thông tin để người dùng có thể tìm thấy và hiểu nó một cách dễ dàng nhất. Với nhà báo, IA là câu trả lời cho câu hỏi: <em>"Tôi nên đặt thông tin này ở đâu để độc giả dễ tìm thấy nhất?"</em></p>

    <h3>Ba nguyên tắc cốt lõi của IA</h3>
    <ul>
      <li><strong>Tổ chức (Organization)</strong> — Nhóm thông tin liên quan lại với nhau. Độc giả không đọc từng chữ — họ <em>quét</em> trang và chỉ dừng lại khi thấy thứ họ cần.</li>
      <li><strong>Điều hướng (Navigation)</strong> — Giúp người dùng biết họ đang ở đâu và có thể đi đâu. Menu rõ ràng, breadcrumb, liên kết nội bộ đều là công cụ điều hướng.</li>
      <li><strong>Tìm kiếm (Search)</strong> — Người dùng biết họ muốn gì nhưng không muốn tự duyệt. Với trang tin tức, thanh tìm kiếm là thiết yếu.</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Ví dụ thực tế:</strong> Vào trang <em>VnExpress.net</em> và quan sát: tin nóng ở đầu trang, danh mục ở thanh ngang, bài liên quan ở cuối. Đây không phải ngẫu nhiên — đó là kết quả của hàng trăm giờ nghiên cứu hành vi độc giả.</p>
    </div>

    <h2>Phần 2: UX — Trải nghiệm người dùng</h2>
    <p>User Experience (UX) là tổng thể cảm nhận của người dùng khi tương tác với sản phẩm của bạn. Với trang báo chí số, UX tốt nghĩa là: độc giả vào trang, tìm thấy bài mình cần, đọc thoải mái, và muốn quay lại.</p>

    <h3>5 yếu tố UX nhà báo cần biết</h3>

    <div class="step-block">
      <span class="step-num">1</span>
      <h4>Readability — Khả năng đọc</h4>
      <p>Chữ phải đủ to (tối thiểu 16px trên desktop), đủ tương phản với nền, và khoảng cách dòng phải thoáng (line-height 1.5–1.8). Đoạn văn không dài quá 4–5 dòng. Nghiên cứu chỉ ra rằng người đọc trên web chỉ đọc khoảng <strong>20–28% nội dung</strong> của một trang — hãy viết ngắn gọn và có cấu trúc.</p>
    </div>

    <div class="step-block">
      <span class="step-num">2</span>
      <h4>Visual Hierarchy — Thứ bậc thị giác</h4>
      <p>Mắt người luôn tìm điểm neo. Tiêu đề lớn → tiêu đề phụ → nội dung → chú thích. Dùng kích thước, màu sắc, và khoảng trắng để dẫn dắt mắt người đọc theo đúng thứ tự bạn muốn. Quy tắc đơn giản: nếu mọi thứ đều nổi bật, thì không có gì nổi bật cả.</p>
    </div>

    <div class="step-block">
      <span class="step-num">3</span>
      <h4>White Space — Khoảng trắng</h4>
      <p>Khoảng trắng không phải là "lãng phí" — đó là công cụ thiết kế. Trang web bị nhồi nhét thông tin khiến người đọc mệt mỏi và thoát ra. Apple và nhiều trang tin tức chất lượng cao như NYT, The Guardian đều dùng nhiều khoảng trắng để tạo cảm giác sang trọng và dễ đọc.</p>
    </div>

    <div class="step-block">
      <span class="step-num">4</span>
      <h4>Mobile-first — Ưu tiên thiết bị di động</h4>
      <p>Hơn <strong>70% người đọc báo trực tuyến ở Việt Nam</strong> dùng điện thoại. Thiết kế trang của bạn trên điện thoại trước, máy tính sau. Google Sites tự động responsive, nhưng bạn cần kiểm tra bằng cách click nút xem trước (biểu tượng điện thoại) trong giao diện chỉnh sửa.</p>
    </div>

    <div class="step-block">
      <span class="step-num">5</span>
      <h4>Loading Speed — Tốc độ tải trang</h4>
      <p>Mỗi giây chờ tải làm mất khoảng 7% người đọc. Ảnh lớn là nguyên nhân phổ biến nhất khiến trang chậm. Trước khi tải ảnh lên Google Sites, nén ảnh xuống dưới 500KB bằng công cụ như <strong>Squoosh.app</strong> hoặc <strong>TinyPNG.com</strong>.</p>
    </div>

    <h2>Phần 3: Cấu trúc trang báo chí hiệu quả</h2>
    <p>Dựa trên phân tích hàng chục trang báo lớn, đây là cấu trúc thường gặp nhất — và hiệu quả nhất — cho một trang báo chí số:</p>

    <h3>Mô hình F-Pattern</h3>
    <p>Nghiên cứu eye-tracking của Nielsen Norman Group chỉ ra rằng người đọc web quét trang theo hình chữ <strong>F</strong>:</p>
    <ul>
      <li>Đọc ngang đầu trang (thanh trên của chữ F)</li>
      <li>Đọc ngang một đoạn bên dưới (thanh giữa)</li>
      <li>Quét dọc theo cạnh trái trang (thân chữ F)</li>
    </ul>
    <p>Kết luận thực hành: đặt thông tin quan trọng nhất ở <strong>đầu trang</strong> và <strong>đầu mỗi đoạn văn</strong>. Đây chính là kỹ thuật <em>inverted pyramid</em> (tháp ngược) mà báo chí dùng từ lâu — và nó hoạt động trên web chính xác như trên báo in.</p>

    <div class="callout">
      <strong>Cấu trúc trang chủ lý tưởng cho portfolio nhà báo</strong>
      <ol>
        <li><strong>Header</strong> — Tên, ảnh đại diện, tagline ngắn (1 câu mô tả bạn là ai)</li>
        <li><strong>Bài nổi bật</strong> — 1–3 tác phẩm tốt nhất, ảnh to, tiêu đề hấp dẫn</li>
        <li><strong>Giới thiệu</strong> — Đoạn ngắn 100–150 chữ về bản thân và chuyên môn</li>
        <li><strong>Danh mục bài viết</strong> — Lưới (grid) hoặc danh sách với ảnh thumbnail</li>
        <li><strong>Liên hệ</strong> — Email, mạng xã hội, form liên hệ</li>
      </ol>
    </div>

    <h2>Phần 4: Thực hành — Phân tích và cải thiện</h2>
    <p>Đây là phần quan trọng nhất của bài học. Chúng ta sẽ áp dụng lý thuyết vào trang Google Sites bạn đã tạo ở Bài 01.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Tự đánh giá trang của bạn</h4>
      <p>Mở trang Google Sites đã xuất bản ở Bài 01. Trả lời trung thực các câu hỏi sau:</p>
      <ul>
        <li>Người xem có hiểu ngay bạn là ai chỉ trong 5 giây đầu không?</li>
        <li>Thứ bậc tiêu đề có rõ ràng (H1 → H2 → H3)?</li>
        <li>Trang có trông ổn trên điện thoại không?</li>
        <li>Có đoạn văn nào dài hơn 100 chữ mà không có tiêu đề phụ?</li>
        <li>Ảnh có bị nặng làm chậm trang không?</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Tái cấu trúc theo mô hình F-Pattern</h4>
      <p>Mở Google Sites và vào chế độ chỉnh sửa. Sắp xếp lại nội dung theo thứ tự: thông tin quan trọng nhất lên đầu. Đảm bảo mỗi trang có <strong>không quá 3 mục tiêu rõ ràng</strong> (ví dụ: trang Tác phẩm chỉ cần: xem bài, đọc mô tả, click vào link).</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Cải thiện Readability</h4>
      <p>Kiểm tra mọi đoạn văn trên trang: chia đoạn văn dài thành đoạn ngắn hơn (3–5 câu mỗi đoạn), thêm tiêu đề phụ (H3) mỗi khi chuyển chủ đề, và dùng danh sách gạch đầu dòng thay vì liệt kê trong câu văn dài.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 4</span>
      <h4>Kiểm tra trên điện thoại</h4>
      <p>Trong giao diện chỉnh sửa Google Sites, nhấn nút <strong>xem trước trên điện thoại</strong> (biểu tượng điện thoại ở thanh trên). Kiểm tra: ảnh có bị cắt xén không, chữ có đủ to không, nút bấm có dễ chạm không (tối thiểu 44×44px).</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Phân tích UX của một trang báo điện tử bạn thường đọc (VnExpress, Tuổi Trẻ Online, Thanh Niên...). Viết nhận xét ngắn (200–300 chữ) về: điểm mạnh của cấu trúc thông tin, điểm cần cải thiện, và 3 điều bạn muốn áp dụng cho trang cá nhân của mình. Nộp cùng link trang Google Sites đã cải thiện.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Trong bài này, bạn đã nắm được hai khái niệm nền tảng của thiết kế web: Information Architecture giúp tổ chức thông tin một cách logic, và UX đảm bảo thông tin đó tiếp cận độc giả một cách dễ chịu và hiệu quả nhất. Đây không phải kỹ năng "kỹ thuật" — đây là tư duy mà mọi nhà báo số hiện đại cần có.</p>
    <p>Bài học tiếp theo, chúng ta sẽ chuyển sang <strong>Canva</strong> — công cụ thiết kế đồ họa giúp bạn tạo ảnh, poster và banner chuyên nghiệp mà không cần học Photoshop.</p>
  `
};
