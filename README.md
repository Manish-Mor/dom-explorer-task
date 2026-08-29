<!-- Parsing -->
what is parsing 
  Parshing is a process of reading the HTML structure and understand the code.
  
       
 Parsing = Browser can converts the HTML in the structured file which help the browser to understand code sturcture to display output.
  
  how works?
  <h1> "hello browser"</h1> =>
  <
   h1
      >
       hello browser
                     <
                      /
                       h1 
                          >

---------------------------------------------------------------------------------------------------

<!-- Tokenization -->
what is tokenization?
   
   Tokenization is a breaking of HTML into small understand pieces of TOKENS(text).
   <h1>"Hello"</h1>
     starting tag token : <h1>
     text token : Hello
     end tag token : </h1>



----------------------------------------------------------------------------------------------------

<!-- DOM Tree -->
what is DOM
  DOM => Document Object Model
  DOM help us to manulate in the HTML code.
   
 DOM Tree
 DOM tree is a convert the HTML code in the Tree like structure which help the browser to understand which element comes where.
     <html>
         <body>
             <h1>Hello</h1>
             <p>World</p>
         </body>
      </html>
     DOM tree structure
     Document --
                |
                 -> html  --
                           |
                            -> body  --
                                       |
                                       | -->  h1 --
                                       |            |
                                       |             --> Hello
                                       | --> p --
                                                 |
                                                  --> World

<!-- CSSOM Tree  -->
 what is CSSOM?
      CSSOM is similer like the HTML but this is for CSS
      CSSOM =>  CSS Object Model
      body {
              background: black;
              }

      h1 {
               color: white;
              } 

      CSSOM Tree
           Body --
                  |
                   -->background:black    
           h1 --
                  |
                   --> color: blue



<!-- Render Tree -->
 what is the Render Tree
  render tree is a final result of the HTML + CSS (DOM + CSSOM)
   DOM + CSSOM = Render Tree





