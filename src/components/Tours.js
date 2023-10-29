import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan For Seven Wonders Of The World</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
            <footer>&copy; This webpage is developed by Inam
            <div><span>Github :</span><a href='https://github.com/Inam10'> Click here </a></div>
            </footer>

        </div>
    );
}

export default Tours;