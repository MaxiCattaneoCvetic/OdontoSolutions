function CardFavorite(){
	const [data,setData] = useState(JSON.parse(localStorage.getItem("doctorFavorites")))
	
	
	return(	
		<>
	{data.length > 0 ? (
		data.map((doc) => {
			return (
				<div key={doc.id} className={style.card}>
					<h3>
						<strong>Name:</strong> {doc.name}
					</h3>
					<img src={arrayDoctor[doc.id]} alt="" />
					<p>
						<strong>Email:</strong> {doc.email}
					</p>
					<p>
						<strong>UserName:</strong> {doc.username}
					</p>
					{isFavorite(doc.id) ? (
						<button onClick={() => deleteFavorite(doc.id)}>
							Delete favorite
						</button>
					) : (
						<button onClick={() => addFavorite(doc.id)}>Add favorite</button>
					)}
					<button>More information</button>
				</div>
			);
		})
	) : (
		<div>Aún no tienes favoritos</div>
	)}
	</>
	)


}

export default CardFavorite