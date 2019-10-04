import React  from 'react';


    const Ninjas = ({ninjas}) => {    // we have ninjas of the props so we are destructuring directly inside the brackets where we receive the props
        const ninjaList = ninjas.map (ninja => {
           // const {ninjas} = props;
            return (
                <div className="ninja" key={ninja.id}>
                 <div>{ninja.name}</div>
                 <div>{ninja.age}</div>
                 <div>{ninja.belt}</div>
                 
                </div>
            )
        })
    
        //console.log(this.props);
        return(
            <div className="ninja-list" >
                { ninjaList }
            </div>
        )
    }



export default Ninjas;