import { IProduct } from "./types/types";

const defaultProducts: IProduct[] = [
	{
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
			tanning: true,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'ARAVIA',
		brand: 'ARAVIA Professional',
		price: 670
	},
	{
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
	},
	{
		zipcode: '0000010468700',
		name: 'Крем укрепляющий с ресвератролом Kora 50 мл',
		img:  'https://profi-mag.com/upload/iblock/23a/0t0f02sagufja0551c6v6eifbp5qdpdd/b3af0568-e264-11ec-8101-90e2ba894039_bc720b88-e266-11ec-8101-90e2ba894039.jpeg',
		size: {
			length: 8,
			width: 8,
			height: 3
			},
		description: 'Уникальная формула крема позволяет существенно уменьшить видимые признаки увядания кожи, защищает от процессов хроно- и фотостарения. Молекула молодости ресвератрол в сочетании с экстрактами виноградных косточек и листьев образует мощнейший антиоксидантный комплекс, запускает и поддерживает процесс клеточной регенерации и обновления, стимулирует синтез коллагена, повышает эластичность кожи и защищает от преждевременного старения. Пептидный комплекс семян ржи и риса повышает тургор, предотвращает образование морщин, повышает защитные свойства эпидермиса. Сочетание натуральных масел, витамина E, растительных церамидов и экстрактов обеспечивает интенсивное питание, оказывает мгновенное увлажняющее действие, возвращая коже мягкость и бархатистость.',
		weight: 80,
		volume: 50,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 484
	},
	{
		zipcode: '0000007368400',
		name: 'Крем увлажняющий с морскими экстрактами на основе термальной воды Kora 50 мл',
		img:  'https://profi-mag.com/upload/iblock/e59/kmng3ttulmunlh2hnjsdwqw5mb1je3rq/ea8b0531-c08e-11e8-a14f-80c16e648c08_50501644-89db-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 8,
			width: 8,
			height: 3
			},
		description: 'Увлажняющий крем от KORA подойдет коже любого типа с нарушенным гидробалансом. Крем поможет нормализовать уровень влаги в тканях, хорошо увлажнить кожу и подарить ей комфорт и чувство свежести. В основе увлажняющего крема с морскими экстрактами лежит особая формула, которая гарантирует длительный увлажняющий эффект. Суперувлажняющий комплекс в сочетании с гиалуроновой кислотой позволяют нормализовать водный баланс, увеличить эластичность кожи, выровнять ее рельеф и придать гладкость. Морские экстракты обогащают клетки ценными минералами, увеличивают синтез коллагена, тонизируют кожу, уменьшают глубину мимических морщин и защищают от негативного воздействия ультрафиолетовых лучей. Натуральные масла интенсивно питают и придают лицу красивый цвет.',
		weight: 80,
		volume: 50,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 367
	},
	{
		zipcode: '0000009890199',
		name: 'Липо-крем для рук и ногтей восстанавливающий с маслом ши и д-пантенолом ARAVIA Professional Lipid Restore Cream 100 мл',
		img:  'https://profi-mag.com/upload/iblock/53c/ukq1aatnpjtvn775uexq8nqtg5adpg8h/ac1944c4-00d3-11ec-80f5-90e2ba894039_b37e14a9-00d3-11ec-80f5-90e2ba894039.png',
		size: {
			length: 3,
			width: 3,
			height: 10
			},
		description: 'Профессиональный липидовосполняющий крем для интенсивного ухода за кожей рук, подверженной частому контакту с моющими, антисептическими, дезинфицирующими средствами и другими агрессивными средами. Восстанавливает барьер, поддерживающий водно-липидный баланс поверхностных слоёв кожи. Снижает риск возникновения контактного дерматита вследствие неблагоприятного воздействия окружающей среды.',
		weight: 140,
		volume: 100,
		showVolume: false,
		usage: {
			body: false,
			hands: true,
			legs: false,
			face: false,
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
		price: 289
	},
	{
		zipcode: '0000010126600',
		name: 'Крем для рук питательный с маслом оливы и витамином Е ARAVIA Professional Nutrition Complex Cream 150 мл',
		img: 'https://profi-mag.com/upload/resize_cache/iblock/33b/300_300_1/yaifd189aktiasjno6wrwdxfq2k29odh.jpeg',
		size: {
			length: 3,
			width: 3,
			height: 10
			},
		description: 'Профессиональный питательный крем для рук с нежной текстурой создан для интенсивного восстановления кожи рук. Натуральная формула на основе масла оливы и витамина Е оказывает антиоксидантный и омолаживающий эффект, улучшает состояние кожного покрова и усиливает барьерные функции кожи. Комплекс масла ши и Д-пантенола успокаивает и помогает справиться с сухостью рук, шелушениями и другими последствиями агрессивного воздействия окружающей среды, ускоряет регенерацию клеток кожи. Регулярное применение крема помогает поддерживать здоровый вид кожи рук надолго.',
		weight: 170,
		volume: 150,
		showVolume: false,
		usage: {
			body: false,
			hands: true,
			legs: false,
			face: false,
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
		price: 260
	},
	{
		zipcode: '0000010126708',
		name: 'Крем для рук омолаживающий со скваланом и муцином улитки ARAVIA Professional Anti-age Complex Cream 150 мл',
		img: 'https://profi-mag.com/upload/resize_cache/iblock/33b/300_300_1/yaifd189aktiasjno6wrwdxfq2k29odh.jpeg',
		size: {
			length: 3,
			width: 3,
			height: 10
			},
		description: 'Омолаживающий крем для ухода за кожей рук с мощным питательным и антиоксидантным комплексом. Предназначен для курсового и ежедневного ухода за сухой, обезвоженной кожей с признаками увядания. Уникальный комплекс активных компонентов, состоящий изсквалана растительного происхождения и ферментного комплекса муцина улитки, заполняет и разглаживает мелкие морщинки и трещинки, выравнивает тон кожи, ускоряет регенерацию тканей. Комплекс масел кокоса и какао и Д-пантенола, устраняет чувство стянутости кожи и повышает ее упругость, улучшает защиту от воздействия окружающей среды. Регулярное применение крема помогает сохранить красоту и молодость кожи рук, способствует профилактике признаков фото- и хроностарения кожи.',
		weight: 170,
		volume: 150,
		showVolume: false,
		usage: {
			body: false,
			hands: true,
			legs: false,
			face: false,
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
		price: 475
	},
	{
		zipcode: '0000010486809',
		name: 'Крем обновляющий с HPA-кислотами и мочевиной 10% ARAVIA Professional Acid-Renew Cream 550 мл',
		img:  'https://profi-mag.com/upload/iblock/eab/yxetkxztanrob4a22xh7wjl5xnkowqlc/ede8a9db-e6f8-11ec-8101-90e2ba894039_f72dd0b3-e6f8-11ec-8101-90e2ba894039.jpeg',
		size: {
			length: 7,
			width: 7,
			height: 6
			},
		description: 'Обновляющий регенерирующий крем для всех типов кожи на основе комплекса полигидроксикислот (РНА) и мочевины (10%). Комплекс PHA-кислот деликатно воздействует на верхний роговой слой, ускоряет обновление кожи, стимулирует выработку эластина и разглаживает поверхность кожи, оказывает профилактику признаков фотостарения, устраняет следы усталости и пастозность. Мочевина — уникальный компонент натурального увлажняющего фактора, родственный коже оказывает мощное увлажняющее действие. Регулярное применение крема делает кожу увлажненной, мягкой и гладкой. Универсальный крем предназначен для кожи лица и тела.',
		weight: 600,
		volume: 550,
		showVolume: false,
		usage: {
			body: true,
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
		price: 535
	},
	{
		zipcode: '0000009873804',
		name: 'Скраб антицеллюлитный с вулканической глиной ARAVIA Organic Anti-Cellulite Vulcanic Scrub 550 мл',
		img:  'https://profi-mag.com/upload/iblock/f2b/k5sekpym9fgaupfnaael61scoo7j827a/ce1c13c4-f9ce-11eb-80f5-90e2ba894039_ce1c13c7-f9ce-11eb-80f5-90e2ba894039.jpeg',
		size: {
			length: 7,
			width: 7,
			height: 6
			},
		description: 'Интенсивная формула скраба на основе вулканической глины, морской соли и шунгита специально разработана для эффективной борьбы с целлюлитом и излишним весом. Уникальный минеральный состав черной глины в комплексе с морской солью, усиливает микроциркуляцию крови, ускоряет обменные процессы в подкожно-жировой клетчатке и усиливает лимфодренаж, что способствует быстрому выводу лишней жидкости и устранению застойных явлений. Шунгит обеспечивает антиоксидантное действие и эффективно борется с дряблостью кожи.  Комплекс липолитических экстрактов совместно с кофеином способствуют снятию отечности и стимулируют расщепление жировых отложений. Скраб обеспечивает глубокий детокс, отшелушивание и обновление кожи, а благодаря комплексному действию активных ингредиентов, уже на стадии очищения запускает механизмы борьбы с целлюлитом и лишним весом.',
		weight: 600,
		volume: 550,
		showVolume: false,
		usage: {
			body: true,
			hands: false,
			legs: false,
			face: false,
			hair: false,
			tanning: false,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'ARAVIA',
		brand: 'ARAVIA Organic',
		price: 790
	},
	{
		zipcode: '0000009891109',
		name: 'Гель контрастный антицеллюлитный для тела с термо и крио эффектом ARAVIA Anti-Cellulite Ice&Hot Body Gel 550 мл',
		img:  'https://profi-mag.com/upload/iblock/681/704bztuy4liff4d32us4i9ccfgr5h4kt/7d4934f8-00e3-11ec-80f5-90e2ba894039_7d4934fa-00e3-11ec-80f5-90e2ba894039.png',
		size: {
			length: 7,
			width: 7,
			height: 6
			},
		description: 'Контрастный гель для тела с интенсивным липолитическим и антицеллюлитным свойствами разработан для радикальной борьбы с локальными жировыми отложениями, целлюлитом любой степени, дряблостью кожи. Мощный эффект средства происходит за счет переменного воздействия ТЕПЛА и ХОЛОДА, что позволяет усилить глубину и эффективность действия активных компонентов на зоны локального похудения. Кофеин в сочетании с комплексом липолитических экстрактов усиливает дренажный эффект, способствует выводу избыточной жидкости и токсинов, ускоряет расщепление жира, повышает тонус и эластичность кожи. Высокое содержание геля алоэ вера обеспечивает интенсивное увлажнение и восстановление тканей.',
		weight: 600,
		volume: 550,
		showVolume: true,
		usage: {
			body: true,
			hands: false,
			legs: false,
			face: false,
			hair: false,
			tanning: false,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'ARAVIA',
		brand: 'ARAVIA Organic',
		price: 649
	},
	{
		zipcode: '0000009871901',
		name: 'Крем-маска для тела антицеллюлитная солевая ARAVIA Anti-Cellulite Salt-Intensive Mask 500 мл',
		img:  'https://profi-mag.com/upload/iblock/681/704bztuy4liff4d32us4i9ccfgr5h4kt/7d4934f8-00e3-11ec-80f5-90e2ba894039_7d4934fa-00e3-11ec-80f5-90e2ba894039.png',
		size: {
			length: 7,
			width: 7,
			height: 6
			},
		description: 'Интенсивная солевая маска разработана для радикальной борьбы с подкожной жировой клетчаткой, сопровождаемой чрезмерной задержкой жидкости и проявлением целлюлита любых стадий. Высокое содержание морской соли в составе маски, создает мощный осмотический эффект, что способствует интенсивному расщеплению жировых клеток и выведению лишней жидкости. Комплексное действие арники и ламинарии помогает устранить застой жидкости в проблемных зонах, улучшить микроциркуляцию, повысить тонус и упругость кожи. Маска вызывает приятное тепло, что обеспечивает максимальное поглощение активных компонентов. Сочетание липолиза и лимфодренажа позволяет получить результат после первого применения. Возможно ощущение легкого разогревающего эффекта.',
		weight: 550,
		volume: 500,
		showVolume: true,
		usage: {
			body: true,
			hands: false,
			legs: false,
			face: false,
			hair: false,
			tanning: false,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'ARAVIA',
		brand: 'ARAVIA Organic',
		price: 890
	},
	{
		zipcode: '0000008915401',
		name: 'Масло гидрофильное для сухой и возрастной кожи очищение уход NEW LINE 150 мл',
		img:  'https://profi-mag.com/upload/iblock/caf/lf1iwrvshzeubf071wtqfvxb5897zims/d02d26ae-18d0-11eb-80eb-90e2ba894039_dd376f50-18d0-11eb-80eb-90e2ba894039.jpeg',
		size: {
			length: 4,
			width: 4,
			height: 10
			},
		description: 'Легкое гидрофильное масло бережно очищает, увлажняет и питает кожу. Эффективно растворяет загрязнения и удаляет макияж. Делает кожу мягкой и сияющей, не стягивает, не сушит. В состав средства входят пять растительных масел, витамины и пантенол, которые восстанавливают гидролипидный баланс, защищают от негативного воздействия окружающей среды, стимулируют выработку эластина и коллагена, препятствуют процессам старения и улучшают цвет лица.',
		weight: 190,
		volume: 150,
		showVolume: true,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 389
	},
	{
		zipcode: '0000010452405',
		name: 'Тоник для жирной и комбинированной кожи с пребиотиком Kora 150 мл',
		img:  'https://profi-mag.com/upload/iblock/37e/89wm5wtg67vq3om4wk1mx84buytxed41/2049eccc-d5c9-11ec-8100-90e2ba894039_2049ed04-d5c9-11ec-8100-90e2ba894039.jpeg',
		size: {
			length: 4,
			width: 4,
			height: 10
			},
		description: 'Тоник для жирной и комбинированной кожи с пребиотиком способствует уменьшению количества комедонов, избавит от покраснений и раздражений, успокоит кожу и подготовит ее к последующему косметическому уходу. Себорегулирующий комплекс (ПРЕБИОТИК ЛАКТУЛОЗА, БИОСЕРА, САЛИЦИЛОВАЯ КИСЛОТА) и ФИТОЭКСТРАКТЫ помогут наладить нарушенную деятельность сальных желез, восстановят природный баланс микрофлоры кожи, воспрепятствуют развитию бактерий, провоцирующих возникновение воспалений, а также увлажнят и защитят кожу.',
		weight: 190,
		volume: 150,
		showVolume: true,
		usage: {
			body: true,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 349
	},
	{
		zipcode: '0000007368111',
		name: 'Мусс для очищения проблемной и жирной кожи с пребиотиком KORA 160 мл',
		img:  'https://profi-mag.com/upload/iblock/fcd/mv6vlamp5zx7ys62b1v3x4ah3q8wczpg/5913c75d-c08e-11e8-a14f-80c16e648c08_e267546e-89e5-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 4,
			width: 4,
			height: 10
			},
		description: 'Мусс для очищения проблемной и жирной кожи с пребиотиком, имеющий приятную воздушную текстуру, разработан с учетом особых потребностей данного типа кожи. Благодаря тщательно подобранному набору компонентов мусс позволяет не только качественно очистить лицо, не забивая поры, но и восстановить природный баланс микрофлоры кожи и воспрепятствовать размножению чужеродных бактерий. Специальная щадящая формула мусса для очищения лица дает возможность без труда освободить жирную, комбинированную и проблемную кожу от излишков кожного сала и декоративной косметики, подарить ей чувство свежести и чистоты, избавить от раздражений и ощущения стянутости. Кроме того, мусс имеет лечебный эффект. Себорегулирующий комплекс, состоящий из салициловой кислоты и пребиотика лактулозы, снижает активность сальных желез, уменьшает жирный блеск, позволяет восстановить естественный кожный баланс и подавить размножение бактерий, которые провоцируют возникновение акне и воспалений. В свою очередь активный растительный комплекс успокаивает кожу, выравнивает цвет лица, избавляя его от покраснений, дарит увлажняющее и освежающее действие.',
		weight: 210,
		volume: 160,
		showVolume: true,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 419
	},
	{
		zipcode: '0000007260122',
		name: 'Крем против веснушек и пигментных пятен Kora 50 мл',
		img:  'https://profi-mag.com/upload/iblock/d5c/s5rem01k80imbkt4enkyiuqvlsw1araa/0584a191-9005-11e8-8c49-80c16e648c08_0d18ae79-89da-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 7,
			width: 7,
			height: 4
			},
		description: 'Крем против веснушек и пигментных пятен подходит для осветления кожи любого типа в любом возрасте. Крем постепенно осветляет кожу, делает цвет лица более ровным и однородным, уменьшает проявления пигментных пятен. Осветляющий крем для лица рекомендован для ухода за кожей с веснушками, пигментными пятнами, постакне. Также его можно использовать для реабилитации после косметологических вмешательств (пилингов, лазерной коррекции, фототерапии). Активный комплекс, состоящий из витамина С и экстрактов лимона, бадана, конского щавеля и солодки, заметно осветляет кожу, значительно уменьшает проявления пигментации, препятствует возникновению новых пятен, делает тон лица более ровным. Термальная вода в сочетании с суперувлажняющим комплексом и натуральными маслами восстанавливает водный баланс, успокаивает раздраженные участки, усиливает защитные свойства тканей, дарит коже нежность и гладкость. Экстракт вербены выравнивает рельеф кожи и уменьшает проявления мимических морщинок.',
		weight: 70,
		volume: 50,
		showVolume: true,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 719
	},
	{
		zipcode: '0000007259933',
		name: 'Крем капилляропротектор для кожи склонной к куперозу Kora 50 мл',
		img:  'https://profi-mag.com/upload/iblock/929/z6yjqw1jny2exxnvo3j38dq3a3b6dbvk/caf24a05-9004-11e8-8c49-80c16e648c08_30a17c9a-89d8-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 7,
			width: 7,
			height: 4
			},
		description: 'Крем обеспечивает эффективный комплексный уход за кожей, имеющей склонность к куперозу и покраснениям. СICA - натуральный компонент из центеллы азиатской – обладает выраженным успокаивающим, увлажняющим и восстанавливающим действием. Эффективно и комплексно решает проблемы чувствительной кожи. ФИТОЭКСТРАКТЫ способствуют уменьшению интенсивности покраснения кожи, связанного с наличием близкорасположенных к ее поверхности капилляров, проявляют антиоксидантную активность. ПАНТЕНОЛ, БЕТАИН, НИАЦИНАМИД успокаивают, укрепляют барьерные свойства кожи, снижая ее чувствительность. Масла кокоса, авокадо, миндаля питают и смягчают кожу, возвращают ей комфорт и гладкость, обеспечивают антиоксидантную защиту. Высокий процент ввода натуральных компонентов может вызвать изменение цвета средства без потери потребительских качеств.',
		weight: 70,
		volume: 50,
		showVolume: true,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 819
	},
	{
		zipcode: '0000007259266',
		name: 'Крем для сухой кожи с маслом арганы Kora 50 мл',
		img:  'https://profi-mag.com/upload/iblock/e59/kmng3ttulmunlh2hnjsdwqw5mb1je3rq/ea8b0531-c08e-11e8-a14f-80c16e648c08_50501644-89db-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 7,
			width: 7,
			height: 4
			},
		description: 'Крем для лица с маслом арганы разработан специально для сухой и обезвоженной кожи. Он интенсивно увлажняет, увеличивает степень эластичности и упругости кожи, улучшает цвет лица, питает и защищает кожу от агрессивных воздействий окружающей среды. Крем для сухой кожи с маслом аргана идеален для ежедневного ухода. Комплекс из 5 натуральных масел помогает восстановить естественный баланс увлажненности кожи, насыщает ценными микроэлементами, оказывает защитное и антиоксидантное действие, позволяя продлить молодость кожи, защитить ее от преждевременного увядания. Термальная вода, бетаин и олигосахариды обогащают клетки минеральными веществами и влагой, повышают упругость кожи, предотвращают возникновение новых морщин и уменьшают глубину существующих. Экстракты растений обладают успокаивающим действием, сохраняют нежность и гладкость кожи.',
		weight: 70,
		volume: 50,
		showVolume: true,
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
		producer: 'KORA',
		brand: 'KORA',
		price: 389
	},
	{
		zipcode: '0000007260380',
		name: 'Крем солнцезащитный для лица и тела усиленная защита - NEW LINE 150 мл',
		img:  'https://profi-mag.com/upload/iblock/dc8/h2ju6lgiyzvna4xw2kujmdvqyk3n8fi6/3efbb3a1-9005-11e8-8c49-80c16e648c08_ff11778d-89da-11ea-80dc-90e2ba891c75.jpeg',
		size: {
			length: 3,
			width: 3,
			height: 10
			},
		description: 'Солнцезащитный крем для лица и тела SPF 40 разработан для надежной защиты кожи от ультрафиолетовых лучей спектров А и В, которые, как известно, провоцируют фотостарение. Благодаря тщательно выверенному составу он спасает ткани от обезвоживания и пересыхания, бережет кожу от появления пигментных пятен и ранних морщин. Крем имеет приятную нежную консистенцию и легкий ненавязчивый аромат, без труда распределяется по коже, не оставляет дискомфортного ощущения липкости. Крем с SPF 40 подходит для ухода за кожей лица и тела во время загара и длительных прогулок в солнечную погоду. Средство обволакивает кожу невесомой вуалью, которая позволяет влаге удерживаться в тканях даже под палящим солнцем. Кроме того, крем интенсивно питает кожу и смягчает ее, препятствует разрушительному воздействию температурного стресса и свободных радикалов, не дает появиться сухости и шелушенияю, спасает от ожогов.',
		weight: 200,
		volume: 150,
		showVolume: true,
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
		price: 320
	},
	{
		zipcode: '0000008989599',
		name: 'Крем-бальзам для лица и тела SOS- восстановление Kora 150 мл',
		img:  'https://profi-mag.com/upload/iblock/b72/l3186zgwb8l18nmgg954d2m86pw3evaj/4b9fba18-2a3d-11eb-80ec-90e2ba894039_51ead9a5-2a3d-11eb-80ec-90e2ba894039.jpeg',
		size: {
			length: 4,
			width: 4,
			height: 9
			},
		description: 'Крем-бальзам предназначен для быстрого восстановления обезвоженной и подвергнувшейся стрессу кожи (принятие солнечных ванн, посещение бассейна, сезонная чувствительность кожи к холоду или теплу), а также закрепления красивого ровного загара. Суперувлажняющий комплекс с пантенолом интенсивно увлажняет и успокаивает кожу, устраняет раздражение, сухость, шелушение и покраснение, повышает устойчивость кожи к агрессивным факторам внешней среды и неблагоприятным сезонным воздействиям.',
		weight: 200,
		volume: 150,
		showVolume: true,
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
		price: 379
	},
	{
		zipcode: '0000008992420',
		name: 'Крем для рук Увлажнение и мягкость Kora 100 мл',
		img:  'https://profi-mag.com/upload/iblock/901/xy19kj1lb9aley40qkt9lf09m3ksu9za/50d6fb89-2a4b-11eb-80ec-90e2ba894039_57a12384-2a4b-11eb-80ec-90e2ba894039.jpeg',
		size: {
			length: 4,
			width: 4,
			height: 9
			},
		description: 'Специально созданная формула крема увлажняет и смягчает даже самую сухую кожу рук. Активный комплекс с гиалуроновой кислотой, пантенолом и мочевиной в сочетании с маслами авокадо, кокоса, кукурузы и экстрактами овса, липы, тысячелистника мгновенно смягчает, успокаивает, насыщает кожу влагой, снижает ощущение сухости и стянутости кожи рук, надолго возвращает ей комфорт, мягкость и нежность.',
		weight: 140,
		volume: 100,
		showVolume: true,
		usage: {
			body: false,
			hands: true,
			legs: false,
			face: false,
			hair: false,
			tanning: false,
			shaving: false,
			gifts: false,
			hygienic: false,
			oral: false,
			paper: false
			},
		producer: 'KORA',
		brand: 'KORA',
		price: 179
	}
];

export default defaultProducts;