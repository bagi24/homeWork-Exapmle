import { useState } from 'react';

function App() {
  const [prodactInputValue, setProdactInputValue] = useState('');
  const [validValues, setValidValues] = useState(true);
  const [quantityInputValue, setQuantityInputValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  // const [validQuantity, setValidQuantity] = useState('');
  const [productionInputValue, setProductionInputValue] = useState('');

  const [editValue, setEditValue] = useState([]);
  const [editText, setEditText] = useState('ADD');
  // console.log(editValue);

  const [idValue, setIdValue] = useState(null);

  console.log(idValue);

  // const [validProduction, setValidProduction] = useState('');

  // const [btnValue, setBtnValue] = useState(false);
  // const [btn2Value, setBtn2Value] = useState(false);

  const [todos, setTodos] = useState([]);

  // console.log(todos);

  const [boxValue, setBoxValue] = useState(0);
  // const ItemsCon = document.querySelector('.itemsConteiner');

  // console.log(prodactInputValue);
  // console.log(quantityInputValue);
  // console.log(productionInputValue);
  const ItemsCon = document.querySelector('.itemsConteiner');
  const itemsC = document.querySelector('.itemsC');

  const label1 = document.querySelector('.label1');
  const label2 = document.querySelector('.label2');
  const label3 = document.querySelector('.label3');

  const id = Math.floor(Math.random() * 100);
  const price = (priceValue + Math.floor(Math.random() * 100)) * quantityInputValue;

  const updateInfo = (idValue, prodact, quantity, price, production) => {
    console.log(idValue, prodact, quantity, price, production);
    const TodoUpdate = todos.map(todo =>
      todo.id === idValue ? { idValue, prodact, quantity, price, production } : todo
    );

    console.log(TodoUpdate);

    setTodos(TodoUpdate);

    setProdactInputValue('');
    setQuantityInputValue('');
    setProductionInputValue('');
  };

  const handleButton = () => {
    if (
      (validValues && prodactInputValue.length <= 0) ||
      (validValues && quantityInputValue.length <= 0) ||
      (validValues && productionInputValue.length <= 0)
    ) {
      label1.innerText = 'ველი უნდა იყოს შევსებული';
      label2.innerText = 'ველი უნდა იყოს შევსებული';
      label3.innerText = 'ველი უნდა იყოს შევსებული';
    } else if (editText === 'ADD') {
      label1.innerText = '';
      label2.innerText = '';
      label3.innerText = '';

      ItemsCon.style.display = 'block';

      const newItems = {
        id: id,
        prodact: prodactInputValue,
        quantity: quantityInputValue,
        price: price,
        production: productionInputValue,
      };

      setTodos(oldItems => [...oldItems, newItems]);

      setProdactInputValue('');
      setQuantityInputValue('');
      setProductionInputValue('');
    } else if (editText === 'EDIT') {
      // console.log('edit');
      setEditText('ADD');

      updateInfo(idValue, prodactInputValue, quantityInputValue, price, productionInputValue);
    }
  };

  const handlebtnPlus = todo => {
    // console.log(id);
    setBoxValue(boxValue + 1);
    // todos.map(todo => { return (todo.id === id ? (todo.quantity -= 1) : null) })

    //ამას ვერ გავუგე ....
    if (todo.quantity > 0) {
      const updatedTodo = todos.map(t => {
        if (t.id === todo.id) {
          return {
            ...t,
            quantity: t.quantity - 1,
          };
        }
        return t;
      });

      setTodos(updatedTodo);
    } else {
      let filteredData = todos.filter(t => t.id !== todo.id || t.quantity > 1);
      setTodos(filteredData);
    }

    // if (todo.id === id && todo.quantity === 0) {
    //   itemsC.remove();
    // }

    // ესააა გამოსასწორებელი....
    // if (todo.id === id && todo.quantity <= 0) {
    //   console.log('egaa');
    //   // setBtn2Value(true);
    //   itemsC.remove();
    // }
  };

  const handleEdit = id => {
    const editTask = todos.find(todo => todo.id === id);

    setProdactInputValue(editTask.prodact);
    setQuantityInputValue(editTask.quantity);
    setProductionInputValue(editTask.production);

    setEditValue(editTask);
    setIdValue(id);

    setEditText('EDIT');
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
            <label className='label1'> </label>
          </div>

          <label htmlFor='quantity'> Quantitiy </label>
          <input
            onChange={e => setQuantityInputValue(e.target.value)}
            value={quantityInputValue}
            type='number'
            id='quantity'
          />

          <div className='valid'>
            <label className='label2'> </label>
          </div>

          {/* <label htmlFor='price'> Price </label>
          <input
            onChange={e => setPriceValue(e.target.value)}
            value={priceValue}
            type='number'
            id='price'
          /> */}

          <label htmlFor='production'> Production Country </label>
          <input
            onChange={e => setProductionInputValue(e.target.value)}
            value={productionInputValue}
            type='text'
            id='production'
          />

          <div className='valid'>
            <label className='label3'> </label>
          </div>

          <button onClick={handleButton} className='button'>
            {editText === 'ADD' ? 'ADD' : 'EDIT'}
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
                <li> Price: {todo.price} ლარი </li>
                <li> Production Country: {todo.production}</li>
              </ul>

              <button onClick={() => handleEdit(todo.id)} className='btn1'>
                რედაქტირება
              </button>

              <button onClick={() => handlebtnPlus(todo)} className='btn2'>
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
