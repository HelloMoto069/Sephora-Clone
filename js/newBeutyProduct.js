let OutBody = document.getElementById('ProductDiscription');
    let OutBody21 = document.getElementById('Hedding21');
    let key = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&price_greater_than=1"
    async function Apicall (){
        await fetch(key).then(function(response){
            response.json().then(function(res){
                let data = res;
                console.log(res);
                Appenddata(data)
            })
        })
    }
    async function Apicall2 (key2){
        await fetch(key2).then(function(response){
            response.json().then(function(res){
                let data = res;
                console.log(res);
                Appenddata(data)
            })
        })
    }
    function Appenddata(ele){
        ele.forEach((item)=> {
            let div = document.createElement('div');
            div.className = 'card'
            let img1 = document.createElement('img');
            img1.src = item.image_link;
            img1.style = "max-width: 150px;"

            let Title = document.createElement('h5');
            Title.className = 'card-body'
            Title.innerHTML = item.name;
            Title.style= "text-align:center ;"

            let price= document.createElement('p');
            price.innerHTML = "$"+ item.price
            price.style= "text-align:center ;"
            
            let forClick = document.createElement('a')
            forClick.href = "./ProductDetailPage.html"
            forClick.onclick = function (){onclickcall(item)}
            forClick.style = " color:black"
            
            forClick.append(img1,Title, price)
            div.append(forClick);
            OutBody.appendChild(div);
        });
    }
    if (localStorage.getItem("ourarraykey") === null) {
    localStorage.setItem("ourarraykey", JSON.stringify([]));

    var x = localStorage.getItem("ourarraykey");
    if (x == null) {} else {
    document.querySelector(".numb").style.display = "flex";
    x = JSON.parse(localStorage.getItem("ourarraykey"));
    document.querySelector(".numb").innerHTML = x.length;
}

}

    function onclickcall(item){
               
                localStorage.setItem("ourarraykey",JSON.stringify(item));
            }
    Apicall ();
    function JustDroped(){
        OutBody.innerHTML = "";
        OutBody21.innerHTML = "Just Droped";
        
        
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=almay&price_greater_than=2";
        Apicall2 (key2);
    }

    function skinCare(){
        OutBody.innerHTML = "";
        
        OutBody21.innerHTML = "Skin Care";
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani&price_greater_than=2";
        Apicall2 (key2);
    }

    function Fragnance(){
        OutBody.innerHTML = "";
        OutBody21.innerHTML = "Fragnance";
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=anna sui&price_greater_than=2";
        Apicall2 (key2);
    }

    function BothSoap(){
        OutBody.innerHTML = "";
        OutBody21.innerHTML = "Both Soap";
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle&price_greater_than=2";
        Apicall2 (key2);
    }

    function Hairs(){
        OutBody.innerHTML = "";
        OutBody21.innerHTML = "Hairs";
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=benefit&price_greater_than=2";
        Apicall2 (key2);
    }

    function ToolsBrushesh(){
        OutBody.innerHTML = "";
        OutBody21.innerHTML = "Tools and Brushesh";
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=colourpop&price_greater_than=2";
        Apicall2 (key2);
    }

    function Makeup(){
        OutBody.innerHTML = "";
        OutBody21.innerHTML = "Makeup";
        let key2 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&price_greater_than=2";
        Apicall2 (key2);
    }