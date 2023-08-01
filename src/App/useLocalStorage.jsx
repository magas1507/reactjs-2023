import React from "react";

const useLocalStorage = (itemName, initialValue) =>{

    const localStorageItem = localStorage.getItem(itemName, initialValue)
    
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(itemName,JSON.stringify(initialValue))
      parsedItem = initialValue;
  
    } else {
      parsedItem = JSON.parse(localStorageItem)   
    }
    const [item, setItem] = React.useState(parsedItem);
      
    const saveItem = (newItem) =>{
      localStorage.setItem('TODOS_V1',JSON.stringify(newItem ));
  
      setItem(newItem);
    }
  
    return [item,saveItem];
  }

  export {useLocalStorage}