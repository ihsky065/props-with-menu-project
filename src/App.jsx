function MenuItem ({name, price}) {
  return (
    <>
    <p>
      <strong>{name} </strong>| {price} 
    </p>
    </>
  )
}

function App() {
  return (
    <>
    <h1>Sister Husna Fried Chicken</h1>
    <MenuItem name={"2pc Fried Chicken Set"} price={'RM10.00'}/> 
    </>
  )
}

export default App;