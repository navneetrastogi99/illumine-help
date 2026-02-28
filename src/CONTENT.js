// ─────────────────────────────────────────────────────────────
//  ILLUMINE HELP CENTER — CONTENT CONFIG
//  Edit this file for all routine updates.
//  Never need to touch App.jsx for content changes.
// ─────────────────────────────────────────────────────────────

const DOCS = "https://help.illumine.app"

export const NAV_LINKS = [
  { label: "Product Updates", href: `${DOCS}/en/collections/10822217-product-release-notes` },
  { label: "Training Videos", href: `${DOCS}/en/collections/16950327-product-training-videos` },
  { label: "illumine.app",    href: "https://illumine.app" },
]

export const SEARCH_SUGGESTIONS = [
  { title: "Creating Billing Plans",                    href: `${DOCS}/en/articles/10337651-creating-billing-plans`,                                       module: "Billing & Payments" },
  { title: "Student Attendance",                        href: `${DOCS}/en/articles/10627549-student-attendance`,                                           module: "Attendance" },
  { title: "Newsletters",                               href: `${DOCS}/en/articles/10469659-newsletters`,                                                  module: "Parent Communication" },
  { title: "Getting Started with illumine for Parents", href: `${DOCS}/en/articles/10085820-getting-started-with-illumine-for-parents-parent-walkthrough`, module: "Parent's Guide" },
  { title: "Reports in illumine",                       href: `${DOCS}/en/articles/13886701-reports-in-illumine`,                                          module: "Reports" },
  { title: "Getting Started: Add Students and Parents", href: `${DOCS}/en/articles/10085379-getting-started-add-students-and-parents`,                     module: "Center Management" },
]

export const SEARCH_HINTS = ["Billing plans", "Attendance", "Parent app", "Newsletter", "Reports", "Enquiries"]

// Persona cards
export const PERSONAS = [
  {
    id: "admin", label: "Admin & Office",
    desc: "Billing, enrollment, invoices, reports, settings",
    links: [
      { text: "Creating Billing Plans",     href: `${DOCS}/en/articles/10337651-creating-billing-plans` },
      { text: "Enquiries Module",            href: `${DOCS}/en/articles/13774339-enquiries-module-complete-step-by-step-guide` },
      { text: "Reports in illumine",         href: `${DOCS}/en/articles/13886701-reports-in-illumine` },
      { text: "Roles and Access Management", href: `${DOCS}/en/articles/10085483-roles-and-access-management` },
    ],
    href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide`,
  },
  {
    id: "teacher", label: "Teacher & Staff",
    desc: "Attendance, daily activities, parent communication",
    links: [
      { text: "Student Attendance",            href: `${DOCS}/en/articles/10627549-student-attendance` },
      { text: "Activities: Share Updates",      href: `${DOCS}/en/articles/10085767-activities-share-updates-with-parents` },
      { text: "Newsletters",                    href: `${DOCS}/en/articles/10469659-newsletters` },
      { text: "Learning and Assessments",       href: `${DOCS}/en/collections/11396601-learning-and-assessments` },
    ],
    href: `${DOCS}/en/collections/12407043-teacher-staff-instructions`,
  },
  {
    id: "director", label: "Center Director",
    desc: "Analytics, staff management, multi-center overview",
    links: [
      { text: "Reports in illumine",  href: `${DOCS}/en/articles/13886701-reports-in-illumine` },
      { text: "Staff Schedule",        href: `${DOCS}/en/articles/13681980-staff-schedule` },
      { text: "Programs",              href: `${DOCS}/en/articles/10085630-programs` },
      { text: "Analyze Occupancy",     href: `${DOCS}/en/articles/10627595-analyze-occupancy` },
    ],
    href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide`,
  },
  {
    id: "parent", label: "Parent",
    desc: "App setup, viewing updates, payments, messaging",
    links: [
      { text: "Getting Started for Parents", href: `${DOCS}/en/articles/10085820-getting-started-with-illumine-for-parents-parent-walkthrough` },
      { text: "Parents' Guide to illumine",  href: `${DOCS}/en/articles/10085797-parents-guide-to-the-illumine-app` },
      { text: "Enable Auto-Pay",              href: `${DOCS}/en/articles/10337654-enable-auto-pay` },
      { text: "Parent Handbook",              href: `${DOCS}/en/articles/10085823-parent-handbook` },
    ],
    href: `${DOCS}/en/collections/10822302-parent-s-guide`,
  },
]

export const GS_STEPS = [
  { num: "01", label: "Set Up Center",  href: `${DOCS}/en/articles/9939431-step-1-7-setting-up-illumine-center-details-roles` },
  { num: "02", label: "Add Staff",      href: `${DOCS}/en/articles/10079304-step-2-7-onboard-staff-and-students-send-invites` },
  { num: "03", label: "Set Calendar",   href: `${DOCS}/en/articles/10079257-step-3-7-set-up-school-calendar-mark-student-attendance` },
  { num: "04", label: "Activities",     href: `${DOCS}/en/articles/10079282-step-4-7-share-activity-updates-message-parents` },
  { num: "05", label: "Billing",        href: `${DOCS}/en/articles/9929413-step-5-7-set-up-invoices-tuition-plans-discounts-tax-rates` },
  { num: "06", label: "Forms",          href: `${DOCS}/en/articles/10079294-step-6-7-set-up-forms-generate-reports` },
  { num: "07", label: "Admissions",     href: `${DOCS}/en/articles/10079300-step-7-7-start-managing-parent-enquiries-and-new-admissions` },
]

export const MODULES = [
  { label: "Billing & Payments",      count: 10, href: `${DOCS}/en/collections/11292615-billing-and-accounting` },
  { label: "Lessons & Curriculum",    count: 11, href: `${DOCS}/en/collections/11396601-learning-and-assessments` },
  { label: "Attendance",              count: 5,  href: `${DOCS}/en/collections/10831817-attendance-leaves` },
  { label: "Parent Communication",    count: 8,  href: `${DOCS}/en/collections/11506218-parent-communication` },
  { label: "Student Registration",    count: 9,  href: `${DOCS}/en/collections/11807095-center-management` },
  { label: "Inquiries & Admissions",  count: 5,  href: `${DOCS}/en/collections/18567532-enquiries` },
  { label: "Reports & Analytics",     count: 1,  href: `${DOCS}/en/collections/18132580-reports` },
  { label: "Forms",                   count: 5,  href: `${DOCS}/en/collections/10831909-forms` },
  { label: "Staff Management",        count: 7,  href: `${DOCS}/en/collections/12407043-teacher-staff-instructions` },
  { label: "Programs & Scheduling",   count: 4,  href: `${DOCS}/en/collections/11807103-programs` },
  { label: "Messages",                count: 5,  href: `${DOCS}/en/collections/11807032-messages` },
  { label: "Settings & Permissions",  count: 3,  href: `${DOCS}/en/collections/10831648-permissions-roles-and-other-miscellaneous-settings` },
]

// ── TRAINING VIDEOS ──────────────────────────────────────────
// href: YouTube video with playlist parameter (opens video + playlist sidebar)
// Playlists: US Billing (PLZ8I0g43a-09JzhnWZfHMrwjdxdPDKKBm), Learning (PLZ8I0g43a-0_zP_1waAW27VySZ4GYzVM4),
//   How-To (PLZ8I0g43a-0-I6iLV-hhkMi1oqydoBP68), Forms (PLZ8I0g43a-0_GmHiX8_UOZ804WCQFm2E3),
//   Student Mgmt (PLZ8I0g43a-094hh0ggs29wwYhAqMMZU6-), Enterprise (PLZ8I0g43a-0_Xed0fFCCCqB3rHwt4T0-5)
export const VIDEOS = [
  { id: 1,  popular: true,  module: "Billing",        title: "How to Create a Tuition Plan",                           href: "https://www.youtube.com/watch?v=aawVyoyp7nA&list=PLZ8I0g43a-09JzhnWZfHMrwjdxdPDKKBm", ytId: "aawVyoyp7nA" },
  { id: 2,  popular: true,  module: "Forms",           title: "How to Create Student Forms",                            href: "https://www.youtube.com/watch?v=iEqcVs3RyFA&list=PLZ8I0g43a-0_GmHiX8_UOZ804WCQFm2E3", ytId: "iEqcVs3RyFA" },
  { id: 3,  popular: true,  module: "Learning",        title: "How to Create Lessons Using AI",                         href: "https://www.youtube.com/watch?v=WNllooCU_qI&list=PLZ8I0g43a-0_zP_1waAW27VySZ4GYzVM4", ytId: "WNllooCU_qI" },
  { id: 4,  popular: true,  module: "Student Mgmt",    title: "How to Add a New Student",                               href: "https://www.youtube.com/watch?v=T-Svi--b-gI&list=PLZ8I0g43a-094hh0ggs29wwYhAqMMZU6-", ytId: "T-Svi--b-gI" },
  { id: 5,  popular: false, module: "Attendance",      title: "How to Record Attendance Using Kiosk Mode",              href: "https://www.youtube.com/watch?v=6CRvNFiGOXo&list=PLZ8I0g43a-0-I6iLV-hhkMi1oqydoBP68", ytId: "6CRvNFiGOXo" },
  { id: 6,  popular: false, module: "Billing",         title: "How to Record Payments",                                 href: "https://www.youtube.com/watch?v=1OXUV7_PzL4&list=PLZ8I0g43a-0-I6iLV-hhkMi1oqydoBP68", ytId: "1OXUV7_PzL4" },
  { id: 7,  popular: false, module: "Learning",        title: "How to Record an Observation",                           href: "https://www.youtube.com/watch?v=_wUyBaJOoEQ&list=PLZ8I0g43a-0_zP_1waAW27VySZ4GYzVM4", ytId: "_wUyBaJOoEQ" },
  { id: 8,  popular: false, module: "Student Mgmt",    title: "How to Send Parent Invite Individually and in Bulk",     href: "https://www.youtube.com/watch?v=RXFUbAJ696o&list=PLZ8I0g43a-094hh0ggs29wwYhAqMMZU6-", ytId: "RXFUbAJ696o" },
  { id: 9,  popular: false, module: "Forms",           title: "Admission Process Creation and Data Collection",         href: "https://www.youtube.com/watch?v=E8-a-nMHAcU&list=PLZ8I0g43a-0_GmHiX8_UOZ804WCQFm2E3", ytId: "E8-a-nMHAcU" },
  { id: 10, popular: false, module: "Billing",         title: "How to Create Manual Invoices",                          href: "https://www.youtube.com/watch?v=vHBtUi2pLUQ&list=PLZ8I0g43a-09JzhnWZfHMrwjdxdPDKKBm", ytId: "vHBtUi2pLUQ" },
  { id: 11, popular: false, module: "Attendance",      title: "How to Record Attendance on Web",                        href: "https://www.youtube.com/watch?v=dwMJ0QkJ9Mk&list=PLZ8I0g43a-0-I6iLV-hhkMi1oqydoBP68", ytId: "dwMJ0QkJ9Mk" },
  { id: 12, popular: false, module: "Learning",        title: "How to Create and Share Weekly Lesson Plans",            href: "https://www.youtube.com/watch?v=IdovEGfbCuU&list=PLZ8I0g43a-0_zP_1waAW27VySZ4GYzVM4", ytId: "IdovEGfbCuU" },
]

export const VIDEO_TABS = ["All", "Billing", "Forms", "Learning", "Student Mgmt", "Attendance"]

// ── RELEASES ─────────────────────────────────────────────────
// Add new releases to the TOP. Change previous "Latest" tag to the month abbr.
export const RELEASES = [
  {
    tag: "Jun 2025", latest: true,
    title: "Scheduled Activities & Smarter Staff-Student Ratios",
    href: `${DOCS}/en/articles/11512864-scheduled-activities-are-here-june-2025`,
    highlights: [
      "Schedule activities in advance for automatic posting",
      "Smarter and simpler student-staff ratio calculations",
      "Improved activity management and scheduling workflow",
    ],
  },
  {
    tag: "May 2025", latest: false,
    title: "Role-Based Staff Leave Policy",
    href: `${DOCS}/en/articles/11484053-role-based-staff-leave-policy-may-2025`,
    highlights: [
      "Configure different leave policies per staff role",
      "Flexible leave balance and accrual settings",
      "Streamlined leave approval workflows",
    ],
  },
  {
    tag: "Apr 2025", latest: false,
    title: "What's New in illumine — April 2025",
    href: `${DOCS}/en/articles/11193616-whats-new-in-illumine-april-2025`,
    highlights: [
      "Newsletter sharing with enquiry leads",
      "New student and daily attendance reports",
      "Granular staff form permission controls",
    ],
  },
  {
    tag: "Feb 2025", latest: false,
    title: "What's New in illumine — February 2025",
    href: `${DOCS}/en/articles/10626108-what-s-new-in-illumine-feb-2025`,
    highlights: [
      "New features and usability enhancements",
      "Cross-module improvements and bug fixes",
    ],
  },
]

export const POPULAR = [
  { title: "Creating Billing Plans",                                   views: "12.4k", time: "5 min", href: `${DOCS}/en/articles/10337651-creating-billing-plans` },
  { title: "Student Attendance",                                       views: "9.8k",  time: "3 min", href: `${DOCS}/en/articles/10627549-student-attendance` },
  { title: "Getting Started with illumine for Parents",                views: "8.1k",  time: "4 min", href: `${DOCS}/en/articles/10085820-getting-started-with-illumine-for-parents-parent-walkthrough` },
  { title: "Newsletters",                                              views: "6.7k",  time: "3 min", href: `${DOCS}/en/articles/10469659-newsletters` },
  { title: "Enquiries Module — Complete Step-by-Step Guide",           views: "5.9k",  time: "6 min", href: `${DOCS}/en/articles/13774339-enquiries-module-complete-step-by-step-guide` },
  { title: "Reports in illumine",                                      views: "5.2k",  time: "4 min", href: `${DOCS}/en/articles/13886701-reports-in-illumine` },
]

export const CONTACT_OPTIONS = [
  { label: "Live Chat",              sub: "Avg. response: 3 min",   href: "https://illumine.app" },
  { label: "Email Support",          sub: "info@myillumine.com",     href: "mailto:info@myillumine.com" },
  { label: "Book Onboarding Call",   sub: "Free 30-min setup call",  href: "https://illumine.app/book" },
]

export const REGIONS = [
  { flag: "\u{1F1FA}\u{1F1F8}", label: "United States",        sub: "USA Product Guide",       href: `${DOCS}/en/collections/17220897-product-guide-usa` },
  { flag: "\u{1F1E6}\u{1F1EA}", label: "UAE & Middle East",     sub: "Arabic UI supported",     href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide` },
  { flag: "\u{1F1EC}\u{1F1E7}", label: "United Kingdom",         sub: "EYFS curriculum guides",  href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide` },
  { flag: "\u{1F1EE}\u{1F1F3}", label: "India & Southeast Asia", sub: "INR billing support",     href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide` },
]

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "https://illumine.app/privacy" },
  { label: "Status",         href: "https://status.illumine.app" },
  { label: "illumine.app",   href: "https://illumine.app" },
]
