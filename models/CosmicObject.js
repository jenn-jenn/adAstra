const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CosmicObjectSchema = new Schema({
  target: {
    name: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  },
  ra: {
    decimal: {
      type: Number,
      required: true
    },
    h: {
      type: String
    },
    m: {
      type: String
    },
    s: {
      type: String
    },
  },
  dec: {
    decimal: {
      type: Number,
      required: true
    },
    d: {
      type: String
    },
    m: {
      type: String
    },
    s: {
      type: String
    }
  },
  galactic: {
    lon: {
      type: Number
    },
    lat: {
      type: Number
    }
  },
  image: {
    src: {
      type: String,
      required: true
    }
  }
});

const CosmicObject = mongoose.model('cosmicobject', CosmicObjectSchema);
module.exports = CosmicObject;


// const CosmicObjectSchema = new Schema({
//   target: {
//     name: {
//       type: String,
//       required: true
//     },
//     alt: {
//       type: String
//     }
//   },
//   service: {
//     name: {
//       type: String,
//     },
//     href: {
//       type: String
//     }
//   },
//   coordsys: {
//     type: String
//   },
//   equinox: {
//     type: String
//   },
//   ra: {
//     decimal: {
//       type: Number,
//       required: true
//     },
//     h: {
//       type: String
//     },
//     m: {
//       type: String
//     },
//     s: {
//       type: String
//     },
//   },
//   dec: {
//     decimal: {
//       type: Number,
//       required: true
//     },
//     d: {
//       type: String
//     },
//     m: {
//       type: String
//     },
//     s: {
//       type: String
//     }
//   },
//   galactic: {
//     lon: {
//       type: Number
//     },
//     lat: {
//       type: Number
//     }
//   },
//   jd: {
//     type: Number
//   },
//   image: {
//     src: {
//       type: String,
//       required: true
//     },
//     href: {
//       type: String
//     },
//   },
//   category: {
//     avmcode: {
//       type: String
//     },
//     avmdesc: {
//       type: String,
//       required: true
//     }
//   }
// });