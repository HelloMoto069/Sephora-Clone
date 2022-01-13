let outbody = document.getElementById('ImgaeContainer');
    let outbody2 = document.getElementById('imgcont');

    imgcont
    function ParseData(){
        var storedArray = localStorage.getItem("ourarraykey");
        ourArray = JSON.parse(storedArray);
        console.log(ourArray);
        Appenddata(ourArray);
    }
    function Appenddata(ourArray){
        div = document.createElement('div')
        img = document.createElement('img');
        img.src = ourArray.image_link;
        div.append(img);
        outbody2.appendChild(div);


        div2 = document.createElement('div');
        Title = document.createElement('h1')
        Title.innerHTML = ourArray.name;
        detail = document.createElement('p');
        detail.innerHTML = ourArray.description;
        rating = document.createElement('p');
        rating.innerHTML = "rating: "+ ourArray.rating; 

        Price = document.createElement('p');
        Price.innerHTML = "Price: "+ ourArray.price; 


        button = document.createElement('button');
        button.innerHTML = "Add To Basket<br><span>For standerd Shiping</span>";
        button.class = "btn btn-success";
        button.onclick = butoon();
        div2.append(Title,detail,rating,Price,button);
        outbody.appendChild(div2)
    }

    function butoon(){
        let data1 = localStorage.getItem('ourarraykey');
        console.log(JSON.parse(data1));
        localStorage.setItem('cart',(data1));
       
        
    }
    ParseData();