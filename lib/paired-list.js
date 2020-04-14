const { shuffleArray } = require('./shuffle-array');
const Pair = require('../db/models/pair');

function createPairedList(list) {
    return new Promise((resolve, reject) => {
        const originalList = typeof list === 'string' ? list.split(',') : list;
        const duplicateList = originalList.slice();
        const pairs = [];

        for (let x = 0; x < originalList.length; x++) {
            let currentShuffle = shuffleArray(duplicateList);
            if (originalList[x] !== currentShuffle[0]) {
                pairs.push([originalList[x], currentShuffle[0]]);
                duplicateList.splice(0, 1);
            } else {
                pairs.push([originalList[x], currentShuffle[1]]);
                duplicateList.splice(1, 1);
            }
        }
        resolve({ pairs, originalList });
    });
}

function savePairedList(list) {
    return new Promise((resolve, reject) => {
        Pair.create(list)
            .then(data => resolve(data))
            .catch(err => {
                reject(err);
            });
    });
}

function getPairedList(listId) {
    return new Promise((resolve, reject) => {
        Pair.findById(listId)
            .then(data => resolve(data))
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = {
    createPairedList,
    savePairedList,
    getPairedList,
};
