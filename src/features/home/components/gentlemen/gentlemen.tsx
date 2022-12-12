import { useState } from 'react';
import { Gentleman } from '../../../../core/components/gentleman/gentleman';
import { Info } from '../info/info';
import {gentlemanData} from '../../../../core/models/gentlemen.models';

export function Gentlemen() {
    const [gentlmen,setGentlemen] = useState(gentlemanData);
    console.log(gentlmen)
    return (
        <>
            <Info></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlmen.map((gentleman) => {
                        return (
                            <Gentleman
                                gentleman={gentleman}
                            ></Gentleman>
                        );
                    })
                    }
                    
                </ul>
            </main>
        </>
    );
}
