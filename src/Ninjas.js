import React  from 'react';


    const Ninjas = ({ninjas}) => {    // we have ninjas of the props so we are destructuring directly inside the brackets where we receive the props
        const ninjaList = ninjas.map (ninja => {
           // const {ninjas} = props;
           if(ninja.age > 20) {
                return (
                    <div className="ninja" key={ninja.id}>
                    <div>{ninja.name}</div>
                    <div>{ninja.age}</div>
                    <div>{ninja.belt}</div>
                    
                    </div>
                )
           } else {
               return null
           }
        })
    
    
        // //console.log(this.props);
        // const ninjaList = ninjas.map(ninja => { //  another way to write conditional statement in react same as above
        //     return ninja.age > 20 ? (
        //          <div className="ninja" key={ninja.id}>
        //            <div>{ninja.name}</div>
        //            <div>{ninja.age}</div>
        //            <div>{ninja.belt}</div>
                    
        //          </div>
        //     ) : null;
        // })
        return(
            <div className="ninja-list" >
                { ninjaList }
            </div>
        )
    }



export default Ninjas;