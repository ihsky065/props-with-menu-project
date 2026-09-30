function MenuItem ({name, price}) {
  return (
    <>
    <p>
      <strong>{name} </strong>| {price} 
    </p>
    </>
  )
}

function Category ({title, foods}) {
  return (
    <>
    <div>
      <h2>{title} </h2>
      {foods}
    </div>
    </>
  )
}

const friedChicken = (
  <>
    <MenuItem name={"2pc Fried Chicken Set"} price={'RM10.00'}/> 
    <MenuItem name={'6 piece nugget'} price={'RM6.00'}/>
    </>
);

function App() {
  return (
    <>
    <h1>Sister Husna Fried Chicken</h1>
    <Category title={'Fried Chicken'} foods={friedChicken}/> 
    </>
  )
}

export default App;