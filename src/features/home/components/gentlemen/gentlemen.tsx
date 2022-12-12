import { useState } from 'react';
import { Gentleman } from '../../../../core/components/gentleman/gentleman';
import { Info } from '../info/info';
import { gentlemanData } from '../../../../core/models/gentlemen.models';

export function Gentlemen() {
    const [gentlmen, setGentlemen] = useState(gentlemanData);
   
    return (
        <>
            <Info></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlmen.map((gentleman) => {
                        if (gentleman.selected) {
                            return (
                                <Gentleman gentleman={gentleman}></Gentleman>
                            );
                        }
                        return null;
                    })}
                </ul>
            </main>
        </>
    );
}
