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
  service: {
    name: {
      type: String,
    },
    href: {
      type: String
    }
  },
  coordsys: {
    type: String
  },
  equinox: {
    type: String
  },
  ra: {
    decimal: {
      type: Number
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
      type: Number
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
  jd: {
    type: Number
  },
  image: {
    src: {
      type: String
    },
    href: {
      type: String
    },
  },
  category: {
    avmcode: {
      type: String
    },
    avmdesc: {
      type: String
    }
  }
});

const CosmicObject = mongoose.model('cosmicobject', CosmicObjectSchema);
module.exports = CosmicObject;
