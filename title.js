export default class Title{
    constructor(){
        this.loadTitle()
    }

    async loadTitle(){
        //this.loadTitleImg()
        const response = await fetch('https://bgs.jedlik.eu/swapi/api/films/1', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
        });
        let p =  await response.json();
        console.log(p)
        document.querySelector("#episodeId").innerHTML = `Episode ${p[0].episode_id}`
        document.querySelector("#titleId").innerHTML = p[0].title
        document.querySelector("#opening_crawl").innerHTML = p[0].opening_crawl

        setTimeout(() => {
            this.loadTitleImg()
          }, "60000");  
    }

    loadTitleImg(){
        //document.querySelector(".container").innerHTML = ""
        console.log("a");
        document.querySelector("#poster").src = "https://bgs.jedlik.eu/swimages/films/1.jpg"
    }
}