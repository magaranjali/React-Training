import React from 'react'

const LetCinstVar = () => {
    
  return (
    <div>
        <h1 className='text-4x1 text-center underline text-blue-400 bg-slate-300! py-5 font-bold hover:text-5xl md:text-3xl'>Let/Const/Var
        </h1> 
        <div className='lg:grid lg:grid-cols-3'>
            <div>
                <h2>LET</h2>
                <ul>
                    <li>defines variable</li>
                    <li>value can be changed</li>
                    <li>block scoped</li>
                    <li>cannot be redeclared</li>
                </ul>
            </div>
            <div>
                <h2>CONST</h2>
                <ul>
                    <li>defines constant</li>
                    <li>value cannot be changed</li>
                    <li>block scoped</li>
                    <li>cannot be redeclared</li>
                </ul>
            </div>
            <div>
                <h2>VAR</h2>
                <ul>
                    <li>defines variable</li>
                    <li>value can be changed</li>
                    <li>global scoped</li>
                    <li>can be redeclared</li>
                </ul>
            </div>
        </div>
        </div>
  )
}

export default LetCinstVar