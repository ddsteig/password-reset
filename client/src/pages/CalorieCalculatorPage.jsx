import React from 'react';
import "./caloriecalculator/calcalc"

function CalorieCalculator() {
    return (
        <React.Fragment>
            <section>
                <h4 class="black-text">Lets Get Started by Entering in the Following Information:</h4>
                {/* <!-- Gender Box --> */}
                <div class="input-field col s12">
                    <select id="select">
                        <option value="" disabled selected>Choose your option</option>
                        <option id="male" value="male">Male</option>
                        <option id="female" value="female">Female</option>
                    </select>
                    <label>Gender</label>
                </div>
                {/* <!-- Age Box --> */}
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="123" type="text" class="validate" pattern="number" name="age" id="age" />
                                <label for="age">Age</label>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- Height Box --> */}
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="5ft = 60 inches" type="text" class="validate" pattern="number" name="height" id="height" />
                                <label for="age">Height in Inches</label>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- Weight Box --> */}
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="123" type="text" class="validate" pattern="number" name="weight"
                                    id="weight" />
                                <label for="age">Weight in Pounds</label>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- Activity Box --> */}
                <div class="input-field col s12">
                    <select id="af">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1.15">Sedentary: little or no exercise</option>
                        <option value="1.2">Light Activity: 1 to 3 hours of exercise or sports per week</option>
                        <option value="1.4">Moderate Activity: 4 to 6 hours of exercise or sports per week</option>
                        <option value="1.6">Very Active: 7 to 9 hours of exercise or sports per week</option>
                        <option value="1.8">Extra Active: 10+ hours of exercise or sports per week</option>
                    </select>
                    <label name="af">Activity Factor</label>
                </div>
            </section>
            {/* <!-- Goal Buttons --> */}

            <br />
            <section class="container-dos">
                <h4 class="black-text">What is your goal?</h4>
                <div class="btns" id="goal-buttons">
                    <a id="loss-button" class="waves-effect waves-light btn-large"><i
                        class="material-icons left">trending_down</i>Weight Loss</a>
                    <a id="maintain-button" class="waves-effect waves-light btn-large">Maintain Current Weight</a>
                    <a id="gain-button" class="waves-effect waves-light btn-large"><i
                        class="material-icons right">trending_up</i>Weight Gain</a>
                </div>
                <br />
                <hr />
                <div class="input-box">
                    <div class="btns">
                        <form>
                            <div class="callout success">
                                <h4 class="black-text">This is your calorie needs based on the goal you selected:</h4>
                                <h3 class="black-text" name="mifflin" id="mifflin"></h3>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CalorieCalculator()