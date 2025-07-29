// import { Component } from "react";

// import { Component } from "react";

// class ClassComp extends Component{
//     state={
//         message:"Welcome to ClassComp"
//     }

// render(){
//     return(<div>
//         <h1>{this.state.message}</h1>
//     </div>

//     )
// }
// }
// export default ClassComp;

// import { Component } from "react";
// class ClassComp extends Component{
// constructor(){
//     super();
//     this.state={
//         message:"Welcome to Class Component string binded"
//     }
// }
// render(){
//     return(<div><h2>{this.state.message}</h2>

//     </div>

//     );
// };
// }
//  export default ClassComp;


// Binding a Object
// class ClassComp extends Component{
//     state={
//         Bikes:{
//             Bname:"Fxz",
//             Bprice:"160000",
//             Bmilage:"45km",
//             year:"2022",
//             color:"Black",
//         },
//     }
//     render(){
//         return(<div>
//             <ul>
//                 <li>{this.state.Bikes.Bname}</li>
//                 <li>{this.state.Bikes.Bmilage}</li>
//                 <li>{this.state.Bikes.Bprice}</li>
//                 <li>{this.state.Bikes.color}</li>
//                 <li>{this.state.Bikes.year}</li>
//             </ul>
//         </div>)
//     }
// }
// export default ClassComp;

//binding a object using constuctor
// class ClassComp extends Component{
//     constructor(){
//         super();
//       this.state={
//             Car:{
//                 Carname:"swift",
//                 Carprice:"400000",
//                 milage:"25km",
//                 color:"Red",
//             }
//         }
//     }
//     render(){
//         return<div>
// <ul>
//     <li>{this.state.Car.Carname}</li>
//     <li>{this.state.Car.Carprice}</li>
//     <li>{this.state.Car.color}</li>
//     <li>{this.state.Car.milage}</li>
// </ul>
//         </div>
//     }
// }
// export default ClassComp;


import { Component } from "react";

class ClassComp extends Component {
    constructor() {
        super();
        this.state = {
            Bikes: [
                "FZ-X", "Crux", "RX-100", "Kawasaki Ninja H2R",
                "Ducati Superleggera V4",
                "Ducati Panigale V4 R",
                "BMW M 1000 RR",
                "Kawasaki Ninja H2",
                "Suzuki GSX-R1000R",
                "Honda CBR1000RR-R SP",
                "Aprilia RSV4 Factory"
            ]
        }
    }
    render(){
        return<div>
            <ul>
                {Object.values(this.state.Bikes).map((val,i)=>{return<li key={i}>{val}</li>})}
            </ul>
        </div>
    }
}
export default ClassComp;