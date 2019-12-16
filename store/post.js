const posts = [
  { title: "Post1", date: new Date(), views: 22, comments: [1, 2], _id: "1" },
  { title: "Post2", date: new Date(), views: 29, comments: [1, 2], _id: "2" },
  { title: "Post3", date: new Date(), views: 22, comments: [1, 2], _id: "3" },
  { title: "Post4", date: new Date(), views: 22, comments: [1, 2], _id: "4" }
];

export const actions = {
  async fetchAdminPosts({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async remove({}, id) {
    try {
    } catch (e) {}
  },
  async update({}, { id, text }) {
    try {
    } catch (e) {}
  },
  async create({}, { title, text }) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id));
      }, 1000);
    });
  }
};
