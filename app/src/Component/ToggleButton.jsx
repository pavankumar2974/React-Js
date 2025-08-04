// import { Component } from "react";

import { Component } from "react";

// export default class ToggleButton extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isVisible: false,
//         };
//     }

//     toggleParagraph = () => {
//         this.setState({ isVisible: !this.state.isVisible });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.toggleParagraph}>
//                     {/* {this.state.isVisible === true ? "show" : "Hide"} - Paragraph */}
//                     {this.state.isVisible ? "Show" : "Hide"} Paragraph
//                 </button>
//                 {this.state.isVisible && <p>Welcome to Paragraph !!</p>}
//             </div>
//         );
//     }
// }



export default class ToggleButton extends Component{
    constructor(props){
        super(props);

        this.state={
            isvisible: false,
        };
    }
    toggleParagraph=()=>{
        this.setState({isvisible:this.state.isvisible});
    };

    render(){
        return(
            <div>
                <button onClick={this.toggleParagraph}>
                    {this.state.isvisible ?"show": "hide"} paragraph
                </button>
                {this.state.isvisible&&<p>Welcome tp paragraph</p>}
            </div>
        )
    }
}