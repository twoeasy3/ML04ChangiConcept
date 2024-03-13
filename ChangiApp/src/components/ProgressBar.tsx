
import React from 'react';


interface ProgressBarSectionProps{
    completed: boolean;
    active: boolean;
    isFirst: boolean;
    name: string;
}

const ProgressBarSection: React.FC<ProgressBarSectionProps> = ({completed,active,isFirst,name}) => {
    const circleSize = active ? "w-8 h-8 border-green-500 border-2" : "w-6 h-6";
    const circleColour = completed ? "bg-green-500" : "bg-gray-300";
    const barColour = isFirst ? "" : completed ? "flex-1 h-1 bg-green-500" : active ? "flex-1 h-1 bg-green-500" : "flex-1 h-1 bg-gray-300"

    return(
    
    <div className = {`PROGRESSBARSECTION ${name} justify-end flex-1 flex flex-row items-center`}> 
        <div className ={`BARLINE ${barColour}`}></div>    
            <div className={`flex items-center justify-center ${circleSize} rounded-full border-2 border-gray-300 ${circleColour} text-white font-bold`}>
            {completed ? "✓" : ""}
        </div>    
    </div>    

    );

};

interface ProgressBarProps{
    currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({currentStep}) => {
    const stepNames = ["On Plane", "Deplaned", "Sorting", "Security", "Final Mile", "Claim"];
    const steps = [0,1,2,3,4,5] ;

    return(
        <div className = "PROGRESSBARPARENT mb-5 justify-between flex w-11/12">
            {steps.map((index)=>(
                <React.Fragment key={index}>
                    <ProgressBarSection completed = {index < currentStep+1} active = {index === currentStep+1} isFirst = {index === 0} name = {stepNames[index]}></ProgressBarSection>
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressBar;