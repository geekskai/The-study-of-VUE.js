const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succescb, errcb) {
    fs.readFile(fpath, 'utf-8', (err, datastr) => {
        if (err) return errcb(err)
        succescb(datastr)
    })
}


// getFileByPath(path.join(__dirname, './lib/text.txt'), function(data) {
//     console.log('读取到的内容是：', data)
// }, function(err) {
//     console.log('读取失败：', err.message)

// })

getFileByPath(path.join(__dirname, './lib/text.txt'), function(data) {
    console.log('读取到的内容是：', data)
    getFileByPath(path.join(__dirname, './lib/text.1.txt'), function(data) {
        console.log('读取到的内容是：', data)
        getFileByPath(path.join(__dirname, './lib/text.2.txt'), function(data) {
            console.log('读取到的内容是：', data)
        })
    })
})