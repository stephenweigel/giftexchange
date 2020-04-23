import { shuffleArray } from './shuffle-array';
import { PairedList } from 'client/app/interfaces/paired-list.interface';




export const createPairedList = (list: string | string[]): PairedList => {
    const originalList = typeof list === 'string' ? list.split(',') : list;
    const duplicateList = originalList.slice();
    const pairs = [];

    for (const name of originalList) {
        const currentShuffle = shuffleArray(duplicateList);
        if (name !== currentShuffle[0]) {
            pairs.push([name, currentShuffle[0]]);
            duplicateList.splice(0, 1);
        } else {
            pairs.push([name, currentShuffle[1]]);
            duplicateList.splice(1, 1);
        }
    }

    return { pairs, originalList };
};
