import React, {FC, useState} from 'react';
import { IProduct } from '../../types/types';

interface AdminAddFormProps {
	onAdd: (newProduct: IProduct) => void
}

const AdminAddForm: FC<AdminAddFormProps> = ({onAdd}) => {	
		const [zipcode, setZipcode] = useState ('');
		const [name, setName] = useState ('');
		const [img, setImg] = useState ('');
		const [length, setLength] = useState (0);
		const [width, setWidth] = useState (0);
		const [height, setHeight] = useState (0);
		const [description, setDescription] = useState ('');
		const [weight, setWeight] = useState (0);
		const [volume, setVolume] = useState (0);
		const [showVolume, setShowVolume] = useState (true);		
		const [body, setBody] = useState (true);
		const [hands, setHands] = useState (false);
		const [legs, setLegs] = useState (false);
		const [face, setFace] = useState (false);
		const [hair, setHair] = useState (false);
		const [tanning, setTanning] = useState (false);
		const [shaving, setShaving] = useState (false);
		const [gifts, setGifts] = useState (false);
		const [hygienic, setHygienic] = useState (false);
		const [oral, setOral] = useState (false);
		const [paper, setPaper] = useState (false);
		const [producer, setProducer] = useState ('');
		const [brand, setBrand] = useState ('');
		const [price, setPrice] = useState (0);	

		return (
			<div>
				<span className='admin-item__header'>Форма добавления товара:</span>
				<div className='admin-item'>				
					<div className='admin-item__data'>
						<div>
							Штрихкод <input placeholder='13 символов, уникальный' className='admin-item__zipcode' onChange={e=>setZipcode(e.target.value)} type="text" value={zipcode}/>
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
						<button onClick={()=>onAdd({
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
					})}>Добавить товар</button>
				</div>
			</div>
		</div>
		);
};

export default AdminAddForm;