import {React,Component} from 'react';
import SwapiService from "../../services/swapi-service";
import './app.css'

export default class App extends Component {

    state = {
      term:'',
      peopleList: [],
      list:[]

  }

    swapiService = new SwapiService();


    componentDidMount() {
        this.swapiService
            .getPersons()
            .then((peopleList) => {
                const nameList = peopleList.results;
                this.setState({peopleList:nameList})
                console.log(this.state)
            })
    }

    findPeople = (e) => {
    const term = e.target.value;
    const output = this.state.peopleList.filter((person)=> person.name.toLowerCase().match(e.target.value));

    this.setState({term:term,list:output})
    }

render() {

     const persons = this.state.list.map((person)=>{
         if(this.state.term ===''){
             return ''
         }

         return <li key = {person.url}>{person.name} <ul>

         <li>Масса: {person.mass}</li>
        <li>Рост: {person.height}</li>
        <li>Пол: {person.gender}</li>
        <li> День рождения: {person.birth_year}</li>
        <li> Цвет кожи: {person.skin_color}</li>
         </ul>
        </li>
     });

    return (
            <div className='wrapper'>
               <div className='find'>
                <p ><h3>Поиск персонажей Вселенной StarWars</h3></p>
                <form>
                    <input type="text"
                     value = {this.state.term}
                     placeholder='Введите имя'
                    onChange = {this.findPeople}
                    />

                </form>
               </div>
          <div className='result'>
            <ul> <h3>Найденные персонажи</h3>
                {persons}

            </ul>
          </div>
            </div>
        )
    }


}




