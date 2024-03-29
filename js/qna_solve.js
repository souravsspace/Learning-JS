// ! creating table

let details = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];

const generateTableHead = (table, data)=>{
      let tHead = table.createTHead()
      let row = tHead.insertRow()
      
      for(let key of data){
          let th = document.createElement("th")
          let text = document.createTextNode(key)

          th.appendChild(text);
          row.appendChild(th)
      }
};


const generateTable = (table, data)=>{
      for(let element of data){
          let row = table.insertRow()
          for(key in element){
            let cell = row.insertCell()
            let text = document.createTextNode(element[key])
            cell.appendChild(text)
          }
      }
}

let table = document.querySelector("table")
let data = Object.keys(details[0])

generateTableHead(table, data)











