import './sidebar.css';
import image from './icons/Vector.png';
import img from './icons/combine.png';
import img2 from './icons/msg.png';
import img3 from './icons/delete.png';
import image2 from './icons/Vector2.png';
import image3 from './icons/Group 6.png';
import img4 from './icons/Line.png';
import img5 from './icons/advanced.png';
import img6 from './icons/advanced2.png';
import img7 from './icons/ellipse.png';
function SideMenu() {
    return(
        <div className="AI-with-chat">
        <div className="div">
          <div className="overlap">
            <div className="rectangle" />
            <div className="rectangle-2" />
        <div className = 'side'>
        <div className ='new'>
            <div className='Icon'>
            <img src={image} alt="image" className="icon" />
            </div>
                <div className = 'txt'> New Business Question</div>
        </div> 
        <div className ='combine'>
           <div className='icon2'>
            <img src={img} alt="image" className="icon2" />
            </div>
                <div className = 'txt-2'> Combine  this Questions</div>
        </div> 
        <div className="txt-3">Today</div>
        <div className="txt-4">( Water energy )</div>
        <p className="p1">Combine the questions and get a global answer for all of them in the same time</p>
        <div className="selected">
        <div className='icon3'>
            <img src={img2} alt="image" className="icon3" />
            </div>
        <p className="txt-5">Can the water energy i...</p>
        <div className='icon4'>
            <img src={img3} alt="image" className="icon4" />
            </div>
        </div>
        <div className='chat2'> 
        <div className='icon5'>
            <img src={img2} alt="image" className="icon5" />
            </div>
        <p className="txt-6">Is the water energy can be sot imp</p>
        <div className='icon6'>
            <img src={img2} alt="image" className="icon6" />
            </div>
        <p className="txt-7">How the water energy can be also </p>
        </div>
          <div className="newq">
          <div className='icon1'>
            <img src={image2} alt="image" className="icon1" />
            </div>
              <div className="txt-8">New Question</div>
          </div>
          <div className="txt-9">Yesterday</div>
        <div className="txt-10">( Electric energy )</div>
        <div className='icon7'>
            <img src={image3} alt="image" className="icon7" />
            </div>
            <div className='chat3'> 
        <div className='icon8'>
            <img src={img2} alt="image" className="icon8" />
            </div>
        <p className="txt-11">Can the electric energy can sutbale</p>
        <div className='icon9'>
            <img src={img2} alt="image" className="icon9" />
            </div>
        <p className="txt-12">Is the water energy also with the wa </p>
        </div>
        <div > 
        <div className='line'>
            <img src={img4} alt="image" className="line" />
            </div>
            <div className='advanced'>
            <div className='logo'>
            <img src={img5} alt="image" className="logo" />
            </div>
            <div className='logo2'>
            <img src={img6} alt="image" className="logo2" />
            </div>
            <div className="txt-13"> Advanced functions </div>
            <div className='line2'>
            <img src={img4} alt="image" className="line2" />
            </div>
            <div className='ellipse'>
            <img src={img7} alt="image" className="ellipse" />
            </div>
            <div className="txt-14"> Jhon sato </div>
            
            </div>
            </div>
        </div>
        
        </div>
</div>
</div>

        
    );
    

     
}
export default SideMenu;