const { sleep, dummyData } = require("../constants");

async function fetchMultipleThreads(req, res) {
  const { type } = req.params;
  if (+type === 0) {
    await sleep(1250);
    res.status(200).json(dummyData);
  }
  if (+type === 1) {
    await sleep(1250);
    res
      .status(200)
      .json([
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
        dummyData[Math.floor(Math.random() * dummyData.length)],
      ]);
  }
  if (+type === 2) {
    await sleep(1250);
    res.status(200).json([dummyData[Math.floor(Math.random() * dummyData.length)]]);
  }
}

async function fetchIndividualThread(req, res) {
  const thread = dummyData.find((_) => _.id === +req.params.id);
  if (thread) {
    return res.status(200).json(thread);
  } else {
    return res.status(500).json("couldn't find a post with this id.");
  }
}

async function fetchThreadsByName(req, res) {
  const threads = dummyData.filter((_) => _.title.toLowerCase() === req.params.search.toLowerCase());
  if (threads) {
    return res.status(200).json(threads);
  } else {
    return res.status(500).json("couldn't find a post with this name.");
  }
}

module.exports = { fetchIndividualThread, fetchMultipleThreads, fetchThreadsByName };
