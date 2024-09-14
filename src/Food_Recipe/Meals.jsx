import React, { useEffect, useState } from 'react'

const Meals = () => {
    const[mealData,setMealData] = useState([]);
    const[area,setArea] = useState('Canadian');
    const[inputData,setInputData] = useState('');
    
    useEffect(()=>{
        let fetchDataApi = async ()=>{
            let Api = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
            )
            const data = await Api.json();
            setMealData(data.meals)
            
            console.log(data.meals);
        }
        fetchDataApi();
    },[area])
      
    const submitHandaler = async (e)=>{
        e.preventDefault();
        let Api = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
        )
        const data = await Api.json();
        // setMealData(data.meals)
        
        console.log("recepe daata is " ,data.meals );
        setMealData(data.meals)
    }
  return (
   <>
<div id='buttons'>
<button onClick={()=>setArea('Canadian')} type="button" className="btn btn-outline-primary mx-3">Canadian </button>

<button onClick={()=>setArea('american')} type="button" className="btn btn-outline-light mx-3">American</button>
<button onClick={()=>setArea('thai')} type="button" className="btn btn-outline-info mx-3">Thai</button>
<button onClick={()=>setArea('british')} type="button" className="btn btn-outline-warning mx-3">British</button>

<button onClick={()=>setArea('russian')} type="button" className="btn btn-outline-info mx-3">Russian</button>


     </div>
 {/* buttons section close */}
    <form onSubmit={submitHandaler} className="inputs">
        <input onChange={(e)=>setInputData(e.target.value)} type="text" placeholder='Search meal by name E.g Chicken'/>
    </form>

      {/* main data */}
   <div id='container'>
    {mealData.map((data)=>{
        return <div key={data.idMeal} style={{display:"flex"}}>
            <div  id='anim'>  <img src={data.strMealThumb} alt=""/>
            <h5 style={{textAlign:"center"}}>{data.strMeal}</h5>
            </div>
          
          
       </div>
    
    })}
   </div>
      
   </>
  )
}

export default Meals