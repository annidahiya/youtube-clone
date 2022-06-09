 const result = async() => {
    try {
        let sch = document.getElementById("srch").value;
        let video = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${sch}&key=AIzaSyBDe7rQjHvR3hVqSRQxIH-Cy__GGagrouk&maxResults=20`);
        let data = await video.json();
        console.log(data);

        let videodata = data.items;
        appendvideodata(videodata);
    }catch(error){
        console.log("error:",error)
    }

 }

 let main_result = document.getElementById("main_result")
 const appendvideodata = (data)=>{
     data.forEach(({snippet:{title},id:{videoId},snippet:{thumbnails:{high:{url}}}})=> {
         let div = document.createElement("div");
         let name = document.createElement("p");
         name.innerText = title;

        //  let frame = document.createElement("iframe");
        //  frame.src = `https://www.youtube.com/embed/${videoId}`

        let img = document.createElement("img");
        img.src = url

        //  frame.height = "100%";
        //  frame.width = "100%";
         div.append(img,name);
         main_result.append(div);
     })
 }