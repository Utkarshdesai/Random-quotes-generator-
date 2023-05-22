 //fetch html data
 const newquoetbutt = document.querySelector('.newquoet');
 const twittershare =document.querySelector('.sharequote');
 const authorname =document.querySelector('.author-name');
 const quoet =document.querySelector('.quoet-content');
 const twitter = document.querySelector('.twitt')

//set dafault values
let result="";
let gettext='';
let getauthor='';

const newquoet = () => {
  const rannum = Math.floor(Math.random()*1643);   //get random numbers 
  let gettext = (result[rannum].text);                //get quoet
  let getauthor = (result[rannum].author);           //get author 
 
  quoet.textContent = gettext;                   //display quoet  on screen
  authorname.textContent = `${getauthor}`;        //display author on screen 
  (getauthor === null) ? (authorname.textContent= "unknown" ) : (authorname.textContent = `${getauthor}`)   //if author is null then set it to unknown 

}

 //share quote on twitter
  function sharetwitt ()     
  {
    const url = `https://twitter.com/intent/tweet?text= ${gettext}`;
     window.open(url);
  }

//api calls 
  async function quoetgenrator () 
 { 

   try {
    const getquoet = await fetch ("https://type.fit/api/quotes");
     result =  await getquoet.json();
     newquoet();


     } 
catch (error)
    {
    
     }
    
      } 

      //event Listener 
    newquoetbutt.addEventListener("click" , quoetgenrator);
    twitter.addEventListener("click" , sharetwitt)


 


 
 
 
 


