import {useGetAllProductsQuery} from '../app/service/dummyData';

export const AllProducts = () => {
    const {data, isError, isLoading, isSuccess} = useGetAllProductsQuery()
    // console.log(res)
    if(isError){
        return <div>Error loading products</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div>{data?.products.map((p) => (
            <div key={p.id} className="card">
                <h3>{p.title}</h3>
                {/* <img src={p.image} alt={p.title} style={{width: '100px', height: '100px'}} /> */}
                <p>Price: ${p.price}</p>
                <p>Description: {p.description}</p>
            </div>
        ))}</div>
    )
}