fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	console.log(data)
	displayData(data)
})
function displayData(info){
/*var bodyElement=document.querySelector("body");
	var newElement=document.createElement("p")
	newElement.textContent="Nithin & co"
	console.log(newElement)
		bodyElement.append(newElement)
		var sampleElement=document.createElement("img")
		sampleElement.src="img/5.jpeg";
		sampleElement.classList.add("class1","class2","class3")
		sampleElement.classList.remove("class3")
		sampleElement.setAttribute("class","image1 image2 image3")*/
		var bodyElement=document.querySelector("body");
		/*bodyElement.append(sampleElement)*/
		var row=document.createElement("section")
		row.classList.add("row","justify-content-center");
		bodyElement.append(row)
		info.mobiles.map(value=>{
			var column=document.createElement("article")
			column.classList.add("col-sm-10","col-md-6","col-lg-3");
			row.append(column)
			// card
			var card=document.createElement("div");
			card.classList.add("card","mt-3",)

			// card body
			var cardBody=document.createElement("div");
			cardBody.classList.add("cardBody")
			
			// image
			var imageElement=document.createElement("img");
			imageElement.src=value.image;
			imageElement.classList.add("img-responsive")
			imageElement.alt=value.name;
			// Name
			var name=document.createElement("h2");
			name.textContent=value.name;
			name.classList.add("text-center","text-primary")
			//original price
			var original=document.createElement("p");
			original.classList.add("org","text-danger","text-center")
			original.textContent="₹ "+value.original+" /-";
			//price
			var price=document.createElement("h4");
			price.classList.add("text-primary","text-center")
			price.textContent="	₹ "+value.price+"/-";
			//add to cart
			var buttonParent=document.createElement("div");
			buttonParent.classList.add("d-grid","gap-2");

			var cart=document.createElement("button");
			cart.classList.add("btn","btn-block","btn-primary");
			bodyElement.textContent="Add to cart"
			buttonParent.append(cart)
			var button2=document.createElement("button2")
			button.classlist.Add("button","button-warining","button-block");
			button.textContent="buynow"
			buttonparent.append(button2)


			cardBody.append(imageElement)
			cardBody.append(name)
			cardBody.append(original)
			cardBody.append(price)
			card.append(cardBody);
			column.append(card);
			/*cardBody.append(buttonParent)
			cardBody.append(button)
			cardBody.append(button2)*/

		})
}

