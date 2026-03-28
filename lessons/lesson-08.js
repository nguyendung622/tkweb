// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-08.js
// Bài 08: Multimedia Storytelling
// ═══════════════════════════════════════════

const LESSON_08 = {
  id: 8,
  num: "08",
  title: "<em>Multimedia</em> Storytelling",
  duration: "120 phút",
  level: "Trung cấp",
  tool: "Google Sites · YouTube · SoundCloud · Canva · Flourish",
  prevLesson: null,
  nextLesson: null,

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Một bài báo chỉ có chữ ngày càng khó giữ chân người đọc. Thế hệ độc giả trẻ tiêu thụ thông tin qua nhiều kênh cùng lúc — họ cuộn trang, nghe podcast, xem clip ngắn và đọc caption mà không nhất thiết đọc toàn bộ bài. <strong>Multimedia storytelling</strong> là nghệ thuật kết hợp văn bản, ảnh, video, âm thanh và đồ họa tương tác vào một câu chuyện báo chí mạch lạc, mỗi loại phương tiện bổ trợ cho nhau thay vì lặp lại.</p>
    <p>Bài học này hướng dẫn bạn lên kế hoạch và lắp ráp một bài phóng sự đa phương tiện hoàn chỉnh ngay trên <strong>Google Sites</strong> — không cần công cụ chuyên nghiệp đắt tiền.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: hiểu nguyên tắc phân vai giữa các loại phương tiện; lên kế hoạch nội dung cho một bài multimedia; nhúng video YouTube, podcast SoundCloud, ảnh slideshow và biểu đồ Flourish vào Google Sites; tổ chức bố cục trang để tạo luồng đọc tự nhiên; xuất bản và chia sẻ bài phóng sự đa phương tiện.
    </div>

    <h2>Phần 1: Tư duy Multimedia — Mỗi phương tiện có vai trò riêng</h2>
    <p>Sai lầm phổ biến nhất khi làm multimedia là <em>nhồi tất cả vào một chỗ</em>. Video mô tả lại đúng những gì chữ đã viết. Ảnh không thêm thông tin mới. Biểu đồ chỉ để trang trí. Kết quả: trang nặng, tải chậm, người đọc mệt.</p>
    <p>Nguyên tắc cốt lõi: <strong>mỗi phương tiện phải làm điều mà các phương tiện khác không làm được.</strong></p>

    <h3>Phân vai các loại phương tiện</h3>
    <ul>
      <li><strong>Văn bản:</strong> Phân tích, bối cảnh, trích dẫn chuyên gia, lý giải nguyên nhân — những thứ đòi hỏi lập luận mạch lạc</li>
      <li><strong>Ảnh:</strong> Cảm xúc, hiện trường, chân dung nhân vật — những thứ ngôn ngữ không truyền tải được bằng hiệu quả tương đương</li>
      <li><strong>Video:</strong> Chuyển động, hành động diễn ra theo thời gian thực, phỏng vấn có biểu cảm khuôn mặt và giọng nói</li>
      <li><strong>Âm thanh / Podcast:</strong> Giọng nói thực của nhân vật, không khí hiện trường, âm nhạc và tiếng động đặc trưng</li>
      <li><strong>Đồ họa / Biểu đồ:</strong> Số liệu, xu hướng, so sánh — những thứ văn bản mô tả mất nhiều chữ mà vẫn khó hình dung</li>
      <li><strong>Bản đồ:</strong> Vị trí địa lý, phạm vi ảnh hưởng, hành trình di chuyển</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Bài kiểm tra nhanh:</strong> Với mỗi phần tử multimedia bạn định đưa vào, hỏi: <em>"Nếu bỏ phần này đi, người đọc mất đi thông tin gì không có ở nơi khác?"</em> Nếu câu trả lời là "không mất gì" — hãy cân nhắc bỏ đi.</p>
    </div>

    <h2>Phần 2: Lên kế hoạch bài Multimedia</h2>
    <p>Trước khi mở Google Sites, bạn cần một <strong>bản đồ nội dung (content map)</strong> — danh sách các phần tử sẽ xuất hiện trong bài và lý do chọn chúng. Hãy làm việc này trên giấy hoặc Google Docs trước.</p>

    <h3>Cấu trúc điển hình của một bài multimedia</h3>
    <ul>
      <li><strong>Mở đầu (Hook):</strong> Ảnh toàn cảnh hoặc video ngắn &lt;60 giây — tạo cảm xúc ngay lập tức</li>
      <li><strong>Đặt vấn đề:</strong> 2–3 đoạn văn bản — cho người đọc biết câu chuyện này về ai, ở đâu, vì sao quan trọng</li>
      <li><strong>Thân bài — phần 1:</strong> Kết hợp văn bản + ảnh slideshow hoặc biểu đồ</li>
      <li><strong>Giọng nói nhân chứng:</strong> Clip phỏng vấn hoặc đoạn audio — cho nhân vật tự kể</li>
      <li><strong>Dữ liệu / Bằng chứng:</strong> Biểu đồ hoặc bản đồ tương tác — số liệu thuyết phục</li>
      <li><strong>Thân bài — phần 2:</strong> Văn bản phân tích chuyên sâu</li>
      <li><strong>Kết:</strong> Ảnh hoặc video kết thúc + lời kêu gọi hành động (nếu có)</li>
    </ul>

    <div class="callout">
      <strong>Tình huống thực hành</strong>
      Xuyên suốt bài học này, chúng ta sẽ xây dựng một bài phóng sự multimedia về chủ đề: <strong>"Thanh niên Huế và văn hóa khởi nghiệp số"</strong>. Bạn có thể thay chủ đề bằng bất kỳ câu chuyện nào bạn quan tâm — quy trình hoàn toàn giống nhau.
    </div>

    <h2>Phần 3: Chuẩn bị các phần tử phương tiện</h2>
    <p>Trước khi lắp ráp trên Google Sites, bạn cần có sẵn các phần tử đã được xuất bản ở đúng nền tảng. Google Sites nhúng nội dung từ bên ngoài — không lưu trữ file video hay audio trực tiếp.</p>

    <h3>Video — Dùng YouTube</h3>
    <ul>
      <li>Quay video bằng điện thoại hoặc máy quay → chỉnh sửa cơ bản bằng CapCut hoặc iMovie</li>
      <li>Đăng lên YouTube (có thể đặt chế độ <strong>Unlisted</strong> nếu không muốn công khai trên YouTube)</li>
      <li>Lấy link YouTube → dùng trong Google Sites</li>
      <li>Độ dài khuyến nghị: phỏng vấn 2–4 phút, b-roll (cảnh nền) 30–60 giây</li>
    </ul>

    <h3>Âm thanh — Dùng SoundCloud hoặc Spotify for Podcasters</h3>
    <ul>
      <li>Ghi âm bằng điện thoại (app Voice Recorder) → chỉnh âm bằng Audacity (miễn phí)</li>
      <li>Đăng lên <a href="https://soundcloud.com" target="_blank">SoundCloud</a> (tài khoản miễn phí cho phép upload 3 giờ)</li>
      <li>SoundCloud cung cấp iframe embed code ngay trên trang bài</li>
    </ul>

    <h3>Ảnh — Dùng Google Photos Slideshow hoặc Canva</h3>
    <ul>
      <li><strong>Cách 1 — Google Slides:</strong> Tạo một bài Google Slides chỉ có ảnh (không chữ) → Publish to web → nhúng iframe vào Sites. Người đọc có thể bấm qua từng ảnh.</li>
      <li><strong>Cách 2 — Canva Presentation:</strong> Tạo slideshow trong Canva → Present → Share link → nhúng vào Sites</li>
      <li>Caption ảnh là bắt buộc: ai, làm gì, ở đâu, khi nào</li>
    </ul>

    <h3>Đồ họa / Biểu đồ — Dùng Datawrapper hoặc Flourish</h3>
    <p>Đã học ở Bài 06. Nhắc lại: biểu đồ phải được <strong>Publish</strong> trước khi nhúng. Lấy iframe embed code từ trang Publish của Datawrapper hoặc Flourish.</p>

    <h3>Bản đồ — Dùng Google My Maps</h3>
    <ul>
      <li>Vào <a href="https://mymaps.google.com" target="_blank">mymaps.google.com</a> → tạo bản đồ mới → thêm địa điểm, vẽ vùng hoặc hành trình</li>
      <li>Share → Anyone with the link can view → Copy link</li>
      <li>Trong Google Sites: Insert → Map → dán link Google My Maps</li>
    </ul>

    <h2>Phần 4: Xây dựng trang Multimedia trên Google Sites</h2>
    <p>Bây giờ đã có đủ nguyên liệu. Hãy mở Google Sites và bắt đầu lắp ráp.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Tạo trang mới cho bài phóng sự</h4>
      <p>Mở trang Google Sites của bạn → tab <strong>Pages</strong> bên phải → nhấn <strong>"+"</strong> → đặt tên trang: ví dụ <em>"Phóng sự: Thanh niên Huế khởi nghiệp số"</em>.</p>
      <p>Chọn layout <strong>"Blank"</strong> (trống) để tự do sắp xếp — đừng dùng layout có sẵn vì sẽ bị giới hạn vị trí các khối.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Thiết lập Header ấn tượng</h4>
      <p>Click vào vùng Header → <strong>"Change image"</strong> → upload ảnh toàn cảnh chất lượng cao (khuyến nghị tối thiểu 1920×600px). Đây là ấn tượng đầu tiên.</p>
      <p>Chọn kiểu Header là <strong>"Cover"</strong> hoặc <strong>"Banner"</strong> (cao hơn) để ảnh hiển thị đủ rộng. Nhập tiêu đề bài phóng sự vào ô text — dùng chữ đậm, ngắn gọn, gây tò mò.</p>
      <p>Thêm <strong>subtitle</strong> ngắn bên dưới: tên tác giả + ngày đăng. Ví dụ: <em>Nguyễn Văn A · 15/11/2025</em></p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Thêm đoạn mở đầu — Hook video</h4>
      <p>Ngay dưới Header, Insert → <strong>Embed</strong> → dán link YouTube video ngắn (30–60 giây cảnh mở đầu). Kéo rộng toàn chiều ngang trang.</p>
      <p>Bên dưới video, Insert → <strong>Text box</strong> → viết 2–3 đoạn đặt vấn đề. Dùng cỡ chữ 16–18px, line-height thoải mái. Google Sites cho phép điều chỉnh trong phần text formatting.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 4</span>
      <h4>Nhúng ảnh slideshow Google Slides</h4>
      <p>Insert → <strong>Google Drive</strong> → <strong>Presentations</strong> → chọn bộ ảnh Google Slides bạn đã chuẩn bị. Hoặc Insert → Embed → dán iframe embed code từ Google Slides đã "Publish to web".</p>
      <p>Thêm text box bên cạnh (dùng layout 2 cột nếu muốn): mô tả bộ ảnh, bối cảnh chụp, thông tin nhân vật.</p>
      <p><strong>Tạo layout 2 cột:</strong> Kéo text box vào cùng hàng với khối embed — Google Sites tự động snap vào lưới 2 cột khi bạn kéo đủ gần.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 5</span>
      <h4>Nhúng đoạn audio phỏng vấn</h4>
      <p>Insert → Embed → dán iframe embed code từ SoundCloud. Kích thước khuyến nghị: full width, chiều cao khoảng 166px (mặc định của SoundCloud player).</p>
      <p>Thêm text box trước audio player để giới thiệu: <em>"Nghe nhân vật X kể về hành trình của mình:"</em> — dẫn dắt người đọc trước khi họ nhấn play.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 6</span>
      <h4>Nhúng biểu đồ dữ liệu</h4>
      <p>Insert → Embed → dán iframe từ Datawrapper hoặc Flourish (đã học Bài 06). Chú ý: đặt biểu đồ ở vị trí logic trong câu chuyện — ngay sau đoạn văn bản giới thiệu con số đó.</p>
      <p>Ví dụ: nếu bài viết đang nói về số lượng startup tại Huế tăng mạnh, đặt biểu đồ xu hướng ngay sau câu văn đó — không phải cuối bài.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 7</span>
      <h4>Nhúng bản đồ Google My Maps</h4>
      <p>Insert → <strong>Map</strong> → dán link Google My Maps. Điều chỉnh chiều cao khoảng 400–500px để bản đồ hiển thị đủ rõ.</p>
      <p>Thêm caption bên dưới bản đồ: giải thích các điểm đã đánh dấu là gì, ý nghĩa màu sắc nếu có.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 8</span>
      <h4>Thêm phần kết và liên kết liên quan</h4>
      <p>Kết thúc bài bằng 1–2 đoạn văn bản tổng kết + ảnh kết thúc ấn tượng.</p>
      <p>Insert → <strong>Button</strong> → tạo nút "Đọc thêm" dẫn đến bài liên quan hoặc nguồn tham khảo. Đây là bước nhiều người bỏ qua nhưng giúp giữ người đọc ở lại trang lâu hơn.</p>
    </div>

    <h2>Phần 5: Tối ưu bố cục và trải nghiệm đọc</h2>

    <h3>Nhịp độ trang (Page Rhythm)</h3>
    <p>Xen kẽ các loại nội dung để tránh mệt mỏi thị giác: đừng để 3 video liên tiếp, đừng để 5 đoạn văn bản liên tiếp không có hình ảnh. Nhịp lý tưởng: văn bản → hình ảnh/video → văn bản → dữ liệu → văn bản → audio...</p>

    <h3>Khoảng trắng là nội dung</h3>
    <p>Google Sites cho phép thêm các section chia trang. Dùng <strong>divider</strong> (Insert → Divider) giữa các phần lớn. Khoảng cách giữa các khối giúp mắt người đọc nghỉ ngơi và nhận biết chuyển cảnh câu chuyện.</p>

    <h3>Kiểm tra trên điện thoại</h3>
    <p>Nhấn nút <strong>Preview</strong> (biểu tượng mắt) → chọn chế độ <strong>Phone</strong>. Mọi iframe embed cần kiểm tra riêng xem có responsive không. Video YouTube và biểu đồ Datawrapper thường responsive tốt. Google Slides đôi khi cần chỉnh thủ công chiều cao.</p>

    <div class="tip-box">
      <span class="tip-icon">📱</span>
      <p><strong>Quy tắc mobile-first:</strong> Nếu bố cục 2 cột trông đẹp trên máy tính nhưng bị vỡ trên điện thoại, hãy chuyển thành 1 cột. Hơn 60% người đọc báo online hiện nay dùng điện thoại — ưu tiên trải nghiệm mobile.</p>
    </div>

    <h2>Phần 6: Xuất bản và đo lường</h2>

    <h3>Xuất bản và chia sẻ</h3>
    <p>Nhấn <strong>Publish</strong> → đặt tên URL gọn (không dấu, không space) → chọn <strong>Công khai</strong>. Chia sẻ link trực tiếp hoặc nhúng vào trang chủ Google Sites của bạn.</p>

    <h3>Theo dõi lượt xem với Google Analytics</h3>
    <p>Google Sites có tích hợp Google Analytics: Settings → Analytics → điền Measurement ID từ tài khoản Google Analytics 4. Từ đó bạn biết: bao nhiêu người đọc, đến từ đâu, ở lại bao lâu, thoát ở đâu — dữ liệu quý giá để cải thiện bài tiếp theo.</p>

    <h3>Chia sẻ trên mạng xã hội</h3>
    <p>Với mỗi phần tử multimedia trong bài, bạn có thể tạo các bài đăng riêng trên mạng xã hội: clip ngắn từ video, ảnh đẹp nhất từ bộ ảnh, biểu đồ nổi bật — mỗi thứ dẫn link về bài phóng sự đầy đủ trên Google Sites.</p>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập thực hành:</strong> Chọn một chủ đề phóng sự thực tế (sự kiện, nhân vật, vấn đề xã hội tại địa phương). Tạo một bài phóng sự multimedia trên Google Sites với ít nhất: 1 video YouTube, 1 bộ ảnh (tối thiểu 5 ảnh), 1 biểu đồ dữ liệu, và 3 đoạn văn bản phân tích. Tổng thời gian đọc ước tính 5–8 phút. Nộp link bài đã xuất bản trước buổi học tiếp theo.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Multimedia storytelling không phải là việc nhồi thật nhiều phương tiện vào một bài. Đó là nghệ thuật lựa chọn đúng phương tiện cho đúng nội dung, sắp xếp chúng theo một nhịp độ tự nhiên, và đảm bảo người đọc trên mọi thiết bị đều có trải nghiệm tốt. Google Sites là canvas hoàn toàn đủ năng lực để bạn tạo ra những bài phóng sự đa phương tiện chuyên nghiệp — miễn phí và không cần lập trình.</p>
    <p>Khi bạn xuất bản bài đầu tiên và thấy lượt xem tăng cao hơn so với bài thuần văn bản, bạn sẽ hiểu tại sao các tòa soạn lớn đầu tư mạnh vào định dạng này.</p>
  `
};
