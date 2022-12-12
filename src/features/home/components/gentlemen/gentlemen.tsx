import { useState } from 'react';
import { Gentleman } from '../../../../core/components/gentleman/gentleman';
import { Info } from '../info/info';
import { gentlemanData } from '../../../../core/models/gentlemen.models';

export function Gentlemen() {
    const [gentlmen, setGentlemen] = useState(gentlemanData);
    const totalSelected = gentlmen.filter(
        (gentleman) => gentleman.selected
    ).length;
    const handleSelectAll = () => {
        const newGentlArray = gentlmen.map((gentleman) => {
            return {
                ...gentleman,
                selected: true,
            };
        });
        setGentlemen(newGentlArray);
    };
    const handleDelete = (gentleManId: number) => {
        const newGentlArray = gentlmen.filter(
            (gentleman) => gentleman.id !== gentleManId
        );
        setGentlemen(newGentlArray);
    };
    const handleSelect = (gentleManId: number) => {
        const newGentlArray = gentlmen.map((gentleman) => {
            if (gentleman.id === gentleManId) {
                return {
                    ...gentleman,
                    selected: !gentleman.selected,
                };
            }
            return gentleman;
        });
        setGentlemen(newGentlArray);
    };

    return (
        <>
            <Info
                totalSelected={totalSelected}
                handleSelectAll={handleSelectAll}
            ></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlmen.map((gentleman) => {
                        return (
                            <Gentleman
                                key={gentleman.id}
                                gentleman={gentleman}
                                handleDelete={handleDelete}
                                handleSelect={handleSelect}
                            ></Gentleman>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}
