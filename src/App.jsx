function MenuItem ({item, price}) {
  return (
    <>
    <p>
      <strong>{item} | </strong>{price} 
    </p>
    </>
  )
}

function App() {
  return (
    <>
    <h1>Sister Husna Fried Chicken</h1>
    <MenuItem item={"2pc Fried Chicken Set"} price={'RM10.00'}/> 
    </>
  )
}

export default App;