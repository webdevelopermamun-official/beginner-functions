// developer name and skilss return

const devName = (name, skils) => {
    return `Hi, My name is ${name} And I'm a profactional ${skils} developer`
}

// developer name and Age calculate 

const devAge = (name, birthYear) => {
    const currentYears =  new Date().getFullYear();
    return `Hi, My name is ${name} And I'm ${currentYears - birthYear} years old `
};

/**
 * Create Alert
 */
const createAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}
      <button class="btn-close" data-bs-dismiss="alert"></button>
    </p>`;
};

/**
 * Bangladesh Mobile number checking
 */
const isMobile = (mobile) => {
  const pattern = /^(01|\+8801|8801)[0-9]{9}$/;
  return pattern.test(mobile);
};

/**
 * Email Validation checking
 */
const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/;
  return pattern.test(email);
};

/**
 * Facebook post Time Ago function
 */
const timeAgo = (timestamp) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - timestamp;

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

/**
 * Create a random id
 */
const getRandomUniqueID = (length = 10) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const cryptoObj = window.crypto || window.msCrypto; // For browser compatibility
  
    if (!cryptoObj || !cryptoObj.getRandomValues) {
      throw new Error(
        "Your browser does not support secure random number generation."
      );
    }
  
    const randomArray = new Uint32Array(length);
    cryptoObj.getRandomValues(randomArray);
  
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset[randomArray[i] % charset.length];
    }
  
    return result;
};
  


// Localstorage data send

/**
 * Get Localstorage all data
 */
const getData = (key) => {
  let lsdata = [];
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return lsdata;
  }
};

/**
 * Set Data to LS
 */
const insertData = (key, data) => {
  // check data exists or not
  let lsdata = [];
  if (localStorage.getItem(key)) {
    lsdata = JSON.parse(localStorage.getItem(key));
  }

  // data push
  lsdata.push(data);

  // insert new data
  localStorage.setItem(key, JSON.stringify(lsdata));
};

/**
 * Update Data to LS
 */
const updateData = (key, data) => {
  // insert new data
  localStorage.setItem(key, JSON.stringify(data));
};


module.exports = {devName, devAge, createAlert, isMobile, isEmail, timeAgo, getRandomUniqueID, getData, insertData, updateData}