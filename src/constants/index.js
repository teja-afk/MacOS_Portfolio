// =================== NAVIGATION ===================
const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

// =================== DOCK APPS ===================
const dockApps = [
  { id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Articles", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: false },
];

// =================== SOCIAL LINKS ===================
const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/teja-afk",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/teja-poosa/",
  },
];

// =================== TECH STACK ===================
const techStack = [
  {
    category: "AI & Backend",
    items: ["Python", "Node.js", "Prisma", "PostgreSQL (Neon)", "RAG"],
  },
  {
    category: "Frontend",
    items: ["Next.js 14", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases & Vector DB",
    items: ["PostgreSQL", "Pinecone"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"],
  },
];

// =================== BLOG POSTS (Placeholder) ===================
const blogPosts = [];

// =================== WORK PROJECTS ===================
const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // SyncUp
    {
      id: 1,
      name: "SyncUp - Real-time Meeting Summarizer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "SyncUp.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SyncUp is an intelligent AI-powered real-time meeting assistant.",
            "It automatically joins meetings, records audio, generates transcripts & summaries.",
            "Extracts action items and supports RAG-based AI chat over meeting history.",
            "Built with: Next.js 14, React, TypeScript, Prisma ORM, PostgreSQL (Neon), Mistral, Llama2, Pinecone.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/teja-afk/SyncUp",
          position: "top-20 right-20",
        },
        {
          id: 3,
          name: "syncup-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          imageUrl: "/images/syncup-preview.png",
          position: "top-52 right-80",
        },
      ],
    },

    // WhatsApp Chat Analyzer
    {
      id: 2,
      name: "WhatsApp Chat Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "WA Analyzer.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          description: [
            "A tool that extracts analytics from exported WhatsApp chat files.",
            "Shows message patterns, sender statistics & chat activity visualization.",
            "Built using Python with regex-based parsing & analysis visualizations.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/safari.png",
          fileType: "url",
          href: "https://github.com/teja-afk/Whatsapp-Chat-Analyzer",
        },
        {
          id: 3,
          name: "wa-preview.png",
          icon: "/images/image.png",
          fileType: "img",
          imageUrl: "/images/wa-preview.png",
        },
      ],
    },
  ],
};

// =================== ABOUT ===================
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About Me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      fileType: "txt",
      subtitle: "Meet the Developer — Teja Poosa",
      description: [
        "I'm Teja Poosa — a software engineer passionate about building AI-powered products.",
        "I enjoy solving real-world communication problems using automation, NLP & modern web technologies.",
        "My work focuses on productivity tools, intelligent assistants & meaningful UX built on strong engineering foundations.",
        "When I’m not coding, I’m improving my projects, experimenting with the latest tech, or learning smarter ways to build.",
      ],
    },
  ],
};

// =================== RESUME ===================
const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      fileType: "pdf",
      href: "/resume.pdf", // you will upload later
    },
  ],
};

// =================== TRASH ===================
const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

// ---------------- EXPORTS ----------------
export {
  navLinks,
  navIcons,
  dockApps,
  socials,
  techStack,
  blogPosts,
  WORK_LOCATION,
  ABOUT_LOCATION,
  RESUME_LOCATION,
  TRASH_LOCATION,
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
