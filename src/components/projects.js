export const techStack = {
  html: 'html',
  css: 'css',
  javascript: 'javascript',
  typescript: 'typescript',
  react: 'react',
  nextjs: 'next.js',
  nodejs: 'nodejs',
  express: 'express',
  mongodb: 'mongodb',
  mongoose: 'mongoose',
  prisma: 'prisma ORM',
  redux: 'RTK query/redux toolkit',
  reactquery: 'React Query',
  zustand: 'zustand',
  tailwind: 'tailwindcss',
  material: 'material-ui',
  jwt: 'jwt authentication',

}


export const projects = [
  {
    id: 'blog',
    type: 'Full stack',
    image: '/project/ww.webp',
    title: "Blogging application",
    live: "https://blog-frontend-orpin-eta.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/blog-frontend",
      backEnd: "https://github.com/masummim50/blog-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "tailwindcss", "framermotion",
        "reactquery",
        "zustand"
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "mongoose",
        "jwtauthentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. Testing accounts are provided in the login page",
    features: [
      "homepage featuring posts with newest first, post card with details, like and share functionality",
      "create post with title description thumbnail and tags, option to select community/group to post in",
      "post details, comments like functionality",
      "user sign up and login",
      "view posts by tags",
      "create community, join and create post in them",
      "upload image while creating post, upload avatar and cover image, and feature image and cover image for communities. (imgbb api used)",
      "light and dark mode",
      "view own profile along with other users profile"
    ],
  },
  {
    id: 'pm',
    type: 'Full stack',
    image: '/project/pm.webp',
    title: "Project Management System",
    live: "https://project-management-light.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/project-management-frontend-light",
      backEnd: "https://github.com/masummim50/project-management-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "materialui",
        "reduxtoolkit",
      ],
      backEnd: [
        "mongodb",
        "express",
        "nodejs",
        "mongoose",
        "typescript",
        "jwtauthentication",
        "firebaseauthentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "a simple todo list page",
      "drag and drop todo",
      "personal and group project",
      "search and add member to group project",
      "create task and subtask",
      "assign task and subtask to members for group projects",
      "start, pause and resume task",
      "track time spent on task and subtask",
      "an overview page for projects",
      "individual member overview for group projects",
      "mark as completed only when all task are complete",
      "re-open project",
      "a journal page bound to date, not editable once the day has passed",
      "an user dashboard page showing review of last 30 days: how many todo completed each day, how many task completed each day and how many words written in the journal each day",
    ],
  },
  {
    id: 'ec',
    type: 'Full stack',
    image: '/project/bb.webp',
    title: "Multi-vendor e-commerce Website(nextjs)",
    live: "https://best-buy-nu.vercel.app",
    links: {
      frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter",
      backEnd: "https://github.com/masummim50/ecommerce-backend-prisma",
    },
    technologies: {
      frontEnd: [
        "nextjs",
        "typescript",
        "tailwindcss", "nextUi",
        "reduxtoolkit",
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "postgresql",
        "prismaorm",
        "jwtauthentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "homepage featuring popular, newest and discounted products",
      "product details page with related products section",
      "user and seller sign up and login",
      "search and pagination for products",
      "create store, add edit and delete products",
      "upload image when creating products (imgbb api used)",
      "orders page to view and update orders",
      "add to cart and buy now options",
      "seller dashboard page -- chart and information for how many products sold, incoming cash, cancellation rate, order stats, recent orders",
      "user cart page, increase, decrease quantity. select from cart to buy.",
      "cash on delivery and stripe payment gateway(mock card details provided).",
      "user orders page to view order stats and mark orders as 'received' ",
      "once order is marked as delivered able to write or update review for specific products",
      "light and dark mode",
    ],
  },
  {
    id: 'chat',
    type: 'Full stack',
    image: '/project/chat.webp',
    title: "Anonymous realtime chat application(react)",
    live: "https://best-buy-nu.vercel.app",
    links: {
      frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter",
      backEnd: "https://github.com/masummim50/ecommerce-backend-prisma",
    },
    technologies: {
      frontEnd: [
        "react",
        "javascript",
        "tailwindcss",
      ],

    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "homepage featuring popular, newest and discounted products",
      "product details page with related products section",
      "user and seller sign up and login",
      "search and pagination for products",
      "create store, add edit and delete products",
      "upload image when creating products (imgbb api used)",
      "orders page to view and update orders",
      "add to cart and buy now options",
      "seller dashboard page -- chart and information for how many products sold, incoming cash, cancellation rate, order stats, recent orders",
      "user cart page, increase, decrease quantity. select from cart to buy.",
      "cash on delivery and stripe payment gateway(mock card details provided).",
      "user orders page to view order stats and mark orders as 'received' ",
      "once order is marked as delivered able to write or update review for specific products",
      "light and dark mode",
    ],
  },

  {
    id: 'f-pm',
    title: "Gaming Dashboard(React)",
    type: 'FrontEnd',
    image: '/project/gaming.webp',
    tech: "React",
    live: "https://elaborate-piroshki-f91fe1.netlify.app/",
    code: "https://github.com/masummim50/dashboard-gaming",
  },
  {
    id: 'f-pm',
    title: "Project Management Dashboard(React)",
    tech: "React",
    type: 'FrontEnd',
    image: '/project/pmd.webp',
    live: "https://wondrous-pasca-292302.netlify.app/",
    code: "https://github.com/masummim50/dashboard-project-management-frontend-only",
  }, {
    id: 'f-tl',
    title: "Travel landing Page(Nextjs)",
    tech: "Nextjs",
    type: 'FrontEnd',
    image: '/project/v.webp',
    live: "https://landing-page-voyage.vercel.app/",
    code: "https://github.com/masummim50/landing-page-travel-life",
  },

];


export const fullStackProjects = [
  {
    id: 'blog',
    type: 'Full stack',
    image: '/project/ww.webp',
    title: "Blogging application",
    live: "https://blog-frontend-orpin-eta.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/blog-frontend",
      backEnd: "https://github.com/masummim50/blog-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "tailwindcss", "framermotion",
        "reactquery",
        "zustand"
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "mongoose",
        "jwtauthentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. Testing accounts are provided in the login page",
    features: [
      "homepage featuring posts with newest first, post card with details, like and share functionality",
      "create post with title description thumbnail and tags, option to select community/group to post in",
      "post details, comments like functionality",
      "user sign up and login",
      "view posts by tags",
      "create community, join and create post in them",
      "upload image while creating post, upload avatar and cover image, and feature image and cover image for communities. (imgbb api used)",
      "light and dark mode",
      "view own profile along with other users profile"
    ],
  },
  {
    id: 'pm',
    type: 'Full stack',
    image: '/project/pm.webp',
    title: "Project Management System",
    live: "https://project-management-light.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/project-management-frontend-light",
      backEnd: "https://github.com/masummim50/project-management-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "typescript",
        "materialui",
        "reduxtoolkit",
      ],
      backEnd: [
        "mongodb",
        "express",
        "nodejs",
        "mongoose",
        "typescript",
        "jwtauthentication",
        "firebaseauthentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "a simple todo list page",
      "drag and drop todo",
      "personal and group project",
      "search and add member to group project",
      "create task and subtask",
      "assign task and subtask to members for group projects",
      "start, pause and resume task",
      "track time spent on task and subtask",
      "an overview page for projects",
      "individual member overview for group projects",
      "mark as completed only when all task are complete",
      "re-open project",
      "a journal page bound to date, not editable once the day has passed",
      "an user dashboard page showing review of last 30 days: how many todo completed each day, how many task completed each day and how many words written in the journal each day",
    ],
  },
  {
    id: 'ec',
    type: 'Full stack',
    image: '/project/bb.webp',
    title: "Multi-vendor e-commerce Website(nextjs)",
    live: "https://best-buy-nu.vercel.app",
    links: {
      frontEnd: "https://github.com/masummim50/ecommerce-nextjs14-approuter",
      backEnd: "https://github.com/masummim50/ecommerce-backend-prisma",
    },
    technologies: {
      frontEnd: [
        "nextjs",
        "typescript",
        "tailwindcss", "nextUi",
        "reduxtoolkit",
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "typescript",
        "postgresql",
        "prismaorm",
        "jwtauthentication",
      ],
    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "homepage featuring popular, newest and discounted products",
      "product details page with related products section",
      "user and seller sign up and login",
      "search and pagination for products",
      "create store, add edit and delete products",
      "upload image when creating products (imgbb api used)",
      "orders page to view and update orders",
      "add to cart and buy now options",
      "seller dashboard page -- chart and information for how many products sold, incoming cash, cancellation rate, order stats, recent orders",
      "user cart page, increase, decrease quantity. select from cart to buy.",
      "cash on delivery and stripe payment gateway(mock card details provided).",
      "user orders page to view order stats and mark orders as 'received' ",
      "once order is marked as delivered able to write or update review for specific products",
      "light and dark mode",
    ],
  },
  {
    id: 'chat',
    type: 'Full stack',
    image: '/project/chat.webp',
    title: "Anonymous realtime chat application(react)",
    live: "https://anonymous-chat-frontend.vercel.app/",
    links: {
      frontEnd: "https://github.com/masummim50/anonymous-chat-frontend",
      backEnd: "https://github.com/masummim50/socket-backend",
    },
    technologies: {
      frontEnd: [
        "react",
        "javascript",
        "tailwindcss",
      ],
      backEnd: [
        "nodejs",
        "expressjs",
        "javascript",
        "socketio"
      ],

    },
    importantInfo:
      "Easy to test, No typing Required. A testing account is provided in the login page",
    features: [
      "real time chat with active users",
      "sign up with unique username only",
      "chats are temporarily stored in browser, removed when tab is closed",
    ],
  },
]

export const frontenProjects = [
  {
    id: 'f-pm',
    title: "Gaming Dashboard(React)",
    type: 'FrontEnd',
    image: '/project/gaming.webp',
    tech: "React",
    live: "https://elaborate-piroshki-f91fe1.netlify.app/",
    code: "https://github.com/masummim50/dashboard-gaming",
  },
  {
    id: 'f-pm',
    title: "Project Management Dashboard(React)",
    tech: "React",
    type: 'FrontEnd',
    image: '/project/pmd.webp',
    live: "https://wondrous-pasca-292302.netlify.app/",
    code: "https://github.com/masummim50/dashboard-project-management-frontend-only",
  }, {
    id: 'f-tl',
    title: "Travel landing Page(Nextjs)",
    tech: "Nextjs",
    type: 'FrontEnd',
    image: '/project/v.webp',
    live: "https://landing-page-voyage.vercel.app/",
    code: "https://github.com/masummim50/landing-page-travel-life",
  },
]