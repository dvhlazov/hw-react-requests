import style from './Content.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
function Content() {
    const [elements, setElements] = useState([]);

    useEffect (() => {
        const getInfo = async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(data);
            setElements(data);
        }
            getInfo();
        }, []);

    
    return(
        <div className={style.content}>
            {elements.map(element => (
                <div className={style.items} key={element.id}>{element.id} - {element.name} - <span className={style.email}>{element.email}</span> </div>
            ))}
        </div>
    );
}
export default Content;