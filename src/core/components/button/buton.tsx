export function Button({
    buttonClassName,
    handleClick,
    id,
}: {
    buttonClassName: string;
    handleClick: (gentleManId: number) => void;
    id: number;
}) {
    return (
        <button>
            <i onClick={() => handleClick(id)} className={buttonClassName}></i>
        </button>
    );
}
