import React from "react";

interface ProgressBarStepProps {
  completed: boolean;
  active: boolean;
}

const ProgressBarStep: React.FC<ProgressBarStepProps> = ({ completed, active }) => {
  const circleSize = active ? "w-8 h-8" : "w-6 h-6";
  const circleColor = completed ? "bg-green-500" : "bg-gray-300";

  return (
    <div className={`flex items-center justify-center ${circleSize} rounded-full border-2 border-gray-300 ${circleColor} text-white font-bold`}>
      {completed ? "✓" : ""}
    </div>
  );
};

interface ProgressBarProps {
  steps: number[];
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <ProgressBarStep completed={index < currentStep} active={index === currentStep} />
          {index !== steps.length - 1 && <div className="flex-1 h-1 bg-gray-300"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

const Register: React.FC = () => {
  return (
    <div className="mt-8 mx-auto max-w-lg">
      <ProgressBar steps={[1, 2, 3, 4]} currentStep={2} />
    </div>
  );
};

export default Register;