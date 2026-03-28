// ═══════════════════════════════════════════
// DBlogStudio — js/app.js
// ═══════════════════════════════════════════

/* ── SPLASH ── */
(function () {
  const el = document.getElementById('splash');
  if (sessionStorage.getItem('splashShown')) { el.style.display = 'none'; return; }
  sessionStorage.setItem('splashShown', '1');
  const cfg = SITE_CONFIG.instructor;
  el.innerHTML = `
    <div class="splash-inner">
      <div class="splash-site-name">D<span>Blog</span>Studio</div>
      <div class="splash-divider"></div>
      <div class="splash-profile">
        <div class="splash-avatar">
          ${cfg.photo ? `<img src="${cfg.photo}" alt="${cfg.name}">` : `<span>${cfg.initials}</span>`}
        </div>
        <div class="splash-info">
          <div class="splash-name">${cfg.name}</div>
          <div class="splash-title">${cfg.title}</div>
          <div class="splash-org">${cfg.org}</div>
        </div>
      </div>
      <div class="splash-bar-wrap"><div class="splash-bar"></div></div>
    </div>
  `;
  setTimeout(() => el.classList.add('hide'), 10000);
})();

/* ── STATE ── */
let currentPage     = 'home'; // 'home' | 'lesson' | 'students'
let currentLessonId = null;

/* ── HELPERS ── */
function stripHtml(str) { return str.replace(/<[^>]*>/g, ''); }

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderMasthead();
  renderNav();
  renderHomePage();
  renderFooter();
});

/* ── MASTHEAD ── */
function renderMasthead() {
  document.getElementById('masthead').innerHTML = `
    <div class="masthead-top">
      <span class="tagline-strip">Khoa Báo Chí & Truyền Thông · Học phần chuyên ngành</span>
      <span class="issue-info">Số bài: ${SITE_CONFIG.stats.totalLessons}</span>
    </div>
    <div class="masthead-title">
      <h1>${SITE_CONFIG.name.replace('Blog', '<span>Blog</span>')}</h1>
      <div class="subtitle-bar">${SITE_CONFIG.subtitle}</div>
    </div>
    <nav id="main-nav"></nav>
  `;
}

/* ── NAV ── */
function renderNav() {
  const liveLessons = LESSONS.filter(l => l.status === 'live');
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const homeLink     = `<a data-page="home" onclick="goHome()">Trang chủ</a>`;
  const syllabusLink = `<a onclick="scrollToSection('syllabus')">Chương trình</a>`;
  const aboutLink    = `<a onclick="scrollToSection('about')">Giới thiệu</a>`;
  const studentsLink = `<a data-page="students" onclick="goStudents()">Kết quả</a>`;

  const dropdownItems = liveLessons.map(l => `
    <a class="dropdown-item" data-lesson="${l.id}" onclick="goLesson(${l.id})">
      <span class="dropdown-num">Bài ${l.num}</span>
      <span class="dropdown-title">${stripHtml(l.title)}</span>
    </a>`).join('');

  const lessonsDropdown = `
    <div class="nav-dropdown" id="nav-dropdown">
      <button class="nav-dropdown-trigger" id="nav-dropdown-btn"
        onclick="toggleDropdown(event)" aria-haspopup="true" aria-expanded="false">
        Bài giảng
        <svg class="dropdown-arrow" width="10" height="10" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        ${dropdownItems}
        <div class="dropdown-footer" onclick="scrollToSection('syllabus')">
          Xem toàn bộ chương trình →
        </div>
      </div>
    </div>`;

  nav.innerHTML = homeLink + syllabusLink + lessonsDropdown + studentsLink + aboutLink;
  updateNavActive();
}

function updateNavActive() {
  document.querySelectorAll('#main-nav > a').forEach(a => {
    a.classList.remove('active');
    if (currentPage === 'home'     && a.dataset.page === 'home')     a.classList.add('active');
    if (currentPage === 'students' && a.dataset.page === 'students') a.classList.add('active');
  });
  const trigger = document.getElementById('nav-dropdown-btn');
  if (trigger) trigger.classList.toggle('active', currentPage === 'lesson');
  document.querySelectorAll('.dropdown-item').forEach(a =>
    a.classList.toggle('current', parseInt(a.dataset.lesson) === currentLessonId)
  );
}

/* ── HOME PAGE ── */
function renderHomePage() {
  const liveLessons = LESSONS.filter(l => l.status === 'live');
  const firstLive   = liveLessons[0];
  const latestLive  = liveLessons[liveLessons.length - 1];
  const cfg = SITE_CONFIG;

  document.getElementById('app').innerHTML = `
    <div id="page-home" class="page visible">

      <!-- HERO -->
      <section class="hero">
        <div class="hero-main">
          <div class="section-label">Bài học mới nhất</div>
          <h2>Xây dựng <em>hiện diện số</em> cho nhà báo thời đại mới</h2>
          <p class="hero-desc">
            Môn học này trang bị cho sinh viên báo chí những kỹ năng thiết yếu để thiết kế, xuất bản và quản lý nội dung trên web — không cần biết lập trình. Từ trang cá nhân đến trang tin tức chuyên nghiệp, bạn sẽ tự làm chủ không gian số của mình.
          </p>
          <div class="hero-stats">
            <div class="stat"><div class="stat-num">${cfg.stats.totalLessons}</div><div class="stat-label">Bài học</div></div>
            <div class="stat"><div class="stat-num">${cfg.stats.totalPeriods}</div><div class="stat-label">Tiết học</div></div>
            <div class="stat"><div class="stat-num">0</div><div class="stat-label">Yêu cầu code</div></div>
          </div>
          ${firstLive ? `<button class="btn-primary" onclick="goLesson(${firstLive.id})">
            Bắt đầu bài học đầu tiên
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>` : ''}
        </div>

        <aside class="hero-sidebar">
          ${latestLive ? `
          <div class="featured-lesson">
            <div class="lesson-badge">Bài mới nhất</div>
            <h3>Bài ${latestLive.num}: ${stripHtml(latestLive.title)}</h3>
            <p>${latestLive.desc}</p>
            <div class="lesson-meta">
              <span>⏱ ${latestLive.duration}</span>
              <span>📂 Thực hành</span>
            </div>
            <button class="lesson-link" onclick="goLesson(${latestLive.id})">
              Đọc bài
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>` : '<p style="color:var(--muted)">Chưa có bài học nào.</p>'}
        </aside>
      </section>

      <!-- SYLLABUS -->
      <section class="syllabus-section" id="syllabus">
        <div class="section-header"><h2>Chương trình học</h2></div>
        <div class="lessons-grid">
          ${LESSONS.map(l => renderLessonCard(l)).join('')}
        </div>
      </section>

      <!-- QUOTE -->
      <div class="quote-strip">
        <blockquote>"${cfg.quote.text}"</blockquote>
        <cite>${cfg.quote.source}</cite>
      </div>

      <!-- ABOUT -->
      <section class="about-strip" id="about">
        <div>
          <div class="section-label">Về môn học</div>
          <h2>Tại sao nhà báo cần biết thiết kế web?</h2>
          <p>Trong bối cảnh báo chí số ngày càng cạnh tranh, một nhà báo giỏi không chỉ viết hay — họ cần biết cách trình bày nội dung trên nền tảng số một cách hiệu quả và hấp dẫn.</p>
          <p>Môn học này không dạy lập trình. Chúng tôi tập trung vào tư duy thiết kế, công cụ thực tiễn và kỹ năng xuất bản — những gì bạn có thể dùng ngay ngày mai.</p>
          <div style="margin-top:24px;">
            <div class="instructor-card">
              <div class="instructor-avatar">
                ${cfg.instructor.photo
                  ? `<img src="${cfg.instructor.photo}" alt="${cfg.instructor.name}">`
                  : cfg.instructor.initials}
              </div>
              <div class="instructor-info">
                <h3>${cfg.instructor.name}</h3>
                <p>${cfg.instructor.title}<br>${cfg.instructor.org}</p>
                <p style="margin-top:8px;">
                  ${cfg.instructor.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join(' · ')}
                </p>
                <p style="margin-top:8px;">
                  <a href="${cfg.instructor.orcid}" target="_blank" rel="noopener">ORCID ↗</a>
                  &nbsp;·&nbsp;
                  <a href="${cfg.instructor.scholar}" target="_blank" rel="noopener">Google Scholar ↗</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="section-label">Công cụ sử dụng</div>
          <h2>Bộ công cụ của nhà báo số</h2>
          <p>Chúng tôi chọn những công cụ miễn phí, dễ học và được dùng phổ biến trong ngành truyền thông toàn cầu.</p>
          <div class="tools-list">
            ${cfg.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
          </div>
        </div>
      </section>

    </div>

    <!-- LESSON / STUDENTS CONTAINER -->
    <div id="page-lesson" class="page"></div>
  `;
}

function renderLessonCard(l) {
  const isLive = l.status === 'live';
  return `
    <div class="lesson-card ${isLive ? '' : 'disabled'}" ${isLive ? `onclick="goLesson(${l.id})"` : ''}>
      <span class="status-badge ${l.status}">${isLive ? 'Có sẵn' : 'Sắp có'}</span>
      <div class="lesson-num">${l.num}</div>
      <h3>${l.title}</h3>
      <p>${l.desc}</p>
      <div class="lesson-tags">${l.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `;
}

/* ── LESSON PAGE ── */
function renderLessonPage(lessonData) {
  const prev = lessonData.prevLesson;
  const next = lessonData.nextLesson;

  return `
    <div class="lesson-header" data-num="${lessonData.num}">
      <div class="breadcrumb">
        <a onclick="goHome()">← ${SITE_CONFIG.name}</a>
        <span>/</span>
        <span>Bài ${lessonData.num}</span>
      </div>
      <h1>${lessonData.title}</h1>
      <div class="meta-row">
        <div class="meta-item">⏱ Thời lượng: <strong>${lessonData.duration}</strong></div>
        <div class="meta-item">📊 Mức độ: <strong>${lessonData.level}</strong></div>
        <div class="meta-item">🛠 Công cụ: <strong>${lessonData.tool}</strong></div>
      </div>
    </div>

    <article class="lesson-body">${lessonData.content}</article>

    <div class="lesson-nav-bar">
      ${prev
        ? `<button class="btn-secondary" onclick="goLesson(${prev.id})">← ${prev.title}</button>`
        : `<button class="btn-secondary" onclick="goHome()">← Quay về trang chủ</button>`}
      ${next
        ? `<button class="btn-secondary" onclick="goLesson(${next.id})">${next.title} →</button>`
        : `<button class="btn-secondary" disabled>Bài tiếp theo: Sắp có →</button>`}
    </div>
  `;
}

/* ── FOOTER ── */
function renderFooter() {
  const cfg = SITE_CONFIG;
  document.getElementById('footer').innerHTML = `
    <div class="logo">${SITE_CONFIG.name.replace('Blog', '<span>Blog</span>')}</div>
    <div class="footer-center">
      <p>${cfg.subtitle}</p>
      <p>${cfg.instructor.name} · ${cfg.instructor.org}</p>
      <p>${cfg.instructor.emails.map(e => `<a href="mailto:${e}">${e}</a>`).join(' · ')}</p>
    </div>
    <div class="links">
      <a onclick="scrollToSection('about')">Giới thiệu</a>
      <a href="mailto:${cfg.instructor.emails[0]}">Liên hệ</a>
      <a onclick="scrollToSection('syllabus')">Chương trình</a>
    </div>
  `;
}

/* ── STUDENTS PAGE ── */
function parseCSV(text) {
  const lines = text.trim().split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];
  const header = splitCSVLine(lines[0]).map(h => h.trim().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd'));
  const idx = {
    stt:  findCol(header, ['stt']),
    ho:   findCol(header, ['ho']),
    ten:  findCol(header, ['ten']),
    name: findCol(header, ['ho ten', 'hoten', 'ten hoc vien', 'ten sinh vien', 'ho va ten']),
    class:findCol(header, ['lop', 'nhom', 'class']),
    link: findCol(header, ['link', 'url', 'google site', 'ket qua'])
  };
  return lines.slice(1).map((line, i) => {
    const cols = splitCSVLine(line);
    const get  = j => (j >= 0 ? cols[j]?.trim() : '') || '';
    return {
      stt:   get(idx.stt) || (i + 1),
      ho:    idx.ho >= 0 ? get(idx.ho) : get(idx.name),
      ten:   idx.ten >= 0 ? get(idx.ten) : '',
      class: get(idx.class),
      link:  get(idx.link)
    };
  }).filter(s => s.ho);
}

function findCol(header, candidates) {
  for (const c of candidates) {
    const j = header.findIndex(h => h.includes(c));
    if (j >= 0) return j;
  }
  return -1;
}

function splitCSVLine(line) {
  const cols = [];
  let cur = '', inQuote = false;
  for (const c of line) {
    if (c === '"') { inQuote = !inQuote; }
    else if (c === ',' && !inQuote) { cols.push(cur); cur = ''; }
    else { cur += c; }
  }
  cols.push(cur);
  return cols;
}

const STUDENTS_PAGE_SIZE = 50;

function renderStudentsPage() {
  const fileOptions = (STUDENT_FILES || []).map((f, i) =>
    `<option value="${i}">${f.label}</option>`
  ).join('');

  document.getElementById('page-lesson').innerHTML = `
    <div class="lesson-header" data-num="KQ">
      <div class="breadcrumb">
        <a onclick="goHome()">← ${SITE_CONFIG.name}</a>
        <span>/</span>
        <span>Kết quả bài tập lớn</span>
      </div>
      <h1>Kết quả <em>bài tập lớn</em></h1>
      <div class="meta-row" id="students-meta">
        <div class="meta-item">Đang tải dữ liệu...</div>
      </div>
    </div>
    <div class="students-section">
      <div class="students-toolbar">
        <select class="students-select" id="filter-file"
          onchange="loadStudentFile(this.value)" style="font-weight:600;">
          ${fileOptions}
        </select>
        <input class="students-search" type="text"
          placeholder="Tìm theo tên..."
          oninput="filterStudents()"
          id="students-search-input" disabled>
        <select class="students-select" id="filter-nhom"
          onchange="filterStudents()" disabled>
          <option value="">Tất cả nhóm</option>
        </select>
        <div class="students-count" id="students-count">—</div>
      </div>
      <table class="students-table">
        <thead>
          <tr>
            <th style="width:48px; text-align:center;">STT</th>
            <th>Họ</th>
            <th>Tên</th>
            <th>Nhóm</th>
            <th style="width:140px;">Kết quả</th>
          </tr>
        </thead>
        <tbody id="students-tbody">
          <tr><td colspan="5" class="students-empty">Đang tải...</td></tr>
        </tbody>
      </table>
    </div>
  `;

  loadStudentFile(0);
}

function loadStudentFile(index) {
  const fileInfo = (STUDENT_FILES || [])[parseInt(index)];
  if (!fileInfo) return;

  document.getElementById('students-search-input').disabled = true;
  document.getElementById('students-search-input').value = '';
  const selNhom = document.getElementById('filter-nhom');
  selNhom.disabled = true;
  selNhom.innerHTML = '<option value="">Tất cả nhóm</option>';
  document.getElementById('students-tbody').innerHTML =
    `<tr><td colspan="5" class="students-empty">Đang tải...</td></tr>`;
  document.getElementById('students-meta').innerHTML =
    `<div class="meta-item">Đang tải dữ liệu...</div>`;
  window._studentsGroups = null;

  if (fileInfo.type === 'gsheet' && fileInfo.spreadsheetId) {
    const id      = fileInfo.spreadsheetId;
    const base    = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=`;
    const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${id}?key=${fileInfo.apiKey}&fields=sheets.properties.title`;
    fetch(metaUrl)
      .then(r => { if (!r.ok) throw new Error('Không thể đọc danh sách tab (kiểm tra API key & quyền chia sẻ)'); return r.json(); })
      .then(meta => Promise.all(
        meta.sheets.map(s => s.properties.title).map(name =>
          fetch(base + encodeURIComponent(name))
            .then(r => { if (!r.ok) throw new Error(`Lỗi tải tab "${name}"`); return r.text(); })
            .then(text => ({ label: name, students: parseCSV(text).map(s => ({ ...s, class: name })) }))
        )
      ))
      .then(groups => {
        window._studentsGroups = groups;
        groups.forEach((g, i) => {
          const o = document.createElement('option');
          o.value = i + 1; o.textContent = g.label;
          selNhom.appendChild(o);
        });
        buildStudentsUI(groups.flatMap(g => g.students), groups.length);
      })
      .catch(err => {
        document.getElementById('students-tbody').innerHTML =
          `<tr><td colspan="5" class="students-empty">${err.message}</td></tr>`;
        document.getElementById('students-meta').innerHTML =
          `<div class="meta-item" style="color:var(--accent);">Lỗi tải dữ liệu</div>`;
      });
  } else {
    fetch(fileInfo.file)
      .then(r => { if (!r.ok) throw new Error(`Không tìm thấy file: ${fileInfo.file}`); return r.text(); })
      .then(text => buildStudentsUI(parseCSV(text), 0))
      .catch(err => {
        document.getElementById('students-tbody').innerHTML =
          `<tr><td colspan="5" class="students-empty">${err.message}</td></tr>`;
        document.getElementById('students-meta').innerHTML =
          `<div class="meta-item" style="color:var(--accent);">Lỗi tải dữ liệu</div>`;
      });
  }
}

function buildStudentsUI(students, groupCount) {
  document.getElementById('students-meta').innerHTML = `
    <div class="meta-item">👥 Tổng số: <strong>${students.length} học viên</strong></div>
    ${groupCount > 0 ? `<div class="meta-item">👫 Số nhóm: <strong>${groupCount} nhóm</strong></div>` : ''}
  `;
  window._studentsData = window._studentsFiltered = students;
  window._studentsPage = 1;
  document.getElementById('students-search-input').disabled = false;
  document.getElementById('filter-nhom').disabled = false;
  applyStudentsView();
}

function renderStudentRows(list) {
  if (list.length === 0)
    return `<tr><td colspan="5" class="students-empty">Không tìm thấy học viên nào</td></tr>`;
  return list.map(s => `
    <tr>
      <td class="stt">${s.stt}</td>
      <td>${s.ho}</td>
      <td><strong>${s.ten}</strong></td>
      <td><span class="class-badge">${s.class}</span></td>
      <td>${s.link
        ? `<a class="link-btn" href="${s.link}" target="_blank" rel="noopener">Xem ↗</a>`
        : `<span style="color:var(--muted);font-size:11px;">Chưa nộp</span>`}</td>
    </tr>`).join('');
}

function renderPagination(total, current) {
  const totalPages = Math.ceil(total / STUDENTS_PAGE_SIZE);
  if (totalPages <= 1) return '';
  const from = (current - 1) * STUDENTS_PAGE_SIZE + 1;
  const to   = Math.min(current * STUDENTS_PAGE_SIZE, total);
  const pages = new Set([1, totalPages]);
  for (let p = Math.max(1, current - 2); p <= Math.min(totalPages, current + 2); p++) pages.add(p);
  const sorted = [...pages].sort((a, b) => a - b);
  let btns = '', prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) btns += `<span class="pg-ellipsis">…</span>`;
    btns += `<button class="pg-btn ${p === current ? 'active' : ''}" onclick="goToPage(${p})">${p}</button>`;
    prev = p;
  }
  return `
    <div class="students-pagination">
      <span class="students-pagination-info">Hiển thị ${from}–${to} / ${total} học viên</span>
      <div class="students-pagination-pages">
        <button class="pg-btn" onclick="goToPage(${current - 1})" ${current === 1 ? 'disabled' : ''}>←</button>
        ${btns}
        <button class="pg-btn" onclick="goToPage(${current + 1})" ${current === totalPages ? 'disabled' : ''}>→</button>
      </div>
    </div>`;
}

function goToPage(page) { window._studentsPage = page; applyStudentsView(); }

function applyStudentsView() {
  const list     = window._studentsFiltered || [];
  const page     = window._studentsPage || 1;
  const pageData = list.slice((page - 1) * STUDENTS_PAGE_SIZE, page * STUDENTS_PAGE_SIZE);
  document.getElementById('students-tbody').innerHTML   = renderStudentRows(pageData);
  document.getElementById('students-count').textContent = `${list.length} học viên`;
  const pag     = document.getElementById('students-pagination');
  const pagHtml = renderPagination(list.length, page);
  if (pag) {
    pag.outerHTML = pagHtml ? `<div id="students-pagination">${pagHtml}</div>` : '';
  } else {
    const section = document.querySelector('.students-section');
    if (section && pagHtml) {
      const div = document.createElement('div');
      div.id = 'students-pagination'; div.innerHTML = pagHtml;
      section.appendChild(div);
    }
  }
}

function filterStudents() {
  const q    = document.getElementById('students-search-input').value.trim().toLowerCase();
  const nhom = document.getElementById('filter-nhom').value;
  let base = window._studentsData || [];
  if (nhom && window._studentsGroups)
    base = window._studentsGroups[parseInt(nhom) - 1]?.students || [];
  window._studentsFiltered = q
    ? base.filter(s => (s.ho + ' ' + s.ten).toLowerCase().includes(q))
    : base;
  window._studentsPage = 1;
  applyStudentsView();
}

/* ── NAVIGATION ── */
function goHome() {
  currentPage = 'home'; currentLessonId = null;
  document.getElementById('page-home').className   = 'page visible';
  document.getElementById('page-lesson').className = 'page';
  document.getElementById('page-lesson').innerHTML = '';
  updateNavActive();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goStudents() {
  currentPage = 'students'; currentLessonId = null;
  document.getElementById('page-home').className   = 'page';
  document.getElementById('page-lesson').className = 'page visible';
  renderStudentsPage();
  updateNavActive();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goLesson(id) {
  const lessonDataMap = {
    1: LESSON_01, 2: LESSON_02, 3: LESSON_03, 4: LESSON_04,
    5: LESSON_05, 6: LESSON_06, 7: LESSON_07, 8: LESSON_08,
    9: LESSON_09, 10: LESSON_10, 11: LESSON_11, 12: LESSON_12
  };
  const lessonData = lessonDataMap[id];
  if (!lessonData) { alert('Bài học chưa có nội dung.'); return; }

  currentPage = 'lesson'; currentLessonId = id;
  document.getElementById('page-home').className   = 'page';
  const lessonPage = document.getElementById('page-lesson');
  lessonPage.className = 'page visible';
  lessonPage.innerHTML = renderLessonPage(lessonData);
  updateNavActive();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
  if (currentPage !== 'home') goHome();
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, currentPage !== 'home' ? 200 : 0);
}

/* ── DROPDOWN ── */
function toggleDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById('dropdown-menu');
  const btn  = document.getElementById('nav-dropdown-btn');
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

function closeDropdown() {
  const menu = document.getElementById('dropdown-menu');
  const btn  = document.getElementById('nav-dropdown-btn');
  if (menu) menu.classList.remove('open');
  if (btn)  btn.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', closeDropdown);
