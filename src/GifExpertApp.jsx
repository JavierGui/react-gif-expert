import { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [Categories, setCategories] = useState([ 'One punch']);

    const onAddCategory = (newCategory) => {

       if(  Categories.includes( newCategory )  ) return;
        // Categories.push(newCategory);
          setCategories( [newCategory,...Categories]);
        // setCategories(cat => [...cat,'Valorant']);
    }

  return (
      <>
            
            <h1>GifExpertApp</h1>

            
            <AddCategory 
                    
                onNewCategory={ event => onAddCategory(event)}
                
            />

            
            
            
            { 
                Categories.map( (category) => (
                    <GifGrid
                    key={category} 
                    category={category}/>
                )) 
            }
                
            
                
      </>
      )
}
