import { useEffect , useState} from "react";
// import AddIceCream from "./AddIceCream";


const Loader = () => {
    return(
        <main>
            <div className="preloader">
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            </div>
            <div className="status">Loading<span className="status__dot">.</span><span className="status__dot">.</span><span className="status__dot">.</span></div>
        </main>
    );
}



function Article() {

    const [arr, setArr] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);
    const [error, setError ] = useState();

    useEffect(()=>{
        setTimeout(() =>{
            fetch('http://localhost:8000/menuData')
            .then( res => {
                if(!res.ok){
                    throw Error ("Serverdan ma'lumot olishda xatolik mavjud!")
                }
                return res.json()
            })
            .then(data =>{
                setArr(data);
                setIsLoading(false);
        })
        .catch((err) =>{
            setError(err.message)
            console.log(err.message)
            setIsLoading(false);
        });
    }, 4000)
    }, []);



    const handleDelete = (id) => {
        fetch(`http://localhost:8000/menuData/${id}` , {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            console.log(id + "id li post serverdan o'chirildi");
        });
        const newArr = arr.filter((el) => el.id !==id);
        setArr(newArr);
    }

    const iceCreamList = arr.map(el => {
      return(
            <div className="ice-cream" key={el.id}>
                <img className="ice__img" src={`img/ice-cream-${el.iceCream.id}.svg`} alt=""/>
                <h3 className="name">{el.iceCream.name}</h3>
                <div className="ice__info">
                <p className="price">${el.price} </p>
                <p className="quantity">{el.quantity} in stock</p>
                </div>
                {el.description}
                <button type='button' className="delete-btn" onClick = {()=> {handleDelete(el.id)}}>Delete</button>
            </div>
      );
  })
  

    return (
        <section className="ice-creams">
          <div className="container">
              <div className="row">
                  {error ? <h3>{error}</h3> : ''}
                  {isLoading ? isLoading : ''}
                {!isLoading && !error ? iceCreamList : ''}
              </div>
        </div>
      </section>
    );
  }

  export default Article;
  