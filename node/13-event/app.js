const fs = require('fs');
const path = require('path');

// 만약, test 폴더 밑 경로 video, captured, duplicated가 없으면 생성

const folderNmList = ['video', 'captured', 'duplicated'];

if (!folderNmList) {
    try {
        fs.mkdirSync(`../test/${folderNmList}`);
    } catch (err) {
        console.error(err);
    }
} else {
    console.log('이미있는 폴더입니다.');
}
