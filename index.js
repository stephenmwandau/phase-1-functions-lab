// Code your solution in this file!

function distanceFromHqInBlocks(VALUE) {

    return Math.abs(VALUE - 42); 
    }
    
    function distanceFromHqInFeet(VALUE) {
  
        return distanceFromHqInBlocks(VALUE) * 264; 
    }
    
    //  calculate the number of feet a passenger travels 
    function distanceTravelledInFeet(start, destination) {
      return   Math.abs(start - destination) * 264; 
    }
    
    // calculate customer's fare
    function calculatesFarePrice(start, destination) {
  
      const distance = distanceTravelledInFeet(start, destination);
    
      if (distance <= 400) {
  
        return 0; // first 400 feet are free
      } else if   (distance > 400 && distance <= 2000) {
  
  
        return (distance - 400) * 0.02; 
      } else if (distance > 2000 && distance < 2500) {
  
  
  return 25; // fare of $25 for distance >2000 feet but < 2500 feet
   } else {
  
  
        return 'cannot travel that far'; //  no rides over 2500 feet
      }
    }