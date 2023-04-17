import { addProdToCart } from "../addProdToCart";

describe('addProdToCart', () => {

	let product1 = {
		zipcode: '0000005826468',
		name: 'CC-Крем защитный SPF-20 для лица Aravia Professional Multifunctional CC Cream Vanilla 01 150 мл',
		img:  'https://profi-mag.com/upload/iblock/fc6/rbwo02gz5edbkpmwirgslocfwksvjlt0/68eb96f8-9cd1-11e6-885e-80c16e648c08_f15dddfb-ca99-11e7-8784-80c16e648c08.jpeg',
		size: {
			length: 3,
			width: 3,
			height: 10
			},
		description: 'Защитный CC-крем с тонирующим эффектом для завершающего этапа профессиональной процедуры и ежедневного макияжа. Придаёт коже ровный оттенок и ухоженный вид, нивелирует покраснения и следы манипуляций. Создаёт на коже защитный барьер от бактерий и ультрафиолета, не препятствующий газообмену. Универсальный оттенок легко подстраивается под естественный тон кожи, обеспечивая свежее здоровое сияние.',
		weight: 200,
		volume: 150,
		showVolume: false,
		usage: {
			body: false,
			hands: false,
			legs: false,
			face: true,
			hair: false,
			tanning: false,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'ARAVIA',
		brand: 'ARAVIA Professional',
		price: 670
	};

	let product2 = {
		zipcode: '0000007260470',
		name: 'Крем солнцезащитный для лица и тела высокая защита SPF-30 Kora 150 мл',
		img:  'https://profi-mag.com/upload/iblock/887/lik99m3phv4t93xa22mto4ppwgo1ncqb/49871c99-9005-11e8-8c49-80c16e648c08_8c3d67c5-89da-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 3,
			width: 3,
			height: 10
			},
		description: 'Крем солнцезащитный SPF 30 предназначен для защиты кожи от лучей спектра А и В, оберегает кожу от солнечных ожогов, замедляет процессы фотостарения. Светостойкие фильтры последнего поколения в сочетании с природными светопоглощающими свойствами экстрактов мускатного шалфея, рябины и боярышника образуют мощный блок, обеспечивающий высокий уровень защиты кожи от полного спектра UVA/UVB лучей, ослабляя их воздействие и оберегая кожу от фотостарения. Крем создает тончайшее матовое покрытие, которое удерживает влагу в коже даже во время длительного пребывания на солнце. Защищает кожу от температурного стресса, солнечного ожога, высушивания и шелушения, активно питает, смягчает кожу, поддерживает ее эластичность, нейтрализует разрушающее действие свободных радикалов, замедляя старение кожи.',
		weight: 200,
		volume: 150,
		showVolume: false,
		usage: {
			body: true,
			hands: false,
			legs: false,
			face: true,
			hair: false,
			tanning: true,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'KORA',
		brand: 'KORA',
		price: 120
	};

	beforeEach( () => {
		window.localStorage.clear()
	})

	afterEach( () => {
		window.localStorage.clear()
	})

	test('creates cart and adds product', () => {
		expect(window.localStorage.getItem('cart')).toBe(null);
		addProdToCart(product1);
		expect(window.localStorage.getItem('cart')).toBe('[{"zipcode":"0000005826468","name":"CC-Крем защитный SPF-20 для лица Aravia Professional Multifunctional CC Cream Vanilla 01 150 мл","img":"https://profi-mag.com/upload/iblock/fc6/rbwo02gz5edbkpmwirgslocfwksvjlt0/68eb96f8-9cd1-11e6-885e-80c16e648c08_f15dddfb-ca99-11e7-8784-80c16e648c08.jpeg","description":"Защитный CC-крем с тонирующим эффектом для завершающего этапа профессиональной процедуры и ежедневного макияжа. Придаёт коже ровный оттенок и ухоженный вид, нивелирует покраснения и следы манипуляций. Создаёт на коже защитный барьер от бактерий и ультрафиолета, не препятствующий газообмену. Универсальный оттенок легко подстраивается под естественный тон кожи, обеспечивая свежее здоровое сияние.","weight":200,"volume":150,"showVolume":false,"price":670,"quantity":1}]');
	})

	test('adds several products to cart', () => {		
		expect(window.localStorage.getItem('cart')).toBe(null);
		addProdToCart(product1);
		addProdToCart(product2);
		expect(window.localStorage.getItem('cart')).toBe('[{"zipcode":"0000005826468","name":"CC-Крем защитный SPF-20 для лица Aravia Professional Multifunctional CC Cream Vanilla 01 150 мл","img":"https://profi-mag.com/upload/iblock/fc6/rbwo02gz5edbkpmwirgslocfwksvjlt0/68eb96f8-9cd1-11e6-885e-80c16e648c08_f15dddfb-ca99-11e7-8784-80c16e648c08.jpeg","description":"Защитный CC-крем с тонирующим эффектом для завершающего этапа профессиональной процедуры и ежедневного макияжа. Придаёт коже ровный оттенок и ухоженный вид, нивелирует покраснения и следы манипуляций. Создаёт на коже защитный барьер от бактерий и ультрафиолета, не препятствующий газообмену. Универсальный оттенок легко подстраивается под естественный тон кожи, обеспечивая свежее здоровое сияние.","weight":200,"volume":150,"showVolume":false,"price":670,"quantity":1},{"zipcode":"0000007260470","name":"Крем солнцезащитный для лица и тела высокая защита SPF-30 Kora 150 мл","img":"https://profi-mag.com/upload/iblock/887/lik99m3phv4t93xa22mto4ppwgo1ncqb/49871c99-9005-11e8-8c49-80c16e648c08_8c3d67c5-89da-11ea-80dc-90e2ba891c75.jpeg","description":"Крем солнцезащитный SPF 30 предназначен для защиты кожи от лучей спектра А и В, оберегает кожу от солнечных ожогов, замедляет процессы фотостарения. Светостойкие фильтры последнего поколения в сочетании с природными светопоглощающими свойствами экстрактов мускатного шалфея, рябины и боярышника образуют мощный блок, обеспечивающий высокий уровень защиты кожи от полного спектра UVA/UVB лучей, ослабляя их воздействие и оберегая кожу от фотостарения. Крем создает тончайшее матовое покрытие, которое удерживает влагу в коже даже во время длительного пребывания на солнце. Защищает кожу от температурного стресса, солнечного ожога, высушивания и шелушения, активно питает, смягчает кожу, поддерживает ее эластичность, нейтрализует разрушающее действие свободных радикалов, замедляя старение кожи.","weight":200,"volume":150,"showVolume":false,"price":120,"quantity":1}]');
	})

	test('doesnt add one product several times', () => {		
		expect(window.localStorage.getItem('cart')).toBe(null);
		addProdToCart(product1);	
		expect(window.localStorage.getItem('cart')).toBe('[{"zipcode":"0000005826468","name":"CC-Крем защитный SPF-20 для лица Aravia Professional Multifunctional CC Cream Vanilla 01 150 мл","img":"https://profi-mag.com/upload/iblock/fc6/rbwo02gz5edbkpmwirgslocfwksvjlt0/68eb96f8-9cd1-11e6-885e-80c16e648c08_f15dddfb-ca99-11e7-8784-80c16e648c08.jpeg","description":"Защитный CC-крем с тонирующим эффектом для завершающего этапа профессиональной процедуры и ежедневного макияжа. Придаёт коже ровный оттенок и ухоженный вид, нивелирует покраснения и следы манипуляций. Создаёт на коже защитный барьер от бактерий и ультрафиолета, не препятствующий газообмену. Универсальный оттенок легко подстраивается под естественный тон кожи, обеспечивая свежее здоровое сияние.","weight":200,"volume":150,"showVolume":false,"price":670,"quantity":1}]');	
		addProdToCart(product1);
		expect(window.localStorage.getItem('cart')).toBe('[{"zipcode":"0000005826468","name":"CC-Крем защитный SPF-20 для лица Aravia Professional Multifunctional CC Cream Vanilla 01 150 мл","img":"https://profi-mag.com/upload/iblock/fc6/rbwo02gz5edbkpmwirgslocfwksvjlt0/68eb96f8-9cd1-11e6-885e-80c16e648c08_f15dddfb-ca99-11e7-8784-80c16e648c08.jpeg","description":"Защитный CC-крем с тонирующим эффектом для завершающего этапа профессиональной процедуры и ежедневного макияжа. Придаёт коже ровный оттенок и ухоженный вид, нивелирует покраснения и следы манипуляций. Создаёт на коже защитный барьер от бактерий и ультрафиолета, не препятствующий газообмену. Универсальный оттенок легко подстраивается под естественный тон кожи, обеспечивая свежее здоровое сияние.","weight":200,"volume":150,"showVolume":false,"price":670,"quantity":1}]');	
	})

})