export function Info({
    totalSelected,
    handleSelectAll,
}: {
    totalSelected: number;
    handleSelectAll: () => void;
}) {
    return (
        <section className="controls">
            <p className="info">{totalSelected} gentlemen pointing at you</p>
            {totalSelected > 0 && (
                <button
                    onClick={handleSelectAll}
                    className="button button--select"
                >
                    Select all
                </button>
            )}
        </section>
    );
}
