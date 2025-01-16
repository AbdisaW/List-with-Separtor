import {people} from './data.js'
import { getImageUrl } from './utils.js'
// Logical and Operator

// function Item({name, isPacked}){
//     return(
//         <li className="item">
//             {name}{isPacked && '✅'}
//         </li>
//     );
// }

// export default function TodoList(){
//     return(
//       <section>
//          <h1>Sally Ride's Packing List</h1>
//         <ul>
//             <Item isPacked={true} name="titri"/>
//             <Item isPacked={true} name="firi"/>
//             <Item isPacked={false} name="xixri"/>
//         </ul>
//       </section>
//     )
// }

// if/ else coditoions

// function Item({name, isPacked}){
//   if(isPacked){
//     return <li className="item">{name}  ✅</li>
//   }
//   return <li className="item">{name}</li>
// }

// export default function TodoList(){
//     return(
//         <section>
//             <h1>this is to do list</h1>
//             <ul>
//                 <Item isPacked={true} name= "laern car"/>
//                 <Item isPacked={false} name= "laern code"/>
//                 <Item isPacked={true} name= "laern elaren"/>

//             </ul>
//         </section>

//     );
// }

// Conditionally returning nothing with null

// function Item({name, isPacked}){
//     if(isPacked){
//         return null;
//     }
//     return <li className="item">{name}</li>
// }


// export default function TodoList(){
//     return(
//         <section>
//             <h1>To Do List</h1>
//             <ul>
//                 <Item isPacked={true} name="foucs on your self"/>
//                 <Item isPacked={false} name="foucs on u"/>
//                 <Item isPacked={true} name="foucs on "/>
//                 <Item isPacked={false} name="foucs "/>

//             </ul>
//         </section>
//     )
// }



// ternary conditionaly

// function Item({name, isPacked}){
//     return( 
//       <li>{isPacked ?
//         (<del> name +' ✅'
//         </del>) : (name)}
//       </li>
//     )
// } 
// export default function PackedList(){
//     return(
//         <section>
//             <h1>This is packed order</h1>
//             <ul>
//               <Item isPacked={true} name= "cameras photo"/>
//               <Item isPacked={false} name= "do somthing to do "/>
//               <Item isPacked={true} name= "game of game"/>
//               <Item isPacked={false} name= "to list game"/>
             
//             </ul>
            
//         </section> 
//     ) 
// }


// function Drink({ name }) {

//   let part, caffeine,age ;

//   if(name === 'tea'){
//     part = 'leaf'
//     caffeine ='15–70 mg/cup'
//     age ='4,000+ years'
//   }else if(name === 'coffee'){
//     part ='bean'
//     caffeine = '80–185 mg/cup'
//     age ='1,000+ years'
//   }
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{part}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{caffeine}</dd>
//         <dt>Age</dt>
//         <dd>{age}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }


// const drinks = {
//   tea: {
//     part: 'leaf',
//     caffine: '15-70 mg/cup',
//     age: '4,000 + years'
//   },
//   coffee: {
//     part: 'bean',
//     caffine: '80-185 mg/cup',
//     age: '1,000 + years'
//   }
// };

// function Drink({ name }){
//   const info = drinks[name];
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{info.part}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{info.caffine}</dd>
//         <dt>Age</dt>
//         <dd>{info.age}</dd>
//       </dl>
//     </section>
//   )
// };

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }


// Rendering List

// const people =[
//   'Titinaw bizework: SoftWere Enginering',
//   'Abdisa Wake: fullstack developer',
//   'Abel Assefa: cloud DataBase',
//   'Abdi Elyais: front end devloper'
// ];

// export default function Profetional(){
//   const listProftinals = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listProftinals}</ul>
// }


// Filtering arrays of items 

export default function List(){
  // const chemists = people.filter(person =>
  //   person.profession  === 'chemist'

  // );

  const listItems = people.map(person =>
    <li key={person.id}>
      <img 
       src={getImageUrl(person)}
       alt={person.name}
      />

      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>

  );

  return <ul>{listItems}</ul>

}