// import React from 'react';
// import WeatherCard from './WeatherCard';
//
// export default class WeatherSection extends React.Component {
//
//   const WeatherSection = (props) => {
//     let { weather } = props
//     if(!weather){
//       return(
//         <div>please enter a city</div>
//     )} else {
//     return(
//       <div className="WeatherCard">
//         { weather.map((card) => <div key={card.date}>
//           {/* <WeatherCard {...card}/> */}
//           <li>high: {card.temp.high}</li>
//           <li>low: {card.temp.low}</li>
//         </div>
//         )}
//       </div>
//     )}
//    }
//
//   render() {
//     return (
//       <section>
//         <article>
//           { WeatherCards }
//         </article>
//       </section>
//     );
//   }
// }
