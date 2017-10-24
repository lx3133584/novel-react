let myInput, changeHandler
// 创建input标签
function createInput() {
  if (myInput) {
    myInput.value = ''
    myInput.removeEventListener('change', changeHandler)
    return myInput
  }
  myInput = document.createElement('input')
  myInput.type = 'file'
  myInput.accept = 'image/png, image/jpeg, image/gif, image/jpg'
  return myInput
}
// 生产change函数
function produceChangeHandler(resolve, reject) {
  changeHandler = function (e) {
    let files = e.target.files || e.dataTransfer.files
    if (files.length) {
      resolve(files[0])
    } else {
      reject()
    }
  }
  return changeHandler
}
// 图片上传
export default function () {
  return new Promise((resolve, reject) => {
    let myInput = createInput()
    myInput.addEventListener('change', produceChangeHandler(resolve, reject))
    myInput.click()
  })
}
