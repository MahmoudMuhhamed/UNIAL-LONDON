(function (window) {
  "use strict";

  var STORAGE_KEY = "eduallDataStoreV1";
  var TYPES = ["courses", "students", "tutors", "blogs", "events", "quizzes", "reviews", "messages"];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function readStore() {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (error) {
      return null;
    }
  }

  function writeStore(store) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function uid(type) {
    return type + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }

  function ensureStore() {
    var store = readStore();
    if (!store || !store.meta || !store.data) {
      store = seedStore();
      writeStore(store);
      return store;
    }

    TYPES.forEach(function (type) {
      if (!Array.isArray(store.data[type])) {
        store.data[type] = [];
      }
    });

    if (!store.meta.nextId) {
      store.meta.nextId = 1;
    }

    writeStore(store);
    return store;
  }

  function seedStore() {
    return {
      meta: { nextId: 1 },
      data: {
        courses: [
          { id: uid("course"), title: "Financial Accounting", description: "Learn core accounting principles.", price: 99, image: "assets/images/thumbs/course-img1.png", category: "Finance", students: 2600, lessons: 25, tutor: "Annette Black", revenue: 257400 },
          { id: uid("course"), title: "Introduction to Animation", description: "Start creating engaging animations.", price: 89, image: "assets/images/thumbs/course-img2.png", category: "Design", students: 1800, lessons: 18, tutor: "Jenny Wilson", revenue: 160200 },
          { id: uid("course"), title: "Graphic Design", description: "Design workflow from basics to pro.", price: 79, image: "assets/images/thumbs/course-img3.png", category: "Creative Arts", students: 1450, lessons: 20, tutor: "Courtney Henry", revenue: 114550 }
        ],
        students: [
          { id: uid("student"), name: "Brooklyn Simmons", email: "brooklyn@example.com", enrolledCourses: 3 },
          { id: uid("student"), name: "Ralph Edwards", email: "ralph@example.com", enrolledCourses: 2 }
        ],
        tutors: [
          { id: uid("tutor"), name: "Annette Black", title: "Finance Mentor", image: "assets/images/thumbs/enroll-student-img4.png", students: 2600 },
          { id: uid("tutor"), name: "Jenny Wilson", title: "Design Coach", image: "assets/images/thumbs/user-two-img5.png", students: 1800 }
        ],
        blogs: [
          { id: uid("blog"), title: "Navigating the Job Market", description: "Practical advice for graduates entering work.", image: "assets/images/thumbs/blog-two-img1.png", author: "Admin", comments: 24, date: "2026-05-01" },
          { id: uid("blog"), title: "Effective Time Management for Students", description: "Simple systems for better study routines.", image: "assets/images/thumbs/blog-two-img8.png", author: "Admin", comments: 18, date: "2026-04-28" }
        ],
        events: [
          { id: uid("event"), title: "Career Guidance Workshops", location: "1901 Thornridge Cir. Shiloh", date: "2026-05-18", time: "10:15 AM", price: 99, image: "assets/images/thumbs/event-img1.png" },
          { id: uid("event"), title: "Intensive Coding Bootcamp", location: "1901 Thornridge Cir. Shiloh", date: "2026-05-25", time: "11:00 AM", price: 199, image: "assets/images/thumbs/event-img2.png" }
        ],
        quizzes: [
          { id: uid("quiz"), title: "Financial Planning for Millennials", instructor: "Brooklyn Simmons", date: "2026-01-20", questions: 10, totalMarks: 10, correctAnswers: 8, result: "Pass" },
          { id: uid("quiz"), title: "Photography for Beginners", instructor: "Ralph Edwards", date: "2026-01-20", questions: 10, totalMarks: 10, correctAnswers: 4, result: "Fail" }
        ],
        reviews: [
          { id: uid("review"), course: "Financial Accounting", rating: 5, feedback: "Great practical content.", count: 3 },
          { id: uid("review"), course: "Graphic Design", rating: 4, feedback: "Very clear examples.", count: 5 }
        ],
        messages: [
          { id: uid("message"), name: "Marvin McKinney", snippet: "User opted out of paperless", time: "6 minutes ago", unread: 5, avatar: "assets/images/thumbs/dashbord-message-img2.png" },
          { id: uid("message"), name: "Ralph Edwards", snippet: "Sent a photo", time: "27 minutes ago", unread: 2, avatar: "assets/images/thumbs/dashbord-message-img3.png" }
        ]
      }
    };
  }

  var api = {
    getAll: function (type) {
      var store = ensureStore();
      return clone(store.data[type] || []);
    },
    getById: function (type, id) {
      var list = api.getAll(type);
      return list.find(function (item) { return item.id === id; }) || null;
    },
    create: function (type, item) {
      var store = ensureStore();
      var payload = Object.assign({}, item, { id: uid(type.slice(0, -1)) });
      store.data[type].push(payload);
      writeStore(store);
      return clone(payload);
    },
    update: function (type, id, item) {
      var store = ensureStore();
      var index = store.data[type].findIndex(function (row) { return row.id === id; });
      if (index === -1) {
        return null;
      }
      store.data[type][index] = Object.assign({}, store.data[type][index], item, { id: id });
      writeStore(store);
      return clone(store.data[type][index]);
    },
    delete: function (type, id) {
      var store = ensureStore();
      var next = store.data[type].filter(function (row) { return row.id !== id; });
      var deleted = next.length !== store.data[type].length;
      store.data[type] = next;
      writeStore(store);
      return deleted;
    },
    seed: ensureStore
  };

  api.seed();
  window.EduallData = api;
})(window);
