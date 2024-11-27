const fs = require('node:fs/promises');
const {customAlphabet } = require('nanoid');
const rename = async (path) => {
    const files = await fs.opendir(path);
    for await (const file of files) {
        const path = file.path + "/" + file.name;
        if (file.isDirectory()) {
            rename(path);
        } else {
            // console.log(file.name.substring(file.name.lastIndexOf('.')));
            const newName = customAlphabet('1234567890abcdefgh', 6)();
            const newPath =  file.path + "/" + newName + file.name.substring(file.name.lastIndexOf('.'));
            const oldPath = file.path + "/" +file.name;
            // console.log(oldPath,"\t",newPath);
            // // console.log();
            if (file.name !== 'index.html') {
                try{
                    await fs.rename(oldPath,newPath); //ctrl + shift + 向上箭头
                }catch (e) {
                    console.log("error",e);
                    // console.log(file.name);
                }
            }
        }
    }
}
// const read = async (path)=> {
//     const files  = await pro.readdir(path);
//     for (const file of files) {
//         if ()
//     }
// }
rename('E:/桌面/lzx.github.io/beauty-collection');
console.log('重命名成功!!!')
// console.log()
// read('../beauty-collection/');
//console.log(pro);
// console.log()
