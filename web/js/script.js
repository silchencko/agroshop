"use strict";

const data = {
	"apricotLight": {
		"name": "Курага светлая",
		"price": 90,
		"country": "Турция",
		"image": "images/apricot.png",
		"category": "driedfruit",
		"description": "Курага — один из самых полезных сухофруктов, она богата каротином, калием, различными органическими кислотами, минералами и витаминами."
	},
	"apricotDark": {
		"name": "Курага темная",
		"price": 85,
		"country": "Таджикистан",
		"image": "images/apricot_dark.png",
		"category": "driedfruit",
		"description": "Курага Темная \"Экстра\" - уникальный сорт кураги с предгорий Таджикистана. Тёмная, сочная и мягкая курага - очень вкусная и сладкая, без присущей всем другим сортам кислинки."
	},
	"prunes": {
		"name": "Чернослив",
		"price": 105,
		"country": "Турция",
		"image": "images/prunes.png",
		"category": "driedfruit",
		"description": "Чернослив сохраняет практически полностью полезные вещества, входящие в состав свежей сливы. Чернослив содержит 9-17% сахаров – фруктозы, глюкозы, сахарозы; органические кислоты – яблочную, лимонную, щавелевую и немного салициловой; пектин; дубильные и азотистые вещества; витамины А, С, В1, В2, Р; минеральные вещества – большое количество калия и фосфора, меньше натрия, кальция, магния и железа."
	},
	"figs": {
		"name": "Инжир",
		"price": 175,
		"country": "Крым",
		"image": "images/figs.png",
		"category": "driedfruit",
		"description": "В инжире содержится огромное количество микроэлементов: медь, железо, магний, кальций, калий, а также витамины А, В. В свежих плодах содержится приблизительно 24% сахара, а в сушеном 37%. Очень полезен для людей страдающих заболеваниями сердечно-сосудистой системы. Это связано с содержащимся в нем калием. Он может снять напряжение с сосудов. Инжир не только расслабляет их, но и расширяет. Играет огромную роль в борьбе с гипертонией и венозной недостаточностью."
	},
	"raisins": {
		"name": "Изюм янтарный",
		"price": 75,
		"country": "Узбекистан",
		"image": "images/raisins.png",
		"category": "driedfruit",
		"description": "Изюм  янтарный обладает отличным успокаивающим  действием. Также, употребление изюма благотворно влияет на работу сердца и легких. Врачи рекомендуют изюм янтарный при лечении малокровия, лихорадки, заболеваний пищеварительной системы и почек."
	},
	"raisinsDark": {
		"name": "Изюм темный",
		"price": 90,
		"country": "Турция",
		"image": "images/raisins_dark.png",
		"category": "driedfruit",
		"description": "Чёрный изюм без косточек. Он может иметь очень сладкий или слегка сладкий вкус. Этот вид называют бидана или шигани. В кулинарии он носит название коринка, обладает крайне полезными свойствами."
	},
	"almond": {
		"name": "Миндаль",
		"price": 290,
		"country": "Турция",
		"image": "images/almond.png",
		"category": "nut",
		"description": "Полезные свойства миндаля оказывают влияние на липиды крови, особенно на содержание в крови мощного антиоксиданта витамина Е. Миндаль является альтернативой источникам белка животного происхождения, а также содержит полезные витамины и минералы. Используется в народной медицине при расстройствах пищеварения и нарушении функции почек."
	},
	"walnut": {
		"name": "Грецкий орех",
		"price": 400,
		"country": "Турция",
		"image": "images/walnut.png",
		"category": "nut",
		"description": "Зрелые орехи являются продуктом питания и высокоактивным лекарственным средством. По калорийности они в 2 раза превышают пшеничный хлеб высшего сорта. Их рекомендуют для профилактики и лечения атеросклероза, при недостатке витаминов, солей кобальта и железа в организме. В орехах много клетчатки и масла, которые способны усиливать деятельность кишечника. Они полезны пожилым людям, склонным к запорам."
	},
	"cashew": {
		"name": "Кешью",
		"price": 300,
		"country": "Турция",
		"image": "images/cashew.png",
		"category": "nut",
		"description": "Кешью богаты белками и углеводами, витаминами А, В2, В1 и железом, содержат цинк, фосфор, кальций. Кешью используют в качестве вспомогательного средства для лечения анемии, дистрофии, псориаза, нарушений обмена веществ, облегчения зубной боли. Кешью нормализует уровня холестерина в крови, укрепляют иммунную систему, обеспечивают нормальную деятельность сердечно-сосудистой системы."
	},
	"hazelnut": {
		"name": "Фундук",
		"price": 330,
		"country": "Турция",
		"image": "images/hazelnut.png",
		"category": "nut",
		"description": "Фундук богат питательными веществами, по калорийности (около 700 килокалорий) он превосходит 2-3 раза хлеб, 8 раз молоко, а так же шоколад. В нем содержится до 60% масла, состоящего из глицеридов олеиновой, стеариновой и пальмитиновой кислот, которые препятствуют росту холестерина в крови, защищают от сосудистых заболеваний, а также крайне необходимы для растущего организма."
	},
	"olivOil": {
		"name": "Оливковое масло",
		"price": 250,
		"country": "Турция",
		"image": "images/oliv_oil.png",
		"category": "oil",
		"description": "Оливковое масло богато олеиновой кислотой, которая способствует оптимальному протеканию обменных процессов, укрепляет стенки сосудов. Входящие в его состав жирные кислоты Омега-9 оказывают антиканцерогенное действие, помогают снизить  давление, нормализуют уровень холестерина в крови, полезны для профилактики сахарного диабета и ожирения."
	},
	"pampkinOil": {
		"name": "Тыквенное масло",
		"price": 300,
		"country": "Турция",
		"image": "images/pampkin_oil.png",
		"category": "oil",
		"description": "Регулярное употребление масла из семян тыквы укрепляет иммунитет, стимулирует обмен веществ, помогает похудеть, улучшает состояние кожи и волос. Полезные свойства тыквенного масла применяются при заболеваниях сердца, сосудов, печени, желчного и мочевого пузыря, простатите. Полезный и вкусный продукт лечит гастрит, предупреждает развитие хронических воспалений, избавляет от изжоги, поддерживает эластичность кожи и сосудов."
	}
};

var products = document.querySelector('.products');


for (var key in data){
	var prod =`<div class="products_item ${data[key].category}">
				<a href="#"><img src=${data[key].image}></a>
				<a href="#"><p>${data[key].name}</p></a>
				<p>Цена: <span class="price">${data[key].price}</span> грн/кг<br>
				   Страна: ${data[key].country}</p>
				<button id="${key}" type="button" class="btn btn-info" data-toggle="modal" data-target="#details">Подробнее</button>
			</div>`;
	var el = document.createElement('div');
	el.innerHTML = prod;


	el.querySelector("#"+key).addEventListener("click", function(e){ // получаем button текущего продукта и вешаем событие
		var details = document.getElementById('details'); // получаем модальное окно

		details.querySelector(".modal-title").textContent = data[this.id].name;
		details.querySelector(".modal-body div img").src = data[this.id].image;
		details.querySelector(".modalPrice").textContent = data[this.id].price;
		details.querySelector(".modalCountry").textContent = data[this.id].country;
		details.querySelector(".modalDescription").textContent = data[this.id].description;
	});

	products.appendChild(el);
}




let button = document.querySelector(".choice input[type='button']");
button.addEventListener('click', function(){

	let hidden = document.querySelectorAll(".products_item.hidden");
	for(let i = 0; i < hidden.length; i ++){
		hidden[i].classList.remove("hidden");
	}

	let selected = document.querySelectorAll(".choice input[type='checkbox']:checked");
	let selector = ".products_item";
	for(let i = 0; i < selected.length; i++){
		selector = selector + ":not(." + selected[i].name + ")"
	}

	if(selected.length > 0){
		hidden = document.querySelectorAll(selector);
		for(let i = 0; i < hidden.length; i++){
			hidden[i].classList.add("hidden");
		}
	}

	let priceLimit = document.querySelector(".selectedprice").innerHTML;

	let products = document.querySelectorAll(".products_item:not(.hidden)");
	for(let i = 0; i < products.length; i++){
		let price = +products[i].querySelector(".price").textContent;
		if(price > priceLimit){
			products[i].classList.add("hidden");
		}
	}
})

var thumb = document.querySelector(".thumb");
var slider = document.querySelector(".slider");
var selectedprice = document.querySelector(".selectedprice");
var coord = thumb.getBoundingClientRect();

var coefficient = (slider.clientWidth - thumb.clientWidth - 10) / 500;

selectedprice.innerHTML = Math.round((thumb.getBoundingClientRect().x - 
							(coord.x - 
							(slider.clientWidth - thumb.clientWidth - 10)))/ 
							coefficient);


thumb.addEventListener('mousedown', setPrice);
function setPrice(e){
	thumb.style.position = "absolute";
	moveAt(e);
	thumb.style.zIndex = 1000;
	function moveAt(e){
		if(e.pageX > coord.x){
			thumb.style.left = coord.x + 'px';
			thumb.style.top = coord.y + 'px';
		} else if(e.pageX < (coord.x - (slider.clientWidth - thumb.clientWidth*1.5 - 10))){
			thumb.style.left = coord.x - (slider.clientWidth - thumb.clientWidth - 10) + 'px';
			thumb.style.top = coord.y + 'px';
		} else {
			thumb.style.left = e.pageX - thumb.offsetWidth / 2 + 'px';
        	thumb.style.top = coord.y + 'px';
		}
       	selectedprice.innerHTML = Math.round((thumb.getBoundingClientRect().x - 
							(coord.x - 
							(slider.clientWidth - thumb.clientWidth - 10)))/ 
							coefficient);
	}
	document.onmousemove = function(e) {
        moveAt(e);
    }
    document.onmouseup = function() {
        document.onmousemove = null;
        thumb.onmouseup = null;
    }
    return false;
}
