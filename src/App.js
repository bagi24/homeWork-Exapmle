import { useState } from 'react';

function App() {
  const [prodactInputValue, setProdactInputValue] = useState('');
  const [validValues, setValidValues] = useState(true);
  const [quantityInputValue, setQuantityInputValue] = useState('');
  // const [validQuantity, setValidQuantity] = useState('');
  const [productionInputValue, setProductionInputValue] = useState('');
  // const [validProduction, setValidProduction] = useState('');

  const [btnValue, setBtnValue] = useState(false);
  // const [btn2Value, setBtn2Value] = useState(false);

  const [todos, setTodos] = useState([]);

  console.log(todos);

  const [boxValue, setBoxValue] = useState(0);
  // const ItemsCon = document.querySelector('.itemsConteiner');

  // console.log(prodactInputValue);
  // console.log(quantityInputValue);
  // console.log(productionInputValue);
  const ItemsCon = document.querySelector('.itemsConteiner');
  const itemsC = document.querySelector('.itemsC');

  const handleButton = () => {
    // console.log('clicked')

    ItemsCon.style.display = 'block';
    // ესააა გამოსასწორებელი....
    if (
      prodactInputValue.length === 0 ||
      quantityInputValue.length === 0 ||
      productionInputValue.length === 0
    ) {
      // setValidProdact('შეავსეთ ველი');
      // setValidQuantity('ესეც შესავსებია');
      // setValidProduction('ესეც ასევე');

      setBtnValue(true);
    } 
    
    
    
    if (
    
      prodactInputValue.length > 0 &&
      quantityInputValue.length > 0 &&
      productionInputValue.length > 0
    ) {
      setBtnValue(false);


      const newItems = {
        id: Math.random() * 100,
        prodact: prodactInputValue,
        quantity: quantityInputValue,
        production: productionInputValue,
      };
  
      setTodos(oldItems => [...oldItems, newItems]);
  
      setProdactInputValue('');
      setQuantityInputValue('');
      setProductionInputValue('');
      
    }

    
  };

  const handlebtnPlus = id => {
    console.log(id);
    setBoxValue(boxValue + 1);
    // todos.map(todo => { return (todo.id === id ? (todo.quantity -= 1) : null) })

    todos.map(todo => {
      if (todo.id === id) {
        todo.quantity -= 1;
      }

      // ესააა გამოსასწორებელი....
      // if (todo.id === id && todo.quantity <= 0) {
      //   console.log('egaa');
      //   // setBtn2Value(true);
      //   itemsC.remove();
      // }
    });
  };

  return (
    <div className='App'>
      <div className='headerConteiner'>
        <div className='inputConteiner'>
          <label htmlFor='prodact'> Prodact </label>
          <input
            onChange={e => setProdactInputValue(e.target.value)}
            value={prodactInputValue}
            type='text'
            id='prodact'
          />
          <div className='valid'>
            {validValues && prodactInputValue <= 0 ? <label> ველი უნდა იყოს შევსებული </label> : ''}
          </div>

          <label htmlFor='quantity'> Quantitiy </label>
          <input
            onChange={e => setQuantityInputValue(e.target.value)}
            value={quantityInputValue}
            type='text'
            id='quantity'
          />

          <div className='valid'>
            {validValues && quantityInputValue <= 0 ? (
              <label> ველი უნდა იყოს შევსებული </label>
            ) : (
              ''
            )}
          </div>

          <label htmlFor='production'> Production Country </label>
          <input
            onChange={e => setProductionInputValue(e.target.value)}
            value={productionInputValue}
            type='text'
            id='production'
          />

          <div className='valid'>
            {validValues && productionInputValue <= 0 ? (
              <label> ველი უნდა იყოს შევსებული </label>
            ) : (
              ''
            )}
          </div>

          <button disabled={btnValue} onClick={handleButton} className='button'>
            ADD
          </button>
        </div>

        <div className='BoxConteiner'>{boxValue}</div>
      </div>

      <div className='itemsConteiner'>
        {todos.map(todo => {
          return (
            <div className='itemsC'>
              <ul>
                <li> Prodact: {todo.prodact}</li>
                <li> Quantity: {todo.quantity}</li>
                <li> Production Country: {todo.production}</li>
              </ul>

              <button onClick={() => handlebtnPlus(todo.id)} className='btn2'>
                დაამატე კალათაში
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
