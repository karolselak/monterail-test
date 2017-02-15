var Profiles = [{
  _id: 'p1',
  name: 'Dr. Halima',
  avatar: '/graphics/user5-128x128.jpg',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: [{
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg'  
  },{
    _id: 'p3',
    name: 'Patricia',
    avatar: '/graphics/user4-128x128.jpg'
  },{
    _id: 'p4',
    name: 'Joseph Aluoch',
    avatar: '/graphics/user8-128x128.jpg'
  }],
  hottestDiscussionTheseDays: {
    _id: 'q1',
    author: {
      _id: 'p3',
      name: 'Patricia',
      avatar: '/graphics/user4-128x128.jpg',
    },
    score: 14,
    title: 'Will insulin make my patient gain weight?',
    connectedSource: '',
    summary: {
      relatedDiscussion: 1,
      peersInvolved: 6,
      conversations: 3
    },
  }
},{
  _id: 'p2',
  name: 'S.E.N. Waweru',
  avatar: '/graphics/user1-128x128.jpg',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: [{
    _id: 'p1',
    name: 'Dr. Halima',
    avatar: '/graphics/user5-128x128.jpg'
  },{
    _id: 'p3',
    name: 'Patricia',
    avatar: '/graphics/user4-128x128.jpg'
  },{
    _id: 'p4',
    name: 'Joseph Aluoch',
    avatar: '/graphics/user8-128x128.jpg'
  }],
  hottestDiscussionTheseDays: {
    _id: 'q1',
    author: {
      _id: 'p3',
      name: 'Patricia',
      avatar: '/graphics/user4-128x128.jpg',
    },
    score: 14,
    title: 'Will insulin make my patient gain weight?',
    connectedSource: '',
    summary: {
      relatedDiscussion: 1,
      peersInvolved: 6,
      conversations: 3
    },
  }
},{
  _id: 'p3',
  name: 'Patricia',
  avatar: '/graphics/user4-128x128.jpg',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: [{
    _id: 'p1',
    name: 'Dr. Halima',
    avatar: '/graphics/user5-128x128.jpg'
  },{
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg'  
  },{
    _id: 'p4',
    name: 'Joseph Aluoch',
    avatar: '/graphics/user8-128x128.jpg'
  }],
  hottestDiscussionTheseDays: {
    _id: 'q1',
    author: {
      _id: 'p3',
      name: 'Patricia',
      avatar: '/graphics/user4-128x128.jpg',
    },
    score: 14,
    title: 'Will insulin make my patient gain weight?',
    connectedSource: '',
    summary: {
      relatedDiscussion: 1,
      peersInvolved: 6,
      conversations: 3
    },
  }
},{
  _id: 'p4',
  name: 'Joseph Aluoch',
  avatar: '/graphics/user8-128x128.jpg',
  registerDate: new Date(1486545561726),
  lastLoginDate: new Date(1486545561726),
  activityLevel: 2,
  summary: {
    peers: 46,
    discussions: 29,
    findings: 19,
    questions: 10
  },
  joinedTheSameTime: [{
    _id: 'p1',
    name: 'Dr. Halima',
    avatar: '/graphics/user5-128x128.jpg'
  },{
    _id: 'p3',
    name: 'Patricia',
    avatar: '/graphics/user4-128x128.jpg'
  },{
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg'  
  }],
  hottestDiscussionTheseDays: {
    _id: 'q1',
    author: {
      _id: 'p3',
      name: 'Patricia',
      avatar: '/graphics/user4-128x128.jpg',
    },
    score: 14,
    title: 'Will insulin make my patient gain weight?',
    connectedSource: '',
    summary: {
      relatedDiscussion: 1,
      peersInvolved: 6,
      conversations: 3
    },
  }
}];
var Questions = [{
  _id: 'q1',
  author: {
    _id: 'p3',
    name: 'Patricia',
    avatar: '/graphics/user4-128x128.jpg',
  },
  title: 'Will insulin make my patient gain weight?',
  connectedSource: '',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
},{
  _id: 'q2',
  author: {
    _id: 'p1',
    name: 'dr. Halima',
    avatar: '/graphics/user5-128x128.jpg',
  },
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
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
},{
  _id: 'q3',
  author: {
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg',
  },
  title: 'Will insulin make my patient gain weight?',
  connectedSource: 'New York Times',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
},{
  _id: 'q4',
  author: {
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg',
  },
  title: 'Will insulin make my patient gain weight? abcde',
  connectedSource: 'New York Times',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
},{
  _id: 'q5',
  author: {
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg',
  },
  title: 'Will insulin make my patient gain weight?',
  connectedSource: 'New York Times',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
},{
  _id: 'q6',
  author: {
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg',
  },
  title: 'Will insulin make my patient gain weight? abcde',
  connectedSource: 'Guardian',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
},{
  _id: 'q7',
  author: {
    _id: 'p2',
    name: 'S.E.N. Waweru',
    avatar: '/graphics/user1-128x128.jpg',
  },
  title: 'Will insulin make my patient gain weight?123',
  connectedSource: 'New York Times',
  isFollowedByLoggedUser: true,
  date: new Date(1486545561726),
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
  score: 14,
  summary: {
    relatedDiscussion: 1,
    peersInvolved: 6,
    conversations: 3
  },
  lastTimeDiscussed: new Date(1486545561726),
  comments: [{
    author: {
      _id: 'p2',
      name: 'S.E.N. Waweru',
      avatar: '/graphics/user1-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    isAnswer: true,
    subcomments: [{
      author: {
        _id: 'p2',
        name: 'S.E.N. Waweru',
        avatar: '/graphics/user1-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 4,
      date: new Date(1486545561726),
    },{
      author: {
        _id: 'p3',
        name: 'Patricia',
        avatar: '/graphics/user4-128x128.jpg',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
      score: 3,
      date: new Date(1486545561726),
    }]
  },{
    author: {
      _id: 'p4',
      name: 'Joseph Aluoch',
      avatar: '/graphics/user8-128x128.jpg',
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ipsum ut nunc pharetra mattis sed eu orci. Nulla nisi felis, egestas ac felis id, malesuada mollis dui. Pellentesque aliquet urna eu nulla lacinia, vel vehicula nulla congue. Sed egestas nisl at neque semper, non hendrerit justo bibendum. Fusce lobortis elit rhoncus massa vestibulum venenatis. Ut pharetra ultrices mattis.',
    score: 9,
    date: new Date(1486545561726),
    subcomments: []
  }]
}];

export {Profiles, Questions}
