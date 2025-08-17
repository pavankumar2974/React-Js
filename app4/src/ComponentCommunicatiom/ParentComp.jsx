import ChildComp from "./ChildComp";


export default class ParentComp extends Component{
    constructor(){
        super();
        this.state={
            message:"I am a parent state called from child "
        }
    }
    render(){
        return(
            <div>
<ChildComp newmessage={this.state.message}/>
            </div>
        )
    }
}