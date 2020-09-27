import React from 'react';
import Builder from './builder';
import CustomButton from './Components/custom-button/custom-button.component';
import './App.css';
function App(){
    return(
        <div className="App">
            <Builder/>
            <div className="button-area">
                <CustomButton buttonStyle="btn--primary--outline" buttonSize="btn--larger">
                    Save Me 
                </CustomButton>
            </div>
        </div>
    );

}
export default App;