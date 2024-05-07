const path = require('path');
const os = require('os');
const fs = require('fs');

const folder = process.argv[2] || 'test';
console.log(folder);
const workingDir = path.join(os.homedir(), 'Pictures', folder);
if (!folder || !fs.existsSync(workingDir)) {
    console.error('폴더명을 정확하게 입력해주세요.');
    console.log(workingDir);
    return;
}

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

const isVideoFile = (item) => {
    const ext = path.extname(item);
    return ['.mov', '.mp4'].includes(ext);
};

const isCapturedFile = (item) => {
    const ext = path.extname(item);
};

const isDuplicatedFile = (item) => {
    const ext = path.extname(item);
};

try {
    const files = fs.readdirSync(workingDir);
    // console.log(files);
    files.forEach((item) => {
        if (isVideoFile(item)) {
            console.log(item);
        } else if (isCapturedFile(item)) {
            console.log(item);
        } else if (isDuplicatedFile(item)) {
            console.log(duplicatedDir);
        }
    });
} catch (error) {
    console.error(error);
}
