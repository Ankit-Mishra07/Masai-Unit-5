function loadData(key) {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data

    }catch(err) {
        return undefined
    }
}


function saveData(key , data) {
    localStorage.setItem(key, JSON.stringify(data))
}


function deleteData(key, index) {
    let get = JSON.parse(localStorage.getItem(key))
    get.splice(index, 1)

    localStorage.setItem(key, JSON.stringify(get))
    return get
}

export {loadData, saveData, deleteData}