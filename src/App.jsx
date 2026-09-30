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

// My attempt for NutritionalInfo props
// function NutritionalInfo({calories, protein, carbs, fat}) {
//   return (
//     <>
//     <p>Calories: {calories} kcal</p>
//     <p>Protein: {protein} g</p>
//     <p>Carbs: {carbs} g</p>
//     <p>Fat: {fat} g</p>
//     </>
//   )
// }

function NutritionalInfo({nutritionalInfo}) {
  return (
    <>
    <p>Calories: {nutritionalInfo?.calories} kcal</p>
    <p>Protein: {nutritionalInfo?.protein} g</p>
    <p>Carbs: {nutritionalInfo?.carbs} g</p>
    <p>Fat: {nutritionalInfo?.fat} g</p>
    </>
  )
}

const friedChicken = (
  <>
    <MenuItem name={"2pc Fried Chicken Set"} price={'RM10.00'}/> 
    {/* <NutritionalInfo calories={'540'} protein={'31'} carbs={35} fat={29}/> My attempt for NutritionalInfo props */}
    <MenuItem name={'6 piece Nugget'} price={'RM6.00'}/>
    </>
);

const desserts = (
  <>
    <MenuItem name={"1 piece Chocolate Cake"} price={'RM4.90'}/> 
    <MenuItem name={'1 pc Ice Cream'} price={'RM3.00'}/>
    </>
);

function App() {
  return (
    <>
    <h1>Sister Husna Fried Chicken</h1>
    <Category title={'Fried Chicken'} foods={friedChicken}/> 
    <Category title={'Desserts'} foods={desserts}/> 

    </>
  )
}

export default App;