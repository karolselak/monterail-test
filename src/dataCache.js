var Profiles = [{
  _id: 'p1',
  name: 'dr. Halima',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  avatar: '/graphics/user5-128x128.jpg',
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: ['p2','p3','p4'],
  hottestDiscussionTheseDays: 'q1'
},{
  _id: 'p2',
  name: 'S.E.N. Waweru',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  avatar: '/graphics/user1-128x128.jpg',
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: ['p1','p3','p4'],
  hottestDiscussionTheseDays: 'q1'
},{
  _id: 'p3',
  name: 'Patricia',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  avatar: '/graphics/user4-128x128.jpg',
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: ['p1','p2','p4'],
  hottestDiscussionTheseDays: 'q1'
},{
  _id: 'p4',
  name: 'Joseph Aluoch',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  avatar: '/graphics/user8-128x128.jpg',
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: ['p1','p3','p2'],
  hottestDiscussionTheseDays: 'q1'
}];
var Questions = [{
  _id: 'q1',
  author: 'p3',
  title: 'Will insulin make my patient gain weight?',
  connectedSource: '',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  comments: [{
    author: 'p2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: [{
      author: 'p2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: 'p3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: 'p4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: [],
    isAnswer: true
  }]
},{
  _id: 'q2',
  author: 'p1',
  title: 'Will insulin make my patient gain weight?',
  connectedSource: '',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  comments: [{
    author: 'p2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: [{
      author: 'p2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: 'p3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: 'p4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: [],
    isAnswer: true
  }]
},{
  _id: 'q3',
  author: 'p2',
  title: 'Will insulin make my patient gain weight? abcde',
  connectedSource: '',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  comments: [{
    author: 'p2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: [{
      author: 'p2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: 'p3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: 'p4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: [],
    isAnswer: true
  }]
}];

export {Profiles, Questions}
