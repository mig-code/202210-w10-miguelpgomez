import { GentlemanItem } from '../../types/gentleman.types';
import { Button } from '../button/buton';

export function Gentleman({
    gentleman,
    handleDelete,
    handleSelect,
}: {
    gentleman: GentlemanItem;
    handleDelete: (gentleManId: number) => void;
    handleSelect: (gentleManId: number) => void;
}) {
    const buttonDeleteClass =
        'icon gentleman__icon gentleman__icon--delete fas fa-times';
    const buttonSelectClass = gentleman.selected
        ? 'icon gentleman__icon fas fa-check gentleman__icon--selected'
        : 'icon gentleman__icon fas fa-check';

    return (
        <>
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={gentleman.picture}
                    alt={gentleman.alternativeText}
                />
                <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentleman.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentleman.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>{' '}
                        {gentleman.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>{' '}
                        {gentleman.twitter}
                    </li>
                </ul>
            </div>
            <Button
                buttonClassName={buttonDeleteClass}
                handleClick={(gentleManId: number) => handleDelete(gentleManId)}
                id={gentleman.id}
            ></Button>
            <Button
                buttonClassName={buttonSelectClass}
                handleClick={(gentleManId: number) => handleSelect(gentleManId)}
                id={gentleman.id}
            ></Button>
        </>
    );
}
