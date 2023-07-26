"use strict"

function translatePigLatin(str) {
    let string , word, dd
    let reg = /^[aeiou]/g
    if (reg.test(str)){ //word starts with a vowel
       console.log(`${str} starts with a Vowel`)
      string = str + 'way'
      console.log(string)
        return string;
    } else { //words starts with consonants
    if (/[aeiou]/.test(str)){ //has atleast one vowel
          let num =  str.match(/.*?[^[aeiou]]*?(?=[aeiou])/)[0].length  
             console.log(num)
    
           if (num > 1){//has got additional consonants
  
             console.log(`${str} has additional consonants`)
            let len = str.match(/.[^[aeiou]]*?(?=[aeiou])/) 
      
            word = Array.from(str)
           dd = word.splice(0,num)
          console.log(dd)
          let sentence =[...word].concat(dd).join('')
   
          string =  sentence + 'ay'
         console.log(string)
          return string
  
           } else if (num == 1){
  
                   console.log(`${str} has only one consonants`)
                   let sent = str
                        let array = Array.from(sent)
                   let wor = array.splice(0,1)
                    console.log(array.join(''), wor)
     
                   string = array.join('') + wor + 'ay'
       
                    console.log(string)
                   return string
              }
      }else { // has No vowels
           console.log(`${str} has no Vowels`)
            let fin = str + 'ay'
            console.log(fin)
            return str + 'ay'
           }
    }
  } 

  //Function call with diffrent word approach
  translatePigLatin("california")
  translatePigLatin("paragraphs");
  translatePigLatin("glove")
  translatePigLatin("algorithm")
  translatePigLatin("eight")
  translatePigLatin("schwartz")
  translatePigLatin("rhythm") 