// ─────────────────────────────────────────────────────────────
//  ILLUMINE HELP CENTER — CONTENT CONFIG
//  Edit this file for all routine updates.
//  Never need to touch App.jsx for content changes.
// ─────────────────────────────────────────────────────────────

const DOCS = "https://help.illumine.app"

export const NAV_LINKS = [
  { label: "Product Updates", href: `${DOCS}/en/collections/product-updates` },
  { label: "Training Videos", href: `${DOCS}/en/collections/product-training-videos` },
  { label: "illumine.app",    href: "https://illumine.app" },
]

export const SEARCH_SUGGESTIONS = [
  { title: "Setting Up Billing Plans",            href: `${DOCS}/en/articles/10337651-creating-billing-plans`,                      module: "Billing & Payments" },
  { title: "How to Mark Attendance",              href: `${DOCS}/en/articles/10085505-how-to-mark-attendance`,                      module: "Attendance" },
  { title: "Sending a Newsletter",                href: `${DOCS}/en/articles/10085621-how-to-send-a-newsletter`,                    module: "Parent Communication" },
  { title: "Parent App Walkthrough",              href: `${DOCS}/en/articles/10085820-getting-started-with-illumine-for-parents`,   module: "Parent's Guide" },
  { title: "Generating Attendance Reports",       href: `${DOCS}/en/articles/10085700-generating-reports`,                          module: "Reports" },
  { title: "Add Students and Family",             href: `${DOCS}/en/articles/13722477-getting-started-add-students-and-parents`,    module: "Center Management" },
]

export const SEARCH_HINTS = ["Billing plans", "Attendance", "Parent app", "Newsletter", "Reports", "Multi-center"]

// Persona cards — teal shades only, no off-brand colors
export const PERSONAS = [
  {
    id: "admin", label: "Admin & Office",
    desc: "Billing, enrollment, invoices, reports, settings",
    links: [
      { text: "Setting up billing plans", href: `${DOCS}/en/articles/10337651-creating-billing-plans` },
      { text: "Enrollment pipeline",      href: `${DOCS}/en/collections/enrollment` },
      { text: "Generating reports",        href: `${DOCS}/en/articles/10085700-generating-reports` },
      { text: "User access & roles",       href: `${DOCS}/en/collections/settings` },
    ],
    href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide`,
  },
  {
    id: "teacher", label: "Teacher & Staff",
    desc: "Attendance, daily activities, parent communication",
    links: [
      { text: "Marking attendance",        href: `${DOCS}/en/articles/10085505-how-to-mark-attendance` },
      { text: "Posting daily activities",  href: `${DOCS}/en/collections/daily-activities` },
      { text: "Sending newsletters",        href: `${DOCS}/en/articles/10085621-how-to-send-a-newsletter` },
      { text: "Learning & assessments",    href: `${DOCS}/en/collections/learning` },
    ],
    href: `${DOCS}/en/collections/teacher-staff-instructions`,
  },
  {
    id: "director", label: "Center Director",
    desc: "Analytics, staff management, multi-center overview",
    links: [
      { text: "Reports & analytics",       href: `${DOCS}/en/collections/reports` },
      { text: "Staff scheduling",           href: `${DOCS}/en/collections/staff` },
      { text: "Multi-center dashboard",     href: `${DOCS}/en/collections/multi-center` },
      { text: "Programs & curriculum",      href: `${DOCS}/en/collections/programs` },
    ],
    href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide`,
  },
  {
    id: "parent", label: "Parent",
    desc: "App setup, viewing updates, payments, messaging",
    links: [
      { text: "Download & log in",          href: `${DOCS}/en/articles/10085820-getting-started-with-illumine-for-parents` },
      { text: "View child's daily updates", href: `${DOCS}/en/collections/10822302-parent-s-guide` },
      { text: "Making payments",            href: `${DOCS}/en/collections/10822302-parent-s-guide` },
      { text: "Messaging teachers",         href: `${DOCS}/en/collections/10822302-parent-s-guide` },
    ],
    href: `${DOCS}/en/collections/10822302-parent-s-guide`,
  },
]

export const GS_STEPS = [
  { num: "01", label: "Install App",    href: `${DOCS}/en/articles/10079297-step-1-7-download-illumine-app` },
  { num: "02", label: "Add Staff",      href: `${DOCS}/en/articles/10079304-step-2-7-onboard-staff-and-students-send-invites` },
  { num: "03", label: "Set Calendar",   href: `${DOCS}/en/articles/10079308-step-3-7-set-up-your-centre-calendar` },
  { num: "04", label: "Activities",     href: `${DOCS}/en/articles/10079282-step-4-7-share-activity-updates-message-parents` },
  { num: "05", label: "Billing",        href: `${DOCS}/en/articles/10337651-creating-billing-plans` },
  { num: "06", label: "Forms",          href: `${DOCS}/en/articles/10079289-step-6-7-forms-and-checklists` },
  { num: "07", label: "Admissions",     href: `${DOCS}/en/articles/10079276-step-7-7-set-up-admissions` },
]

export const MODULES = [
  { label: "Getting Started",        count: 7,  href: `${DOCS}/en/collections/getting-started` },
  { label: "Attendance",             count: 18, href: `${DOCS}/en/collections/attendance` },
  { label: "Billing & Payments",     count: 24, href: `${DOCS}/en/collections/11292615-billing-and-accounting` },
  { label: "Enrollment & Admissions",count: 14, href: `${DOCS}/en/collections/enrollment` },
  { label: "Parent Communication",   count: 19, href: `${DOCS}/en/collections/communication` },
  { label: "Reports & Analytics",    count: 11, href: `${DOCS}/en/collections/reports` },
  { label: "Learning & Assessments", count: 16, href: `${DOCS}/en/collections/learning` },
  { label: "Staff Management",       count: 9,  href: `${DOCS}/en/collections/staff` },
  { label: "Programs & Scheduling",  count: 12, href: `${DOCS}/en/collections/programs` },
  { label: "Multi-Center",           count: 6,  href: `${DOCS}/en/collections/multi-center` },
  { label: "Forms & Applications",   count: 10, href: `${DOCS}/en/collections/forms` },
  { label: "Settings & Access",      count: 13, href: `${DOCS}/en/collections/settings` },
]

// ── TRAINING VIDEOS ──────────────────────────────────────────
// ytId: YouTube video ID — fill in when available
export const VIDEOS = [
  { id: 1, popular: true,  duration: "5:12", module: "Billing",        title: "Complete Billing Setup — Fee Plans, Invoices & Autopay",              href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 2, popular: true,  duration: "3:45", module: "Attendance",     title: "Student Attendance: Check-In, QR Code & Kiosk Mode",                  href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 3, popular: true,  duration: "6:08", module: "Enrollment",     title: "Enrollment Pipeline: Enquiry to Admission Walkthrough",               href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 4, popular: true,  duration: "4:30", module: "Parent App",     title: "Parent App Full Walkthrough — Install, Messages & Payments",          href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 5, popular: false, duration: "3:15", module: "Communication",  title: "Creating & Sending Newsletters with the Drag-and-Drop Editor",       href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 6, popular: false, duration: "4:00", module: "Staff",          title: "Staff Scheduling, Leaves & Calendar Management",                      href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 7, popular: false, duration: "3:50", module: "Reports",        title: "Reports for Directors — Attendance, Billing & Occupancy",             href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
  { id: 8, popular: false, duration: "5:30", module: "Multi-Center",   title: "Multi-Center Control Panel Overview",                                  href: `${DOCS}/en/collections/product-training-videos`, ytId: "" },
]

export const VIDEO_TABS = ["All", "Billing", "Attendance", "Communication", "Enrollment", "Reports"]

// ── RELEASES ─────────────────────────────────────────────────
// Add new releases to the TOP. Change previous "Latest" tag to the month abbr.
export const RELEASES = [
  {
    tag: "Apr 2025", latest: true,
    title: "Granular Permissions, New Reports & Newsletter for Leads",
    href: `${DOCS}/en/articles/release-apr-2025`,
    highlights: [
      "Share newsletter drafts directly with enquiry leads",
      "New student & daily attendance reports",
      "Granular staff form permission controls",
      "Fixed teacher notification crash on iOS",
    ],
  },
  {
    tag: "Feb 2025", latest: false,
    title: "Conditional Invoice Line Items & Custom Assessment Frameworks",
    href: `${DOCS}/en/articles/release-feb-2025`,
    highlights: [
      "Auto-add invoice line items based on fee plan conditions",
      "Build fully custom assessment frameworks from scratch",
      "Improved mid-period invoice logic for late joiners",
    ],
  },
  {
    tag: "Oct 2024", latest: false,
    title: "Multi-Center Dashboard, Conditional Forms & Program Billing",
    href: `${DOCS}/en/articles/release-oct-2024`,
    highlights: [
      "Unified multi-center KPI dashboard",
      "Conditional enquiry forms per center location",
      "Program-based billing linked to fee plans",
      "Online payments within enquiry forms",
    ],
  },
  {
    tag: "Jun 2024", latest: false,
    title: "Bulk Invoice Delete, Attendance Override & Staff Announcements",
    href: `${DOCS}/en/articles/release-jun-2024`,
    highlights: [
      "Bulk delete invoices from the invoices list",
      "Override attendance check-in with current time",
      "Email announcement copy to staff",
      "Bulk receipt & invoice PDF download",
    ],
  },
]

export const POPULAR = [
  { title: "Setting Up Billing Plans & Fee Components",              views: "12.4k", time: "5 min", href: `${DOCS}/en/articles/10337651-creating-billing-plans` },
  { title: "How to Mark Student Attendance (Check-In / Check-Out)", views: "9.8k",  time: "3 min", href: `${DOCS}/en/articles/10085505-how-to-mark-attendance` },
  { title: "Getting Started with illumine for Parents",              views: "8.1k",  time: "4 min", href: `${DOCS}/en/articles/10085820-getting-started-with-illumine-for-parents` },
  { title: "Creating & Sending Newsletters to Parents",             views: "6.7k",  time: "3 min", href: `${DOCS}/en/articles/10085621-how-to-send-a-newsletter` },
  { title: "Managing the Enrollment Pipeline",                      views: "5.9k",  time: "6 min", href: `${DOCS}/en/articles/10085600-enrollment-pipeline` },
  { title: "Generating Attendance & Billing Reports",               views: "5.2k",  time: "4 min", href: `${DOCS}/en/articles/10085700-generating-reports` },
]

export const CONTACT_OPTIONS = [
  { label: "Live Chat",              sub: "Avg. response: 3 min",   href: "https://illumine.app" },
  { label: "Email Support",          sub: "info@myillumine.com",     href: "mailto:info@myillumine.com" },
  { label: "Book Onboarding Call",   sub: "Free 30-min setup call",  href: "https://illumine.app/book" },
]

export const REGIONS = [
  { flag: "🇺🇸", label: "United States",        sub: "98-article USA Guide",    href: `${DOCS}/en/collections/17220897-product-guide-usa` },
  { flag: "🇦🇪", label: "UAE & Middle East",     sub: "Arabic UI supported",     href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide` },
  { flag: "🇬🇧", label: "United Kingdom",         sub: "EYFS curriculum guides",  href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide` },
  { flag: "🇮🇳", label: "India & Southeast Asia", sub: "INR billing support",     href: `${DOCS}/en/collections/10822297-using-illumine-admin-guide` },
]

export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "https://illumine.app/privacy" },
  { label: "Status",         href: "https://status.illumine.app" },
  { label: "illumine.app",   href: "https://illumine.app" },
]
