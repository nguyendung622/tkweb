// ═══════════════════════════════════════════
// DBlogStudio — data/lessons.js
// Cấu hình danh sách bài học
// Thêm bài mới: thêm object vào mảng LESSONS
// ═══════════════════════════════════════════

const SITE_CONFIG = {
  name: "DBlogStudio",
  subtitle: "Thiết kế web cho nhà báo hiện đại",
  instructor: {
    name: "Nguyễn Dũng",
    title: "Giảng viên Khoa Công nghệ thông tin",
    org: "Trường Đại học Khoa học, Đại học Huế",
    emails: ["ndung@husc.edu.vn", "nguyendung@hueuni.edu.vn"],
    orcid: "https://orcid.org/0009-0000-4510-7504",
    scholar: "https://scholar.google.com/citations?hl=vi&view_op=search_authors&mquery=nguyendung%40hueuni.edu.vn",
    photo: "images/dung.png",
    initials: "ND"
  },
  stats: {
    totalLessons: 12,
    totalPeriods: 45,
    requiresCode: false
  },
  quote: {
    text: "Nhà báo thế kỷ 21 không chỉ kể chuyện — họ thiết kế không gian để câu chuyện sống.",
    source: "Định hướng môn học · Khoa Báo Chí & Truyền Thông"
  },
  tools: [
    "Google Sites", "WordPress", "Canva", "Datawrapper",
    "Flourish", "Adobe Express", "Google Analytics", "Mailchimp"
  ]
};

// ── DANH SÁCH KỲ HỌC & NGUỒN DỮ LIỆU HỌC VIÊN ──
//
// Loại 1 — Google Sheets tự động (type: "gsheet"):
//   spreadsheetId: lấy từ URL .../spreadsheets/d/SPREADSHEET_ID/edit
//   apiKey: Google API Key — app tự đọc danh sách tab, mỗi tab = 1 nhóm
//     Tạo tại: console.cloud.google.com → APIs & Services → Credentials → Create API Key
//     Bật: Google Sheets API  |  Giới hạn key: HTTP referrers → domain của bạn
//   Yêu cầu: spreadsheet chia sẻ "Bất kỳ ai có đường liên kết → Người xem"
//
// Loại 2 — File CSV cục bộ (type: "csv"):
//   file: đường dẫn tương đối từ thư mục gốc
const STUDENT_FILES = [
  {
    label: "HK2 · 2025–2026",
    type:  "gsheet",
    spreadsheetId: "169B_QuCx7iWKX1iLyFjGc-tSTNdeiFRTec9NUWKoEZg",
    apiKey: "AIzaSyBaqV9lDDlcqnfgvGyULmPitZpBN9EOxkI"
  }
];

// ── DANH SÁCH BÀI HỌC ──
// status: "live" = có bài giảng | "soon" = sắp có
// file: tên file trong thư mục lessons/ (không có .js)
// Thêm bài mới: sao chép một object và điền thông tin
const LESSONS = [
  {
    id: 1,
    num: "01",
    title: "Làm quen với Google Sites",
    desc: "Tạo trang web cá nhân chuyên nghiệp, xuất bản và chia sẻ — chỉ với tài khoản Google.",
    tags: ["Thực hành", "Google Workspace", "90 phút"],
    duration: "90 phút",
    level: "Cơ bản",
    tool: "Google Sites",
    status: "live",
    file: "lesson-01"
  },
  {
    id: 2,
    num: "02",
    title: "Cấu trúc thông tin & UX cơ bản",
    desc: "Cách tổ chức nội dung báo chí trên web để người đọc dễ theo dõi và tìm kiếm.",
    tags: ["Lý thuyết", "UX", "90 phút"],
    duration: "90 phút",
    level: "Lý thuyết & Thực hành",
    tool: "Google Sites",
    status: "live",
    file: "lesson-02"
  },
  {
    id: 3,
    num: "03",
    title: "Thiết kế Poster & Banner với Canva",
    desc: "Tạo poster sự kiện, banner mạng xã hội chuyên nghiệp với Canva — không cần biết thiết kế.",
    tags: ["Thiết kế", "Canva", "120 phút"],
    duration: "120 phút",
    level: "Cơ bản – Trung cấp",
    tool: "Canva",
    status: "live",
    file: "lesson-03"
  },
  {
    id: 4,
    num: "04",
    title: "WordPress cơ bản",
    desc: "Nền tảng quản lý nội dung phổ biến nhất thế giới — dùng trong hầu hết tòa soạn hiện đại.",
    tags: ["WordPress", "CMS", "120 phút"],
    duration: "120 phút",
    level: "Cơ bản – Trung cấp",
    tool: "WordPress.com · Gutenberg Editor",
    status: "live",
    file: "lesson-04"
  },
  {
    id: 5,
    num: "05",
    title: "SEO cho nhà báo",
    desc: "Viết tiêu đề, mô tả và tối ưu bài viết để xuất hiện trên Google.",
    tags: ["SEO", "Kỹ thuật", "90 phút"],
    duration: "90 phút",
    level: "Lý thuyết & Thực hành",
    tool: "Google Search Console · Yoast SEO · Ubersuggest",
    status: "live",
    file: "lesson-05"
  },
  {
    id: 6,
    num: "06",
    title: "Báo chí dữ liệu & trực quan hóa",
    desc: "Tạo biểu đồ tương tác với Datawrapper & Flourish, nhúng trực tiếp vào Google Sites.",
    tags: ["Dữ liệu", "Datawrapper", "Flourish", "135 phút"],
    duration: "135 phút",
    level: "Trung cấp",
    tool: "Datawrapper · Flourish · Google Sites",
    status: "live",
    file: "lesson-06"
  },
  {
    id: 7,
    num: "07",
    title: "Mạng xã hội & phân phối nội dung",
    desc: "Chiến lược chia sẻ nội dung trên các nền tảng số và đo lường hiệu quả.",
    tags: ["Social Media", "Analytics", "90 phút"],
    duration: "90 phút",
    level: "Trung cấp",
    tool: "Facebook · TikTok · Instagram · Buffer",
    status: "live",
    file: "lesson-07"
  },
  {
    id: 8,
    num: "08",
    title: "Multimedia Storytelling",
    desc: "Kết hợp văn bản, ảnh, video, audio và biểu đồ vào một bài phóng sự đa phương tiện trên Google Sites.",
    tags: ["Multimedia", "Google Sites", "120 phút"],
    duration: "120 phút",
    level: "Trung cấp",
    tool: "Google Sites · YouTube · SoundCloud · Flourish",
    status: "live",
    file: "lesson-08"
  },
  {
    id: 9,
    num: "09",
    title: "Bảo mật & đạo đức số",
    desc: "Bảo vệ nguồn tin, quyền riêng tư và an toàn thông tin trong tác nghiệp.",
    tags: ["Bảo mật", "Đạo đức", "90 phút"],
    duration: "90 phút",
    level: "Lý thuyết & Thực hành",
    tool: "Signal · ProtonMail · 1Password · Tor Browser",
    status: "live",
    file: "lesson-09"
  },
  {
    id: 10,
    num: "10",
    title: "Newsletter & Email marketing",
    desc: "Xây dựng danh sách độc giả trung thành qua email với Mailchimp.",
    tags: ["Newsletter", "Mailchimp", "90 phút"],
    duration: "90 phút",
    level: "Trung cấp",
    tool: "Mailchimp · Substack · Beehiiv",
    status: "live",
    file: "lesson-10"
  },
  {
    id: 11,
    num: "11",
    title: "Đo lường & phân tích web",
    desc: "Dùng Google Analytics để hiểu hành vi độc giả và cải thiện nội dung.",
    tags: ["Analytics", "Google", "90 phút"],
    duration: "90 phút",
    level: "Trung cấp",
    tool: "Google Analytics 4 · Search Console · Hotjar",
    status: "live",
    file: "lesson-11"
  },
  {
    id: 12,
    num: "12",
    title: "Dự án cuối khóa",
    desc: "Tổng hợp kỹ năng toàn khóa: xây dựng một trang tin tức hoàn chỉnh.",
    tags: ["Dự án", "Tổng hợp", "135 phút"],
    duration: "135 phút",
    level: "Tổng hợp",
    tool: "Tất cả công cụ đã học",
    status: "live",
    file: "lesson-12"
  }
];
