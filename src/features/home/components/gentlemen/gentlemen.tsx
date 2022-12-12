import { useEffect, useState } from 'react';
import { Gentleman } from '../../../../core/components/gentleman/gentleman';
import { Info } from '../info/info';
import { gentlemanData } from '../../../../core/models/gentlemen.models';

export function Gentlemen() {
    const [gentlmen, setGentlemen] = useState(gentlemanData);
    const totalSelected = gentlmen.filter((gentleman) => gentleman.selected).length;
    const handleSelectAll = () => {
        const newGentlemen = gentlmen.map((gentleman) => {
            return {
                ...gentleman,
                selected: true,
            };
        });
        setGentlemen(newGentlemen);
    };
    // useEffect(() => {
    //     console.log('useEffect');
    // }, [gentlmen]);
    return (
        <>
            <Info  totalSelected ={totalSelected} handleSelectAll={handleSelectAll}></Info>
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
