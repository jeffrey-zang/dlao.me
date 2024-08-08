import donald0 from './donalds/donald0.png'
import donald1 from './donalds/donald1.png'
import donald2 from './donalds/donald2.png'
import donald3 from './donalds/donald3.png'
import donald4 from './donalds/donald4.png'
import donald5 from './donalds/donald5.png'
import donald6 from './donalds/donald6.png'
import donald7 from './donalds/donald7.png'
import donald8 from './donalds/donald8.png'
import donald9 from './donalds/donald9.png'
import donald10 from './donalds/donald10.png'
import donald11 from './donalds/donald11.png'
import donald12 from './donalds/donald12.png'
import donald13 from './donalds/donald13.png'
import donald14 from './donalds/donald14.png'
import donald15 from './donalds/donald15.png'
import donald16 from './donalds/donald16.png'
import donald17 from './donalds/donald17.png'
import donald18 from './donalds/donald18.png'
import donald19 from './donalds/donald19.png'
import donald20 from './donalds/donald20.png'
import donald21 from './donalds/donald21.png'
import donald22 from './donalds/donald22.png'
import donald23 from './donalds/donald23.png'
import donald24 from './donalds/donald24.png'
import donald25 from './donalds/donald25.png'
import donald26 from './donalds/donald26.png'
import donald27 from './donalds/donald27.png'
import donald28 from './donalds/donald28.png'
import donald29 from './donalds/donald29.png'
import donald30 from './donalds/donald30.png'
import donald31 from './donalds/donald31.png'
import donald32 from './donalds/donald32.png'
import donald33 from './donalds/donald33.png'
import donald34 from './donalds/donald34.png'
import donald35 from './donalds/donald35.png'
import donald36 from './donalds/donald36.png'
import donald37 from './donalds/donald37.png'
import donald38 from './donalds/donald38.png'
import donald39 from './donalds/donald39.png'
import donald40 from './donalds/donald40.png'
import donald41 from './donalds/donald41.png'
import donald42 from './donalds/donald42.png'
import donald43 from './donalds/donald43.png'
import donald44 from './donalds/donald44.png'
import donald45 from './donalds/donald45.png'
// import donald46 from './donalds/donald46.png'
// import donald47 from './donalds/donald47.png'
// import donald48 from './donalds/donald48.png'

let donalds = [
  donald0,
  donald1,
  donald2,
  donald3,
  donald4,
  donald5,
  donald6,
  donald7,
  donald8,
  donald9,
  donald10,
  donald11,
  donald12,
  donald13,
  donald14,
  donald15,
  donald16,
  donald17,
  donald18,
  donald19,
  donald20,
  donald21,
  donald22,
  donald23,
  donald24,
  donald25,
  donald26,
  donald27,
  donald28,
  donald29,
  donald30,
  donald31,
  donald32,
  donald33,
  donald34,
  donald35,
  donald36,
  donald37,
  donald38,
  donald39,
  donald40,
  donald41,
  donald42,
  donald43,
  donald44,
  donald45,
  // donald46,
  // donald47,
  // donald48
]

const App = () => {

  donalds = donalds.sort(() => Math.random() - 0.5)

  return (
    <div>
      <h1>D. Lao's Personal Website</h1>
      <h1>Programmer, pianist, pmongus</h1>
      <h1>joe</h1>
      {
        donalds.map((donald, index) => (
          <img key={index} src={donald} style={{  width: "200px", height: "200px" }}/>
        ))
      }
    </div>
  )
}

export default App