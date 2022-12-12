import { GentlemanItem } from "../../types/gentleman.types";
import { Button } from "../button/buton";

export function Gentleman( { gentleman}: { gentleman: GentlemanItem }){
    console.log(gentleman.profession)
    
    return (
        <li key ={gentleman.id} className="gentleman">
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
            <Button></Button>
            <Button></Button>
            {/* <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i> */}
        </li>
    );
}
