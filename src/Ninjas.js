import React  from 'react';


    const Ninjas = (props) => {    
        const{ninjas}=props;
        const ninjaList = ninjas.map (ninja => {
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