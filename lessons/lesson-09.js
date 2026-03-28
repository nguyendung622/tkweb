// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-09.js
// Bài 09: Bảo mật & đạo đức số
// ═══════════════════════════════════════════

const LESSON_09 = {
  id: 9,
  num: "09",
  title: "Bảo mật &amp; <em>đạo đức số</em>",
  duration: "90 phút",
  level: "Lý thuyết & Thực hành",
  tool: "Signal · ProtonMail · 1Password · Tor Browser",
  prevLesson: { id: 8, title: "Bài 08: Multimedia Storytelling" },
  nextLesson: { id: 10, title: "Bài 10: Newsletter & Email marketing" },

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Nhà báo là nghề có rủi ro kỹ thuật số cao bậc nhất. Nguồn tin bị lộ danh tính, tài khoản email bị xâm nhập, bài điều tra bị đánh cắp trước khi xuất bản — đây không phải kịch bản phim hành động mà là thực tế xảy ra với phóng viên ở khắp nơi trên thế giới. Theo CPJ (Ủy ban Bảo vệ Nhà báo), <strong>tấn công kỹ thuật số là mối đe dọa tăng nhanh nhất với nhà báo trong thập kỷ qua</strong>.</p>
    <p>Bài học này không dạy bạn thành chuyên gia bảo mật — mà trang bị những thói quen và công cụ cơ bản để bảo vệ bản thân, bảo vệ nguồn tin và hoạt động tác nghiệp an toàn hơn trong môi trường số.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: nhận diện được các mối đe dọa kỹ thuật số phổ biến nhất với nhà báo; thiết lập lớp bảo vệ cơ bản cho tài khoản và thiết bị; biết cách liên lạc an toàn với nguồn tin nhạy cảm; hiểu và áp dụng các nguyên tắc đạo đức trong môi trường số.
    </div>

    <h2>Phần 1: Các mối đe dọa nhà báo cần biết</h2>
    <p>Trước khi phòng thủ, cần hiểu kẻ tấn công muốn gì và tấn công bằng cách nào.</p>

    <h3>Phishing — Lừa đảo qua email và tin nhắn</h3>
    <p>Đây là hình thức tấn công phổ biến nhất. Kẻ tấn công gửi email giả mạo — trông giống Google, ngân hàng, hoặc thậm chí đồng nghiệp của bạn — yêu cầu click vào link và nhập thông tin đăng nhập. Trong vòng vài giây, tài khoản bị chiếm.</p>
    <ul>
      <li><strong>Dấu hiệu nhận biết:</strong> Địa chỉ email người gửi lạ hoặc sai một ký tự (ví dụ: <em>support@g00gle.com</em>), link dẫn đến tên miền không khớp, yêu cầu hành động khẩn cấp, ngữ pháp lỗi</li>
      <li><strong>Quy tắc vàng:</strong> Không bao giờ click link trong email để đăng nhập. Luôn tự gõ địa chỉ website vào trình duyệt</li>
    </ul>

    <h3>Password Attacks — Tấn công mật khẩu</h3>
    <p>Hàng tỷ tổ hợp mật khẩu từ các vụ rò rỉ dữ liệu đang lưu hành trên dark web. Nếu bạn dùng cùng một mật khẩu cho nhiều tài khoản, kẻ tấn công chỉ cần bẻ một tài khoản là có thể vào tất cả.</p>

    <h3>Spyware & Stalkerware</h3>
    <p>Phần mềm gián điệp được cài ngầm vào thiết bị, theo dõi mọi thứ bạn gõ, chụp màn hình, ghi âm cuộc gọi. Nổi tiếng nhất là <strong>Pegasus</strong> — phần mềm gián điệp cấp nhà nước đã được dùng để theo dõi hàng chục nhà báo điều tra trên toàn thế giới.</p>
    <ul>
      <li><strong>Dấu hiệu bị cài spyware:</strong> Pin điện thoại cạn nhanh bất thường, máy nóng dù không dùng, lưu lượng dữ liệu tăng đột biến</li>
      <li><strong>Phòng ngừa:</strong> Không để điện thoại/máy tính ngoài tầm kiểm soát, cập nhật hệ điều hành thường xuyên, không cài ứng dụng từ nguồn không chính thức</li>
    </ul>

    <h3>Man-in-the-Middle — Nghe lén đường truyền</h3>
    <p>Trên mạng WiFi công cộng (quán cà phê, sân bay, trường học), kẻ tấn công có thể đứng "giữa" kết nối của bạn và đọc mọi dữ liệu không được mã hóa. Email, tin nhắn, tài khoản đăng nhập — tất cả đều có thể bị chặn bắt.</p>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Mô hình tư duy bảo mật:</strong> Đừng hỏi <em>"Tôi có bị tấn công không?"</em> — hãy hỏi <em>"Nếu tôi bị tấn công hôm nay, thiệt hại sẽ là bao nhiêu?"</em> Bảo mật tốt là giảm thiểu thiệt hại tối đa — không phải phòng thủ tuyệt đối.</p>
    </div>

    <h2>Phần 2: Bảo vệ tài khoản — Lớp phòng thủ đầu tiên</h2>

    <div class="step-block">
      <span class="step-num">Biện pháp 1</span>
      <h4>Mật khẩu mạnh và duy nhất cho mỗi tài khoản</h4>
      <p>Mật khẩu mạnh không nhất thiết phải khó nhớ — nó phải <em>dài</em> và <em>duy nhất</em>. Một câu ngẫu nhiên như <strong>"caphesua-Hanoi-2024-xanh"</strong> mạnh hơn nhiều so với "P@ssw0rd123" vì độ dài.</p>
      <p>Quy tắc tối thiểu: ít nhất 12 ký tự, kết hợp chữ hoa/thường/số/ký tự đặc biệt, <strong>không dùng lại cho hai tài khoản khác nhau</strong>.</p>
      <p>Vì không ai nhớ được hàng chục mật khẩu khác nhau, hãy dùng <strong>Password Manager</strong>: <strong>1Password</strong> (trả phí, chuyên nghiệp nhất), <strong>Bitwarden</strong> (mã nguồn mở, miễn phí), hoặc <strong>Google Password Manager</strong> (tích hợp Chrome, đủ dùng cho người mới bắt đầu).</p>
    </div>

    <div class="step-block">
      <span class="step-num">Biện pháp 2</span>
      <h4>Xác thực hai yếu tố (2FA) — Lớp bảo vệ thứ hai</h4>
      <p>2FA yêu cầu thêm một bước xác nhận sau khi nhập mật khẩu — thường là mã OTP gửi về điện thoại hoặc ứng dụng xác thực. Ngay cả khi mật khẩu bị lộ, kẻ tấn công vẫn không vào được tài khoản nếu không có điện thoại của bạn.</p>
      <p><strong>Thứ tự bảo mật từ yếu đến mạnh:</strong></p>
      <ul>
        <li>SMS OTP — tiện lợi nhưng có thể bị SIM swap (hoán đổi SIM giả)</li>
        <li><strong>App Authenticator</strong> (Google Authenticator, Authy) — tốt hơn nhiều, mã chỉ tồn tại 30 giây</li>
        <li><strong>Hardware Key</strong> (YubiKey) — mạnh nhất, dùng cho tài khoản cực kỳ nhạy cảm</li>
      </ul>
      <p>Bật 2FA ngay cho: tài khoản email, mạng xã hội, WordPress, tài khoản lưu trữ đám mây.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Biện pháp 3</span>
      <h4>Kiểm tra tài khoản đã bị rò rỉ chưa</h4>
      <p>Vào <strong>haveibeenpwned.com</strong> — nhập email của bạn để kiểm tra xem email này có trong danh sách rò rỉ dữ liệu nào không. Đây là dịch vụ uy tín, hoàn toàn miễn phí.</p>
      <p>Nếu email của bạn bị gắn cờ: đổi mật khẩu ngay cho tài khoản đó và tất cả tài khoản dùng cùng mật khẩu.</p>
    </div>

    <h2>Phần 3: Liên lạc an toàn với nguồn tin</h2>
    <p>Bảo vệ nguồn tin là nghĩa vụ đạo đức và pháp lý của nhà báo. Một nguồn tin bị lộ có thể mất việc làm, bị truy tố, hoặc gặp nguy hiểm thực sự. Đây là trách nhiệm bạn không thể xem nhẹ.</p>

    <h3>Mức độ nhạy cảm và công cụ tương ứng</h3>

    <div class="step-block">
      <span class="step-num">Mức 1</span>
      <h4>Tin tức thông thường — Email và điện thoại bình thường</h4>
      <p>Với những cuộc liên lạc không nhạy cảm (phỏng vấn công khai, xác nhận thông tin cơ bản), email và điện thoại thông thường là đủ. Tuy nhiên, hãy nhớ rằng email không được mã hóa mặc định — nhà mạng, nhà cung cấp dịch vụ email đều có thể đọc được.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Mức 2</span>
      <h4>Nguồn tin nhạy cảm — Signal</h4>
      <p><strong>Signal</strong> là ứng dụng nhắn tin được mã hóa đầu cuối (end-to-end encryption) — nghĩa là chỉ người gửi và người nhận đọc được, ngay cả Signal cũng không thể đọc. Đây là tiêu chuẩn vàng cho liên lạc nhà báo, được Snowden, EFF và hầu hết tổ chức bảo vệ báo chí khuyến nghị.</p>
      <ul>
        <li>Bật tính năng <strong>"Disappearing Messages"</strong> (tin nhắn tự xóa) — đặt từ 1 tuần đến 1 tháng tùy mức độ nhạy cảm</li>
        <li>Tắt xem trước tin nhắn trên màn hình khóa điện thoại</li>
        <li>Dùng <strong>Note to Self</strong> để ghi chú an toàn thay vì ứng dụng ghi chú thông thường</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Mức 3</span>
      <h4>Tài liệu điều tra nhạy cảm cao — ProtonMail + Tor</h4>
      <p><strong>ProtonMail</strong> (proton.me) là dịch vụ email mã hóa đầu cuối có máy chủ ở Thụy Sĩ — tuân theo luật bảo mật chặt chẽ nhất châu Âu. Miễn phí ở gói cơ bản.</p>
      <p><strong>Tor Browser</strong> ẩn địa chỉ IP của bạn bằng cách định tuyến kết nối qua nhiều máy chủ trung gian. Dùng khi cần truy cập hoặc gửi tài liệu mà không để lộ vị trí thực. Tốc độ chậm hơn trình duyệt thông thường — nhưng đó là cái giá cho sự ẩn danh.</p>
    </div>

    <div class="callout">
      <strong>SecureDrop — Hệ thống tố giác ẩn danh</strong>
      Nhiều tòa soạn lớn (The Guardian, The Washington Post, New York Times) triển khai <strong>SecureDrop</strong> — hệ thống mã nguồn mở cho phép người tố giác gửi tài liệu hoàn toàn ẩn danh. Nếu bạn làm việc tại tòa soạn sau này và xử lý thông tin tố giác, đây là công cụ bạn cần tìm hiểu.
    </div>

    <h2>Phần 4: Bảo mật thiết bị và dữ liệu</h2>

    <div class="step-block">
      <span class="step-num">Thực hành 1</span>
      <h4>Mã hóa ổ đĩa</h4>
      <p>Nếu máy tính bị mất hoặc bị thu giữ, mã hóa ổ đĩa đảm bảo kẻ xấu không đọc được dữ liệu. Bật ngay:</p>
      <ul>
        <li><strong>macOS:</strong> System Settings → Privacy & Security → FileVault → Turn On</li>
        <li><strong>Windows:</strong> Settings → Update & Security → Device Encryption → Turn On</li>
        <li><strong>Điện thoại:</strong> iOS và Android đời mới mặc định đã mã hóa — đảm bảo bạn đặt mã PIN đủ mạnh (không dùng 000000 hay 123456)</li>
      </ul>
    </div>

    <div class="step-block">
      <span class="step-num">Thực hành 2</span>
      <h4>Sao lưu dữ liệu — Quy tắc 3-2-1</h4>
      <p>Dữ liệu không được sao lưu là dữ liệu sắp mất. Quy tắc <strong>3-2-1</strong>: giữ <strong>3</strong> bản sao, trên <strong>2</strong> loại phương tiện khác nhau, <strong>1</strong> bản ở vị trí địa lý khác (đám mây).</p>
      <p>Ví dụ thực tế: bản gốc trên máy tính + sao lưu ổ cứng ngoài + sao lưu Google Drive/iCloud. Đặt lịch sao lưu tự động hàng tuần — đừng chờ đến lúc mất dữ liệu mới nhớ.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Thực hành 3</span>
      <h4>Cập nhật phần mềm — Không trì hoãn</h4>
      <p>Hầu hết các vụ tấn công thành công khai thác lỗ hổng bảo mật đã biết — mà nhà sản xuất đã vá từ lâu. Nếu bạn không cập nhật, bạn đang mở cửa cho kẻ tấn công.</p>
      <p>Bật cập nhật tự động cho: hệ điều hành máy tính, hệ điều hành điện thoại, trình duyệt web, và các ứng dụng thường dùng. Không trì hoãn thông báo cập nhật vì "bận".</p>
    </div>

    <div class="step-block">
      <span class="step-num">Thực hành 4</span>
      <h4>VPN — Khi nào cần, khi nào không</h4>
      <p>VPN (Virtual Private Network) mã hóa kết nối internet và ẩn địa chỉ IP. Hữu ích khi dùng WiFi công cộng, hoặc khi cần truy cập nội dung bị chặn địa lý.</p>
      <p><strong>Lưu ý quan trọng:</strong> VPN chuyển sự tin tưởng từ nhà mạng sang nhà cung cấp VPN. Chọn VPN uy tín có chính sách "no-log" đã được kiểm toán độc lập (Mullvad, ProtonVPN). Tránh VPN miễn phí — chúng thường kiếm tiền bằng cách bán dữ liệu của bạn.</p>
    </div>

    <h2>Phần 5: Đạo đức số trong tác nghiệp báo chí</h2>
    <p>Bảo mật bảo vệ bạn khỏi tác nhân bên ngoài. Đạo đức số là những quyết định <em>bạn tự đưa ra</em> trong quá trình tác nghiệp — và chúng định hình uy tín của bạn lâu dài.</p>

    <h3>Xác minh trước khi đăng — Không có ngoại lệ</h3>
    <p>Môi trường mạng xã hội tạo áp lực đăng nhanh. Nhưng một tin sai có thể lan rộng gấp 6 lần tin đúng (MIT Media Lab, 2018) và việc cải chính không bao giờ đạt độ phủ bằng tin gốc. Với nhà báo, uy tín là tài sản duy nhất không thể mua lại.</p>
    <ul>
      <li><strong>Kiểm tra ảnh:</strong> Google Reverse Image Search hoặc TinEye để xác minh ảnh không phải từ sự kiện khác</li>
      <li><strong>Kiểm tra video:</strong> InVID/WeVerify — công cụ miễn phí để xác minh video viral</li>
      <li><strong>Kiểm tra trích dẫn:</strong> Luôn xem trích dẫn trong ngữ cảnh đầy đủ — rất nhiều trích dẫn bị cắt ghép sai ý</li>
    </ul>

    <h3>Quyền riêng tư và đồng thuận</h3>
    <p>Chụp ảnh và quay phim người dân trong không gian công cộng nhìn chung là hợp pháp ở Việt Nam, nhưng có ranh giới đạo đức cần tôn trọng:</p>
    <ul>
      <li>Trẻ em: cần sự đồng ý của cha mẹ/người giám hộ, không đăng ảnh trẻ em trong hoàn cảnh dễ bị nhận dạng ở các chủ đề nhạy cảm</li>
      <li>Nạn nhân: đặc biệt thận trọng với nạn nhân bạo lực, tai nạn, thảm họa — cân nhắc giá trị thông tin vs. tổn thương thêm cho họ</li>
      <li>Nguồn tin ẩn danh: nếu đã hứa bảo vệ danh tính, giữ lời hứa dù áp lực bên ngoài</li>
    </ul>

    <h3>Sử dụng AI trong tác nghiệp — Ranh giới mới</h3>
    <p>AI tạo sinh (ChatGPT, Gemini, Claude...) đang thay đổi quy trình làm báo. Tuy nhiên có những ranh giới rõ ràng:</p>
    <ul>
      <li><strong>Được phép:</strong> Dùng AI để nghiên cứu nhanh, tóm tắt tài liệu dài, gợi ý góc tiếp cận, kiểm tra ngữ pháp</li>
      <li><strong>Cần thận trọng:</strong> AI "hallucinate" — bịa đặt thông tin trông rất thật. Không dùng output của AI làm nguồn dẫn chứng mà không kiểm chứng độc lập</li>
      <li><strong>Không được phép:</strong> Dùng AI tạo ảnh giả mạo thực tế, tạo trích dẫn giả danh người thật, xuất bản nội dung AI mà không ghi chú</li>
    </ul>

    <div class="callout">
      <strong>Nguyên tắc tối thượng</strong>
      Trước mỗi quyết định trong tác nghiệp số, hãy tự hỏi: <em>"Nếu quyết định này được đăng lên trang nhất ngày mai, tôi có sẵn sàng đứng ra giải thích không?"</em> Nếu câu trả lời là không — đừng làm.
    </div>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập về nhà:</strong> Thực hiện <em>kiểm tra bảo mật cá nhân</em> trong 30 phút: (1) Vào haveibeenpwned.com kiểm tra email, (2) Bật 2FA cho tài khoản Google và Facebook, (3) Cài Signal và nhắn tin thử với một người bạn, (4) Kiểm tra xem FileVault/Device Encryption đã bật chưa. Viết báo cáo ngắn 150 chữ: tình trạng bảo mật hiện tại của bạn và 3 việc cần làm ngay.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Bảo mật kỹ thuật số và đạo đức số không phải hai chủ đề tách biệt — chúng đều xuất phát từ cùng một giá trị: <em>trách nhiệm với người khác</em>. Bảo mật là trách nhiệm bảo vệ nguồn tin tin tưởng bạn. Đạo đức số là trách nhiệm với người đọc, với nhân vật trong bài và với nghề báo.</p>
    <p>Bài học tiếp theo sẽ chuyển sang kỹ năng tiếp cận độc giả chủ động: <strong>Newsletter & Email Marketing</strong> — xây dựng cộng đồng người đọc trung thành không phụ thuộc vào thuật toán mạng xã hội.</p>
  `
};
