const STORAGE_KEY = 'todos-vuejstest'
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save(lists){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(lists))
    }
}