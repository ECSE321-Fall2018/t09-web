const STORAGE_KEY='Authorization'
export default{
  fetch(){
    return window.localStorage.getItem(STORAGE_KEY)
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY,items)
  },
  clean(){
    window.localStorage.clear()
  }
}
