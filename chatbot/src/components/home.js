import SideMenu from "./sidebar";
import Chat from "./chat"
import Side2 from "./side2";
function Home (){
    return (
     <div>
         <div className = 'Menu'>
            <SideMenu/>
         </div>
         <div className="Chat">
            <Chat/>
         </div>
         <div className="right">
            <Side2/>
         </div>
     </div>
    );
}
export default Home;