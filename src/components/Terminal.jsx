// ########## THIS COMPONENTS IS CALLED IN THE "Hero.jsx" FILE ##########
import React, { useEffect, useState, useRef } from 'react';

import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { SiGmail } from 'react-icons/si';

const Terminal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const terminalRef = useRef(null);

  // Define the sequence of Terminal interactions
  const steps = [
    {
      prompt: 'fawwaz:~$ ',
      command: 'ls',
      output: ['Desktop\t\tDocuments', 'Downloads\tMusic', 'Pictures\tVideos'],
      type: true
    },
    {
      prompt: 'fawwaz:~$ ',
      command: 'cd Documents',
      output: [],
      type: true
    },
    {
      prompt: 'fawwaz:~/Documents$ ',
      command: 'ls',
      output: ['about-me.txt'],
      type: true
    },
    {
      prompt: 'fawwaz:~/Documents$ ',
      command: 'cat about-me.txt',
      output: [
        'Hello 👋',
        '\nFawwaz is an Information Engineering student at Universitas Gadjah Mada with a strong foundation in Computer Vision, Data Engineering, IoT, Cybersecurity, and Software Engineering 👾',
        '\nHe has diverse hands-on experience, from front-end development to creating Capture The Flag problems. Currently, Fawwaz works as a Vision and Control Programmer at GAMAFORCE, a UAV-focused research group, specializing in Computer Vision and AI for their Ground Control Station team 🛩️',
        '\nDo know me better from:'
      ],
      type: true,
      showSocialLinks: true
    }
  ];

  // Auto-scroll to bottom when content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [currentStep, currentText]);

  // Type animation effect
  useEffect(() => {
    if (currentStep >= steps.length) return;

    const step = steps[currentStep];
    if (step.type && currentText.length < step.command.length) {
      const timeout = setTimeout(() => {
        setCurrentText(step.command.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (currentText === step.command) {
      const timeout = setTimeout(() => {
        setCurrentStep(curr => curr + 1);
        setCurrentText('');
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, currentText]);

  return (
    <div className="w-full">
      <div className="overflow-hidden bg-gray-900 rounded-lg shadow-lg font-jetbrainsBold font-jetbrains ">
        {/* Terminal Header */}
        <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center">
            {/* Buttons */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            {/* Terminal Title */}
            <div className="container mx-auto -ml-4 text-center">
              <h3 className="text-sm text-gray-100 font-jetbrainsBlack">Terminal</h3>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="p-4 overflow-y-auto text-sm text-gray-100 h-96 font-jetbrains scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-700"
        >
          <div className="flex flex-col items-start whitespace-pre-wrap text-start">
            {steps.slice(0, currentStep).map((step, index) => (
              <div key={index} className="mb-2">
                <span className="text-green-400">{step.prompt}</span>
                <span className="text-white">{step.command}</span>
                {step.output.map((line, i) => (
                  <div key={i} className={`ml-1 ${(index === 0 ? 'text-blue-600' : 'text-gray-300')}`}>{line}</div>
                ))}

                {/* Render social links conditionally */}
                {step.showSocialLinks && (
                  <div className="flex flex-col items-start mt-2 ml-2">
                    <a href="https://www.linkedin.com/in/sfawwazak/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                      <FaLinkedin className="inline-block mr-1" /> LinkedIn
                    </a>
                    <a href="https://github.com/fawwazak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                      <FaGithub className="inline-block mr-1" /> GitHub
                    </a>
                    <a href="https://instagram.com/sfawwazak" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-800">
                      <FaInstagram className="inline-block mr-1" /> Instagram
                    </a>

                    {/* Add other social media links here */}
                  </div>
                )}
              </div>
            ))}

            {/* Current Step */}
            {currentStep < steps.length && (
              <div>
                <span className="text-green-400">{steps[currentStep].prompt}</span>
                <span className="text-white">{currentText}</span>
                <span className="animate-pulse">▊</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
