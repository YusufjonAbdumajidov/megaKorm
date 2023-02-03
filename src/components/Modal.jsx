import React from 'react';
import modalExit from '../assets/modalExit.png';

const Modal = ( {openModal, setOpenModal} ) => {
  return (
    <div className='modal'>
       <div className="calender">
        <img onClick={() => setOpenModal(() => false)} className='exitModalBtn' src={modalExit} alt="" />
        <header>
           <table >
            
            <tr className='firstRow'>
                <th>показатели <br/> питательности</th>
                <th>ед. <br/> изм.</th>
                <th>преста <br/> рт <br/> 0-7 дней</th>
                <th>старт <br/> 0-14 <br/> дней</th>
                <th>рост <br/> 15-28 <br/> дней</th>
                <th>финиш <br/> 29-24 <br/> дня</th>
                <th>финиш <br/> 29-42 <br/> дня с <br/> краси- <br/> телем</th>
            </tr>
            
            <tr>
                <td>обменная энерния</td>
                <td>ккал</td>
                <td>297</td>
                <td>300</td>
                <td>308</td>
                <td>318</td>
                <td>318</td>
           </tr>
           <tr>
                <td>сырой протеин + фитаза</td>
                <td>%</td>
                <td>23,70</td>
                <td>23,50</td>
                <td>21,00</td>
                <td>18.50</td>
                <td>18.50</td>
           </tr>
           <tr>
                <td>сырой жир</td>
                <td>%</td>
                <td>5,70</td>
                <td>4,93</td>
                <td>5,68</td>
                <td>8.00</td>
                <td>8.00</td>
           </tr>

           <tr>
                <td>сырой жир</td>
                <td>%</td>
                <td>5,70</td>
                <td>4,93</td>
                <td>5,68</td>
                <td>8.00</td>
                <td>8.00</td>
           </tr>

           <tr>
                <td>сырая клетчатка</td>
                <td>%</td>
                <td>3,18</td>
                <td>3,20</td>
                <td>4,18</td>
                <td>4.56</td>
                <td>8.56</td>
           </tr>

           <tr>
                <td>лизин</td>
                <td>%</td>
                <td>1,45</td>
                <td>1,32</td>
                <td>1,23</td>
                <td>1.56</td>
                <td>1.07</td>
           </tr>

           <tr>
                <td>метионин</td>
                <td>%</td>
                <td>1,45</td>
                <td>1,32</td>
                <td>1,23</td>
                <td>1.56</td>
                <td>1.07</td>
           </tr>
           <tr>
                <td>метионин + цистин</td>
                <td>%</td>
                <td>1,07</td>
                <td>0,98</td>
                <td>1,23</td>
                <td>1.56</td>
                <td>1.07</td>
           </tr>

           <tr>
                <td>треонин</td>
                <td>%</td>
                <td>0,55</td>
                <td>0,38</td>
                <td>0,73</td>
                <td>0.96</td>
                <td>0.44</td>
           </tr>

           <tr>
                <td>триптофан</td>
                <td>%</td>
                <td>0,27</td>
                <td>0,32</td>
                <td>0,23</td>
                <td>0.56</td>
                <td>0.07</td>
           </tr>
            
           </table>
           
        </header>
       </div>
    </div>
  )
}

export default Modal
