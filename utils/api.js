
let Bmob = require("./Bmob-1.6.5.min.js");
const Table_Article = "Articles";
const Table_Voice = "Voices";


const countArticle = function () {
  const query = Bmob.Query(Table_Article);
  return query.count();
}

const getTodayArticle = function(){
  const query = Bmob.Query(Table_Article);
  query.order("-updatedAt");
  query.limit(1);
  return query.find();
}

const getRandomArticle = function () {
      return countArticle().then(res => {
        let Rand = Math.random();
        let num = Math.floor(Rand * res); //舍去
        const query = Bmob.Query(Table_Article);
        query.skip(num);
        query.limit(1);
        return query.find();
      });
}


const countVoice = function () {
  const query = Bmob.Query(Table_Voice);
  return query.count();
}

const getTodayVoice = function () {
  const query = Bmob.Query(Table_Voice);
  query.order("-updatedAt");
  query.limit(1);
  return query.find();
}


const getVoiceByPage = function (page) {
  const query = Bmob.Query(Table_Voice);
  query.order("-updatedAt");
  query.limit(10);
  query.skip(10 * (page - 1));
  return query.find();
}


const getRandomVoice = function () {
  return countVoice().then(res => {
    let Rand = Math.random();
    let num = Math.floor(Rand * res); //舍去
    const query = Bmob.Query(Table_Voice);
    query.skip(num);
    query.limit(1);
    return query.find();
  });
}


export default {
  countArticle,
  getRandomArticle,
  getTodayArticle,
  getVoiceByPage,
  getRandomVoice
}