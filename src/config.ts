export const SITE = {
  website: "https://meowcoffee.com.tw/", // replace this with your deployed domain
  author: "Chih-Ping Kuo",
  profile: "https://meowcoffee.com.tw/",
  desc: "自家烘焙咖啡豆",
  title: "喵豆商行",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/chihpingkuo/meowcoffee-astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Taipei", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
