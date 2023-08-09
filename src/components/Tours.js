import Card from "./Card"

function Tours({tours,btnHandler}){
    
    return(
        <div className="Tours">
            <div className="heading">
                Plan With Love
            </div>
            <div className="container">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} btnHandler={btnHandler}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;