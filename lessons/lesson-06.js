// ═══════════════════════════════════════════
// DBlogStudio — lessons/lesson-06.js
// Bài 06: Báo chí dữ liệu & Trực quan hóa
// ═══════════════════════════════════════════

const LESSON_06 = {
  id: 6,
  num: "06",
  title: "Báo chí dữ liệu & <em>Trực quan hóa</em>",
  duration: "135 phút",
  level: "Trung cấp",
  tool: "Datawrapper · Flourish · Google Sites",
  prevLesson: null,
  nextLesson: null,

  content: `
    <h2>Giới thiệu bài học</h2>
    <p>Một con số đứng một mình trong bài báo thường bị bỏ qua. Nhưng cùng con số đó, đặt trong một biểu đồ tương tác với màu sắc, trục tọa độ và chú thích rõ ràng — người đọc hiểu ngay và nhớ lâu. Đó là sức mạnh của <strong>trực quan hóa dữ liệu (data visualization)</strong> trong báo chí hiện đại.</p>
    <p>Bài học này hướng dẫn bạn dùng hai công cụ chuyên nghiệp — <strong>Datawrapper</strong> và <strong>Flourish</strong> — để tạo biểu đồ, bản đồ và infographic tương tác, sau đó tích hợp trực tiếp vào trang Google Sites.</p>

    <div class="callout">
      <strong>Mục tiêu bài học</strong>
      Sau bài học này, bạn sẽ: hiểu khi nào dùng loại biểu đồ nào; tạo được biểu đồ cột, đường, tròn và bản đồ với Datawrapper; tạo được đồ họa tương tác nâng cao với Flourish; nhúng (embed) biểu đồ vào Google Sites qua iframe; tuân thủ nguyên tắc trình bày dữ liệu trung thực và rõ ràng.
    </div>

    <h2>Phần 1: Tại sao báo chí cần trực quan hóa dữ liệu?</h2>
    <p>Não người xử lý hình ảnh nhanh hơn văn bản 60.000 lần. Khi đưa tin về số liệu thống kê, kết quả bầu cử, diễn biến dịch bệnh hay tình hình kinh tế — biểu đồ không chỉ làm bài viết đẹp hơn, mà còn giúp người đọc nắm bắt xu hướng, so sánh và rút ra kết luận nhanh hơn nhiều so với đọc bảng số liệu thô.</p>

    <h3>Các dạng câu chuyện dữ liệu phổ biến trong báo chí</h3>
    <ul>
      <li><strong>So sánh:</strong> "Tỉ lệ thất nghiệp các tỉnh miền Trung năm 2024" → Biểu đồ cột</li>
      <li><strong>Xu hướng theo thời gian:</strong> "Giá xăng biến động 5 năm qua" → Biểu đồ đường</li>
      <li><strong>Tỉ lệ / cơ cấu:</strong> "Cơ cấu thu ngân sách tỉnh Thừa Thiên Huế" → Biểu đồ tròn / donut</li>
      <li><strong>Phân bố địa lý:</strong> "Mật độ dân số theo huyện" → Bản đồ nhiệt (choropleth)</li>
      <li><strong>Mối quan hệ:</strong> "GDP và chỉ số hạnh phúc 100 quốc gia" → Biểu đồ bong bóng (scatter)</li>
      <li><strong>Bảng xếp hạng:</strong> "Top 10 trường đại học Việt Nam" → Biểu đồ cột ngang (bar race)</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">⚠️</span>
      <p><strong>Nguyên tắc vàng:</strong> Dữ liệu phải trung thực. Đừng cắt trục Y không bắt đầu từ 0 để phóng đại sự khác biệt. Đừng dùng biểu đồ tròn 3D vì nó bóp méo tỉ lệ. Màu sắc không nên có hàm ý chính trị. Luôn ghi rõ nguồn dữ liệu.</p>
    </div>

    <h2>Phần 2: Datawrapper — Biểu đồ báo chí chuẩn mực</h2>
    <p><a href="https://www.datawrapper.de" target="_blank">Datawrapper</a> là công cụ tạo biểu đồ được dùng bởi hàng trăm tờ báo lớn: The New York Times, Reuters, BBC, Der Spiegel... Phiên bản miễn phí đủ dùng cho hầu hết nhu cầu học tập và tác nghiệp.</p>

    <h3>Ưu điểm nổi bật</h3>
    <ul>
      <li>Giao diện đơn giản, tập trung vào nội dung — không thừa tính năng</li>
      <li>Biểu đồ tự động responsive, hiển thị tốt trên mọi màn hình</li>
      <li>Xuất mã nhúng (embed code) iframe — dán thẳng vào Google Sites, WordPress</li>
      <li>Hỗ trợ tiếng Việt trong nhãn biểu đồ</li>
      <li>Bản đồ Việt Nam tích hợp sẵn (choropleth theo tỉnh/thành)</li>
    </ul>

    <div class="step-block">
      <span class="step-num">Thực hành 1</span>
      <h4>Tạo biểu đồ cột với Datawrapper</h4>
      <p><strong>Tình huống:</strong> Bạn cần minh họa số lượng sinh viên nhập học tại 5 trường đại học tại Huế năm 2024.</p>
      <p><strong>Bước 1 — Đăng ký & tạo biểu đồ mới:</strong> Vào <a href="https://app.datawrapper.de" target="_blank">app.datawrapper.de</a> → đăng ký tài khoản miễn phí → nhấn <strong>"+ New chart"</strong>.</p>
      <p><strong>Bước 2 — Nhập dữ liệu:</strong> Chọn tab <strong>"Upload data"</strong>. Dán bảng dữ liệu sau vào ô nhập liệu (có thể paste từ Excel/Google Sheets):</p>
      <div style="background:#f5f5f5; border:1px solid var(--rule); padding:14px 18px; font-family:'JetBrains Mono',monospace; font-size:0.82rem; margin:12px 0; overflow-x:auto;">
        Trường,Sinh viên nhập học<br>
        ĐH Khoa học,2850<br>
        ĐH Sư phạm,3120<br>
        ĐH Y Dược,1640<br>
        ĐH Nghệ thuật,980<br>
        ĐH Luật,1430
      </div>
      <p><strong>Bước 3 — Chọn loại biểu đồ:</strong> Tab <strong>"Visualize"</strong> → chọn <strong>Bar chart</strong> (cột ngang) hoặc <strong>Column chart</strong> (cột đứng). Với dữ liệu này, Column chart phù hợp hơn.</p>
      <p><strong>Bước 4 — Tinh chỉnh:</strong> Tab <strong>"Refine"</strong> → bật <strong>"Show labels"</strong> để hiện số trên cột. Tab <strong>"Annotate"</strong> → điền tiêu đề: <em>"Sinh viên nhập học năm 2024 — Các trường ĐH tại Huế"</em>. Thêm chú thích nguồn: <em>"Nguồn: Bộ Giáo dục và Đào tạo, 2024"</em>.</p>
      <p><strong>Bước 5 — Xuất bản:</strong> Tab <strong>"Publish"</strong> → nhấn <strong>"Publish chart"</strong> → sao chép đoạn mã iframe trong ô <strong>"Embed code"</strong>. Giữ lại mã này để dùng ở Phần 4.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Thực hành 2</span>
      <h4>Tạo bản đồ nhiệt tỉnh/thành Việt Nam</h4>
      <p><strong>Tình huống:</strong> Minh họa tỉ lệ hộ nghèo theo tỉnh thành.</p>
      <p><strong>Bước 1:</strong> <strong>"+ New chart"</strong> → chọn <strong>"Map"</strong> → <strong>"Choropleth map"</strong> → tìm và chọn <strong>"Vietnam — Provinces"</strong>.</p>
      <p><strong>Bước 2:</strong> Tab <strong>"Add your data"</strong> → cột đầu là tên tỉnh (phải khớp chính xác với tên trong bản đồ), cột hai là giá trị số. Datawrapper tự động tô màu theo mức độ.</p>
      <p><strong>Bước 3:</strong> Tab <strong>"Refine"</strong> → chọn bảng màu phù hợp (Sequential cho dữ liệu từ thấp đến cao, Diverging nếu có giá trị âm/dương). Bật tooltip để người dùng hover xem số liệu chi tiết.</p>
      <p><strong>Bước 4:</strong> Publish và lấy embed code như Thực hành 1.</p>
    </div>

    <h2>Phần 3: Flourish — Đồ họa tương tác nâng cao</h2>
    <p><a href="https://flourish.studio" target="_blank">Flourish</a> mạnh hơn Datawrapper ở các dạng trực quan hóa phức tạp và có animation: biểu đồ chạy theo thời gian (bar chart race), đồ thị mạng lưới, câu chuyện cuộn trang (scrollytelling)... Phiên bản miễn phí cho phép tạo và nhúng biểu đồ công khai.</p>

    <h3>Các template nổi bật trong Flourish</h3>
    <ul>
      <li><strong>Bar Chart Race:</strong> Xếp hạng thay đổi theo thời gian — rất viral trên mạng xã hội</li>
      <li><strong>Line, Bar, Pie:</strong> Biểu đồ cơ bản với animation mượt</li>
      <li><strong>Scatter:</strong> So sánh hai biến số trên hàng trăm điểm dữ liệu</li>
      <li><strong>Hierarchy / Treemap:</strong> Cơ cấu phân tầng (ngân sách, tổ chức)</li>
      <li><strong>Story:</strong> Kết hợp nhiều slide biểu đồ thành một câu chuyện có dẫn dắt</li>
      <li><strong>Survey:</strong> Trực quan hóa kết quả khảo sát</li>
    </ul>

    <div class="step-block">
      <span class="step-num">Thực hành 3</span>
      <h4>Tạo biểu đồ đường tương tác với Flourish</h4>
      <p><strong>Tình huống:</strong> Diễn biến giá vàng SJC tại Việt Nam theo tháng, năm 2024.</p>
      <p><strong>Bước 1:</strong> Vào <a href="https://flourish.studio" target="_blank">flourish.studio</a> → đăng ký tài khoản → nhấn <strong>"New visualization"</strong> → chọn template <strong>"Line, Bar, Pie"</strong> → chọn kiểu <strong>Line</strong>.</p>
      <p><strong>Bước 2 — Nhập dữ liệu:</strong> Click tab <strong>"Data"</strong> ở đầu trang. Xóa dữ liệu mẫu, dán dữ liệu của bạn. Cột đầu là nhãn (tháng), các cột tiếp theo là từng chuỗi dữ liệu (ví dụ: Giá mua, Giá bán).</p>
      <p><strong>Bước 3 — Tùy chỉnh:</strong> Tab <strong>"Preview"</strong> → bảng <strong>"Header"</strong> bên phải để đặt tiêu đề. Bảng <strong>"X axis / Y axis"</strong> để định dạng nhãn trục. Bảng <strong>"Colors"</strong> để chọn màu từng đường.</p>
      <p><strong>Bước 4 — Xuất bản:</strong> Nhấn <strong>"Export & publish"</strong> (góc trên phải) → <strong>"Publish"</strong> → sao chép <strong>embed code</strong>.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">💡</span>
      <p><strong>Datawrapper hay Flourish?</strong> Dùng <strong>Datawrapper</strong> khi cần biểu đồ nhanh, chuẩn báo chí, tải nhanh — phù hợp tin tức hằng ngày. Dùng <strong>Flourish</strong> khi cần animation, nhiều loại biểu đồ phức tạp hơn, hoặc tạo câu chuyện dữ liệu dài — phù hợp bài phóng sự chuyên sâu.</p>
    </div>

    <h2>Phần 4: Tích hợp biểu đồ vào Google Sites</h2>
    <p>Đây là bước quan trọng nhất của bài học — đưa biểu đồ bạn vừa tạo lên trang Google Sites. Google Sites hỗ trợ nhúng nội dung bên ngoài qua <strong>iframe embed code</strong>.</p>

    <div class="step-block">
      <span class="step-num">Bước 1</span>
      <h4>Mở trang Google Sites cần chỉnh sửa</h4>
      <p>Vào <a href="https://sites.google.com" target="_blank">sites.google.com</a> → mở trang bạn đã tạo ở Bài 01 → nhấn biểu tượng bút chì <strong>(Edit)</strong> để vào chế độ chỉnh sửa.</p>
      <p>Điều hướng đến trang hoặc phần bạn muốn chèn biểu đồ — ví dụ trang <em>"Tác phẩm"</em> hoặc <em>"Bài phóng sự"</em>.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 2</span>
      <h4>Chèn khối Embed từ thanh Insert</h4>
      <p>Ở thanh công cụ bên phải, click tab <strong>"Chèn" (Insert)</strong> → kéo xuống cuối danh sách → click <strong>"Nhúng" (Embed)</strong>.</p>
      <p>Một hộp thoại xuất hiện với hai tab:</p>
      <ul>
        <li><strong>URL:</strong> Dán link trực tiếp của biểu đồ (ví dụ: link Datawrapper public)</li>
        <li><strong>Nhúng mã (Embed code):</strong> Dán toàn bộ thẻ <code>&lt;iframe&gt;...&lt;/iframe&gt;</code> mà bạn đã sao chép từ Datawrapper hoặc Flourish</li>
      </ul>
      <p>Chọn tab <strong>"Nhúng mã"</strong> → dán iframe code → nhấn <strong>"Tiếp theo" (Next)</strong> → nhấn <strong>"Chèn" (Insert)</strong>.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 3</span>
      <h4>Điều chỉnh kích thước khối nhúng</h4>
      <p>Biểu đồ xuất hiện trên trang dưới dạng một khối. Click vào khối → kéo góc để thay đổi kích thước. Nên để chiều rộng <strong>toàn cột (full width)</strong> để biểu đồ hiển thị rõ nhất.</p>
      <p>Thêm một <strong>hộp văn bản (Text box)</strong> phía trên biểu đồ để giải thích ngữ cảnh: <em>"Biểu đồ dưới đây cho thấy..."</em> — giúp người đọc hiểu trước khi tương tác với dữ liệu.</p>
    </div>

    <div class="step-block">
      <span class="step-num">Bước 4</span>
      <h4>Xuất bản và kiểm tra</h4>
      <p>Nhấn <strong>"Xuất bản" (Publish)</strong> → <strong>"Xuất bản"</strong> để cập nhật trang công khai. Mở link trang trên trình duyệt ở chế độ ẩn danh (incognito) để kiểm tra như người đọc thực sự.</p>
      <p>Kiểm tra:</p>
      <ul>
        <li>✅ Biểu đồ hiển thị đúng, không bị vỡ layout?</li>
        <li>✅ Hover tooltip hoạt động khi rê chuột?</li>
        <li>✅ Biểu đồ hiển thị được trên điện thoại?</li>
        <li>✅ Có chú thích nguồn dữ liệu bên dưới?</li>
      </ul>
    </div>

    <div class="callout">
      <strong>Lưu ý về iframe trong Google Sites</strong>
      Google Sites chỉ chấp nhận nhúng từ các nguồn tin cậy. Datawrapper và Flourish đều được hỗ trợ tốt. Nếu biểu đồ không hiển thị mà chỉ thấy thông báo lỗi, hãy thử dùng <strong>đường link trực tiếp (URL)</strong> thay vì iframe code. Biểu đồ phải được <strong>Publish</strong> (công khai) thì mới nhúng được — biểu đồ để ở trạng thái draft sẽ không hiện.
    </div>

    <h2>Phần 5: Nhúng Google Sheets Chart — Cách đơn giản nhất</h2>
    <p>Nếu dữ liệu của bạn đã có sẵn trong Google Sheets, bạn có thể tạo biểu đồ ngay tại đó và nhúng trực tiếp vào Google Sites mà không cần công cụ bên ngoài — và tự động cập nhật khi dữ liệu thay đổi.</p>

    <div class="step-block">
      <span class="step-num">Bước 5</span>
      <h4>Tạo biểu đồ từ Google Sheets và nhúng vào Sites</h4>
      <p><strong>Trong Google Sheets:</strong> Chọn vùng dữ liệu → menu <strong>Insert → Chart</strong> → chọn loại biểu đồ → tùy chỉnh tiêu đề, màu sắc trong Chart Editor bên phải.</p>
      <p><strong>Lấy mã nhúng:</strong> Click vào biểu đồ → 3 chấm (⋮) góc trên phải biểu đồ → <strong>"Publish chart"</strong> → chọn <strong>"Embed"</strong> → sao chép iframe code.</p>
      <p><strong>Trong Google Sites:</strong> Insert → Embed → dán iframe code → Insert. Biểu đồ sẽ <strong>tự động cập nhật</strong> mỗi khi bạn thay đổi dữ liệu trong Google Sheets — không cần xuất bản lại trang.</p>
    </div>

    <div class="tip-box">
      <span class="tip-icon">🔄</span>
      <p><strong>Ưu tiên dùng Google Sheets khi:</strong> Bạn cần cập nhật dữ liệu thường xuyên (ví dụ: theo dõi số liệu theo tuần/tháng). Biểu đồ Google Sheets tự đồng bộ — thay đổi số liệu là trang web tự cập nhật, không cần làm lại từ đầu.</p>
    </div>

    <h2>Phần 6: Bộ công cụ trực quan hóa mở rộng</h2>
    <p>Ngoài Datawrapper và Flourish, đây là các công cụ khác đáng tham khảo theo từng nhu cầu cụ thể:</p>

    <h3>Infographic tĩnh (không tương tác)</h3>
    <ul>
      <li><strong>Canva Infographic Templates:</strong> Đã học ở Bài 03 — dùng cho infographic có nhiều văn bản và hình ảnh minh họa</li>
      <li><strong>Piktochart</strong> (<a href="https://piktochart.com" target="_blank">piktochart.com</a>): Chuyên về infographic báo cáo dài</li>
      <li><strong>Venngage</strong>: Mạnh về infographic thống kê và so sánh</li>
    </ul>

    <h3>Bản đồ chuyên sâu</h3>
    <ul>
      <li><strong>Google My Maps</strong>: Tạo bản đồ tùy chỉnh, đánh dấu địa điểm sự kiện — nhúng được vào Google Sites qua Insert → Map</li>
      <li><strong>Mapchart.net</strong>: Tô màu bản đồ thế giới/quốc gia đơn giản, xuất ảnh PNG</li>
      <li><strong>Kepler.gl</strong>: Trực quan hóa dữ liệu địa lý phức tạp (cho bài phóng sự chuyên sâu)</li>
    </ul>

    <h3>Bảng dữ liệu tương tác</h3>
    <ul>
      <li><strong>Google Sheets nhúng:</strong> Nhúng bảng dữ liệu trực tiếp — người đọc có thể lọc và sắp xếp ngay trên trang</li>
      <li><strong>Airtable:</strong> Cơ sở dữ liệu dạng bảng đẹp, có thể nhúng view vào Sites</li>
    </ul>

    <div class="tip-box">
      <span class="tip-icon">🎯</span>
      <p><strong>Bài tập thực hành:</strong> Chọn một chủ đề thời sự có số liệu (kinh tế, giáo dục, y tế, môi trường…). Tạo ít nhất <strong>2 loại biểu đồ khác nhau</strong> từ cùng bộ dữ liệu bằng Datawrapper hoặc Flourish. Nhúng cả hai biểu đồ vào trang Google Sites đã tạo ở Bài 01 — tạo một trang mới tên <em>"Dữ liệu"</em>. Viết 2–3 câu dẫn nhập trước mỗi biểu đồ giải thích người đọc nên chú ý điều gì. Nộp link trang Google Sites đã xuất bản.</p>
    </div>

    <h2>Tóm tắt bài học</h2>
    <p>Bạn đã nắm được quy trình hoàn chỉnh của một nhà báo dữ liệu: từ chọn loại biểu đồ phù hợp, nhập và xử lý dữ liệu trong Datawrapper hoặc Flourish, đến nhúng sản phẩm cuối vào trang Google Sites. Đặc biệt, bạn đã hiểu cả ba con đường tích hợp: qua iframe code, qua URL trực tiếp, và qua Google Sheets Chart tự động đồng bộ.</p>
    <p>Trực quan hóa dữ liệu không phải là trang trí — đó là một ngôn ngữ. Và như mọi ngôn ngữ, bạn sẽ nói nó lưu loát hơn mỗi khi thực hành với dữ liệu thực từ bài viết của chính mình.</p>
  `
};
