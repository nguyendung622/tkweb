// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-01.js
// Bài 01: Làm quen với Google Sites
// ═══════════════════════════════════════════

const LESSON_01 = {
  id: 1,
  num: "01",
  title: "Làm quen với <em>Google Sites</em>",
  duration: "90 phút",
  level: "Cơ bản",
  tool: "Google Sites",
  prevLesson: null,
  nextLesson: { id: 2, title: "Bài 02: Cấu trúc thông tin & UX cơ bản" },

  // Nội dung HTML của bài học — thêm/sửa nội dung tại đây
  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Google Sites là một công cụ tạo trang web miễn phí của Google — đơn giản đến mức bất kỳ ai có tài khoản Gmail đều có thể dùng được. Đây là điểm khởi đầu lý tưởng cho nhà báo muốn xây dựng trang cá nhân, portfolio tác phẩm, hoặc trang tin tức nhỏ mà không cần thuê lập trình viên.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: tạo được một trang web hoàn chỉnh bằng Google Sites, thêm được nội dung văn bản, hình ảnh và nhúng video, xuất bản trang và chia sẻ link với người khác.
    </div>

    <h2>Phần 1: Google Sites là gì?</h2>
    <p>Google Sites (<a href="https://sites.google.com" target="_blank">sites.google.com</a>) là nền tảng tạo trang web thuộc hệ sinh thái Google Workspace. Không như WordPress hay Webflow đòi hỏi nhiều thiết lập, Google Sites hoạt động ngay trên trình duyệt, lưu trữ tự động trên Google Drive, và hoàn toàn miễn phí.</p>

    <h3>Ưu điểm cho nhà báo</h3>
    <ul>
      <li><strong>Miễn phí hoàn toàn</strong> — không cần trả tiền hosting hay tên miền</li>
      <li><strong>Tích hợp Google Workspace</strong> — nhúng Google Docs, Sheets, Slides, Maps, Forms chỉ trong vài giây</li>
      <li><strong>Hỗ trợ nhóm</strong> — nhiều người có thể cùng chỉnh sửa như Google Docs</li>
      <li><strong>Responsive mặc định</strong> — tự động hiển thị đẹp trên điện thoại</li>
      <li><strong>Không cần code</strong> — kéo thả hoàn toàn</li>
    </ul>

    <h3>Hạn chế cần biết</h3>
    <ul>
      <li>Ít tùy chỉnh giao diện hơn WordPress hay Wix</li>
      <li>Tên miền mặc định dạng <em>sites.google.com/view/tên-của-bạn</em> (có thể thay bằng tên miền riêng nếu dùng Google Workspace trả phí)</li>
      <li>Không có hệ thống blog tự động (phải thêm bài thủ công)</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Mẹo của giảng viên:</strong> Google Sites phù hợp nhất để làm <em>portfolio cá nhân</em>, trang giới thiệu dự án, hoặc trang tài liệu nội bộ. Khi bạn cần một trang tin tức thực sự, WordPress sẽ là lựa chọn tốt hơn — chúng ta sẽ học ở Bài 04.</p>
    </div>

    <h2>Phần 2: Tạo trang web đầu tiên</h2>
    <p>Thực hành ngay! Mở trình duyệt và làm theo từng bước dưới đây.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Truy cập Google Sites</h4>
      <p>Vào <strong>sites.google.com</strong> bằng tài khoản Google (Gmail) của bạn. Nếu chưa đăng nhập, hãy đăng nhập trước.</p>
      <p>Nhấn nút <strong>"Trống" (Blank)</strong> hoặc chọn một mẫu có sẵn. Với bài học này, chọn <strong>Trống</strong> để hiểu rõ từng thành phần.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Đặt tên trang web</h4>
      <p>Ở góc trên bên trái, click vào chỗ ghi <em>"Tên trang web chưa có tiêu đề"</em> và nhập tên của bạn — ví dụ: <strong>"Nguyễn Văn A — Nhà báo"</strong>.</p>
      <p>Tên này sẽ xuất hiện trong tab trình duyệt và trong đường link của trang. Đặt tên ngắn gọn, không dấu nếu muốn link đẹp.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Chọn chủ đề (Theme)</h4>
      <p>Ở thanh bên phải, click tab <strong>"Chủ đề"</strong>. Bạn sẽ thấy khoảng 10–12 chủ đề màu sắc và kiểu chữ khác nhau.</p>
      <p>Thử click vào từng chủ đề để xem preview trực tiếp. Với portfolio báo chí, các chủ đề như <em>Simple</em>, <em>Diplomat</em>, hoặc <em>Slate</em> thường trông chuyên nghiệp hơn.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 4</span>
      <h4>Thêm tiêu đề trang (Header)</h4>
      <p>Click vào khu vực tiêu đề lớn ở đầu trang. Nhập tên của bạn hoặc tên trang vào đây. Đây là ấn tượng đầu tiên của người xem.</p>
      <p>Bạn có thể chọn kiểu Header: <strong>Banner</strong> (ảnh nền rộng), <strong>Cover</strong>, hoặc chỉ <strong>Title</strong> (chữ đơn giản). Để thêm ảnh nền, click nút "Thay đổi hình ảnh" hiện ra khi bạn hover vào Header.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 5</span>
      <h4>Thêm nội dung với "Chèn" (Insert)</h4>
      <p>Ở thanh bên phải, click tab <strong>"Chèn"</strong>. Đây là menu chính để thêm mọi thứ vào trang.</p>
      <p>Thử lần lượt: <strong>Hộp văn bản</strong> → nhập một đoạn giới thiệu bản thân. <strong>Hình ảnh</strong> → tải lên ảnh chân dung hoặc ảnh tác phẩm. <strong>Nút</strong> → tạo nút dẫn tới bài báo hoặc mạng xã hội.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 6</span>
      <h4>Nhúng nội dung từ Google</h4>
      <p>Một trong những điểm mạnh nhất của Google Sites: bạn có thể nhúng trực tiếp bất kỳ thứ gì từ Google. Trong menu "Chèn", kéo xuống phần <strong>Google Drive</strong>.</p>
      <p>Thử nhúng: một <strong>Google Docs</strong> là bài báo của bạn, một <strong>Google Slides</strong> là bài thuyết trình, hoặc một <strong>Google Maps</strong> chỉ vị trí tòa soạn / sự kiện bạn đưa tin.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 7</span>
      <h4>Thêm trang mới (nếu cần)</h4>
      <p>Ở thanh bên phải, click tab <strong>"Trang"</strong>. Nhấn nút <strong>"+"</strong> để thêm trang mới.</p>
      <p>Gợi ý cấu trúc cho portfolio nhà báo: <strong>Trang chủ</strong> (giới thiệu), <strong>Tác phẩm</strong> (danh sách bài báo), <strong>Liên hệ</strong> (form hoặc email).</p>
    </div>

    <div class="callout">
      <strong>Kéo thả để sắp xếp</strong>
      Mọi phần tử trên trang đều có thể kéo thả để thay đổi vị trí. Hover vào phần tử, bạn sẽ thấy nút di chuyển (biểu tượng mũi tên 4 chiều). Thử thay đổi thứ tự các khối để tìm bố cục đẹp nhất.
    </div>

    <h2>Phần 3: Xuất bản và chia sẻ</h2>

    <div class="step-block">
      <span class="step-num">Bước 8</span>
      <h4>Xuất bản trang</h4>
      <p>Nhấn nút <strong>"Xuất bản" (Publish)</strong> màu xanh ở góc trên bên phải. Một hộp thoại xuất hiện cho phép bạn:</p>
      <ul>
        <li>Đặt địa chỉ web cuối (phần sau <em>sites.google.com/view/</em>)</li>
        <li>Chọn ai được xem: <strong>Công khai</strong> (mọi người), <strong>Người trong tổ chức</strong>, hoặc <strong>Chỉ tôi</strong></li>
      </ul>
      <p>Chọn <strong>Công khai</strong> nếu muốn bất kỳ ai cũng có thể truy cập link. Nhấn <strong>Xuất bản</strong>.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 9</span>
      <h4>Chia sẻ link</h4>
      <p>Sau khi xuất bản, nhấn lại nút "Xuất bản" → <strong>"Sao chép link"</strong> để lấy địa chỉ web của trang. Bạn có thể chia sẻ link này như bất kỳ link nào khác.</p>
      <p>Để mời người khác cùng chỉnh sửa, nhấn nút chia sẻ (biểu tượng người) ở góc trên và nhập email của họ — tương tự Google Docs.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Tạo một trang Google Sites portfolio cá nhân với ít nhất: ảnh chân dung, đoạn giới thiệu bản thân (150–200 chữ), 3 bài báo/tác phẩm đã thực hiện, và link liên hệ. Nộp link trang đã xuất bản trước buổi học tiếp theo.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Trong bài này, bạn đã học cách tạo một trang web hoàn chỉnh bằng Google Sites từ đầu đến cuối. Đây là nền tảng để bạn bắt đầu xây dựng sự hiện diện số của mình với tư cách là một nhà báo chuyên nghiệp.</p>
    <p>Bài học tiếp theo, chúng ta sẽ đi sâu vào tư duy thiết kế thông tin (Information Architecture) — nguyên tắc nền tảng để tổ chức nội dung báo chí trên web một cách hiệu quả.</p>
  `
};
