import React, {FC, useState} from 'react';
import { IProduct } from '../../types/types';

interface AdminItemProps {
	product: IProduct;
	onDelete: (zipcode: string) => void
	onEdit: (oldzipcode: string, product: IProduct) => void
}

const AdminItem: FC<AdminItemProps> = ({product, onDelete, onEdit}) => {
	const [zipcode, setZipcode] = useState (product.zipcode);
	const [name, setName] = useState (product.name);
	const [img, setImg] = useState (product.img);
	const [length, setLength] = useState (product.size.length);
	const [width, setWidth] = useState (product.size.width);
	const [height, setHeight] = useState (product.size.height);
	const [description, setDescription] = useState (product.description);
	const [weight, setWeight] = useState (product.weight);
	const [volume, setVolume] = useState (product.volume);
	const [showVolume, setShowVolume] = useState (product.showVolume);
	const [body, setBody] = useState (product.usage.body);
	const [hands, setHands] = useState (product.usage.hands);
	const [legs, setLegs] = useState (product.usage.legs);
	const [face, setFace] = useState (product.usage.face);
	const [hair, setHair] = useState (product.usage.hair);
	const [tanning, setTanning] = useState (product.usage.tanning);
	const [shaving, setShaving] = useState (product.usage.shaving);
	const [gifts, setGifts] = useState (product.usage.gifts);
	const [hygienic, setHygienic] = useState (product.usage.hygienic);
	const [oral, setOral] = useState (product.usage.oral);
	const [paper, setPaper] = useState (product.usage.paper);
	const [producer, setProducer] = useState (product.producer);
	const [brand, setBrand] = useState (product.brand);
	const [price, setPrice] = useState (product.price);

	function formattedProduct(): IProduct {				
		return {
			zipcode: zipcode,
			name: name,
			img: img,
			size: {
				length: length,
				width: width,
				height: height
				},
			description: description,
			weight: weight,
			volume: volume,
			showVolume: showVolume,
			usage: {
				body: body,
				hands: hands,
				legs: legs,
				face: face,
				hair: hair,
				tanning: tanning,
				shaving: shaving,
				gifts: gifts,
				hygienic: hygienic,
				oral: oral,
				paper: paper
				},
			producer: producer,
			brand: brand,
			price: price
		}
	}

	return (
		<div className='admin-item'>
			<div className='admin-item__data'>
				<div>
					Штрихкод <input className='admin-item__zipcode' onChange={e=>setZipcode(e.target.value)} type="text" value={zipcode}/>
					Название <input className='admin-item__name' onChange={e=>setName(e.target.value)} type="text" value={name}/>
					Картинка <input className='admin-item__img' onChange={e=>setImg(e.target.value)} type="text" value={img}/>
				</div>
				<div>
					Описание <input className='admin-item__description' onChange={e=>setDescription(e.target.value)} type="text" value={description}/>
				</div>
				<div>
					Длина <input className='admin-item__number' onChange={e=>setLength(+e.target.value)} type="number" value={length}/>
					Ширина <input className='admin-item__number' onChange={e=>setWidth(+e.target.value)} type="number" value={width}/>
					Высота <input className='admin-item__number' onChange={e=>setHeight(+e.target.value)} type="number" value={height}/>
					Вес <input className='admin-item__number' onChange={e=>setWeight(+e.target.value)} type="number" value={weight}/>
					Объем <input className='admin-item__number' onChange={e=>setVolume(+e.target.value)} type="number" value={volume}/>
					Отображать объем (если нет - вес) <input onChange={e=>setShowVolume(e.target.checked)} type='checkbox' value='showVolume' checked={showVolume}/>
				</div>		
				<div>Назначение:
					Для тела <input onChange={e=>setBody(e.target.checked)} type='checkbox' value='body' checked={body}/>
					Для рук <input onChange={e=>setHands(e.target.checked)} type='checkbox' value='hands' checked={hands}/>
					Для ног <input onChange={e=>setLegs(e.target.checked)} type='checkbox' value='legs' checked={legs}/>
					Для лица <input onChange={e=>setFace(e.target.checked)} type='checkbox' value='face' checked={face}/>
					Для волос <input onChange={e=>setHair(e.target.checked)} type='checkbox' value='hair' checked={hair}/>
					Для загара <input onChange={e=>setTanning(e.target.checked)} type='checkbox' value='tanning' checked={tanning}/>
					Для бритья <input onChange={e=>setShaving(e.target.checked)} type='checkbox' value='shaving' checked={shaving}/>
					Подарочные наборы <input onChange={e=>setGifts(e.target.checked)} type='checkbox' value='gifts' checked={gifts}/>
					Гигиеническая продукция <input onChange={e=>setHygienic(e.target.checked)} type='checkbox' value='hygienic' checked={hygienic}/>
					Для полости рта <input onChange={e=>setOral(e.target.checked)} type='checkbox' value='oral' checked={oral}/>
					Бумажная продукция <input onChange={e=>setPaper(e.target.checked)} type='checkbox' value='paper' checked={paper}/>
				</div>
				<div>
					Производитель <input onChange={e=>setProducer(e.target.value)} type="text" value={producer}/>
					Бренд <input onChange={e=>setBrand(e.target.value)} type="text" value={brand}/>
					Цена <input className='admin-item__number' onChange={e=>setPrice(+e.target.value)} type="number" step="any" value={price}/>
				</div>
			</div>
			<div className='admin-item__buttons'>
				<button onClick={()=>onEdit(product.zipcode, formattedProduct())}>Сохранить изменения</button>
				<button onClick={()=>onDelete(product.zipcode)}>Удалить товар</button>
			</div>					

		</div>
	);
};

export default AdminItem;