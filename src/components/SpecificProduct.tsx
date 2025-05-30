import {useGetProductByIdQuery} from '../app/service/dummyData';

export const SpecificProduct = () => {
    const {data, isError, isLoading, isSuccess} = useGetProductByIdQuery(2)
    // console.log(data)
    if(isError){
        return <div>Error loading products</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1> {data?.title} </h1>
            <p> {data?.category} </p>
        </div>
    )
}