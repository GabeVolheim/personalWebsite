import React from "react";
import clogo from "../img/c_logo_transparent.png";
import cpplogo from "../img/c++_logo_transparent.png";
import reactlogo from "../img/react_logo_transparent.png";
import nodelogo from "../img/node_logo_transparent.png";
import gitlogo from "../img/git_logo_transparent.png";
import tailwindlogo from "../img/tailwind_transparent_logo.png";
import muilogo from "../img/mui_logo_transparent.png";
import sqllogo from "../img/mysql_transparent_logo.png";
import javalogo from "../img/java_transparent_logo.png";
import pythonlogo from "../img/python_transparent_logo.png";
import awslogo from "../img/aws_transparent_logo.png";
import linuxlogo from "../img/linux_transparent_logo.png";
import jslogo from "../img/js_logo_transparent.png";
import tslogo from "../img/ts_logo_transparent.png";

const Technologies = () => {
    return(
        <div className="border-y-2 border-slate-500">
            
        <div className="text-white font-bebas m-64">
            
            <div className="grid text-center">
                <h1 className="text-6xl">Tech That Feels Like Home</h1>
                <h2 className="text-2xl text-gray-500 mt-4">Technologies I prefer</h2>
            </div>
            <div className="flex justify-evenly columns-4 gap-2 mt-16">
                <div className="grid text-center gap-1">
                    <img src={clogo} alt="c logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">C</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={cpplogo} alt="cpp logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">C++</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={reactlogo} alt="react logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">React</h6>
                </div>
                <div className="grid text-center gap-2">
                    <img src={nodelogo} alt="node logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Node JS</h6>
                </div>
            </div>
            <div className="flex justify-evenly columns-4 gap-2 mt-8">
                <div className="grid text-center gap-1">
                    <img src={gitlogo} alt="git logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Git</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={tailwindlogo} alt="tailwind logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Tailwind</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={muilogo} alt="mui logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Material UI</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={sqllogo} alt="mysql logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">MySQL</h6>
                </div>
            </div>
            <div className="grid text-center mt-16">
                <h2 className="text-2xl text-gray-500">Other Technologies</h2>
            </div>
            <div className="flex justify-evenly columns-4 gap-2 mt-16">
                <div className="grid text-center gap-1">
                    <img src={javalogo} alt="java logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Java</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={pythonlogo} alt="python logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Python</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={awslogo} alt="aws logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">AWS</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={linuxlogo} alt="linux logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Linux</h6>
                </div>
            </div>
            <div className="flex justify-center items-center columns-4 gap-40 mt-8">
                <div className="grid text-center gap-1">
                    <img src={jslogo} alt="javascript logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Javascript</h6>
                </div>
                <div className="grid text-center gap-1">
                    <img src={tslogo} alt="typescript logo" className="h-32 w-32 object-contain"/>
                    <h6 className="text-lg text-gray-500">Typescript</h6>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Technologies;