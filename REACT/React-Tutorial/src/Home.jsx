import { useState } from 'react';
import myStyle from './style.module.css'

function Home({data}) {
    const [userInput,setUserInput] = useState("")
    console.log(data);

    const showAlert = () => {
        alert("You have Submitted form Successfully")
    }
    const alertData = (data) => {
        alert(`Data is : '${data}'`)
    }
    const showInputData = (e) => {
        console.log(e.target.value);
        setUserInput(e.target.value)
    }
    return (
        <div>
            <h1 style={{ fontSize: '70px', color: 'blue' }}>REACT Toutorial</h1>
            <h3>{data}</h3>
            <img width={'50%'} src="https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png" alt="react" />
            <p className={myStyle.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore provident neque aperiam consequuntur totam! Tempora nemo a dolor alias nisi laborum quia. Doloremque quo magnam eum ad sint nulla. Itaque!
                Eligendi, dolorem nulla? Architecto illo incidunt accusantium cum et provident facere recusandae laudantium labore fuga fugiat, voluptate quasi eum atque perspiciatis error id ipsa. Eum nam magni velit magnam architecto.
                Possimus minima consequatur, quos debitis corporis facere expedita ullam temporibus illo quia eveniet odio! Quia accusamus porro, quaerat ducimus eos saepe nobis dolores facere impedit atque deserunt repellat consequatur magnam.
                Ex odio sint laborum debitis explicabo aliquid obcaecati dolorem vel ad quod deleniti voluptatum ducimus ipsam veniam dolorum amet et enim, neque doloribus aut cumque odit dolor nemo. Veniam, harum!
                Quos qui molestias pariatur! Fugiat laboriosam, ipsam facilis pariatur neque accusamus illo? Inventore obcaecati explicabo eaque amet ea eos, adipisci neque dolore harum magnam corporis consectetur laudantium sunt laborum animi!</p>
            <button onClick={showAlert} id={myStyle.submitBtn}>Submit</button>
            <button onClick={() => alertData("Button Clicked")} className='btn btn-primary '>Alert Button</button>
            <div className=''>
                <input type="text" onChange={e => showInputData(e)} placeholder='Input Your Name' className='form-control' />
                <h1>Name : <span >{userInput}</span></h1>
            </div>
        </div>
    )
}
export default Home