import React, {useState} from "react";
import RecipeChoices from "./RecipeChoices";
import './BaristaForm.css'
import drinksJson from '../drinks.json'

const BaristaForm = () => {

    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
      }

      const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }
        if (trueRecipe.syrup != inputs['syrup']){
            setCheckedSyrup('wrong');
        }
        else {
            setCheckedSyrup("correct");
        }
        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }
        if (trueRecipe.blended != inputs['blended']){
            setCheckedBlended('wrong');
        }
        else {
            setCheckedBlended("correct");
        }
    };
    const onNewDrink = () => {
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
    };

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form>
            </form>
            <div className="button-container">
                <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
                <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>New Drink</button>
            </div>
            <h3>Temperature</h3>
            <div className="answer-space">
                {inputs['temperature']}
            </div>
            <RecipeChoices handleChange={(e) => setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}))}
            label='temperature' 
            choices={ingredients["temperature"]}
            checked={ingredients["temperature"]}
            />
            <h3>Syrup</h3>
            <div className="answer-space">
                {inputs['syrup']}
            </div>
            <RecipeChoices handleChange={(e) => setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}))}
            label='syrup' 
            choices={ingredients["syrup"]}
            checked={ingredients["syrup"]}
            />

            <h3>Milk</h3>
            <div className="answer-space">
                {inputs['milk']}
            </div>
            <RecipeChoices handleChange={(e) => setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}))}
            label='milk' 
            choices={ingredients["milk"]}
            checked={ingredients["milk"]}
            />

            <h3>Blended</h3>
            <div className="answer-space">
                {inputs['blended']}
            </div>
            <RecipeChoices handleChange={(e) => setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}))}
            label='blended'
            choices={ingredients["blended"]}
            checked={ingredients["blended"]}
            />
        </div>
    );
};

export default BaristaForm;