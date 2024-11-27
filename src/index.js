const fs = require('node:fs/promises');
const {customAlphabet } = require('nanoid');
const rename = async (path) => {
    const files = await fs.opendir(path);
    for await (const file of files) {
        const path = file.path + "/" + file.name;
        if (file.isDirectory()) {
            rename(path);
        } else {
            const newName = customAlphabet('1234567890abcdefgh', 6)();
            const newPath =  file.path + "/" + newName + file.name.substring(file.name.lastIndexOf('.'));
            const oldPath = file.path + "/" +file.name;
            if (file.name !== 'index.html') {
                try{
                    await fs.rename(oldPath,newPath); //ctrl + shift + 向上箭头
                }catch (e) {
                    console.log("error",e);
                }
            }
        }
    }
}
rename('E:/桌面/lzx.github.io/beauty-collection');
console.log('重命名成功!!!')
