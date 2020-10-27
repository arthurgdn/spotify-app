export default (artists)=>{
    let artistsName = ""
    for (let artist of artists){
        artistsName =artistsName + artist.name +", "
    }
    return artistsName.substr(0,artistsName.length-2)
}