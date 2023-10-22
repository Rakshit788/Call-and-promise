let listOfObj = [
    
        { title: 'The Catcher in the Rye', 
        author: 'J.D. Salinger',
         year: 1951 },

        { title: 'To Kill a Mockingbird',
         author: 'Harper Lee',
          year: 1960 },

        { title: '1984',
         author: 'George Orwell',
          year: 1949 },

        { title: 'The Great Gatsby',
         author: 'F. Scott Fitzgerald', 
         year: 1925 },

        { title: 'Harry Potter and the Sorcerer\'s Stone', 
        author: 'J.K. Rowling',
         year: 1997 }
    
]

function func1(booksobj, callfnc){
    let titlearr = [] ;
booksobj.map((element)=> {
   titlearr.push(element.title)
}
) 
return callfnc(titlearr);
}

function func2(unorderarr){
 return console.log(unorderarr.sort());
}

func1(listOfObj , func2)