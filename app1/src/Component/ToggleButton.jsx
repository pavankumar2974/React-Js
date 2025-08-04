// import { Component } from "react";


// export default class ToggleButton extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isvisble:true,
//         }
//     }
//     toggleParagraph=()=>{
//         this.setState({isvisble:this.state.isvisble});
//     };

//     render(){
//         return(
//             <div>
//                 <button onClick={this.toggleParagraph}>
//                     change 
//                     {this.state.isvisble === true ? "show" : "Hide"} - Paragraph
//                     {this.state.isvisble && <p>Welcome to Paragraph !!</p>}
//                 </button>
//             </div>
//         )
//     }
// }

import { Component } from "react";

export default class ToggleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true,
        };
    }

    toggleParagraph = () => {
        this.setState({ isVisible: !this.state.isVisible });
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleParagraph}>
                    {/* {this.state.isVisible === true ? "show" : "Hide"} - Paragraph
                    {this.state.isVisible ? "Show" : "Hide"} Paragraph */}
                </button>
                {this.state.isVisible && <p>Welcome to Paragraph !!</p>}
            </div>
        );
    }
}
