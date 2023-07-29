
let p = fetch("https://www.hko.gov.hk/en/abouthko/opendata_intro.htm");

p.then((response)=>{
  return response.json()
}).then((response)=>{
  console.log(response)
})


