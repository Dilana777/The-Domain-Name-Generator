 let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
let domi="";



for(let i=0;i<pronoun.length;i++){
   domi=pronoun[i];
      for(let j=0;j<adj.length;j++ ){
          domi=pronoun[i]+adj[j];
          for(let t=0;t<adj.length;t++){
              domi=pronoun[i]+adj[j]+noun[t]
             
              for(let p=0;p<dom.length;p++){
              domi=pronoun[i]+adj[j]+noun[t]+dom[p]
              console.log(domi);
          }
          }
      }

}
     
