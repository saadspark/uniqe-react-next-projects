import { useState,useEffect  } from 'react';
import './App.css';



function App() {
  const [listItem, setListItem] = useState(() => {
    // Retrieve data from localStorage on component mount
    const storedList = localStorage.getItem('listItem');
    return storedList ? JSON.parse(storedList) : [];
  });
  useEffect(() => {
    // Update localStorage whenever listItem changes
    localStorage.setItem('listItem', JSON.stringify(listItem));
  }, [listItem]);
  const [name,setName] = useState('');
  function handelSubmit(e){
    e.preventDefault();
    const newListItem = {
      'id': crypto.randomUUID(),
      name,
    }

    setListItem((listItem)=>[...listItem,newListItem]);
    setName('')


    
  }

  function FilterValue(value){
  
    setListItem(listItem.filter(
      (item) => value.id != item.id
    ));
  }



  return(
    <>
      <div className='ADD-TO-TODO'>
        <form onSubmit={handelSubmit}>
          <input className='search' type="text" placeholder='Add' value={name} onChange={(e) => setName(e.target.value)} />
          <button className='button'>ADD TO LIST</button>
        </form>
      </div>
    <List listItem={listItem} key={listItem.i} onDelete={FilterValue}/>
      </>
  )
}

function List({ listItem,onDelete }) {
  return (
    <div>
      {
        listItem.map((listItem) => (
          <ListItem listItem={listItem} key={listItem.id} onDelete={onDelete} />
        ))
      }
    </div>
  );
}

function ListItem({listItem ,onDelete}){
  const [cancel , setCancel] = useState(false);
  function handelCancel(){
    setCancel((cancel)=>!(cancel));
  }
return(
  <div className='listItem'>
  <input type="checkbox" name="" id="" onClick={handelCancel}/>
  <spam className={cancel && `Delete`}>{listItem.name}</spam>
  <button className='del-button' onClick={()=>onDelete(listItem)}>Delete</button>
  <br />
  </div>
)
}
export default App
